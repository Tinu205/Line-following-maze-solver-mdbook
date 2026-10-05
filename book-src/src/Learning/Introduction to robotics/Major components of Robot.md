## MAJOR COMPONENTS OF A ROBOT

Every robot, from a toy to a factory machine, is built from a few key parts. Here they are, along with the matching part in **our line-following maze bot**.

**1. Sensors**

<div style="text-align:center;">
    <img src="../../Assets/Images/major component -sensor.jpg" width="250">
</div>

- Sensors are the robot's senses. They collect information about the world.
- Common examples are cameras, distance sensors and infrared (IR) sensors.
- **In our bot:** the **IR sensor array**. It shines infrared light on the floor and tells us which sensors are over the black line.

**2. Actuators**

- Actuators turn the robot's decisions into physical action. Motors are the most common actuator.
- **In our bot:** two **DC motors** with wheels, driven by the **TB6612FNG motor driver**.

**3. Controller**

<div style="text-align:center;">
    <img src="../../Assets/Images/major component - control system.png" width="250">
</div>

- The controller is the robot's brain. It reads the sensors, decides what to do, and tells the actuators.
- **In our bot:** the **Arduino Nano**, running our PID and LSRB code.

**4. Power Supply**

<div style="text-align:center;">
    <img src="../../Assets/Images/major components - power supply.jpg" width="250">
</div>

- Nothing works without power. Most small robots use batteries.
- **In our bot:** a **battery** that powers the Arduino, the sensors and (through the driver) the motors.

Sensors, controller and actuators together make up the Sense-Think-Act loop from the previous page. Larger robots add other parts, like communication modules (Wi-Fi, Bluetooth) for talking to other devices, but our bot doesn't need them.
