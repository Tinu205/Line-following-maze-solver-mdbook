# Getting Around Velxio

Before we start wiring anything up, let's get comfortable with the tool we'll be using: [Velxio](https://velxio.dev/editor). It's a free, browser-based simulator, no software to install and no account needed, that lets you write code and build a circuit for it side by side. Since there's no real Arduino involved, there's nothing to accidentally fry while you're learning.

## What you'll see

Open [velxio.dev/editor](https://velxio.dev/editor) and you'll land on two main areas:

- **A code editor** : this is where you write the same C++ code you've already been practicing, just now talking to pins instead of just `cout`.
- **A circuit canvas** : this is your virtual breadboard, where you add components and wire them together, then run your code against them.

>**Watch this first:** we've recorded a short walkthrough of the Velxio interface, how to add parts, wire them up, and run a simulation. Watch it here before your first circuit: [Velxio walkthrough video](https://youtu.be/qtPL0q0q8V4).

## A couple of habits worth building early

- **Read the error messages.** If your code doesn't compile, Velxio will show you an error much like any other C++ compiler, pointing at the line to fix.
- **Double check your wiring against the reference image** on each page before hitting run, most "nothing happens" bugs turn out to be a wire on the wrong pin.

That's all you need to get started. From here on, whenever a page says "try this in Velxio," this is the workflow: open the editor, add the parts mentioned, wire them up, paste in the code, and run it.
