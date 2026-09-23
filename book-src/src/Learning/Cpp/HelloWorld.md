# Hello, World!

## [Getting started with C++ programming](https://www.learncpp.com/)

This is where you start actually writing C++. We'll go one idea at a time across this series: Hello World first, then variables, decisions, loops, functions and arrays. By the end you'll be able to write your own simple programs.

## Hello World

This is the first program almost all beginners write while learning a new programming language. As a beginner you're not expected to understand what this does by just glancing at it. We'll start dissecting the code and understand what each line does soon.

```cpp
#include <iostream>


int main() {
    std::cout << "Hello, world!" << endl;
    return 0;
}
```

- The `#include` is called preprocessor directive which indicates that we would like to use the contents of the iostream library, which is the part of the C++ standard library that allows us to read and write text from/to the console. We need this line in order to use std::cout on line 5. Excluding this line would result in a compile error on line 5, as the compiler wouldn't otherwise know what std::cout is.
- `main()` is where the computer starts reading your instructions and `int` before main is the return type of the main function in the further lessons we'll see how to use them for various functions.
- `std::cout <<` sends things to the screen; `endl` moves to a new line.
- Every instruction ends with a semicolon, and `{ }` holds a group of instructions together.

> 💡 **Try it yourself** — paste this into the [Programiz online compiler](https://www.programiz.com/cpp-programming/online-compiler/) and hit run. Then change the text inside the quotes and run it again.

## Quick reference

| Concept | Syntax | One-line reminder |
| --- | --- | --- |
| Output | `cout << x << endl;` | arrows point away from you |

**Next up:** [Variables & Data Types](Variables.md)
