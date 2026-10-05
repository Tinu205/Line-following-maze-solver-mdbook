## Capacitors

Ever wondered how electronic devices store a little bit of electric charge and release it when needed? Let's meet the capacitor!

A capacitor is a passive two terminal component that stores electric charge, a bit like a tiny rechargeable battery. It fills up quickly and also empties quickly.

**Water bucket analogy:** Imagine a small bucket under a tap. When the tap runs, the bucket fills up. If the tap stops, the bucket keeps supplying water for a short while. A capacitor works the same way with electric charge. If the supply wobbles, the capacitor fills the gaps and evens things out.

Let us watch a video to understand what a capacitor is and what it does in a circuit.

<div style="text-align:center;">
    <iframe width="560" height="315"
        src="https://www.youtube.com/embed/E7_MBEhX8Ao"
        title="YouTube video"
        frameborder="0"
        allowfullscreen>
    </iframe>
</div>

## How Much Can It Store?

The amount of charge stored is given by

`Q = C × V`

- Q: electric charge stored (in coulombs, C)
- C: capacitance of the capacitor (in farads, F)
- V: voltage across the capacitor (in volts, V)

A bigger capacitor (larger C) is like a bigger bucket: it holds more charge at the same voltage.

**Units:** One farad is huge, so real capacitors are measured in smaller units. The most common is the **microfarad (uF)**, which is one millionth of a farad. Smaller ones are in nanofarads (nF) and picofarads (pF).

## Two Types You Will Meet

- **Ceramic capacitors:** Small, cheap and have no polarity, so they can go in either way round. They usually hold small values (pF to a fraction of a uF).
- **Electrolytic capacitors:** Larger, hold much more charge (1 uF and up), but they are **polarized**. This means they have a positive and a negative leg. The negative leg is marked with a stripe on the body, and the positive leg is usually longer.

> **Warning:** Always connect an electrolytic capacitor the right way round. If it is connected backwards, or to a voltage higher than its rating (printed on it), it can get hot and burst. Be careful.

## How a Capacitor Helps a Robot

When the motors of a robot start and stop, they cause sudden jumps and dips in the power supply. This is called electrical *noise*, and it can confuse the Arduino or the sensors. A capacitor placed across the power lines soaks up the spikes and fills the dips, which gives the circuit a smoother, steadier supply.
