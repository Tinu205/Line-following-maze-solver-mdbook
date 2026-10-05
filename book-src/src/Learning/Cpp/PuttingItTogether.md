# Putting it Together

This one program uses every idea from the tutorial series: variables, input, an array, a loop, a function and an if-else. Type it, run it, then change something and see what happens.

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

**Sample run** (the numbers after the colons are typed by the user):

```
Marks for student 1: 88
Marks for student 2: 72
Marks for student 3: 35
Marks for student 4: 60
Marks for student 5: 41
Class average: 59.2
Student 1: Pass
Student 2: Pass
Student 3: Fail
Student 4: Pass
Student 5: Pass
4 of 5 passed.
```

>**Try it yourself** run it in the [Programiz online compiler](https://www.programiz.com/cpp-programming/online-compiler/).
>
> 1. Change `SIZE` to 3 and nothing else. The whole program adapts: it asks for 3 marks and reports "of 3 passed". That is the benefit of using one constant instead of writing 5 everywhere.
> 2. Now do it the wrong way. Keep `SIZE` at 3, but change the first loop to `i < 5`. The program tries to store marks in lockers 3 and 4, which do not exist in a 3-item array. That is an out-of-bounds bug, and it can give strange results or crash.
> 3. Add a line that prints the highest mark, using the search pattern from [Arrays](Arrays.md).

## Quick reference: everything so far

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

That's the end of the C++ tutorial series. From here, everything you write for the bot builds on these eight ideas.

## Bridge: from C++ to Arduino

Your bot's brain, the Arduino Nano, is programmed in C++. Everything you just learned (variables, `if`, loops, functions, arrays) works exactly the same way. Only a few things around the edges change:

| In normal C++ | On the Arduino |
| --- | --- |
| Starts at `main()` and runs once, top to bottom | Has `setup()`, which runs **once**, and `loop()`, which runs **again and again, forever** |
| `cout << "Hi" << endl;` | `Serial.println("Hi");` (and `Serial.print` for no new line) |
| `cin >> x;` | Not used. Inputs come from sensors, like `analogRead(A0)` |
| Output appears in the console | Output appears in the **Serial Monitor** |
| Nothing to set up | `Serial.begin(9600);` must be called in `setup()` before printing |
| Talks to the screen and keyboard | Talks to pins: `pinMode(pin, OUTPUT)`, `digitalWrite(pin, HIGH)`, `delay(1000)` |

Here is the same tiny program in both styles. First, say hello and then count to 5:

**C++ on a computer**

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello!" << endl;
    for (int count = 1; count <= 5; count++) {
        cout << count << endl;
    }
    return 0;
}
```

**Arduino**

```cpp
int count = 1;

void setup() {
  Serial.begin(9600);
  Serial.println("Hello!");
}

void loop() {
  if (count <= 5) {
    Serial.println(count);
    count++;
  }
  delay(1000);   // wait 1 second (1000 milliseconds)
}
```

Both print `Hello!` and then `1` to `5`. A few things to notice:

- The Arduino has no `main()`. The hidden `main()` calls `setup()` once, then calls `loop()` over and over.
- The `for` loop became an `if` inside `loop()`, because `loop()` is already the repeating part. The counter `count` lives outside the functions so that it keeps its value between rounds.
- When the count passes 5, the Arduino does not stop. `loop()` keeps running, it just no longer prints. A robot's program never "finishes".
- `delay(1000)` pauses for one second so the numbers appear slowly enough to read.

Ready to try it? Read the [Arduino Programming](../Introduction%20to%20a%20Microcontroller/Arduino%20Programming/index.md) pages, especially [Structure](../Introduction%20to%20a%20Microcontroller/Arduino%20Programming/Structure.md), and see [Serial Communication](../Introduction%20to%20a%20Microcontroller/Arduino%20Interfacing/Serial%20communication.md) for how to open the Serial Monitor.
