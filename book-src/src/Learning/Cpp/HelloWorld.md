# Hello, World!

## [Getting started with C++ programming](https://www.learncpp.com/)

This is where you start actually writing C++. We'll go one idea at a time across this series: Hello World first, then variables, decisions, loops, functions and arrays. By the end you'll be able to write your own simple programs.

## Hello World

This is the first program almost all beginners write while learning a new programming language. You're not expected to understand it just by glancing at it. We'll take it apart line by line.

```cpp
#include <iostream>

int main() {
    std::cout << "Hello, world!" << std::endl;
    return 0;
}
```

**Output:**

```
Hello, world!
```

- `#include` is called a preprocessor directive. It says we want to use the `iostream` library, the part of the C++ standard library that lets us read and write text from/to the console. We need this line to use `std::cout`. Without it, the compiler wouldn't know what `std::cout` is and you'd get a compile error.
- `main()` is where the computer starts reading your instructions. The `int` before `main` is the type of value it gives back when it finishes (a whole number). We'll see more about this in [Functions](Functions.md).
- `std::cout <<` sends things to the screen, and `std::endl` moves to a new line.
- `return 0;` tells the computer the program finished without problems.
- Every instruction ends with a semicolon, and `{ }` holds a group of instructions together.

## Saving some typing: `using namespace std;`

Writing `std::` before everything gets tiring. The `std::` part says "this comes from the standard library". If you add the line `using namespace std;` once, near the top, you can drop it:

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, world!" << endl;
    return 0;
}
```

Both programs do exactly the same thing. **From now on, every example in this series uses `using namespace std;`**, so you will see plain `cout`, `cin` and `endl`.

>**Try it yourself** paste this into the [Programiz online compiler](https://www.programiz.com/cpp-programming/online-compiler/) and hit run. Then change the text inside the quotes and run it again. Finally, delete the `using namespace std;` line and read the error message you get. Seeing an error once makes it much less scary later.

## Quick reference

| Concept | Syntax | One-line reminder |
| --- | --- | --- |
| Output | `cout << x << endl;` | arrows point away from you |

**Next up:** [Variables & Data Types](Variables.md)
