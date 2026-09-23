# Putting it Together

This one program uses every idea from the tutorial series: variables, input, an array, a loop, a function and an if-else. Type it, run it, then change something and see what breaks.

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

> 💡 **Try it yourself** — run it in the [Programiz online compiler](https://www.programiz.com/cpp-programming/online-compiler/), then try changing `SIZE` to 3 without touching anything else and see what breaks.

## Quick reference — everything so far

| Concept | Syntax | One-line reminder |
| --- | --- | --- |
| Variable | `int age = 14;` | a labelled box with a fixed type |
| Output | `cout << x << endl;` | arrows point away from you |
| Input | `cin >> x;` | arrows point towards the variable |
| Decision | `if (x > 0) { } else { }` | `==` compares, `=` assigns |
| Counting loop | `for (int i = 0; i < n; i++)` | start, test, step |
| Waiting loop | `while (condition) { }` | something inside must change |
| Function | `int f(int n) { return n; }` | define it above `main` |
| Array | `int a[5];` | first is `a[0]`, last is `a[4]` |

That's the end of the C++ tutorial series — from here, everything you write for the bot builds on these eight ideas.
