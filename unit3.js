window.MCQ_BANK = {
  name: "Unit III — Control Statements, Storage Classes, Library Functions",
  questions: [
    {
      id: "U3-01",
      q: "Which of the following is a selection (decision-making) statement in C?",
      options: ["for", "while", "if", "break"],
      answerIndex: 2
    },
    {
      id: "U3-02",
      q: "Which statement is used to select one option among many based on an integral expression?",
      options: ["if-else", "switch", "goto", "continue"],
      answerIndex: 1
    },
    {
      id: "U3-03",
      q: "In C, the controlling expression of switch must be of which type category?",
      options: [
        "Any floating-point type only",
        "Any string type",
        "Integer type (including char, enum) after integer promotions",
        "Only long double"
      ],
      answerIndex: 2
    },
    {
      id: "U3-04",
      q: "If 'break' is omitted in a switch case, what usually happens?",
      options: [
        "Compilation fails",
        "Execution stops immediately",
        "Control falls through to the next case labels until a break/return/end",
        "It behaves like continue"
      ],
      answerIndex: 2
    },
    {
      id: "U3-05",
      q: "What is printed?",
      code:
`#include <stdio.h>
int main() {
  int x = 2;
  switch(x) {
    case 1: printf("A");
    case 2: printf("B");
    case 3: printf("C"); break;
    default: printf("D");
  }
  return 0;
}`,
      options: ["B", "BC", "ABC", "BCD"],
      answerIndex: 1
    },
    {
      id: "U3-06",
      q: "Which loop is guaranteed to execute its body at least once?",
      options: ["for", "while", "do-while", "None of these"],
      answerIndex: 2
    },
    {
      id: "U3-07",
      q: "Which statement immediately terminates the nearest enclosing loop or switch?",
      options: ["continue", "break", "return", "goto"],
      answerIndex: 1
    },
    {
      id: "U3-08",
      q: "Which statement skips the remaining statements in the current loop iteration and proceeds to the next iteration?",
      options: ["exit", "break", "continue", "return"],
      answerIndex: 2
    },
    {
      id: "U3-09",
      q: "What is the output?",
      code:
`#include <stdio.h>
int main() {
  int i;
  for(i=1; i<=5; i++) {
    if(i==3) continue;
    printf("%d", i);
  }
  return 0;
}`,
      options: ["12345", "1245", "12 45", "Compilation error"],
      answerIndex: 1
    },
    {
      id: "U3-10",
      q: "What is the output?",
      code:
`#include <stdio.h>
int main() {
  int i=1;
  while(i<=3) {
    printf("%d", i);
    i++;
  }
  return 0;
}`,
      options: ["123", "0123", "321", "Infinite loop"],
      answerIndex: 0
    },
    {
      id: "U3-11",
      q: "Which is a correct statement about for( ; ; ) in C?",
      options: [
        "It is a syntax error",
        "It is an infinite loop (unless broken/returned)",
        "It executes exactly once",
        "It is equivalent to if( ; ; )"
      ],
      answerIndex: 1
    },
    {
      id: "U3-12",
      q: "What is the output?",
      code:
`#include <stdio.h>
int main() {
  int i = 0;
  do {
    printf("%d", i);
    i++;
  } while(i < 0);
  return 0;
}`,
      options: ["0", "No output", "01", "Infinite loop"],
      answerIndex: 0
    },
    {
      id: "U3-13",
      q: "Which operator is commonly used to combine multiple conditions in if statements?",
      options: ["&", "&&", "<<", "%"],
      answerIndex: 1
    },
    {
      id: "U3-14",
      q: "What is the output?",
      code:
`#include <stdio.h>
int main() {
  int x = 0;
  if (x && (10/x)) printf("YES");
  else printf("NO");
  return 0;
}`,
      options: ["YES", "NO", "Runtime error (division by zero)", "Undefined behavior always"],
      answerIndex: 1
    },
    {
      id: "U3-15",
      q: "The output of the code is:",
      code:
`#include <stdio.h>
int main() {
  int x = 0;
  if (x & (10/x)) printf("YES");
  else printf("NO");
  return 0;
}`,
      options: ["YES", "NO", "Runtime error (division by zero)", "Compilation error"],
      answerIndex: 2
    },

    // Storage classes and scope (exam-level conceptual)
    {
      id: "U3-16",
      q: "Which storage class in C gives a variable block scope and automatic storage duration by default?",
      options: ["auto", "register", "static", "extern"],
      answerIndex: 0
    },
    {
      id: "U3-17",
      q: "Which storage class suggests that a variable be stored in a CPU register (compiler may ignore)?",
      options: ["auto", "register", "extern", "static"],
      answerIndex: 1
    },
    {
      id: "U3-18",
      q: "A local variable declared static inside a function:",
      options: [
        "Is re-initialized every time the function is called",
        "Retains its value between function calls",
        "Cannot be initialized",
        "Has global scope"
      ],
      answerIndex: 1
    },
    {
      id: "U3-19",
      q: "Which storage class is used to declare a global variable defined in another file?",
      options: ["static", "extern", "register", "auto"],
      answerIndex: 1
    },
    {
      id: "U3-20",
      q: "Which statement is TRUE about scope in C?",
      options: [
        "Scope and lifetime are the same",
        "Block scope identifiers are visible only within the block and its nested blocks",
        "Global variables have no scope",
        "Function parameters have file scope"
      ],
      answerIndex: 1
    },
    {
      id: "U3-21",
      q: "What is the output?",
      code:
`#include <stdio.h>
void f() {
  static int x = 0;
  x++;
  printf("%d", x);
}
int main() {
  f(); f(); f();
  return 0;
}`,
      options: ["111", "123", "012", "Compilation error"],
      answerIndex: 1
    },
    {
      id: "U3-22",
      q: "Which is correct about a global variable declared as 'static' at file scope?",
      options: [
        "It is visible from other translation units using extern",
        "It has internal linkage (restricted to that source file)",
        "It cannot be initialized",
        "It must be stored in a CPU register"
      ],
      answerIndex: 1
    },

    // Library functions (stdio)
    {
      id: "U3-23",
      q: "Which function reads a character from standard input (commonly used, though may buffer input)?",
      options: ["puts", "getchar", "putchar", "printf"],
      answerIndex: 1
    },
    {
      id: "U3-24",
      q: "Which function writes a single character to standard output?",
      options: ["putchar", "gets", "scanf", "strlen"],
      answerIndex: 0
    },
    {
      id: "U3-25",
      q: "Which function prints a string and automatically appends a newline?",
      options: ["printf", "puts", "putchar", "fgets"],
      answerIndex: 1
    },

    // string.h
    {
      id: "U3-26",
      q: "Which header typically declares strlen?",
      options: ["<stdio.h>", "<string.h>", "<ctype.h>", "<time.h>"],
      answerIndex: 1
    },
    {
      id: "U3-27",
      q: "What does strlen return for the string literal \"abc\\0def\" ?",
      options: ["3", "6", "7", "Undefined behavior"],
      answerIndex: 0
    },
    {
      id: "U3-28",
      q: "Which function compares two strings lexicographically in C (as per standard library)?",
      options: ["strcat", "strcmp", "strcpy", "strchr"],
      answerIndex: 1
    },
    {
      id: "U3-29",
      q: "What is the output?",
      code:
`#include <stdio.h>
#include <string.h>
int main() {
  printf("%d", strcmp("abc","abc"));
  return 0;
}`,
      options: ["0", "1", "-1", "Compilation error"],
      answerIndex: 0
    },
    {
      id: "U3-30",
      q: "Which is the safest choice to read a line into char s[20] including spaces (up to n-1 chars)?",
      options: ["gets(s)", "scanf(\"%s\", s)", "fgets(s, 20, stdin)", "puts(s)"],
      answerIndex: 2
    },

    // ctype.h
    {
      id: "U3-31",
      q: "Which header declares character classification functions like isdigit and isalpha?",
      options: ["<math.h>", "<string.h>", "<ctype.h>", "<stdlib.h>"],
      answerIndex: 2
    },
    {
      id: "U3-32",
      q: "Which function tests whether a character is a decimal digit?",
      options: ["isdigit", "isupper", "tolower", "strncmp"],
      answerIndex: 0
    },
    {
      id: "U3-33",
      q: "Which function converts an uppercase letter to lowercase (if possible)?",
      options: ["tolower", "isalpha", "strcmp", "abs"],
      answerIndex: 0
    },

    // math.h
    {
      id: "U3-34",
      q: "Which header typically declares sqrt, pow, and sin?",
      options: ["<math.h>", "<stdio.h>", "<time.h>", "<ctype.h>"],
      answerIndex: 0
    },
    {
      id: "U3-35",
      q: "What is the output (assume standard behavior)?",
      code:
`#include <stdio.h>
#include <math.h>
int main() {
  printf("%.0f", sqrt(81));
  return 0;
}`,
      options: ["8", "9", "81", "Compilation error"],
      answerIndex: 1
    },
    {
      id: "U3-36",
      q: "Which function returns the absolute value of an integer?",
      options: ["fabs", "abs", "sqrt", "pow"],
      answerIndex: 1
    },

    // time.h (basic exam-level)
    {
      id: "U3-37",
      q: "Which header is typically used for time and date related functions like time() and ctime()?",
      options: ["<time.h>", "<date.h>", "<clock.h>", "<stdlib.h>"],
      answerIndex: 0
    },
    {
      id: "U3-38",
      q: "Which function returns the current calendar time as time_t (seconds since epoch, implementation-defined)?",
      options: ["ctime", "time", "clock", "difftime"],
      answerIndex: 1
    },

    // More control flow and tricky cases
    {
      id: "U3-39",
      q: "What is the output?",
      code:
`#include <stdio.h>
int main() {
  int i;
  for(i=0; i<5; i++)
    if(i==2) break;
  printf("%d", i);
  return 0;
}`,
      options: ["1", "2", "3", "5"],
      answerIndex: 1
    },
    {
      id: "U3-40",
      q: "What is the output?",
      code:
`#include <stdio.h>
int main() {
  int i = 3;
  while(i--) {
    printf("X");
  }
  return 0;
}`,
      options: ["XXX", "XX", "X", "Infinite loop"],
      answerIndex: 0
    },
    {
      id: "U3-41",
      q: "Which statement about nested loops is correct?",
      options: [
        "break terminates all loops immediately",
        "continue terminates the program",
        "break affects only the nearest enclosing loop/switch",
        "continue affects only if-statements"
      ],
      answerIndex: 2
    },
    {
      id: "U3-42",
      q: "What is the output?",
      code:
`#include <stdio.h>
int main() {
  int i = 0;
  for(;;) {
    i++;
    if(i==3) continue;
    if(i==5) break;
    printf("%d", i);
  }
  return 0;
}`,
      options: ["1234", "124", "1234 5", "12 4"],
      answerIndex: 1
    },
    {
      id: "U3-43",
      q: "Which is a correct use of goto in C?",
      options: [
        "goto can jump into the scope of a variable with initialization safely always",
        "goto requires a label within the same function",
        "goto can jump between different functions",
        "goto automatically creates a loop without labels"
      ],
      answerIndex: 1
    },
    {
      id: "U3-44",
      q: "What is the output?",
      code:
`#include <stdio.h>
int main() {
  int x = 0;
  if(x)
    printf("A");
  printf("B");
  return 0;
}`,
      options: ["A", "B", "AB", "No output"],
      answerIndex: 1
    },
    {
      id: "U3-45",
      q: "Which statement about else in C is correct?",
      options: [
        "else must always be paired with the nearest unmatched if",
        "else pairs with the nearest unmatched if in the same block structure",
        "else pairs with the farthest if",
        "else is optional but if is not"
      ],
      answerIndex: 1
    },
    {
      id: "U3-46",
      q: "What is the output? (dangling else case)",
      code:
`#include <stdio.h>
int main() {
  int a=0, b=1;
  if(a)
    if(b) printf("X");
    else printf("Y");
  return 0;
}`,
      options: ["X", "Y", "No output", "Compilation error"],
      answerIndex: 2
    },
    {
      id: "U3-47",
      q: "Which library function copies one string into another (destination must be large enough)?",
      options: ["strcpy", "strlen", "strcmp", "strstr"],
      answerIndex: 0
    },
    {
      id: "U3-48",
      q: "Which function concatenates (appends) one string to another?",
      options: ["strcat", "strcpy", "strncmp", "memset"],
      answerIndex: 0
    },
    {
      id: "U3-49",
      q: "What is printed?",
      code:
`#include <stdio.h>
#include <string.h>
int main() {
  char s[10] = "ab";
  strcat(s, "cd");
  printf("%s", s);
  return 0;
}`,
      options: ["ab", "cd", "abcd", "Undefined behavior always"],
      answerIndex: 2
    },
    {
      id: "U3-50",
      q: "Which is TRUE about standard library functions in C?",
      options: [
        "They are keywords and need no headers",
        "They require including appropriate headers for declarations",
        "They cannot be used in user programs",
        "They always work without linking any libraries"
      ],
      answerIndex: 1
    }
  ]
};
