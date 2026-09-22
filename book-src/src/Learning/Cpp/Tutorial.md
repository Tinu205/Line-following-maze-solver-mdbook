


## Introduction to cpp
```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, world!" << endl;
    return 0;
}
```

- `#include <iostream>` brings in the tools for printing and reading input.
- `main()` is where the computer starts reading your instructions.
- `cout <<` sends things to the screen; `endl` moves to a new line.
- Every instruction ends with a semicolon, and `{ }` holds a group of instructions together.

Save it as `hello.cpp`, compile it with `g++ hello.cpp -o hello`, then run it with `./hello`. Anything after `//` on a line is a note for humans and is ignored by the computer.

## Variables & Data Types

A variable is a labelled box in the computer's memory. You tell C++ what kind of thing the box holds, give it a name, and put a value in.

```cpp
int age = 14;            // whole number
double height = 1.52;    // number with a decimal point
char grade = 'A';        // one character, single quotes
bool passed = true;      // only true or false
string name = "Meera";   // text, double quotes (needs #include <string>)
```

| Type | Holds | Examples |
| --- | --- | --- |
| `int` | whole numbers | -7, 0, 250 |
| `double` | numbers with decimals | 3.14, -0.5 |
| `char` | exactly one character | 'k', '7' |
| `bool` | a yes/no answer | true, false |
| `string` | text of any length | "Good morning" |

The box can be refilled any time, which is why it is called a *variable*: `age = 15;` replaces what was inside. Use `const` when it must never change, as in `const double PI = 3.14159;`.

To get a value from the person running the program, use `cin`.

```cpp
int marks;
cout << "Enter your marks: ";
cin >> marks;
cout << "You scored " << marks << " out of 100" << endl;
```

Two traps that catch everyone once:

- Dividing two `int` values throws away the decimals. `int x = 7 / 2;` stores 3, not 3.5. Write `7.0 / 2` and keep the answer in a `double`.
- Names cannot contain spaces and cannot start with a digit. Use `total_marks` or `totalMarks`, never `total marks` or `2ndTest`.

**Try it.** Store your name, your age and your height, then print: `Meera is 14 years old and 1.52 m tall.`

## If-Else

`if` asks a yes/no question and runs a block of code only when the answer is yes. `else` covers every other case.

```cpp
int marks = 72;

if (marks >= 40) {
    cout << "Pass" << endl;
} else {
    cout << "Fail" << endl;
}
```

The question inside the brackets is built with comparison operators.

| Operator | Means | With `marks = 72` |
| --- | --- | --- |
| `==` | is equal to | `marks == 72` is true |
| `!=` | is not equal to | `marks != 40` is true |
| `>` | is greater than | `marks > 90` is false |
| `<` | is less than | `marks < 90` is true |
| `>=` | is at least | `marks >= 72` is true |
| `<=` | is at most | `marks <= 71` is false |

The single `=` assigns a value, the double `==` compares. Writing `if (marks = 40)` quietly changes the marks to 40 instead of checking them.

When there are several possible answers, chain them with `else if`. The checks run top to bottom and stop at the first true one, so the order matters.

```cpp
if (marks >= 90) {
    cout << "Grade A";
} else if (marks >= 75) {
    cout << "Grade B";
} else if (marks >= 60) {
    cout << "Grade C";
} else if (marks >= 40) {
    cout << "Grade D";
} else {
    cout << "Needs improvement";
}
```

Join two questions with `&&` (both must be true), `||` (either one is enough) or `!` (flip the answer).

```cpp
if (age >= 13 && age <= 19) {
    cout << "Teenager" << endl;
}

if (day == "Saturday" || day == "Sunday") {
    cout << "Holiday" << endl;
}
```

**Try it.** Read a number and print whether it is positive, negative or zero. Then extend it: read three numbers and print the largest.

## Loops

A loop repeats a block of code instead of you copying it out ten times. C++ gives you three, and they differ only in when the question gets asked.

| Loop | Use it when | Runs at least once? |
| --- | --- | --- |
| `for` | you know how many rounds | no |
| `while` | you repeat until something changes | no |
| `do-while` | the body must run before you can decide | yes |

### for

```cpp
for (int i = 1; i <= 5; i++) {
    cout << i << " ";
}
// prints: 1 2 3 4 5
```

The bracket holds three parts, separated by semicolons: the start (`int i = 1`), the test made before every round (`i <= 5`), and the step taken after every round (`i++`, meaning add 1 to `i`). Trace it on paper once and it stops being mysterious.

### while

```cpp
int total = 0, n;
cout << "Enter numbers, -1 to stop: ";
cin >> n;

while (n != -1) {
    total += n;      // same as total = total + n
    cin >> n;
}
cout << "Total: " << total << endl;
```

### do-while

```cpp
int choice;
do {
    cout << "Pick a number from 1 to 3: ";
    cin >> choice;
} while (choice < 1 || choice > 3);
```

The menu prints once before anything is checked, which is exactly what you want for a prompt.

### break and continue

`break` leaves the loop at once. `continue` skips the rest of this round and starts the next one.

```cpp
for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) continue;   // skip even numbers
    if (i > 7) break;           // stop early
    cout << i << " ";
}
// prints: 1 3 5 7
```

If a loop never ends, the test never became false. The usual cause is a forgotten `i++` or a `while` whose variable is never updated inside the body. Press Ctrl+C to stop a runaway program.

**Try it.** Read a number and print its multiplication table up to 10, as `7 x 3 = 21`. Then write a loop that adds the numbers 1 to 100.

## Functions

A function is a recipe you write once and then use by name, as many times as you like. You hand it ingredients, it hands back a result.

```cpp
int square(int n) {
    return n * n;
}

int main() {
    cout << square(7) << endl;   // 49
    cout << square(12) << endl;  // 144
    return 0;
}
```

Read the first line from left to right: `int` is the type of the answer it gives back, `square` is its name, and `(int n)` is the ingredient it needs. `return` sends the answer out and ends the function immediately.

A function that only does something and gives nothing back is marked `void`, and needs no `return`.

```cpp
void greet(string name) {
    cout << "Good morning, " << name << "!" << endl;
}

greet("Meera");   // Good morning, Meera!
```

Parameters are separated by commas, and a function can call another function.

```cpp
double average(double a, double b) {
    return (a + b) / 2;
}

bool isPassing(double marks) {
    return marks >= 40;
}

cout << isPassing(average(35, 61));   // 1, meaning true
```

Two rules to remember. Write your functions above `main`, otherwise C++ reaches the call before it has met the function. And a variable made inside a function only exists inside it, so `n` in `square` is invisible to `main`.

Functions are worth the trouble for three reasons: the name says what the code does, a bug gets fixed in one place instead of six, and each piece can be tested on its own.

**Try it.** Write `bool isEven(int n)` that returns true for even numbers, then use it inside a loop to print every even number from 1 to 20.

## Arrays

One variable holds one value. An array is a row of numbered lockers, all holding the same type, sharing one name.

```cpp
int marks[5] = {88, 72, 95, 60, 41};
```

| Locker number | 0 | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- | --- |
| Value | 88 | 72 | 95 | 60 | 41 |

Counting starts at 0, not 1. In an array of 5 items the first is `marks[0]` and the last is `marks[4]`.

```cpp
cout << marks[0];   // 88
cout << marks[4];   // 41
marks[2] = 97;      // change one locker
```

The number in the brackets can itself be a variable, which is what makes arrays and loops such a natural pair.

```cpp
int total = 0;
for (int i = 0; i < 5; i++) {
    total += marks[i];
}
cout << "Average: " << total / 5.0 << endl;
```

Notice `i < 5`, never `i <= 5`. Locker 5 does not exist, and C++ will not stop you from looking inside it: you get whatever junk sits in that memory, or the program crashes. This is the single most common array bug.

Searching through an array follows the same shape. Keep a best-so-far and compare.

```cpp
int highest = marks[0];
for (int i = 1; i < 5; i++) {
    if (marks[i] > highest) {
        highest = marks[i];
    }
}
cout << "Highest: " << highest << endl;
```

The size is fixed when you declare the array and cannot grow later, so write it once as a constant and use that everywhere: `const int SIZE = 5; int marks[SIZE];`.

**Try it.** Store 6 daily temperatures, work out the average, then print how many days were warmer than average.

## Putting it together

This one program uses every idea on the page: variables, input, an array, a loop, a function and an if-else. Type it, run it, then change something and see what breaks.

```cpp
#include <iostream>
using namespace std;

const int SIZE = 5;

double average(int values[], int size) {
    int total = 0;
    for (int i = 0; i < size; i++) {
        total += values[i];
    }
    return (double)total / size;
}

int main() {
    int marks[SIZE];

    for (int i = 0; i < SIZE; i++) {
        cout << "Marks for student " << i + 1 << ": ";
        cin >> marks[i];
    }

    cout << "Class average: " << average(marks, SIZE) << endl;

    int passed = 0;
    for (int i = 0; i < SIZE; i++) {
        if (marks[i] >= 40) {
            cout << "Student " << i + 1 << ": Pass" << endl;
            passed++;
        } else {
            cout << "Student " << i + 1 << ": Fail" << endl;
        }
    }

    cout << passed << " of " << SIZE << " passed." << endl;
    return 0;
}
```

### Quick reference

| Idea | Shape | One-line reminder |
| --- | --- | --- |
| Variable | `int age = 14;` | a labelled box with a fixed type |
| Output | `cout << x << endl;` | arrows point away from you |
| Input | `cin >> x;` | arrows point towards the variable |
| Decision | `if (x > 0) { } else { }` | `==` compares, `=` assigns |
| Counting loop | `for (int i = 0; i < n; i++)` | start, test, step |
| Waiting loop | `while (condition) { }` | something inside must change |
| Function | `int f(int n) { return n; }` | define it above `main` |
| Array | `int a[5];` | first is `a[0]`, last is `a[4]` |
