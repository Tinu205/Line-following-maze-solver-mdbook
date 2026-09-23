# Loops

A loop repeats a block of code instead of you copying it out ten times. C++ gives you three types of loops, and they differ only in when the question gets asked.

| Loop | Use it when | Runs at least once? |
| --- | --- | --- |
| `for` | you know how many rounds | no |
| `while` | you repeat until something changes | no |
| `do-while` | the body must run before you can decide | yes |

### for

```cpp
#include <iostream>
using namespace std;
int main(){
    for (int i = 1; i <= 5; i++) {
        cout << i << " ";
    }
}
// prints: 1 2 3 4 5
```

The bracket holds three parts, separated by semicolons: the start (`int i = 1`), the test made before every round (`i <= 5`), and the step taken after every round (`i++`, meaning add 1 to `i`). Trace it on paper once and it stops being mysterious.

### while

```cpp
#include <iostream>
using namespace std;

int main(){
    int total = 0, n;
    cout << "Enter numbers, -1 to stop: ";
    cin >> n;

    while (n != -1) {
        total += n;      // same as total = total + n
        cin >> n;
    }
    cout << "Total: " << total << endl;
}
```

### do-while

```cpp
#include <iostream>
using namespace std;

int main(){
    int choice;
    do {
        cout << "Pick a number from 1 to 3: ";
        cin >> choice;
    } while (choice < 1 || choice > 3);
}
```

The menu prints once before anything is checked, which is exactly what you want for a prompt.

### break and continue

Now what if we want to check a condition and stop the loop before the end ?? That's where break and continue statement comes. `break` leaves the loop at once. `continue` skips the rest of this round and starts the next one.

```cpp
#include <iostream>
using namespace std;

int main(){
    for (int i = 1; i <= 10; i++) {
        if (i % 2 == 0) continue;   // skip even numbers
        if (i > 7) break;           // stop early
        cout << i << " ";
    }
    // prints: 1 3 5 7
}
```

If a loop never ends, the test never became false. The usual cause is a forgotten `i++` or a `while` whose variable is never updated inside the body. Press Ctrl+C to stop a runaway program.

**Try it.** Read a number and print its multiplication table up to 10, as `7 x 3 = 21`. Then write a loop that adds the numbers 1 to 100.

> 💡 **Try it yourself** — run your multiplication table in the [Programiz online compiler](https://www.programiz.com/cpp-programming/online-compiler/), then break it on purpose by removing the `i++` and see what a runaway loop looks like (Ctrl+C to stop it).

## Quick reference

| Concept | Syntax | One-line reminder |
| --- | --- | --- |
| Counting loop | `for (int i = 0; i < n; i++)` | start, test, step |
| Waiting loop | `while (condition) { }` | something inside must change |

**Next up:** [Functions](Functions.md)
