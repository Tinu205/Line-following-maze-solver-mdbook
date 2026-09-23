# Arrays

One variable holds one value. An array is a row of numbered lockers, all holding the same type, sharing one name. For example we can use array to store the continous temperature readings .

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

> 💡 **Try it yourself** — try it in the [Programiz online compiler](https://www.programiz.com/cpp-programming/online-compiler/), then deliberately read `marks[5]` on a 5-item array and see what junk value comes back.

## Quick reference

| Concept | Syntax | One-line reminder |
| --- | --- | --- |
| Array | `int a[5];` | first is `a[0]`, last is `a[4]` |

**Next up:** [Putting it Together](PuttingItTogether.md)