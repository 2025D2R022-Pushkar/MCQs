window.MCQ_BANK = {
  name: "Unit I — Introduction to Programming",
  questions: [
    {
      id: "U1-01",
      q: "Which option best defines an algorithm?",
      options: [
        "A finite, ordered set of unambiguous steps to solve a problem",
        "Any program written in a high-level language",
        "A flowchart drawn using standard symbols",
        "A set of test cases for verifying a program"
      ],
      answerIndex: 0
    },
    {
      id: "U1-02",
      q: "A key property of a good algorithm is finiteness. What does finiteness mean?",
      options: [
        "It uses finite memory only",
        "It must terminate after a finite number of steps",
        "It contains no loops",
        "It is written in a finite number of lines"
      ],
      answerIndex: 1
    },
    {
      id: "U1-03",
      q: "In a typical compilation workflow for C, which is the correct logical order?",
      options: [
        "Source code → Executable code → Object code",
        "Source code → Object code → Executable code",
        "Object code → Source code → Executable code",
        "Executable code → Object code → Source code"
      ],
      answerIndex: 1
    },
    {
      id: "U1-04",
      q: "Object code is best described as:",
      options: [
        "Human-readable code with comments and meaningful variable names",
        "Machine code produced after linking libraries",
        "Machine/relocatable code produced from source before final linking",
        "Pseudo-instructions used by an interpreter"
      ],
      answerIndex: 2
    },
    {
      id: "U1-05",
      q: "Executable code differs from object code primarily because executable code:",
      options: [
        "Contains only high-level statements",
        "Is directly loadable/run by the operating system loader",
        "Cannot contain machine instructions",
        "Is always platform-independent"
      ],
      answerIndex: 1
    },
    {
      id: "U1-06",
      q: "Which tool/phase is mainly responsible for combining object files and libraries to produce an executable?",
      options: ["Assembler", "Linker", "Compiler front-end", "Preprocessor"],
      answerIndex: 1
    },
    {
      id: "U1-07",
      q: "Which is NOT a typical responsibility of an operating system?",
      options: [
        "Process scheduling and CPU management",
        "Memory management",
        "Providing compilers for every programming language",
        "File system management"
      ],
      answerIndex: 2
    },
    {
      id: "U1-08",
      q: "Which statement best captures the idea of structured programming?",
      options: [
        "Programs are built using only goto statements",
        "Programs are composed of well-defined control structures and modular blocks",
        "Programs must be written in assembly language",
        "Programs must be executed line-by-line by an interpreter"
      ],
      answerIndex: 1
    },
    {
      id: "U1-09",
      q: "Which control constructs form the foundation of structured programming?",
      options: [
        "Sequence, selection, iteration",
        "Compilation, linking, loading",
        "Variables, constants, identifiers",
        "Threads, sockets, interrupts"
      ],
      answerIndex: 0
    },
    {
      id: "U1-10",
      q: "A flowchart symbol for a decision/branch (e.g., Yes/No) is typically a:",
      options: ["Rectangle", "Parallelogram", "Diamond", "Circle"],
      answerIndex: 2
    },
    {
      id: "U1-11",
      q: "In a flowchart, the symbol commonly used for input/output is:",
      options: ["Parallelogram", "Diamond", "Oval", "Hexagon"],
      answerIndex: 0
    },
    {
      id: "U1-12",
      q: "In a flowchart, Start/End is commonly represented by:",
      options: ["Rectangle (process)", "Oval (terminator)", "Diamond (decision)", "Parallelogram (I/O)"],
      answerIndex: 1
    },
    {
      id: "U1-13",
      q: "Pseudocode is best described as:",
      options: [
        "A programming language that must compile",
        "A machine-readable representation of an algorithm",
        "An informal, language-agnostic way to describe algorithmic steps",
        "A diagram using boxes and arrows"
      ],
      answerIndex: 2
    },
    {
      id: "U1-14",
      q: "Which statement is TRUE about flowcharts vs pseudocode?",
      options: [
        "Flowcharts are always faster to create than pseudocode",
        "Pseudocode cannot represent loops",
        "Both can represent sequence, selection, and iteration",
        "Flowcharts are required for compilation"
      ],
      answerIndex: 2
    },
    {
      id: "U1-15",
      q: "Which of the following most directly improves maintainability in structured programs?",
      options: [
        "Using more global variables",
        "Breaking the program into small, cohesive modules",
        "Avoiding functions",
        "Writing longer, single-block code"
      ],
      answerIndex: 1
    },
    {
      id: "U1-16",
      q: "Which language generation is most associated with machine language (binary instructions)?",
      options: ["First generation", "Second generation", "Third generation", "Fourth generation"],
      answerIndex: 0
    },
    {
      id: "U1-17",
      q: "Assembly language is typically classified as:",
      options: ["First generation", "Second generation", "Third generation", "Fourth generation"],
      answerIndex: 1
    },
    {
      id: "U1-18",
      q: "C is usually classified as:",
      options: [
        "A second-generation language",
        "A third-generation (high-level) language",
        "A fourth-generation nonprocedural language",
        "A fifth-generation logic-only language"
      ],
      answerIndex: 1
    },
    {
      id: "U1-19",
      q: "Which is generally considered a characteristic of fourth-generation languages (4GLs)?",
      options: [
        "Very close to hardware instruction set",
        "Often nonprocedural and oriented toward problem domain (e.g., queries/reports)",
        "Requires explicit memory addressing",
        "Cannot be used for databases"
      ],
      answerIndex: 1
    },
    {
      id: "U1-20",
      q: "Which is a common drawback of extensive use of goto (unstructured programming)?",
      options: [
        "Makes programs more portable",
        "Leads to 'spaghetti code' and reduces readability",
        "Ensures faster compilation",
        "Prevents logic errors"
      ],
      answerIndex: 1
    },
    {
      id: "U1-21",
      q: "A compiler primarily:",
      options: [
        "Executes a program line-by-line",
        "Translates high-level source code into lower-level code (e.g., object code)",
        "Only checks spelling of keywords",
        "Converts machine code into source code"
      ],
      answerIndex: 1
    },
    {
      id: "U1-22",
      q: "An interpreter primarily:",
      options: [
        "Translates the entire program to object code before execution",
        "Executes the program by translating and running it statement-by-statement",
        "Produces an executable file by linking",
        "Only performs lexical analysis"
      ],
      answerIndex: 1
    },
    {
      id: "U1-23",
      q: "Which phase of a typical C build expands macros and processes #include directives?",
      options: ["Linker", "Loader", "Preprocessor", "Assembler"],
      answerIndex: 2
    },
    {
      id: "U1-24",
      q: "Which is the best example of an algorithmic step (not a language-specific statement)?",
      options: [
        "printf(\"Hello\");",
        "int x = 0;",
        "Read two numbers and compute their sum",
        "#include <stdio.h>"
      ],
      answerIndex: 2
    },
    {
      id: "U1-25",
      q: "Which is a correct property of algorithms regarding input/output?",
      options: [
        "An algorithm must have exactly one input and one output",
        "An algorithm must have at least one input and at least one output",
        "An algorithm must have no input",
        "An algorithm must have no output"
      ],
      answerIndex: 1
    },
    {
      id: "U1-26",
      q: "What is the most appropriate first step in systematic problem solving by programming?",
      options: [
        "Write the final C program directly",
        "Choose variable names",
        "Understand the problem and specify inputs/outputs clearly",
        "Optimize the code for speed"
      ],
      answerIndex: 2
    },
    {
      id: "U1-27",
      q: "Which one is an advantage of using flowcharts during program development?",
      options: [
        "They automatically generate machine code",
        "They visualize logic and help detect missing cases",
        "They replace the need for testing",
        "They are required by the C compiler"
      ],
      answerIndex: 1
    },
    {
      id: "U1-28",
      q: "Which option is the best meaning of 'source code'?",
      options: [
        "Binary file produced by compiler",
        "Human-readable program text written in a programming language",
        "A file containing only comments and documentation",
        "The output of the linker"
      ],
      answerIndex: 1
    },
    {
      id: "U1-29",
      q: "Which part of an OS is most closely responsible for deciding which process runs next on the CPU?",
      options: ["File system", "Scheduler", "Assembler", "Text editor"],
      answerIndex: 1
    },
    {
      id: "U1-30",
      q: "Which is the best definition of an operating system?",
      options: [
        "A set of libraries used by application programs only",
        "A system program that manages hardware resources and provides services to programs",
        "A hardware component inside the CPU",
        "A program used only for writing code"
      ],
      answerIndex: 1
    },

    // Exam-style algorithm/flow/pseudocode reasoning (no explanations, just keys)
    {
      id: "U1-31",
      q: "Which pseudocode fragment correctly represents a loop that repeats while x is positive?",
      options: [
        "REPEAT x > 0: x = x - 1",
        "WHILE x > 0 DO x = x - 1 ENDWHILE",
        "IF x > 0 THEN x = x - 1",
        "SWITCH(x) { case x>0: x--; }"
      ],
      answerIndex: 1
    },
    {
      id: "U1-32",
      q: "A flowchart that checks a condition and may skip the loop body entirely corresponds to:",
      options: ["do-while type loop", "while type loop", "unconditional loop", "recursion only"],
      answerIndex: 1
    },
    {
      id: "U1-33",
      q: "Which is the most accurate statement about top-down design in programming?",
      options: [
        "Start coding low-level details first, then integrate upward",
        "Decompose the problem into smaller subproblems/modules before coding details",
        "Avoid modularization to reduce function call overhead",
        "Use only assembly language for performance"
      ],
      answerIndex: 1
    },
    {
      id: "U1-34",
      q: "In the compilation pipeline, syntax errors are typically detected:",
      options: [
        "During linking",
        "During compilation (parsing/semantic analysis stage)",
        "During loading only",
        "Only at runtime"
      ],
      answerIndex: 1
    },
    {
      id: "U1-35",
      q: "If two different source files are compiled separately, the output of each compilation step is typically:",
      options: [
        "Two executable files immediately",
        "Two object files that can later be linked together",
        "One combined source file",
        "One shared header file"
      ],
      answerIndex: 1
    },
    {
      id: "U1-36",
      q: "Which component loads an executable into memory and starts its execution?",
      options: ["Compiler", "Loader", "Linker", "Preprocessor"],
      answerIndex: 1
    },
    {
      id: "U1-37",
      q: "Which of the following is most closely related to portability of a program?",
      options: [
        "The program runs on multiple platforms with minimal changes",
        "The program always runs faster than others",
        "The program uses maximum global variables",
        "The program uses hardware-specific assembly instructions"
      ],
      answerIndex: 0
    },
    {
      id: "U1-38",
      q: "Which scenario best illustrates the need for an operating system?",
      options: [
        "To translate source code into object code",
        "To manage multiple programs sharing CPU, memory, and I/O devices",
        "To convert flowcharts into pseudocode",
        "To ensure all programs are written in C"
      ],
      answerIndex: 1
    },
    {
      id: "U1-39",
      q: "Which is the correct pair: (Flowchart symbol → meaning)?",
      options: [
        "Rectangle → Decision",
        "Diamond → Process",
        "Parallelogram → Input/Output",
        "Oval → Computation"
      ],
      answerIndex: 2
    },
    {
      id: "U1-40",
      q: "A major goal of structured programming is to:",
      options: [
        "Eliminate all functions",
        "Make control flow clear and reduce complexity",
        "Replace compilation with interpretation",
        "Avoid using loops"
      ],
      answerIndex: 1
    },

    // Slightly tricky “exam-level” conceptual checks
    {
      id: "U1-41",
      q: "Which statement about a linker is most accurate?",
      options: [
        "It converts C source code into assembly language only",
        "It resolves external references and combines object modules/libraries",
        "It schedules processes on CPU",
        "It draws flowcharts from code"
      ],
      answerIndex: 1
    },
    {
      id: "U1-42",
      q: "Which is an example of a system call/service typically provided by an OS?",
      options: [
        "A macro expansion directive",
        "A function call to printf only",
        "A request to open/read/write a file through OS interface",
        "A flowchart decision block"
      ],
      answerIndex: 2
    },
    {
      id: "U1-43",
      q: "What is the primary purpose of converting an algorithm to pseudocode before coding?",
      options: [
        "To make the solution dependent on a specific compiler",
        "To express logic clearly without language syntax details",
        "To generate object code automatically",
        "To remove the need for any design"
      ],
      answerIndex: 1
    },
    {
      id: "U1-44",
      q: "Which of the following is NOT typically a measure of algorithm quality?",
      options: ["Correctness", "Time complexity", "Space complexity", "Font used in pseudocode"],
      answerIndex: 3
    },
    {
      id: "U1-45",
      q: "The phrase 'divide and conquer' in programming problem solving most closely refers to:",
      options: [
        "Using only one big loop",
        "Splitting a problem into smaller parts and combining solutions",
        "Avoiding functions to reduce overhead",
        "Converting high-level code into machine code"
      ],
      answerIndex: 1
    },
    {
      id: "U1-46",
      q: "A program that is compiled and linked on one OS/architecture may fail on another mainly due to:",
      options: [
        "Flowchart symbol mismatch",
        "Binary executable format and system libraries being platform-specific",
        "Pseudocode differences",
        "Compiler always producing identical executables everywhere"
      ],
      answerIndex: 1
    },
    {
      id: "U1-47",
      q: "Which is a correct statement about source code comments with respect to compilation?",
      options: [
        "Comments are translated into machine instructions",
        "Comments are ignored by the compiler (after preprocessing/lexing) and do not affect object code",
        "Comments are required for linking",
        "Comments are executed at runtime"
      ],
      answerIndex: 1
    },
    {
      id: "U1-48",
      q: "In software development, 'debugging' primarily means:",
      options: [
        "Writing pseudocode only",
        "Finding and fixing errors/defects in programs",
        "Compiling without warnings",
        "Optimizing the program for speed only"
      ],
      answerIndex: 1
    },
    {
      id: "U1-49",
      q: "Which of these is most clearly a runtime error scenario (not compile-time)?",
      options: [
        "Missing semicolon in code",
        "Using an undeclared variable",
        "Dividing by zero during execution",
        "Syntax error in an if statement"
      ],
      answerIndex: 2
    },
    {
      id: "U1-50",
      q: "Which statement best describes why algorithms are language-independent?",
      options: [
        "They can be executed by the CPU directly",
        "They describe logic/steps without depending on programming language syntax",
        "They must be written only in English",
        "They always use flowcharts only"
      ],
      answerIndex: 1
    }
  ]
};
