## Ohm's Law

Ohm's Law is a fundamental principle in electronics that helps us understand the relationship between voltage, current, and resistance in an electric circuit. It's named after the German physicist Georg Simon Ohm, who formulated it.

<div style="text-align:center;">
    <img src="../../../Assets/Images/Ohms-Law-Cartoon .jpg" alt="Ohm's law cartoon" width="450">
</div>

**What is resistance?** Resistance is how much a material opposes (holds back) the flow of current. Think of water in a pipe: a wide pipe lets lots of water through (low resistance), while a narrow pipe lets only a little through (high resistance).

**The mathematical equation of Ohm's Law**

`V = I × R`

We can rearrange it to find the current:

`I = V / R`

Where:
- **V** represents voltage (measured in volts,V).
- **I** represents current (measured in amperes or amps, A).
- **R** represents resistance (measured in ohms, Ω).

Ohm's Law tells us that in a circuit at a constant temperature, the current flowing through a conductor is directly proportional to the voltage across it and inversely proportional to the resistance of the conductor.
This means:
- If you increase the voltage (the "push"), the current will also increase, assuming the resistance remains constant.

- If you increase the resistance (like by narrowing the pipe), the current will decrease at the same voltage.

- If you have a higher resistance, you need a higher voltage to achieve the same current.

**Worked example:** A 5 V supply is connected across a 220 ohm resistor.

`I = V / R = 5 / 220 = 0.0227 A`, which is about **23 mA** (milliamps).

This is the kind of calculation you do to make sure an LED gets a safe amount of current.
<!-- 
**Direct Proportionality:**

When we say that current is directly proportional to voltage, it means that if you double the voltage across a resistor while keeping the resistance constant, the current flowing through it will also double.
Similarly, if you cut the voltage by half, the current will decrease by half.

**Inverse Proportionality:**

When we say that current is inversely proportional to resistance, it means that if you increase the resistance while keeping the voltage constant, the current will decrease. If you decrease the resistance, the current will increase. -->


## Power

Power (P) in an electric circuit represents the rate at which energy is transferred or used.

>The unit of power is the watt (W).

In the context of Ohm's Law, the power can be calculated using the following equation:

`P = V × I`

Where:

P is *power* (measured in watts, W)

V is *voltage* (measured in volts, V)

I is *current* (measured in amperes or amps, A)

Power is the amount of energy used or transferred per unit of time. In an electric circuit, it's the energy delivered or consumed by the flow of electric current.
According to Ohm's Law, we know that V = I × R, so substituting this into the power equation gives us:

`P = I × (I × R)`

Simplifying further:

`P = I²R`

**Explanation of the equation**

This equation shows that power grows with the square of the current and also with the resistance. It also shows that for the same current, a larger resistance turns more power into heat, and that doubling the current makes four times the power.
This is why high-current devices like heaters use a lot of power, and why thin, high-resistance wires carrying a big current get warm.