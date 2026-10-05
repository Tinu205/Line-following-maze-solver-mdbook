## Sensor Integration

On the last page we saw that ADC takes a continuous voltage and turns it into a number your Arduino can actually work with, through sampling, quantization and encoding. `analogRead()` is that entire process running automatically every time you call it — it looks at whatever voltage a pin is sitting at (0V to 5V), and hands you back a quantized number between 0 and 1023. That range isn't arbitrary: the Arduino's built-in ADC is 10-bit, and 2¹⁰ = 1024 possible levels, numbered 0 to 1023.

Let's put that straight to use with a real analog sensor: a **thermistor**, a resistor whose resistance changes with temperature. As the temperature around it changes, so does the voltage it produces, and `analogRead()` turns that voltage into the familiar 0–1023 number, exactly like it would for any other analog sensor.

Use the image below for reference — the thermistor's signal pin connects to A7.

<div style="text-align:center;">
    <img src="../../../Assets/Images/sensor interfacing.png" width="250">
</div>

> Note: A6 and A7 exist on the Arduino **Nano** but not on the Uno, which only goes up to A5. They are analog-input only, which is perfect for a sensor. If you ever use an Uno, pick A0 to A5 instead.

We won't worry about converting to degrees yet. First, let's just *look* at what the sensor tells us. The code below prints the raw number, and also converts it to a voltage using `value * 5.0 / 1023.0` (the pin reads 0V as 0 and 5V as 1023).

```cpp
void setup() {
  Serial.begin(9600);
}

void loop() {
  int sensorValue = analogRead(A7);
  float voltage = sensorValue * 5.0 / 1023.0;

  Serial.print("Raw: ");
  Serial.print(sensorValue);
  Serial.print("  Voltage: ");
  Serial.println(voltage);

  delay(100);   // wait a little so the Serial Monitor is easy to read
}
```

The `delay(100)` stops the Arduino from flooding the Serial Monitor with thousands of lines every second. Remember to set the Serial Monitor to 9600 baud, to match `Serial.begin(9600)`.

> 💡 **Try it.** Run the code, then change the temperature of the thermistor in Velxio (or the light, if you use an LDR). Watch the raw number and the voltage change. Does the number go up or down when it gets hotter?

The same code works for any analog sensor, such as a potentiometer or an LDR. The raw number is often all your robot needs: later, you will compare a sensor reading to a limit to decide what to do.

## Wrap-up

* `analogRead()` returns a number from 0 to 1023 for a voltage between 0V and 5V.
* Multiply by `5.0 / 1023.0` to get the voltage.
* Print values to the Serial Monitor to see how a sensor behaves before you use it.

## Quick reference

| Concept | Syntax | One-line reminder |
| --- | --- | --- |
| Read an analog pin | `analogRead(A7);` | returns a number from 0–1023 |
| Convert to volts | `value * 5.0 / 1023.0` | 0 gives 0V, 1023 gives 5V |

**Next up:** [Introduction to Robotics](../../Introduction%20to%20robotics/index.md)
