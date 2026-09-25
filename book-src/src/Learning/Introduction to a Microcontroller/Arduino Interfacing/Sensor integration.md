## Sensor Integration

On the last page we saw that ADC takes a continuous voltage and turns it into a number your Arduino can actually work with, through sampling, quantization and encoding. `analogRead()` is that entire process running automatically every time you call it — it looks at whatever voltage a pin is sitting at (0V to 5V), and hands you back a quantized number between 0 and 1023. That range isn't arbitrary: the Arduino's built-in ADC is 10-bit, and 2¹⁰ = 1024 possible levels, numbered 0 to 1023.

Let's put that straight to use with a real analog sensor: a **thermistor**, a resistor whose resistance changes with temperature. As the temperature around it changes, so does the voltage it produces, and `analogRead()` converts that voltage into the familiar 0–1023 number, exactly like it would for any other analog sensor.

Use the image below for reference — the thermistor's signal pin connects to A7.

<div style="text-align:center;">
    <img src="../../../Assets/Images/sensor interfacing.png" width="250">
</div>

That raw 0–1023 number on its own isn't a temperature yet, it's just a quantized voltage reading. To turn it into an actual Celsius value, we run it through a bit of physics-based math called the **Beta equation**, which describes how this specific type of thermistor's resistance relates to temperature.

```cpp
void setup() {
  pinMode(A7, INPUT);
  Serial.begin(9600);
}

void loop() {
  const float BETA = 3950;
  int analogValue = analogRead(A7);
  float celsius = 1 / (log(1 / (1023. / analogValue - 1)) / BETA + 1.0 / 298.15) - 273.15;
  Serial.println(celsius);
}
```

## Quick reference

| Concept | Syntax | One-line reminder |
| --- | --- | --- |
| Read an analog pin | `analogRead(A7);` | returns a quantized number from 0–1023 |
| Turning that into meaning | Beta equation | converts the raw ADC number into Celsius |