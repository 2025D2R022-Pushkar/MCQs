/* Quiz app (single-page). Banks are loaded dynamically via <script>. */

const BANKS = {
  unit1: { file: "unit1.js", title: "Unit I — Introduction to Programming (50)" },
  unit2: { file: "unit2.js", title: "Unit II — Introduction to C (50)" },
  unit3: { file: "unit3.js", title: "Unit III — Control + Storage + Library (50)" },
  unit4: { file: "unit4.js", title: "Unit IV — Functions + Arrays + Struct/Union (50)" },
  unit5: { file: "unit5.js", title: "Unit V — Pointers + DMA + Files (50)" },
  debug: { file: "debug.js", title: "Debugging — Find the issue (50)" },
};

function getParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("Failed to load " + src));
    document.head.appendChild(s);
  });
}

/*
Expected question format:
{
  id: "U1-01",
  q: "Question text",
  code: "optional code block",
  options: ["A", "B", "C", "D"],
  answerIndex: 0..3
}
Bank file must define: window.MCQ_BANK = { name: "...", questions: [...] }
*/

let state = {
  bankKey: null,
  title: "Quiz",
  questions: [],
  currentIndex: 0,
  submitted: false,
  responses: {}, // questionIndex -> chosen option index
};

const host = document.getElementById("questionHost");
const quizTitle = document.getElementById("quizTitle");
const quizMeta = document.getElementById("quizMeta");
const resultBox = document.getElementById("resultBox");
const resultText = document.getElementById("resultText");

const btnPrev = document.getElementById("btnPrev");
const btnNext = document.getElementById("btnNext");
const btnSubmit = document.getElementById("btnSubmit");
const btnReset = document.getElementById("btnReset");
const jumpSel = document.getElementById("jumpSel");

function escapeHtml(s) {
  return s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function buildJumpMenu() {
  if (!jumpSel) return;
  jumpSel.innerHTML = "";
  for (let i = 0; i < state.questions.length; i++) {
    const opt = document.createElement("option");
    opt.value = String(i);
    opt.textContent = `Q${i + 1}`;
    jumpSel.appendChild(opt);
  }
  jumpSel.value = String(state.currentIndex);
}

function render() {
  const q = state.questions[state.currentIndex];
  if (!q) {
    host.innerHTML = `<div class="q"><h3>Bank is empty or failed to load.</h3></div>`;
    return;
  }

  if (jumpSel) jumpSel.value = String(state.currentIndex);

  const chosen = state.responses[state.currentIndex];
  const showAnswers = state.submitted;

  const codeBlock = q.code
    ? `<pre style="margin:10px 0; padding:10px; background:#0a1022; border:1px solid rgba(255,255,255,.08); border-radius:10px; overflow:auto"><code>${escapeHtml(q.code)}</code></pre>`
    : "";

  let optionsHtml = "";
  q.options.forEach((opt, idx) => {
    let cls = "opt";
    if (showAnswers) {
      if (idx === q.answerIndex) cls += " correct";
      else if (chosen === idx) cls += " wrong";
    }

    const checked = chosen === idx ? "checked" : "";
    const disabled = showAnswers ? "disabled" : "";
    optionsHtml += `
      <label class="${cls}">
        <input type="radio" name="opt" value="${idx}" ${checked} ${disabled} />
        <div><div><strong>${String.fromCharCode(65 + idx)}.</strong> ${escapeHtml(opt)}</div></div>
      </label>
    `;
  });

  host.innerHTML = `
    <div class="q">
      <h3>Q${state.currentIndex + 1}. ${escapeHtml(q.q)}</h3>
      ${codeBlock}
      <div class="opts">${optionsHtml}</div>
      <div class="small" style="margin-top:10px">
        ${state.submitted ? `Correct option: ${String.fromCharCode(65 + q.answerIndex)}` : "Select one option, then Next."}
      </div>
    </div>
  `;

  quizTitle.textContent = state.title;
  quizMeta.textContent = `Question ${state.currentIndex + 1} / ${state.questions.length} • Answered: ${countAnswered()} • Submitted: ${state.submitted ? "Yes" : "No"}`;

  btnPrev.disabled = state.currentIndex === 0;
  btnNext.disabled = state.currentIndex === state.questions.length - 1;

  host.querySelectorAll('input[name="opt"]').forEach((el) => {
    el.addEventListener("change", (e) => {
      if (state.submitted) return;
      state.responses[state.currentIndex] = Number(e.target.value);
    });
  });
}

function countAnswered() {
  return Object.keys(state.responses).length;
}

function score() {
  let correct = 0;
  state.questions.forEach((q, i) => {
    if (state.responses[i] === q.answerIndex) correct++;
  });
  return { correct, total: state.questions.length };
}

btnPrev.addEventListener("click", () => {
  if (state.currentIndex > 0) state.currentIndex--;
  render();
});

jumpSel.addEventListener("change", (e) => {
  const v = e.target.value;
  if (v === "") return;
  state.currentIndex = Number(v);
  render();
});

btnNext.addEventListener("click", () => {
  if (state.currentIndex < state.questions.length - 1) state.currentIndex++;
  render();
});

btnSubmit.addEventListener("click", () => {
  if (state.submitted) return;
  state.submitted = true;

  const { correct, total } = score();
  resultBox.style.display = "block";
  resultText.textContent = `Score: ${correct} / ${total} (${Math.round((correct / total) * 100)}%).`;

  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

btnReset.addEventListener("click", () => {
  if (!confirm("Reset all answers for this quiz?")) return;
  state.responses = {};
  state.submitted = false;
  state.currentIndex = 0;
  resultBox.style.display = "none";
  render();
});

async function init() {
  const bankKey = getParam("bank") || "unit1";
  state.bankKey = bankKey;

  const info = BANKS[bankKey];
  if (!info) {
    state.title = "Unknown bank";
    host.innerHTML = `<div class="q"><h3>Unknown bank: ${escapeHtml(bankKey)}</h3><div class="small">Go back to Home and pick a unit.</div></div>`;
    return;
  }

  state.title = info.title;
  quizMeta.textContent = "Loading question bank…";

  await loadScript(info.file);

  if (!window.MCQ_BANK || !Array.isArray(window.MCQ_BANK.questions)) {
    host.innerHTML = `<div class="q"><h3>Bank file loaded but MCQ_BANK is missing.</h3><div class="small">Expected window.MCQ_BANK = { name, questions }.</div></div>`;
    return;
  }

  state.questions = window.MCQ_BANK.questions;
  if (state.questions.length === 0) {
    host.innerHTML = `<div class="q"><h3>No questions found in this bank.</h3></div>`;
    return;
  }

  // Basic validation: ensure 4 options and answerIndex present
  state.questions.forEach((q, i) => {
    if (!q.options || q.options.length !== 4) throw new Error(`Question ${i + 1} must have exactly 4 options.`);
    if (typeof q.answerIndex !== "number") throw new Error(`Question ${i + 1} missing answerIndex.`);
  });

  buildJumpMenu();

  render();
}

init().catch((err) => {
  host.innerHTML = `<div class="q"><h3>Error</h3><div class="small">${escapeHtml(String(err.message || err))}</div></div>`;
});