# Functions

## Why Do We Need Functions?

Imagine your teacher asks you to write "I will not talk in class" 100 times. Boring, right? Now imagine that halfway through, she changes it to "I will listen in class", and you have to erase and rewrite every single line!

Programming can feel the same way. In a long program, you often need to do the **same task many times**. Without functions, you'd have to:

- Write the same code again and again (a waste of time)
- Fix or change it in **every place** it appears (easy to miss one!)

**Functions solve this problem.**

## What Is a Function?

A function is like a **recipe**. You write it once, give it a name, and then use it whenever you want, as many times as you like.

- The **ingredients** you give it are called **inputs** (or *parameters*).
- The **dish** it gives back is called the **output** (or *return value*).

🍳 Think of a sandwich recipe: give it bread and cheese, and it gives you a cheese sandwich. Give it bread and jam, and you get a jam sandwich. Same recipe, different ingredients!

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

> 💡 **Try it yourself** — build `isEven` in the [Programiz online compiler](https://www.programiz.com/cpp-programming/online-compiler/), then try calling it with a negative number and see if your logic still holds.

## Quick reference

| Concept | Syntax | One-line reminder |
| --- | --- | --- |
| Function | `int f(int n) { return n; }` | define it above `main` |

**Next up:** [Arrays](Arrays.md)
