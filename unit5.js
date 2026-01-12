window.MCQ_BANK = {
  name: "Unit V — Pointers, Dynamic Memory Allocation, File Management",
  questions: [
    // Pointer basics
    {
      id: "U5-01",
      q: "A pointer variable in C stores:",
      options: [
        "An integer value only",
        "The address of another variable",
        "A floating-point value only",
        "A character always"
      ],
      answerIndex: 1
    },
    {
      id: "U5-02",
      q: "Which operator is used to get the address of a variable?",
      options: ["*", "&", "->", "%"],
      answerIndex: 1
    },
    {
      id: "U5-03",
      q: "Which operator is used to dereference a pointer (access the value it points to)?",
      options: ["&", "*", "::", "."],
      answerIndex: 1
    },
    {
      id: "U5-04",
      q: "What is the output?",
      code:
`#include <stdio.h>
int main(){
  int x = 10;
  int *p = &x;
  printf("%d", *p);
  return 0;
}`,
      options: ["Address of x", "10", "Garbage", "Compilation error"],
      answerIndex: 1
    },
    {
      id: "U5-05",
      q: "Which declaration creates a pointer to an int?",
      options: ["int p;", "int *p;", "int &p;", "pointer int p;"],
      answerIndex: 1
    },
    {
      id: "U5-06",
      q: "Which is TRUE about pointer types in C?",
      options: [
        "All pointers have identical behavior regardless of type",
        "Pointer type affects pointer arithmetic and how dereferencing is interpreted",
        "Pointer type affects only printing with printf",
        "Pointer type is ignored by compiler"
      ],
      answerIndex: 1
    },

    // Pointer arithmetic
    {
      id: "U5-07",
      q: "If int *p points to an int array element, p+1 points to:",
      options: [
        "The next byte in memory",
        "The next int element in memory",
        "Always NULL",
        "The previous element"
      ],
      answerIndex: 1
    },
    {
      id: "U5-08",
      q: "What is printed?",
      code:
`#include <stdio.h>
int main(){
  int a[] = {10,20,30};
  int *p = a;
  printf("%d", *(p+2));
  return 0;
}`,
      options: ["10", "20", "30", "Garbage"],
      answerIndex: 2
    },
    {
      id: "U5-09",
      q: "In C, a[i] is equivalent to:",
      options: ["*(a+i)", "*(i+a)", "Both *(a+i) and *(i+a)", "&(a)+i"],
      answerIndex: 2
    },

    // Passing parameters by reference
    {
      id: "U5-10",
      q: "What is the output?",
      code:
`#include <stdio.h>
void swap(int *a, int *b){
  int t = *a; *a = *b; *b = t;
}
int main(){
  int x=3, y=7;
  swap(&x, &y);
  printf("%d %d", x, y);
  return 0;
}`,
      options: ["3 7", "7 3", "0 0", "Compilation error"],
      answerIndex: 1
    },
    {
      id: "U5-11",
      q: "Which call correctly passes an int x to a function f that expects int *?",
      options: ["f(x);", "f(&x);", "f(*x);", "f(&&x);"],
      answerIndex: 1
    },

    // Pointer to pointer
    {
      id: "U5-12",
      q: "A pointer to pointer is used when:",
      options: [
        "Passing a large struct to a function",
        "A function needs to modify the caller’s pointer itself (e.g., allocate memory and update pointer)",
        "A program needs floating-point math",
        "A variable must be register"
      ],
      answerIndex: 1
    },
    {
      id: "U5-13",
      q: "Which is a correct declaration of a pointer to pointer to int?",
      options: ["int **p;", "int *&p;", "int ***p;", "int p**;"],
      answerIndex: 0
    },
    {
      id: "U5-14",
      q: "What is printed?",
      code:
`#include <stdio.h>
int main(){
  int x = 5;
  int *p = &x;
  int **pp = &p;
  printf("%d", **pp);
  return 0;
}`,
      options: ["5", "Address of p", "Address of x", "Compilation error"],
      answerIndex: 0
    },

    // Dangling pointer
    {
      id: "U5-15",
      q: "A dangling pointer is a pointer that:",
      options: [
        "Points to a valid variable always",
        "Points to memory that has been freed or is out of scope",
        "Always points to NULL",
        "Points only to global variables"
      ],
      answerIndex: 1
    },
    {
      id: "U5-16",
      q: "Which situation most clearly creates a dangling pointer?",
      options: [
        "int *p = NULL;",
        "int x; int *p = &x;",
        "int *p = malloc(sizeof(int)); free(p); /* p not set to NULL */",
        "int a[3]; int *p = a;"
      ],
      answerIndex: 2
    },

    // Dynamic memory allocation (DMA)
    {
      id: "U5-17",
      q: "Which header typically declares malloc/free?",
      options: ["<stdio.h>", "<stdlib.h>", "<string.h>", "<math.h>"],
      answerIndex: 1
    },
    {
      id: "U5-18",
      q: "malloc(n) returns:",
      options: [
        "A pointer to n bytes of uninitialized memory (or NULL on failure)",
        "A pointer to n integers initialized to 0",
        "A pointer to stack memory",
        "A pointer to read-only memory"
      ],
      answerIndex: 0
    },
    {
      id: "U5-19",
      q: "calloc(count, size) differs from malloc primarily because calloc:",
      options: [
        "Allocates on stack",
        "Initializes allocated memory to zero (all bits 0)",
        "Returns an int, not a pointer",
        "Cannot fail"
      ],
      answerIndex: 1
    },
    {
      id: "U5-20",
      q: "realloc(ptr, newSize) is typically used to:",
      options: [
        "Free ptr and return NULL always",
        "Change the size of a previously allocated block (may move it)",
        "Allocate memory only for strings",
        "Convert stack memory to heap memory"
      ],
      answerIndex: 1
    },
    {
      id: "U5-21",
      q: "Which function releases heap memory allocated by malloc/calloc/realloc?",
      options: ["delete", "free", "release", "dispose"],
      answerIndex: 1
    },
    {
      id: "U5-22",
      q: "What is the output?",
      code:
`#include <stdio.h>
#include <stdlib.h>
int main(){
  int *p = (int*)malloc(sizeof(int));
  if(!p) return 0;
  *p = 42;
  printf("%d", *p);
  free(p);
  return 0;
}`,
      options: ["42", "0", "Garbage", "Compilation error"],
      answerIndex: 0
    },
    {
      id: "U5-23",
      q: "Which is a common best practice after calling free(p)?",
      options: [
        "Immediately dereference p to verify it is freed",
        "Set p to NULL to reduce risk of dangling pointer usage",
        "Call malloc with the same pointer",
        "Convert p to int"
      ],
      answerIndex: 1
    },
    {
      id: "U5-24",
      q: "Memory leak means:",
      options: [
        "Reading uninitialized memory",
        "Allocated memory is not freed and is no longer reachable",
        "Writing beyond array bounds",
        "Using printf without newline"
      ],
      answerIndex: 1
    },

    // Function pointers
    {
      id: "U5-25",
      q: "A function pointer in C stores:",
      options: [
        "The return value of a function",
        "The address of a function",
        "The parameters of a function",
        "The stack frame of a function"
      ],
      answerIndex: 1
    },
    {
      id: "U5-26",
      q: "Which is a correct declaration of a pointer to a function taking (int,int) and returning int?",
      options: [
        "int *fp(int,int);",
        "int (*fp)(int,int);",
        "int (fp*)(int,int);",
        "int *(fp*)(int,int);"
      ],
      answerIndex: 1
    },
    {
      id: "U5-27",
      q: "What is the output?",
      code:
`#include <stdio.h>
int add(int a, int b){ return a+b; }
int main(){
  int (*fp)(int,int) = add;
  printf("%d", fp(2,3));
  return 0;
}`,
      options: ["5", "23", "6", "Compilation error"],
      answerIndex: 0
    },

    // Console I/O functions (basic)
    {
      id: "U5-28",
      q: "Which function writes formatted output to stdout?",
      options: ["scanf", "printf", "fread", "fseek"],
      answerIndex: 1
    },
    {
      id: "U5-29",
      q: "Which function reads formatted input from stdin?",
      options: ["scanf", "printf", "fwrite", "ftell"],
      answerIndex: 0
    },

    // File handling
    {
      id: "U5-30",
      q: "In C file handling, FILE * is defined in:",
      options: ["<stdio.h>", "<stdlib.h>", "<string.h>", "<ctype.h>"],
      answerIndex: 0
    },
    {
      id: "U5-31",
      q: "Which function opens a file and returns a FILE*?",
      options: ["open()", "fopen()", "fileopen()", "fcreate()"],
      answerIndex: 1
    },
    {
      id: "U5-32",
      q: "Which function closes an open file stream?",
      options: ["closefile()", "fclose()", "endfile()", "fend()"],
      answerIndex: 1
    },
    {
      id: "U5-33",
      q: "Which mode opens a text file for reading (must exist)?",
      options: ["\"r\"", "\"w\"", "\"a\"", "\"rw\""],
      answerIndex: 0
    },
    {
      id: "U5-34",
      q: "Which mode opens a text file for writing and truncates if it exists?",
      options: ["\"r\"", "\"w\"", "\"a\"", "\"rt\""],
      answerIndex: 1
    },
    {
      id: "U5-35",
      q: "Which mode opens a text file for appending (creates if not exist)?",
      options: ["\"r\"", "\"w\"", "\"a\"", "\"x\""],
      answerIndex: 2
    },
    {
      id: "U5-36",
      q: "If fopen fails, it returns:",
      options: ["0 always", "NULL", "-1", "EOF"],
      answerIndex: 1
    },
    {
      id: "U5-37",
      q: "Which function reads a character from a file stream?",
      options: ["getc", "getchar", "puts", "scanf"],
      answerIndex: 0
    },
    {
      id: "U5-38",
      q: "Which function writes a character to a file stream?",
      options: ["putc", "putchar", "gets", "strlen"],
      answerIndex: 0
    },
    {
      id: "U5-39",
      q: "Which function reads a line/string from a file stream with a size limit?",
      options: ["fgets", "gets", "scanf(\"%s\")", "puts"],
      answerIndex: 0
    },
    {
      id: "U5-40",
      q: "Which function writes a string to a file stream (commonly) without formatting?",
      options: ["fputs", "fprintf", "fwrite (always for strings)", "fscanf"],
      answerIndex: 0
    },

    // Binary / formatted file I/O
    {
      id: "U5-41",
      q: "Which function writes formatted output to a file stream?",
      options: ["fprintf", "fputs", "fwrite", "putc"],
      answerIndex: 0
    },
    {
      id: "U5-42",
      q: "Which function reads formatted input from a file stream?",
      options: ["fscanf", "fgets", "fread", "getc"],
      answerIndex: 0
    },

    // Pointer pitfalls / UB
    {
      id: "U5-43",
      q: "What is the most correct classification of dereferencing a NULL pointer?",
      options: [
        "Well-defined; yields 0",
        "Implementation-defined",
        "Undefined behavior (typically crash)",
        "Compile-time error always"
      ],
      answerIndex: 2
    },
    {
      id: "U5-44",
      q: "What is the output?",
      code:
`#include <stdio.h>
int main(){
  int *p = NULL;
  if(p == NULL) printf("NULL");
  return 0;
}`,
      options: ["NULL", "0", "Segmentation fault", "Compilation error"],
      answerIndex: 0
    },

    // More DMA & pointers exam-level
    {
      id: "U5-45",
      q: "Which is correct for allocating memory for n integers dynamically?",
      options: [
        "int *p = malloc(n);",
        "int *p = malloc(n * sizeof(int));",
        "int p = malloc(n * sizeof(int));",
        "int *p = alloc(n, int);"
      ],
      answerIndex: 1
    },
    {
      id: "U5-46",
      q: "What is the most correct statement about using a pointer after free(p)?",
      options: [
        "It is safe as long as you don’t write through it",
        "It becomes a dangling pointer; dereferencing it is undefined behavior",
        "It automatically points to NULL",
        "It points to the next allocated block"
      ],
      answerIndex: 1
    },

    // File workflow conceptual
    {
      id: "U5-47",
      q: "Which is the correct typical workflow for file usage in C?",
      options: [
        "fclose → fopen → read/write",
        "fopen → read/write → fclose",
        "read/write → fopen → fclose",
        "printf → fopen → fclose"
      ],
      answerIndex: 1
    },

    // Console vs disk I/O concept
    {
      id: "U5-48",
      q: "Which is the best distinction between console I/O and disk file I/O in C?",
      options: [
        "Console I/O uses FILE* but disk I/O does not",
        "Console I/O targets stdin/stdout; file I/O targets streams returned by fopen",
        "Disk I/O cannot be buffered",
        "Console I/O cannot use formatted functions"
      ],
      answerIndex: 1
    },

    // Pointer arithmetic edge
    {
      id: "U5-49",
      q: "Which pointer arithmetic operation is NOT valid/meaningful in standard C?",
      options: [
        "p + 1 (where p points into an array)",
        "p - q (where p and q point into same array)",
        "p * 2 (multiplying a pointer by an integer)",
        "p++ (increment pointer)"
      ],
      answerIndex: 2
    },

    // Another tricky function pointer usage
    {
      id: "U5-50",
      q: "What is printed?",
      code:
`#include <stdio.h>
int mul(int a,int b){ return a*b; }
int apply(int (*op)(int,int), int x, int y){ return op(x,y); }
int main(){
  printf("%d", apply(mul, 3, 4));
  return 0;
}`,
      options: ["7", "12", "34", "Compilation error"],
      answerIndex: 1
    }
  ]
};
