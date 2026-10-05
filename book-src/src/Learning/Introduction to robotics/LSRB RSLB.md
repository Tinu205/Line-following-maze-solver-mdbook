## When the Line Splits

So far, your bot's only job has been to stay on the line, and PID handles that beautifully. But a maze isn't one long line. Every so often, the line splits, turns, or simply ends, and your bot has to make a decision: *which way now?*

*Question:* Imagine you're walking through a maze and reach a spot where you can go left, straight, or right. How would you decide which way to go? And more importantly, how would you make sure you don't end up walking in circles forever?

## Junctions: What the Bot Actually Sees

Your IR sensor array can recognize a handful of different situations under the bot:

- **Straight line** — only the middle sensors see the line. Keep going, PID has this covered.
- **Left turn** — the line bends off to the left, and the left-side sensors light up.
- **Right turn** — same idea, on the right side.
- **T-junction** — the line branches both left and right at once.
- **Cross junction** — the line continues straight *and* branches left and right.
- **Dead end** — no sensors see the line at all. There's nowhere to go but back.

Recognizing *that* you're at a junction is only half the problem. The other half is deciding which path to take, and doing it the same way every single time.

## Priority Rules: LSRB and RSLB

<div style="text-align:center;">
    <img src="../../Assets/Images/maze.png" width="250">
</div>

The trick is to pick a fixed order of preference and always stick to it. The two most common orders are:

**LSRB — Left, Straight, Right, Back.** At every junction, check each direction in this exact order, and take the first one that's open:

1. Can I turn **Left**? If yes, turn left.
2. If not, can I go **Straight**? If yes, go straight.
3. If not, can I turn **Right**? If yes, turn right.
4. If none of those are open, it's a dead end, so turn around and go **Back**.

**RSLB — Right, Straight, Left, Back.** The exact same idea, mirrored: check Right first, then Straight, then Left, and only turn Back if nothing else is open.

*Question:* Why does it matter so much that the bot uses the same order every single time, instead of picking a direction at random?

Because a fixed order is what makes the bot's behaviour predictable. LSRB is really the "keep your left hand on the wall" trick people use in real mazes: if you always keep one hand on the same wall and never let go, you follow the wall all the way along. RSLB is the same trick, just with your right hand. Pick randomly, and your bot could wander the same loop forever.

### What does LSRB actually guarantee?

Here is the honest answer, because it depends on the kind of maze.

A **simple maze** is one with no loops and no islands: every wall (or line) is connected, one way or another, to the outer boundary. Think of a maze drawn as a tree with branches, where there is only one way to get from the start to any other place.

- **In a simple maze**, LSRB (or RSLB) will always reach the end, as long as the end is reachable. It may take a long, wandering route, so it is **not** guaranteed to be the shortest.
- **In a maze with loops**, the left-hand rule can fail. If the exit is on a wall that is *not* connected to the outer boundary (an island), your hand just goes round and round the island forever. The bot would circle for ever.

So for our maze, we assume it is a simple maze. Then "never guess, always follow the order" is enough to solve it.

## Walking Through an Example

Let's trace a real run through a maze, one decision at a time. Remember: Left, Straight and Right are always relative to the direction the bot is currently facing, not fixed compass directions.

<div style="text-align:center;">
    <img src="../../Assets/Images/lsrb_1.png" width="250">
</div>

**Decision 1.** The bot arrives at this junction heading west. Checking in LSRB order: is Left open? Yes, a path heads south from here, so it turns and heads down.

<div style="text-align:center;">
    <img src="../../Assets/Images/lsrb_2.png" width="250">
</div>

**Decision 2.** That path is a dead end, Left, Straight and Right are all blocked. The only option left is Back, so the bot does a U-turn and heads north again.

<div style="text-align:center;">
    <img src="../../Assets/Images/lsrb_3.png" width="250">
</div>

**Decision 3.** Back at the same junction, now heading north. Left (which is west from here) is open, so it turns and heads west.

<div style="text-align:center;">
    <img src="../../Assets/Images/lsrb_4.png" width="250">
</div>

**Decision 4.** At the next junction, still checking Left first: heading west, Left is south, and it's open. Down it goes again.

<div style="text-align:center;">
    <img src="../../Assets/Images/lsrb_5.png" width="250">
</div>

**Decision 5.** Another dead end. Just like before, Left, Straight and Right are all blocked, so it's Back again, turning to head north.

<div style="text-align:center;">
    <img src="../../Assets/Images/lsrb_6.png" width="250">
</div>

**Decision 6.** Back at that junction, heading north, and this time Straight is open. The bot carries straight on, no turn needed.

Six decisions, and notice the pattern: the bot never once guessed. At every junction it just worked through Left, then Straight, then Right, then Back, in that exact order, and whichever one was open first won.

## Turning Without Losing the Line

There's one last catch. When your bot makes a sharp turn at a junction, its sensors briefly lose sight of the line altogether, partway through the turn, nothing is underneath them. If the bot panics and treats that moment as a dead end, it'll spin around and head back the way it came.

The usual fix is to commit to the turn: once the bot decides to turn left (or right), keep turning until the middle sensors find the line again, and only *then* hand control back to the PID controller. PID handles the fine-grained "stay centered" job; LSRB/RSLB handles the bigger "which way at this junction" decision, each doing the job it's actually good at.

| Rule | Priority order | Real-world version |
| --- | --- | --- |
| LSRB | Left → Straight → Right → Back | keep your left hand on the wall |
| RSLB | Right → Straight → Left → Back | keep your right hand on the wall |

## Trace It Yourself

Here is a tiny maze. The bot starts at **S** heading **north** (up the page). **A** and **B** are dead ends, **E** is the end square.

```
        E ---- J1 ---- B
                |
        C ---- J2 ---- D
                |
                S
```

J2 is a cross (left, straight and right are all open). J1 is a T: you can go left (toward E) or right (toward B), but not straight.

*Question:* Using LSRB, write down the decision the bot makes each time it reaches a junction or a dead end. Remember Left and Right depend on the way the bot is facing.

<details>
<summary>Show the answer</summary>

1. At **J2**, heading north: Left is open, so turn **L** and go to C.
2. At **C**, a dead end: **B** (U-turn) and head back east.
3. At **J2** again, now heading east: Left is north, and it is open, so turn **L** and go to J1.
4. At **J1**, heading north: Left is west, and it is open, so turn **L**. That leads to **E**, the end!

The bot never visited D or B. Its recorded path is **L, B, L, L**.

</details>

## Next Level: Recording and Shortening the Path (Optional)

Look at the answer above. The bot wasted time going into the dead end at C. If the bot **records** every decision (L, S, R, B) as it goes, it can clean up the list afterwards and run the maze a second time much faster, skipping every dead end.

The idea: any time a **B** (U-turn) shows up, the three moves around it, like `L B L`, are really a detour that ends up pointing the same way as some simpler single move. Replace the three with that single move:

| Recorded | Replace with | Why |
| --- | --- | --- |
| L B R | B | a detour that ends up facing back |
| L B S | R | |
| R B L | B | |
| S B L | R | |
| S B S | B | |
| L B L | S | two left turns around a dead end just point straight |

(A neat trick for checking: count L as -90 degrees, S as 0, R as +90 and B as 180, add them up, and the total tells you the single move. For L B L: -90 + 180 - 90 = 0, which is S.)

Applying this to our run: **L B L L** becomes **S L**. On the second run the bot goes straight at J2 and turns left at J1, with no dead-end detour. If the list still has a B in it after one pass, keep simplifying until none are left.

This is an optional extra: first make sure your bot can solve the maze once.

**Further reading:**
- [Pololu's line maze algorithm guide](https://www.pololu.com/file/0j195/line-maze-algorithm.pdf)
- [Coding a line follower robot using LSRB and finding the shortest path](https://towardinfinity.medium.com/coding-a-line-follower-robot-using-lsrb-and-finding-the-shortest-path-d906ffec71d)

**Next up:** [Putting It Together](Putting%20It%20Together.md) — the full pseudocode combining PID and LSRB/RSLB into one algorithm.
