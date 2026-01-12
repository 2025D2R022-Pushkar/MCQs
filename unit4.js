window.MCQ_BANK = {
  name: "Unit IV — Functions, Arrays, Recursion, Strings, Structures, Unions",
  questions: [
    // Functions / prototypes / arguments
    {
      id: "U4-01",
      q: "Which is the correct purpose of a function prototype in C?",
      options: [
        "To allocate memory for a function at runtime",
        "To inform the compiler about a function’s name, return type, and parameter types before use",
        "To speed up program execution by inlining automatically",
        "To replace the need for function definitions"
      ],
      answerIndex: 1
    },
    {
      id: "U4-02",
      q: "Which statement is TRUE about actual vs formal parameters?",
      options: [
        "Actual parameters appear in the function definition; formal in the call",
        "Actual parameters appear in the function call; formal parameters appear in the function definition",
        "Both are the same and interchangeable syntactically",
        "Formal parameters must be constants"
      ],
      answerIndex: 1
    },
    {
      id: "U4-03",
      q: "In C, arguments are passed to functions by default using:",
      options: ["Call by reference", "Call by value", "Call by name", "Call by need"],
      answerIndex: 1
    },
    {
      id: "U4-04",
      q: "To modify a caller’s variable inside a function, the most standard approach is to:",
      options: [
        "Pass the variable by value and return void",
        "Use a global variable always",
        "Pass the address (pointer) of the variable",
        "Use register storage class"
      ],
      answerIndex: 2
    },
    {
      id: "U4-05",
      q: "What is the output?",
      code:
`#include <stdio.h>
void inc(int x){ x = x + 1; }
int main(){
  int a = 5;
  inc(a);
  printf("%d", a);
  return 0;
}`,
      options: ["5", "6", "Compilation error", "Undefined behavior"],
      answerIndex: 0
    },
    {
      id: "U4-06",
      q: "What is the output?",
      code:
`#include <stdio.h>
void inc(int *x){ *x = *x + 1; }
int main(){
  int a = 5;
  inc(&a);
  printf("%d", a);
  return 0;
}`,
      options: ["5", "6", "Compilation error", "Undefined behavior"],
      answerIndex: 1
    },
    {
      id: "U4-07",
      q: "Which function declaration is a correct prototype for a function returning int and taking (int, float)?",
      options: [
        "int f(int a, float b);",
        "function int f(int, float);",
        "int f(a:int, b:float);",
        "int f(int a; float b);"
      ],
      answerIndex: 0
    },
    {
      id: "U4-08",
      q: "Which is TRUE about return statement in C?",
      options: [
        "A function returning void cannot use return;",
        "return can be used only in main()",
        "return exits the current function and optionally provides a value to caller",
        "return terminates the entire program always"
      ],
      answerIndex: 2
    },

    // Recursion
    {
      id: "U4-09",
      q: "A recursive function must have:",
      options: [
        "At least one loop",
        "A base case to stop recursion",
        "Global variables only",
        "No parameters"
      ],
      answerIndex: 1
    },
    {
      id: "U4-10",
      q: "What is printed?",
      code:
`#include <stdio.h>
int f(int n){
  if(n==0) return 0;
  return n + f(n-1);
}
int main(){
  printf("%d", f(3));
  return 0;
}`,
      options: ["3", "6", "9", "0"],
      answerIndex: 1
    },
    {
      id: "U4-11",
      q: "Which is a common risk of recursion if base case is incorrect/missing?",
      options: [
        "Guaranteed faster execution",
        "Stack overflow due to infinite recursion",
        "Compile-time error always",
        "Automatic garbage collection"
      ],
      answerIndex: 1
    },

    // Arrays (1D, 2D), passing arrays
    {
      id: "U4-12",
      q: "In C, array indices for an array of size n range from:",
      options: ["1 to n", "0 to n", "0 to n-1", "1 to n-1"],
      answerIndex: 2
    },
    {
      id: "U4-13",
      q: "What is the output?",
      code:
`#include <stdio.h>
int main(){
  int a[3] = {10,20,30};
  printf("%d", a[1]);
  return 0;
}`,
      options: ["10", "20", "30", "Garbage value"],
      answerIndex: 1
    },
    {
      id: "U4-14",
      q: "Which is a correct declaration of a 2D array of 3 rows and 4 columns of int?",
      options: ["int a[3,4];", "int a[3][4];", "int a(3)(4);", "int a{3}{4};"],
      answerIndex: 1
    },
    {
      id: "U4-15",
      q: "When an array is passed to a function in C, it is passed as:",
      options: [
        "A complete copy of the entire array always",
        "A pointer to its first element (decay to pointer)",
        "A reference type built into C",
        "A structure containing bounds automatically"
      ],
      answerIndex: 1
    },
    {
      id: "U4-16",
      q: "Which function parameter can correctly accept an int array argument?",
      options: ["int a", "int *a", "int &a", "array<int> a"],
      answerIndex: 1
    },
    {
      id: "U4-17",
      q: "What is printed?",
      code:
`#include <stdio.h>
void setFirst(int a[]){
  a[0] = 99;
}
int main(){
  int x[3] = {1,2,3};
  setFirst(x);
  printf("%d", x[0]);
  return 0;
}`,
      options: ["1", "2", "99", "Compilation error"],
      answerIndex: 2
    },

    // Strings / character arrays
    {
      id: "U4-18",
      q: "In C, a string is typically represented as:",
      options: [
        "An array of int terminated by -1",
        "An array of char terminated by '\\0'",
        "A primitive type called string",
        "A linked list of characters always"
      ],
      answerIndex: 1
    },
    {
      id: "U4-19",
      q: "What is the output?",
      code:
`#include <stdio.h>
int main(){
  char s[] = "Hi";
  printf("%zu", sizeof(s));
  return 0;
}`,
      options: ["2", "3", "4", "Undefined behavior"],
      answerIndex: 1
    },
    {
      id: "U4-20",
      q: "Which is TRUE about the following declarations?\nchar s1[] = \"abc\"; char *s2 = \"abc\";",
      options: [
        "Both create modifiable arrays in writable memory always",
        "s1 is an array with its own storage; s2 points to a string literal (modifying it is undefined behavior)",
        "s2 is an array and s1 is a pointer",
        "Both are identical in all aspects"
      ],
      answerIndex: 1
    },
    {
      id: "U4-21",
      q: "What is printed?",
      code:
`#include <stdio.h>
int main(){
  char s[] = "abc";
  printf("%c", s[3]);
  return 0;
}`,
      options: ["c", "\\0", "Undefined behavior always", "Compilation error"],
      answerIndex: 1
    },

    // Structures / unions
    {
      id: "U4-22",
      q: "A structure in C is best described as:",
      options: [
        "A collection of variables of possibly different types under one name",
        "A collection of functions only",
        "An array of same-type elements",
        "A pointer to a memory block"
      ],
      answerIndex: 0
    },
    {
      id: "U4-23",
      q: "Which is a correct struct definition and variable declaration?",
      options: [
        "struct Student { int roll; }; Student s;",
        "struct Student { int roll; }; struct Student s;",
        "Student struct { int roll; } s;",
        "struct { int roll; } Student;"
      ],
      answerIndex: 1
    },
    {
      id: "U4-24",
      q: "How to access a member 'roll' of a structure variable s (not a pointer)?",
      options: ["s->roll", "s.roll", "*s.roll", "&s->roll"],
      answerIndex: 1
    },
    {
      id: "U4-25",
      q: "If p is a pointer to a struct, how do you access member roll?",
      options: ["p.roll", "p->roll", "(*p).roll()", "p::roll"],
      answerIndex: 1
    },
    {
      id: "U4-26",
      q: "Which statement best differentiates union from structure?",
      options: [
        "In a union, all members have separate memory locations",
        "In a structure, all members share the same memory location",
        "In a union, all members share the same memory location",
        "Union cannot contain float members"
      ],
      answerIndex: 2
    },
    {
      id: "U4-27",
      q: "Which is a likely consequence of writing to one union member and reading from another unrelated member?",
      options: [
        "Always well-defined and portable",
        "Undefined/implementation-defined behavior; result may not be meaningful",
        "Guaranteed compile-time error",
        "Always yields zero"
      ],
      answerIndex: 1
    },

    // Arrays + functions + recursion mix (exam-level)
    {
      id: "U4-28",
      q: "What is the output?",
      code:
`#include <stdio.h>
int sum(int a[], int n){
  int s = 0;
  for(int i=0;i<n;i++) s += a[i];
  return s;
}
int main(){
  int x[] = {1,2,3,4};
  printf("%d", sum(x, 4));
  return 0;
}`,
      options: ["9", "10", "11", "Undefined behavior"],
      answerIndex: 1
    },
    {
      id: "U4-29",
      q: "Which function signature correctly accepts a 2D array int a[3][4] as parameter (fixed second dimension)?",
      options: [
        "void f(int a[][]);",
        "void f(int a[3][4]);",
        "void f(int **a);",
        "void f(int a[3][]);"
      ],
      answerIndex: 1
    },
    {
      id: "U4-30",
      q: "What is printed?",
      code:
`#include <stdio.h>
int fact(int n){
  if(n<=1) return 1;
  return n * fact(n-1);
}
int main(){
  printf("%d", fact(4));
  return 0;
}`,
      options: ["12", "24", "16", "4"],
      answerIndex: 1
    },

    // Function categories / returning pointers / etc.
    {
      id: "U4-31",
      q: "Which is NOT a typical way to categorize functions in C basics?",
      options: [
        "Library (standard) functions and user-defined functions",
        "Functions with arguments/without arguments and with return/without return",
        "Functions that are compiled vs functions that are interpreted",
        "Recursive vs non-recursive functions"
      ],
      answerIndex: 2
    },
    {
      id: "U4-32",
      q: "Which statement about returning from a function is correct?",
      options: [
        "Returning the address of a local (auto) variable is safe",
        "Returning the address of a local (auto) variable leads to a dangling pointer",
        "Returning pointers is not allowed in C",
        "A function cannot return struct values"
      ],
      answerIndex: 1
    },

    // Strings and standard functions (without explanations)
    {
      id: "U4-33",
      q: "Which standard function finds the length of a string (excluding '\\0')?",
      options: ["strcpy", "strlen", "strcat", "strcmp"],
      answerIndex: 1
    },
    {
      id: "U4-34",
      q: "What is printed?",
      code:
`#include <stdio.h>
#include <string.h>
int main(){
  printf("%zu", strlen("a\\0b"));
  return 0;
}`,
      options: ["1", "2", "3", "Undefined behavior"],
      answerIndex: 0
    },

    // Structures with arrays
    {
      id: "U4-35",
      q: "Which is TRUE about assigning one struct variable to another of the same type in C?",
      options: [
        "Not allowed in C",
        "Allowed; performs member-wise copy",
        "Only allowed if struct contains no arrays",
        "Only allowed for unions"
      ],
      answerIndex: 1
    },
    {
      id: "U4-36",
      q: "What is the output?",
      code:
`#include <stdio.h>
struct P { int x; int y; };
int main(){
  struct P a = {1,2};
  struct P b = a;
  b.x = 9;
  printf("%d%d", a.x, b.x);
  return 0;
}`,
      options: ["11", "19", "99", "12"],
      answerIndex: 1
    },

    // Pointer to struct
    {
      id: "U4-37",
      q: "Given: struct S { int x; }; struct S s; struct S *p = &s; Which is correct to set x to 5?",
      options: ["p.x = 5;", "p->x = 5;", "(*p->x) = 5;", "&p.x = 5;"],
      answerIndex: 1
    },

    // More array/pointer nuance (exam-level)
    {
      id: "U4-38",
      q: "What is printed?",
      code:
`#include <stdio.h>
int main(){
  int a[] = {10,20,30};
  printf("%d", *a);
  return 0;
}`,
      options: ["10", "20", "30", "Address of a"],
      answerIndex: 0
    },
    {
      id: "U4-39",
      q: "In expression a[i], where a is an int array, a[i] is equivalent to:",
      options: ["*(a + i)", "*(i + a)", "Both *(a+i) and *(i+a)", "a + *i"],
      answerIndex: 2
    },

    // Recursion trace exam-style
    {
      id: "U4-40",
      q: "What is the output?",
      code:
`#include <stdio.h>
int g(int n){
  if(n==0) return 1;
  return 2*g(n-1);
}
int main(){
  printf("%d", g(3));
  return 0;
}`,
      options: ["6", "8", "9", "16"],
      answerIndex: 1
    },

    // Nested functions (C standard vs compiler extensions)
    {
      id: "U4-41",
      q: "Which statement about nested functions in C is correct (standard C)?",
      options: [
        "Standard C allows defining a function inside another function",
        "Nested functions are not part of standard C (some compilers support as extension)",
        "Nested functions are mandatory for recursion",
        "Nested functions are required for structures"
      ],
      answerIndex: 1
    },

    // String manipulation pitfalls
    {
      id: "U4-42",
      q: "What is the most likely issue with using gets(s) for input into a fixed-size char array?",
      options: [
        "It always appends two null terminators",
        "It can cause buffer overflow because it does not limit input length",
        "It reads only integers",
        "It cannot read spaces"
      ],
      answerIndex: 1
    },

    // Function pointer mention is in Unit V, so avoid here; keep within Unit IV topics
    {
      id: "U4-43",
      q: "Which of the following is a correct way to declare a function that takes no arguments and returns int?",
      options: ["int f(void);", "int f(); // always same as void", "void int f();", "int void f();"],
      answerIndex: 0
    },

    // More arrays
    {
      id: "U4-44",
      q: "What is printed?",
      code:
`#include <stdio.h>
int main(){
  int a[5] = {1,2};
  printf("%d%d%d%d%d", a[0],a[1],a[2],a[3],a[4]);
  return 0;
}`,
      options: ["12000", "12garbagegarbagegarbage", "12345", "Compilation error"],
      answerIndex: 0
    },
    {
      id: "U4-45",
      q: "Which is TRUE about array initialization in C: int a[5] = {1,2}; ?",
      options: [
        "Remaining elements are uninitialized garbage",
        "Remaining elements are initialized to 0",
        "It is illegal in C",
        "All elements become 2"
      ],
      answerIndex: 1
    },

    // Structure/union size concept (no numeric assumptions)
    {
      id: "U4-46",
      q: "Which is generally TRUE about sizeof(struct) vs sizeof(union) with same members?",
      options: [
        "sizeof(union) is the sum of sizes of all members always",
        "sizeof(struct) is always smaller than sizeof(union)",
        "sizeof(union) is at least the size of its largest member (plus possible padding)",
        "sizeof(struct) equals size of largest member only"
      ],
      answerIndex: 2
    },

    // Call-by-value with arrays (trick: arrays decay)
    {
      id: "U4-47",
      q: "Which statement is TRUE when passing an array to a function?",
      options: [
        "C passes the entire array by value automatically",
        "The array name decays to pointer; modifications to elements affect the original array",
        "The array becomes const inside the function",
        "Array bounds are automatically checked"
      ],
      answerIndex: 1
    },

    // Prototype mismatch (exam-level)
    {
      id: "U4-48",
      q: "If a function is used before a correct prototype is visible (modern C), what is the most correct statement?",
      options: [
        "C automatically assumes int return and continues (always)",
        "In modern C standards, it is a constraint violation (diagnostic required)",
        "It always links successfully and runs fine",
        "It converts the function into a macro"
      ],
      answerIndex: 1
    },

    // Struct pointer and dot/arrow confusion
    {
      id: "U4-49",
      q: "Assume: struct S { int x; }; struct S s; struct S *p = &s; Which expression is invalid?",
      options: ["s.x", "p->x", "(*p).x", "p.x"],
      answerIndex: 3
    },

    // Recursion vs iteration
    {
      id: "U4-50",
      q: "Which is TRUE comparing recursion and iteration in typical C implementations?",
      options: [
        "Recursion never uses stack",
        "Every recursive solution can be expressed iteratively (in principle) using an explicit stack/state",
        "Iteration always uses more memory than recursion",
        "Recursion is always faster than iteration"
      ],
      answerIndex: 1
    }
  ]
};
