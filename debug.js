window.MCQ_BANK = {
  name: "Debugging — Find the Issue",
  questions: [
    {
      id: "D-01",
      q: "What is the issue in this program?",
      code:
`#include <stdio.h>
int main() {
  int x = 10
  printf("%d", x);
  return 0;
}`,
      options: [
        "Missing semicolon after int x = 10",
        "printf needs <stdlib.h>",
        "return 0 is invalid in main",
        "x must be declared static"
      ],
      answerIndex: 0
    },
    {
      id: "D-02",
      q: "What is the bug?",
      code:
`#include <stdio.h>
int main() {
  int a = 5;
  if (a = 10) printf("YES");
  else printf("NO");
  return 0;
}`,
      options: [
        "a = 10 should be a == 10",
        "if cannot compare integers",
        "printf cannot be inside if",
        "else is mandatory to compile"
      ],
      answerIndex: 0
    },
    {
      id: "D-03",
      q: "The program sometimes crashes. What is the most likely reason?",
      code:
`#include <stdio.h>
int main() {
  int x = 5;
  int *p = NULL;
  *p = x;
  printf("%d", *p);
  return 0;
}`,
      options: [
        "NULL pointer dereference",
        "x is not initialized",
        "printf format is wrong",
        "Pointers cannot store integers"
      ],
      answerIndex: 0
    },
    {
      id: "D-04",
      q: "Which line causes undefined behavior?",
      code:
`#include <stdio.h>
int *f() {
  int x = 10;
  return &x;
}
int main() {
  int *p = f();
  printf("%d", *p);
  return 0;
}`,
      options: [
        "return &x; (returning address of local variable)",
        "int *p = f(); (calling function returning pointer)",
        "printf(\"%d\", *p); (printing int)",
        "int x = 10; (initialization)"
      ],
      answerIndex: 0
    },
    {
      id: "D-05",
      q: "What is the mistake in scanf usage?",
      code:
`#include <stdio.h>
int main() {
  int x;
  scanf("%d", x);
  printf("%d", x);
  return 0;
}`,
      options: [
        "Should pass &x to scanf",
        "scanf cannot read integers",
        "printf must be before scanf",
        "Need %f instead of %d"
      ],
      answerIndex: 0
    },
    {
      id: "D-06",
      q: "This loop never ends. What is the issue?",
      code:
`#include <stdio.h>
int main() {
  int i = 0;
  while (i < 5) {
    printf("%d", i);
  }
  return 0;
}`,
      options: [
        "Missing i++ inside loop",
        "while cannot be used with int",
        "printf stops i from changing",
        "i must start at 1"
      ],
      answerIndex: 0
    },
    {
      id: "D-07",
      q: "What is wrong here?",
      code:
`#include <stdio.h>
int main() {
  int a[3] = {1,2,3};
  printf("%d", a[3]);
  return 0;
}`,
      options: [
        "Out-of-bounds access (valid indices 0..2)",
        "Array must be initialized with 4 elements",
        "printf cannot print array elements",
        "a[3] always equals 0"
      ],
      answerIndex: 0
    },
    {
      id: "D-08",
      q: "What is the bug?",
      code:
`#include <stdio.h>
int main() {
  char s[5];
  gets(s);
  printf("%s", s);
  return 0;
}`,
      options: [
        "gets is unsafe (buffer overflow risk)",
        "s must be declared as int",
        "printf cannot print strings",
        "Need &s in gets"
      ],
      answerIndex: 0
    },
    {
      id: "D-09",
      q: "What is the error type?",
      code:
`#include <stdio.h>
int main() {
  printf("%d", "Hello");
  return 0;
}`,
      options: [
        "Format specifier mismatch (expects int but gets char*)",
        "Missing header",
        "Illegal string literal",
        "printf cannot print text"
      ],
      answerIndex: 0
    },
    {
      id: "D-10",
      q: "What is the problem with this code?",
      code:
`#include <stdio.h>
int main() {
  int x = 5;
  printf("%d %d", x++, x++);
  return 0;
}`,
      options: [
        "Unspecified/undefined behavior due to multiple modifications without sequencing",
        "x++ is illegal inside printf",
        "printf can print only one value",
        "Needs scanf before printf"
      ],
      answerIndex: 0
    },

    // More debugging: switch fallthrough, missing break, etc.
    {
      id: "D-11",
      q: "Unexpected output occurs. What is the likely fix?",
      code:
`#include <stdio.h>
int main() {
  int x = 2;
  switch(x) {
    case 1: printf("A");
    case 2: printf("B");
    case 3: printf("C");
  }
  return 0;
}`,
      options: [
        "Add break statements to prevent fall-through",
        "Replace switch with while loop",
        "Use scanf instead of printf",
        "Use %c format specifier"
      ],
      answerIndex: 0
    },
    {
      id: "D-12",
      q: "What is the problem?",
      code:
`#include <stdio.h>
int main() {
  int x = 10;
  if (x > 5);
    printf("Hi");
  return 0;
}`,
      options: [
        "Stray semicolon after if makes printf execute unconditionally",
        "if cannot have condition x > 5",
        "printf must be inside braces always",
        "return 0 should be return 1"
      ],
      answerIndex: 0
    },
    {
      id: "D-13",
      q: "This code fails to compile in standard C. Why?",
      code:
`#include <stdio.h>
int main() {
  int n = 3;
  int a[n];  // assume exam considers standard C89/C90
  a[0] = 1;
  printf("%d", a[0]);
  return 0;
}`,
      options: [
        "Variable length arrays are not supported in older C standards (e.g., C90); depends on standard/compiler",
        "Arrays cannot use variables for size in any C",
        "a[0] cannot be assigned",
        "printf cannot print array elements"
      ],
      answerIndex: 0
    },
    {
      id: "D-14",
      q: "Why is this wrong?",
      code:
`#include <stdio.h>
void f(int a[]) {
  printf("%zu", sizeof(a));
}
int main() {
  int x[10];
  f(x);
  return 0;
}`,
      options: [
        "Inside f, a is a pointer parameter; sizeof(a) gives pointer size, not array size",
        "sizeof cannot be used on parameters",
        "x must be initialized",
        "Need sizeof(*a)"
      ],
      answerIndex: 0
    },
    {
      id: "D-15",
      q: "What is the likely runtime issue?",
      code:
`#include <stdio.h>
#include <stdlib.h>
int main() {
  int *p = malloc(5);
  p[0] = 10;
  printf("%d", p[0]);
  free(p);
  return 0;
}`,
      options: [
        "Incorrect allocation size: malloc(5) allocates 5 bytes, not 5 ints",
        "free(p) must come before printf",
        "p[0] cannot be used with malloc",
        "malloc returns int not pointer"
      ],
      answerIndex: 0
    },
    {
      id: "D-16",
      q: "What is the bug?",
      code:
`#include <stdio.h>
#include <stdlib.h>
int main() {
  int *p = (int*)malloc(3 * sizeof(int));
  free(p);
  printf("%d", p[0]);
  return 0;
}`,
      options: [
        "Use-after-free (dangling pointer dereference)",
        "Memory leak",
        "Double free",
        "Compilation error"
      ],
      answerIndex: 0
    },
    {
      id: "D-17",
      q: "What is the bug?",
      code:
`#include <stdio.h>
int main() {
  int x = 5;
  int *p;
  *p = x;
  printf("%d", *p);
  return 0;
}`,
      options: [
        "p is uninitialized; dereferencing it is undefined behavior",
        "x must be global",
        "Need **p instead of *p",
        "printf cannot print pointer value"
      ],
      answerIndex: 0
    },
    {
      id: "D-18",
      q: "Why can this crash?",
      code:
`#include <stdio.h>
#include <string.h>
int main() {
  char *s = "hello";
  s[0] = 'H';
  printf("%s", s);
  return 0;
}`,
      options: [
        "Modifying string literal through pointer is undefined behavior",
        "Need <stdlib.h>",
        "strlen is missing",
        "s must be declared as char s[]"
      ],
      answerIndex: 0
    },
    {
      id: "D-19",
      q: "What is wrong with this file handling code?",
      code:
`#include <stdio.h>
int main() {
  FILE *fp = fopen("a.txt", "r");
  fprintf(fp, "Hi");
  fclose(fp);
  return 0;
}`,
      options: [
        "Opened in read mode 'r' but writing with fprintf; should open with 'w' or 'a'",
        "fopen must be after fclose",
        "fprintf cannot write to files",
        "Must use gets before fprintf"
      ],
      answerIndex: 0
    },
    {
      id: "D-20",
      q: "What is missing?",
      code:
`#include <stdio.h>
int main() {
  FILE *fp = fopen("a.txt", "r");
  int c = fgetc(fp);
  printf("%c", c);
  return 0;
}`,
      options: [
        "Should check fp != NULL and close the file with fclose(fp)",
        "Need <stdlib.h> only",
        "fgetc cannot be used with FILE*",
        "printf must be fprintf"
      ],
      answerIndex: 0
    },

    // More function bugs, prototype mismatch
    {
      id: "D-21",
      q: "What is the likely issue in older/strict compilation modes?",
      code:
`#include <stdio.h>
int main() {
  int x = add(2,3);
  printf("%d", x);
  return 0;
}
int add(int a,int b){ return a+b; }`,
      options: [
        "add is used before a visible prototype (diagnostic required in modern C)",
        "Functions cannot appear after main",
        "printf cannot print x",
        "int return type is illegal"
      ],
      answerIndex: 0
    },
    {
      id: "D-22",
      q: "What is the bug?",
      code:
`#include <stdio.h>
int main() {
  int a = 10, b = 0;
  printf("%d", a/b);
  return 0;
}`,
      options: [
        "Division by zero at runtime",
        "Missing header",
        "a and b must be float",
        "printf requires %f"
      ],
      answerIndex: 0
    },
    {
      id: "D-23",
      q: "What is wrong?",
      code:
`#include <stdio.h>
int main() {
  int x = 5;
  if (x = 0) printf("A");
  else printf("B");
  return 0;
}`,
      options: [
        "Assignment used instead of comparison; condition becomes false so prints B",
        "Else is wrong",
        "printf should be scanf",
        "x must be declared float"
      ],
      answerIndex: 0
    },
    {
      id: "D-24",
      q: "What is the error in this pointer arithmetic?",
      code:
`#include <stdio.h>
int main() {
  int x = 10;
  int *p = &x;
  p = p * 2;
  printf("%d", *p);
  return 0;
}`,
      options: [
        "Multiplying pointers is invalid in C",
        "Need header <stdlib.h>",
        "Must use ++p not * 2",
        "Pointer arithmetic only works with char*"
      ],
      answerIndex: 0
    },
    {
      id: "D-25",
      q: "What is wrong with this attempt to swap?",
      code:
`#include <stdio.h>
void swap(int a, int b){
  int t = a; a = b; b = t;
}
int main(){
  int x=1, y=2;
  swap(x,y);
  printf("%d %d", x,y);
  return 0;
}`,
      options: [
        "swap uses call-by-value; use pointers (int *a, int *b) to swap caller variables",
        "Need to return t",
        "swap must be recursive",
        "printf requires &x and &y"
      ],
      answerIndex: 0
    },

    // Arrays & strings debugging
    {
      id: "D-26",
      q: "What is the main issue?",
      code:
`#include <stdio.h>
int main(){
  char s[3] = "ABC";
  printf("%s", s);
  return 0;
}`,
      options: [
        "Array too small: needs 4 chars including '\\0'",
        "printf cannot print strings",
        "Must use puts not printf",
        "String literals cannot initialize arrays"
      ],
      answerIndex: 0
    },
    {
      id: "D-27",
      q: "What is the bug?",
      code:
`#include <stdio.h>
int main(){
  int a[5];
  for(int i=1; i<=5; i++) a[i] = i;
  printf("%d", a[5]);
  return 0;
}`,
      options: [
        "Out-of-bounds: valid indices are 0..4; loop and access are wrong",
        "Arrays cannot be used in loops",
        "printf must use %f",
        "a must be initialized with braces"
      ],
      answerIndex: 0
    },
    {
      id: "D-28",
      q: "Which fix is best?",
      code:
`#include <stdio.h>
int main(){
  int n;
  printf("Enter: ");
  scanf("%d", &n);
  if(n = 5) printf("Five");
  return 0;
}`,
      options: [
        "Use if(n == 5) instead of if(n = 5)",
        "Use scanf(\"%f\", &n)",
        "Use printf(\"%s\", n)",
        "Remove & from scanf"
      ],
      answerIndex: 0
    },
    {
      id: "D-29",
      q: "This prints garbage sometimes. Why?",
      code:
`#include <stdio.h>
int main(){
  int x;
  printf("%d", x);
  return 0;
}`,
      options: [
        "x is uninitialized (indeterminate value)",
        "printf cannot print integers",
        "x must be static",
        "Need scanf before printf always"
      ],
      answerIndex: 0
    },
    {
      id: "D-30",
      q: "What is the bug in this code?",
      code:
`#include <stdio.h>
#include <string.h>
int main(){
  char a[5] = "Hi";
  char b[] = "World";
  strcpy(a, b);
  printf("%s", a);
  return 0;
}`,
      options: [
        "Buffer overflow: destination a is too small for \"World\\0\"",
        "strcpy copies only one character",
        "Need strcmp not strcpy",
        "b must be char*"
      ],
      answerIndex: 0
    },

    // File I/O & pointers, more depth
    {
      id: "D-31",
      q: "What is the issue?",
      code:
`#include <stdio.h>
int main(){
  FILE *fp = fopen("a.txt", "r");
  char s[100];
  fgets(s, 100, fp);
  printf("%s", s);
  fclose(fp);
  return 0;
}`,
      options: [
        "Missing NULL check for fp (if file open fails, fgets uses NULL FILE*)",
        "fgets cannot read from files",
        "printf cannot print s",
        "Need gets instead of fgets"
      ],
      answerIndex: 0
    },
    {
      id: "D-32",
      q: "What is the bug?",
      code:
`#include <stdio.h>
int main(){
  FILE *fp = fopen("a.txt", "w");
  fclose(fp);
  fputs("Hi", fp);
  return 0;
}`,
      options: [
        "Using file pointer after fclose (invalid stream usage)",
        "Need mode \"r\" not \"w\"",
        "fputs cannot write strings",
        "fclose should be removed always"
      ],
      answerIndex: 0
    },
    {
      id: "D-33",
      q: "What is the bug?",
      code:
`#include <stdio.h>
int main(){
  int a = 10;
  int *p = &a;
  printf("%d", p);
  return 0;
}`,
      options: [
        "Wrong format specifier: should use %p (cast to void*) to print address",
        "p must be initialized to NULL",
        "Need *p not p",
        "printf cannot print pointers"
      ],
      answerIndex: 0
    },
    {
      id: "D-34",
      q: "What is wrong here?",
      code:
`#include <stdio.h>
int main(){
  char c;
  scanf("%c", &c);
  if(c == "A") printf("YES");
  return 0;
}`,
      options: [
        "Comparing char with string literal; should be 'A' not \"A\"",
        "scanf cannot read chars",
        "Need %d not %c",
        "c must be int"
      ],
      answerIndex: 0
    },
    {
      id: "D-35",
      q: "What is the most likely issue?",
      code:
`#include <stdio.h>
int main(){
  int i;
  for(i=0; i<5; i++);
  printf("%d", i);
  return 0;
}`,
      options: [
        "Stray semicolon makes loop body empty; prints 5 after loop ends",
        "for loops are not allowed in C",
        "printf cannot print i",
        "i is not declared"
      ],
      answerIndex: 0
    },
    {
      id: "D-36",
      q: "What is the bug?",
      code:
`#include <stdio.h>
int main(){
  int x = 5;
  int *p = &x;
  printf("%d", *p++);
  printf("%d", *p);
  return 0;
}`,
      options: [
        "p++ makes p point past x (invalid dereference on second printf)",
        "Post-increment cannot be used with pointers",
        "First printf is invalid",
        "Need &p not p"
      ],
      answerIndex: 0
    },
    {
      id: "D-37",
      q: "What is the issue?",
      code:
`#include <stdio.h>
int main(){
  int x = 1;
  if(x & (10/x)) printf("OK");
  return 0;
}`,
      options: [
        "Uses bitwise & so second operand evaluated; can divide by zero if x becomes 0; should use && for short-circuit",
        "Bitwise & is illegal",
        "10/x is always safe",
        "if cannot contain expressions"
      ],
      answerIndex: 0
    },
    {
      id: "D-38",
      q: "What is wrong?",
      code:
`#include <stdio.h>
int main(){
  int x = 5;
  printf("%d", ++x + ++x);
  return 0;
}`,
      options: [
        "Undefined behavior due to modifying x multiple times without sequencing",
        "This is well-defined and prints 12",
        "++ cannot be used in expressions",
        "printf needs <stdlib.h>"
      ],
      answerIndex: 0
    },
    {
      id: "D-39",
      q: "What is the bug?",
      code:
`#include <stdio.h>
int main(){
  int x = 5;
  int *p = &x;
  free(p);
  return 0;
}`,
      options: [
        "free used on a pointer not obtained from malloc/calloc/realloc",
        "Need to include <string.h>",
        "x must be static",
        "free returns int, missing assignment"
      ],
      answerIndex: 0
    },
    {
      id: "D-40",
      q: "What is the bug?",
      code:
`#include <stdio.h>
#include <stdlib.h>
int main(){
  int *p = (int*)malloc(10 * sizeof(int));
  if(p == NULL) return 0;
  free(p);
  free(p);
  return 0;
}`,
      options: [
        "Double free (undefined behavior)",
        "Memory leak",
        "p must be global",
        "malloc cannot allocate arrays"
      ],
      answerIndex: 0
    },

    // More: function pointer declaration confusion
    {
      id: "D-41",
      q: "What is the mistake?",
      code:
`#include <stdio.h>
int add(int a,int b){ return a+b; }
int main(){
  int *fp(int,int) = add;
  printf("%d", fp(2,3));
  return 0;
}`,
      options: [
        "Function pointer declared incorrectly; should be int (*fp)(int,int) = add;",
        "add must be void",
        "printf must be puts",
        "Need malloc for fp"
      ],
      answerIndex: 0
    },
    {
      id: "D-42",
      q: "What is the bug?",
      code:
`#include <stdio.h>
int main(){
  char s[10] = "abc";
  printf("%d", s);
  return 0;
}`,
      options: [
        "Wrong format specifier; %s should be used for string, not %d",
        "s must be char*",
        "printf cannot print arrays",
        "Need sizeof(s) in printf"
      ],
      answerIndex: 0
    },
    {
      id: "D-43",
      q: "What is wrong in this recursion?",
      code:
`#include <stdio.h>
int f(int n){
  return n * f(n-1);
}
int main(){
  printf("%d", f(3));
  return 0;
}`,
      options: [
        "Missing base case; infinite recursion/stack overflow",
        "Recursion is illegal in C",
        "Need to use while loop only",
        "printf cannot call functions"
      ],
      answerIndex: 0
    },
    {
      id: "D-44",
      q: "What is the bug?",
      code:
`#include <stdio.h>
int main(){
  int a[3] = {1,2,3};
  int *p = &a;
  printf("%d", *p);
  return 0;
}`,
      options: [
        "Type mismatch: &a is int (*)[3], not int*; use int *p = a;",
        "Need **p",
        "printf must print address",
        "Arrays cannot be assigned"
      ],
      answerIndex: 0
    },
    {
      id: "D-45",
      q: "What is wrong with this structure access?",
      code:
`#include <stdio.h>
struct S { int x; };
int main(){
  struct S s; s.x = 10;
  struct S *p = &s;
  printf("%d", p.x);
  return 0;
}`,
      options: [
        "p is a pointer; should use p->x (or (*p).x), not p.x",
        "Need <stdlib.h>",
        "struct cannot have int",
        "printf cannot print struct member"
      ],
      answerIndex: 0
    },
    {
      id: "D-46",
      q: "What is the issue in file opening mode?",
      code:
`#include <stdio.h>
int main(){
  FILE *fp = fopen("a.txt", "r");
  fputs("Hello", fp);
  fclose(fp);
  return 0;
}`,
      options: [
        "Writing to a file opened in read mode; open with \"w\" or \"a\"",
        "fputs requires <stdlib.h>",
        "fclose must be before fputs",
        "fopen returns int not FILE*"
      ],
      answerIndex: 0
    },
    {
      id: "D-47",
      q: "Why is this incorrect?",
      code:
`#include <stdio.h>
int main(){
  int x = 10;
  int *p = x;
  printf("%d", *p);
  return 0;
}`,
      options: [
        "Assigning int to pointer; should be int *p = &x;",
        "x must be malloc'ed",
        "Need char* not int*",
        "printf cannot dereference pointers"
      ],
      answerIndex: 0
    },
    {
      id: "D-48",
      q: "What is the bug?",
      code:
`#include <stdio.h>
int main(){
  int x = 5;
  int *p = &x;
  printf("%d", *p + 1);
  p = p + 1;
  printf("%d", *p);
  return 0;
}`,
      options: [
        "After p = p + 1, p points past x; dereference is invalid (undefined behavior)",
        "Pointer arithmetic is always illegal",
        "Need ++(*p) instead",
        "printf cannot be called twice"
      ],
      answerIndex: 0
    },
    {
      id: "D-49",
      q: "What is the problem with this macro-like usage?",
      code:
`#include <stdio.h>
int main(){
  int x = 3;
  printf("%d", x+++x);
  return 0;
}`,
      options: [
        "Parsed as (x++) + x; modifies and reads x in same expression without sequencing in some contexts; avoid; ambiguous for beginners",
        "Always prints 7",
        "Compilation error due to +++ not allowed",
        "x+++x means x + ++ax"
      ],
      answerIndex: 2
    },
    {
      id: "D-50",
      q: "What is the best fix to avoid leaving a dangling pointer after freeing memory?",
      options: [
        "Call free twice",
        "Assign the pointer to NULL after free",
        "Use printf to validate pointer",
        "Convert pointer to int"
      ],
      answerIndex: 1
    }
  ]
};
