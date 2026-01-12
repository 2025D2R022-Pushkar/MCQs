window.MCQ_BANK = {
  name: "Unit II — Introduction to C",
  questions: [
    {
      id: "U2-01",
      q: "Which is the correct minimal structure of a C program?",
      options: [
        "Only variable declarations; main() is optional",
        "A function named start() is mandatory",
        "A main() function is required as the program entry point (hosted C environments)",
        "A class named Main is mandatory"
      ],
      answerIndex: 2
    },
    {
      id: "U2-02",
      q: "Which header is required to use printf in standard C?",
      options: ["<stdlib.h>", "<stdio.h>", "<string.h>", "<math.h>"],
      answerIndex: 1
    },
    {
      id: "U2-03",
      q: "In C, which of the following is NOT a keyword?",
      options: ["auto", "register", "main", "volatile"],
      answerIndex: 2
    },
    {
      id: "U2-04",
      q: "Which identifier is invalid in C?",
      options: ["_count", "sum2", "2sum", "total_sum"],
      answerIndex: 2
    },
    {
      id: "U2-05",
      q: "Which statement about C character set/tokens is most accurate?",
      options: [
        "C supports only uppercase letters",
        "Keywords, identifiers, constants, strings, operators, and punctuators form tokens",
        "Whitespace characters are tokens that change program meaning everywhere",
        "Comments are executed at runtime"
      ],
      answerIndex: 1
    },
    {
      id: "U2-06",
      q: "Which is a valid constant in C?",
      options: ["3.14.15", "'ab'", "0x2A", "09"],
      answerIndex: 2
    },
    {
      id: "U2-07",
      q: "Which of the following declares a variable of type integer in C?",
      options: ["integer x;", "int x;", "num x;", "var x;"],
      answerIndex: 1
    },
    {
      id: "U2-08",
      q: "Which data type is best suited for storing a single character in C?",
      options: ["char", "string", "character", "bool"],
      answerIndex: 0
    },
    {
      id: "U2-09",
      q: "Which of the following is NOT a basic (fundamental) data type in C?",
      options: ["int", "float", "double", "string"],
      answerIndex: 3
    },
    {
      id: "U2-10",
      q: "Which operator has the highest precedence among the following?",
      options: ["+", "*", "=", "&&"],
      answerIndex: 1
    },
    {
      id: "U2-11",
      q: "Which expression correctly demonstrates the use of the conditional operator?",
      options: [
        "a ?? b : c",
        "a ? b : c",
        "a : b ? c",
        "a ? b ?? c"
      ],
      answerIndex: 1
    },
    {
      id: "U2-12",
      q: "Which is the correct meaning of the '==' operator in C?",
      options: [
        "Assignment",
        "Equality comparison",
        "Inequality comparison",
        "Bitwise AND"
      ],
      answerIndex: 1
    },
    {
      id: "U2-13",
      q: "What is the output of the following code?",
      code:
`#include <stdio.h>
int main() {
  int a = 5;
  printf("%d", a++);
  return 0;
}`,
      options: ["4", "5", "6", "Compilation error"],
      answerIndex: 1
    },
    {
      id: "U2-14",
      q: "What is the output of the following code?",
      code:
`#include <stdio.h>
int main() {
  int a = 5;
  printf("%d", ++a);
  return 0;
}`,
      options: ["5", "6", "7", "Undefined behavior"],
      answerIndex: 1
    },
    {
      id: "U2-15",
      q: "Which statement about pre-increment and post-increment is correct?",
      options: [
        "Both always produce identical results in all expressions",
        "Post-increment returns the incremented value immediately",
        "Pre-increment increments first, then yields the new value",
        "Pre-increment cannot be used in expressions"
      ],
      answerIndex: 2
    },
    {
      id: "U2-16",
      q: "Which of the following is a logical operator in C?",
      options: ["&", "&&", "~", "^"],
      answerIndex: 1
    },
    {
      id: "U2-17",
      q: "What is the output of the following code?",
      code:
`#include <stdio.h>
int main() {
  printf("%d", 10/3);
  return 0;
}`,
      options: ["3.3333", "3", "3.0", "Compilation error"],
      answerIndex: 1
    },
    {
      id: "U2-18",
      q: "Which of the following correctly forces floating-point division?",
      options: ["10/3", "10/3.0", "(int)10/3", "10%(float)3"],
      answerIndex: 1
    },
    {
      id: "U2-19",
      q: "Which format specifier is commonly used to print an integer in C?",
      options: ["%c", "%d", "%f", "%s"],
      answerIndex: 1
    },
    {
      id: "U2-20",
      q: "Which format specifier is commonly used to read an integer using scanf?",
      options: ["%d", "%f", "%s", "%lf"],
      answerIndex: 0
    },
    {
      id: "U2-21",
      q: "Which is true about scanf for reading an int x?",
      options: [
        "scanf(\"%d\", x); is correct",
        "scanf(\"%d\", &x); is correct",
        "scanf(\"%d\", *x); is correct",
        "scanf(\"%d\", &&x); is correct"
      ],
      answerIndex: 1
    },
    {
      id: "U2-22",
      q: "Which escape sequence represents a newline?",
      options: ["\\t", "\\n", "\\0", "\\b"],
      answerIndex: 1
    },
    {
      id: "U2-23",
      q: "Which is the output of the following code?",
      code:
`#include <stdio.h>
int main() {
  printf("A\\nB");
  return 0;
}`,
      options: ["AB", "A B", "A then newline then B", "Compilation error"],
      answerIndex: 2
    },
    {
      id: "U2-24",
      q: "What is the output of the following code?",
      code:
`#include <stdio.h>
int main() {
  int x = 2, y = 3;
  printf("%d", x + y * 2);
  return 0;
}`,
      options: ["10", "12", "8", "7"],
      answerIndex: 2
    },
    {
      id: "U2-25",
      q: "Given C operator precedence, what is the value printed?",
      code:
`#include <stdio.h>
int main() {
  int x = 10, y = 5;
  printf("%d", x > y && y > 0);
  return 0;
}`,
      options: ["0", "1", "10", "5"],
      answerIndex: 1
    },
    {
      id: "U2-26",
      q: "What is the output of the following code?",
      code:
`#include <stdio.h>
int main() {
  int a = 7;
  printf("%d", a % 3);
  return 0;
}`,
      options: ["1", "2", "0", "3"],
      answerIndex: 0
    },
    {
      id: "U2-27",
      q: "Which of the following is a bitwise operator?",
      options: ["&&", "||", "&", "!"],
      answerIndex: 2
    },
    {
      id: "U2-28",
      q: "What is the output of the following code?",
      code:
`#include <stdio.h>
int main() {
  int x = 5;
  printf("%d", x << 1);
  return 0;
}`,
      options: ["2", "5", "10", "25"],
      answerIndex: 2
    },
    {
      id: "U2-29",
      q: "Which statement about '=' in C is correct?",
      options: [
        "It compares two values for equality",
        "It assigns the right-hand value to the left-hand variable",
        "It is a logical operator",
        "It can be used only with integers"
      ],
      answerIndex: 1
    },
    {
      id: "U2-30",
      q: "Which option best describes a C expression?",
      options: [
        "Only a line ending with semicolon",
        "A combination of operands and operators that yields a value",
        "Only arithmetic operations",
        "Only function calls"
      ],
      answerIndex: 1
    },
    {
      id: "U2-31",
      q: "Which is a correct statement about statements vs expressions in C?",
      options: [
        "Statements always produce a value; expressions never do",
        "Expressions can be part of statements; statements control execution",
        "Statements are only declarations",
        "Expressions must end with a semicolon"
      ],
      answerIndex: 1
    },
    {
      id: "U2-32",
      q: "What is the output of the following code?",
      code:
`#include <stdio.h>
int main() {
  int x = 1;
  printf("%d", x = x + 2);
  return 0;
}`,
      options: ["1", "2", "3", "Compilation error"],
      answerIndex: 2
    },
    {
      id: "U2-33",
      q: "Which of the following is a correct declaration of a constant using const?",
      options: [
        "const int x; x = 10;",
        "int const x = 10;",
        "constant int x = 10;",
        "int x = const 10;"
      ],
      answerIndex: 1
    },
    {
      id: "U2-34",
      q: "Which literal is a floating constant in C?",
      options: ["10", "10u", "10.0", "'10'"],
      answerIndex: 2
    },
    {
      id: "U2-35",
      q: "What will be the output?",
      code:
`#include <stdio.h>
int main() {
  char c = 'A';
  printf("%d", c);
  return 0;
}`,
      options: ["A", "65", "97", "Compilation error"],
      answerIndex: 1
    },
    {
      id: "U2-36",
      q: "Which conversion specifier prints a floating-point value (float/double) in printf?",
      options: ["%d", "%c", "%f", "%s"],
      answerIndex: 2
    },
    {
      id: "U2-37",
      q: "Which is the output of the following code (assume ASCII)?",
      code:
`#include <stdio.h>
int main() {
  printf("%c", 'A' + 2);
  return 0;
}`,
      options: ["A2", "C", "B", "67"],
      answerIndex: 1
    },
    {
      id: "U2-38",
      q: "Which is correct about identifiers in C?",
      options: [
        "They can start with a digit",
        "They can include spaces",
        "They are case-sensitive",
        "They must be exactly 8 characters long"
      ],
      answerIndex: 2
    },
    {
      id: "U2-39",
      q: "Which of these is a valid C statement?",
      options: [
        "int 1x = 3;",
        "float = 3.14;",
        "x + y;",
        "returning 0;"
      ],
      answerIndex: 2
    },
    {
      id: "U2-40",
      q: "What is the output of the code?",
      code:
`#include <stdio.h>
int main() {
  int x = 0;
  printf("%d", !x);
  return 0;
}`,
      options: ["0", "1", "True", "Compilation error"],
      answerIndex: 1
    },
    {
      id: "U2-41",
      q: "Which is the output?",
      code:
`#include <stdio.h>
int main() {
  int x = 5, y = 5;
  printf("%d", x == y);
  return 0;
}`,
      options: ["0", "1", "5", "10"],
      answerIndex: 1
    },
    {
      id: "U2-42",
      q: "Which is a correct statement about integer overflow in C (signed int)?",
      options: [
        "It always wraps around predictably in standard C",
        "It is undefined behavior in standard C",
        "It causes a compile-time error always",
        "It converts the variable into long automatically"
      ],
      answerIndex: 1
    },
    {
      id: "U2-43",
      q: "What is the output of the following code?",
      code:
`#include <stdio.h>
int main() {
  int x = 2;
  printf("%d", (x > 0) ? 100 : 200);
  return 0;
}`,
      options: ["0", "100", "200", "Compilation error"],
      answerIndex: 1
    },
    {
      id: "U2-44",
      q: "What is printed?",
      code:
`#include <stdio.h>
int main() {
  int a = 4, b = 2;
  printf("%d", a / b * b);
  return 0;
}`,
      options: ["4", "2", "0", "8"],
      answerIndex: 0
    },
    {
      id: "U2-45",
      q: "Which of the following will read a single word (no spaces) into char name[20] using scanf?",
      options: [
        "scanf(\"%c\", name);",
        "scanf(\"%s\", name);",
        "scanf(\"%d\", name);",
        "scanf(\"%[^\"]\", name);"
      ],
      answerIndex: 1
    },
    {
      id: "U2-46",
      q: "What is the output?",
      code:
`#include <stdio.h>
int main() {
  int x = 5;
  x += 3;
  printf("%d", x);
  return 0;
}`,
      options: ["3", "5", "8", "15"],
      answerIndex: 2
    },
    {
      id: "U2-47",
      q: "Which compound assignment is equivalent to x = x * 2 ?",
      options: ["x ^= 2", "x *= 2", "x <<= 2", "x &&= 2"],
      answerIndex: 1
    },
    {
      id: "U2-48",
      q: "What is the output of the following code?",
      code:
`#include <stdio.h>
int main() {
  int x = 5;
  printf("%d", x++ + ++x);
  return 0;
}`,
      options: ["12", "11", "Undefined behavior (unsequenced modification/access)", "10"],
      answerIndex: 2
    },
    {
      id: "U2-49",
      q: "Which of these is the correct way to write a single-line comment in C?",
      options: [
        "<!-- comment -->",
        "# comment",
        "// comment",
        "/* comment //"
      ],
      answerIndex: 2
    },
    {
      id: "U2-50",
      q: "Which is the correct way to write a multi-line comment in C?",
      options: [
        "/* comment */",
        "// comment //",
        "<!-- comment -->",
        "#comment#"
      ],
      answerIndex: 0
    }
  ]
};

