## Arduino UNO R3

<div style="text-align:center;">
    <img src="../../../Assets/Images/Arduino uno R3.jpg" width="250">
</div>

- The Arduino Uno is a highly popular microcontroller board, renowned for its versatility and ease of use.

- Key features include its integration of the ATmega328P microcontroller chip, which provides a reliable foundation for various electronic projects.

- With a total of 32 pins, including 23 GPIO pins (20 available for user applications), the Uno offers extensive connectivity for both digital and analog input/output.

- This makes it adaptable to a broad range of applications, from simple LED blinking to more complex sensor interfacing.

- As an 8-bit microcontroller, the Uno processes data in 8-bit chunks, making it well-suited for a wide array of tasks.

- Its straightforward design and extensive documentation make it particularly accessible for beginners in the world of electronics and programming.

- The USB connectivity simplifies both programming and power supply, eliminating the need for external power sources.

## PIN DESCRIPTION OF ARDUINO UNO R3
<div style="text-align:center;">
    <img src="../../../Assets/Images/Anatomy of Arduino.jpg" width="250">
</div>

- **Microcontroller:** The brain of the board. It is responsible for executing your program and controlling input and output devices. [ATmega328P]

- **Digital Pins:** Configured as either high or low, allowing you to interface with digital sensors, LEDs, and other devices - [D0 to D13 - 14 digital pins]

- **Analog Pins:** Read analog voltage signals from analog devices and sensors like temperature sensor, mic etc. - [A0 to A5 - 6 analog pins]

- **Power Supply Pins:** Arduino boards have power supply pins for connecting power sources - Vin, 5v , 3.3v, GND

- **USB Connector:** to connect to a computer to flash the program or for the Serial Communication.

- **PWM Pins:** 6 Digital Pins - marked by ~ sign - Producing analog-like output by varying the width of the pulse. PWM is often used for tasks such as controlling the brightness of LEDs or the speed of motors.

- **USB Interface Chip:** Manages communication between the microcontroller and computer.

- **Reset Button:** This button restarts your programme running on the microcontroller. 

- **Crystal Oscillator:** Clock Signal - usually 16MHz [provides precise timing]

- **Voltage Regulator:** Maintains stable power for the microcontroller and other components.

- **TX/RX LEDs:** Indicate data transmission over the serial communication interface.

## PIN CONFIGURATION OF ARDUINO UNO R3
<div style="text-align:center;">
    <img src="../../../Assets/Images/Arduino pin out diagram.jpg" width="250">
</div>

- **Power Pins:** Provide voltage and ground for external components. Vin accepts external power (7-12V), 5V and 3.3V supply regulated power, and GND is the ground reference.

- **Reset:** Resets the microcontroller. It is useful for restarting code execution or troubleshooting erratic behaviour in Arduino projects.

- **Digital Pins:** Handles digital signals (0 or 1). Used for both input and output, enabling communication with digital devices like sensors, LEDs, and switches.

- **Analog Pins:** Reads analog voltage levels (0-5V). Ideal for interfacing with analog sensors, providing a continuous range of values for precise measurements in Arduino projects.

- **PWM (Pulse Width Modulation) Pins:** Generates analog-like signals using digital pins. Useful for controlling devices like LEDs and motors, allowing variable output intensity or speed.

- **UART (Serial) Pins:** Enables serial communication. TX (transmit) sends data, and RX (receive) receives data. Crucial for communication between the Arduino and other devices.

- **I2C (TWI - Two-Wire Interface):** Allows communication between multiple devices using only two wires (SDA and SCL). Ideal for connecting sensors, displays, and other peripherals in a network.

- **SPI (Serial Peripheral Interface):** Facilitates high-speed serial communication between the Arduino and peripherals (e.g., sensors, displays, and SD cards). Uses four pins: MISO, MOSI, SCK, and SS for device selection.

Here's a structured representation of the overall 32 pins and their functionality on the Arduino Uno R3

<div style="text-align:center;">
    <img src="../../../Assets/Images/Arduino UNO pin out.jpg" width="250">
</div>