# Functions

## Why Do We Need Functions?

Say your program needs to square a few numbers:

```cpp
cout << 7 * 7 << endl;
cout << 12 * 12 << endl;
cout << 20 * 20 << endl;
```

Three lines doing the exact same thing, just with different numbers. Now say you actually meant to cube them, not square them. You'd have to hunt down and fix every single line, and in a long program it's easy to miss one.

A function lets you write "how to square a number" exactly once, give it a name, and reuse that name wherever you need it. Fix the logic in one place, and every place that uses it is fixed too.

## What Is a Function?

Here's what that actually looks like. Squaring a number takes one instruction: `n * n`. Wrap it in a function called `square`, and `square(7)` means "run that instruction with `n` set to 7."

- The number you hand in, `7`, `12`, `20`, is the **input** (or *parameter*).
- The number you get back, `49`, `144`, `400`, is the **output** (or *return value*).

The same idea works for any repeated instruction, not just squaring. Think of it like a recipe: give it bread and cheese, and you get a cheese sandwich; give it bread and jam, and you get a jam sandwich. Same recipe, different ingredients in, different dish out.

## A Quick Example

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

> **Try it yourself** — build `isEven` in the [Programiz online compiler](https://www.programiz.com/cpp-programming/online-compiler/), then try calling it with a negative number and see if your logic still holds.

## Quick reference

| Concept | Syntax | One-line reminder |
| --- | --- | --- |
| Function | `int f(int n) { return n; }` | define it above `main` |

**Next up:** [Arrays](Arrays.md)
