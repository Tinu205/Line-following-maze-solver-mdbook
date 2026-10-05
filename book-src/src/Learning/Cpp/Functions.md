# Functions

## Why Do We Need Functions?

Say your program needs to square a few numbers:

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << 7 * 7 << endl;
    cout << 12 * 12 << endl;
    cout << 20 * 20 << endl;
}
```

**Output:**

```
49
144
400
```

Three lines doing the exact same thing, just with different numbers. Now say you actually meant to cube them, not square them. You'd have to hunt down and fix every single line, and in a long program it's easy to miss one.

A function lets you write "how to square a number" exactly once, give it a name, and reuse that name wherever you need it. Fix the logic in one place, and every place that uses it is fixed too.

## What Is a Function?

Squaring a number takes one instruction: `n * n`. Wrap it in a function called `square`, and `square(7)` means "run that instruction with `n` set to 7."

- The value you hand in (`7`, `12`, `20`) is the **argument**. The name that receives it inside the function (`n`) is the **parameter**. In short: *the parameter is the empty slot, the argument is what you put in it.*
- The value you get back (`49`, `144`, `400`) is the **return value**.

Think of a recipe: give it bread and cheese, and you get a cheese sandwich; give it bread and jam, and you get a jam sandwich. Same recipe, different ingredients in, different dish out.

## A Quick Example

```cpp
#include <iostream>
using namespace std;

int square(int n) {
    return n * n;
}

int main() {
    cout << square(7) << endl;
    cout << square(12) << endl;
    return 0;
}
```

**Output:**

```
49
144
```

Read the first line of `square` from left to right: `int` is the type of the answer it gives back, `square` is its name, and `(int n)` is the parameter, the ingredient it needs. `return` sends the answer out and ends the function immediately.

A function that only does something and gives nothing back is marked `void`, and needs no `return`.

```cpp
#include <iostream>
#include <string>
using namespace std;

void greet(string name) {
    cout << "Good morning, " << name << "!" << endl;
}

int main() {
    greet("Meera");
}
```

**Output:**

```
Good morning, Meera!
```

Parameters are separated by commas, and a function can call another function.

```cpp
#include <iostream>
using namespace std;

double average(double a, double b) {
    return (a + b) / 2;
}

bool isPassing(double marks) {
    return marks >= 40;
}

int main() {
    cout << isPassing(average(35, 61)) << endl;
}
```

**Output:**

```
1
```

C++ prints `true` as `1` and `false` as `0`. Here `average(35, 61)` is 48, and 48 is at least 40, so the answer is true.

Two rules to remember. Write your functions above `main`, otherwise C++ reaches the call before it has met the function. And a variable made inside a function only exists inside it, so `n` in `square` is invisible to `main`.

Functions are worth the trouble for three reasons: the name says what the code does, a bug gets fixed in one place instead of six, and each piece can be tested on its own.

>**Try it yourself** write `bool isEven(int n)` that returns true for even numbers, then use it inside a loop in `main` to print every even number from 1 to 20. Build it in the [Programiz online compiler](https://www.programiz.com/cpp-programming/online-compiler/), then call it with a negative number and check your logic still holds.

## Quick reference

| Concept | Syntax | One-line reminder |
| --- | --- | --- |
| Function | `int f(int n) { return n; }` | define it above `main` |
| Call | `f(5)` | 5 is the argument, `n` is the parameter |

**Next up:** [Arrays](Arrays.md)
