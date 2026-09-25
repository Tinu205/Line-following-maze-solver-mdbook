## Motion control -Differential Drive

In simple words, when a robot has two wheels controlled by two separate motors that are capable of being separately driven, then the robot is said to be a differential-wheeled robot.

The robot has two motors, namely the left-wheel motor and the right-wheel motor,which can be independently controlled by the controller code. By varying the rate of rotation, or simply the speed of the wheels, we can vary the trajectory or the path travelled by the robot.

Here are the various trajectories that a robot can follow.

<div style="text-align:center;">
    <img src="../../Assets/Images/Motion control trajectories.jpg" width="250">
</div>

## Direction Control of the DC motor:
Direction control of a DC motor refers to the ability to make the motor rotate in either a clockwise (CW) or anticlockwise (ACW or counterclockwise) direction.DC motors are widely used in various applications, and their direction can be controlled by manipulating the polarity of the voltage applied to the motor terminals.

<div style="text-align:center;">
    <img src="../../Assets/Images/Motor driver direction.jpg" width="250">
</div>
**Clockwise (CW) Direction:**

- To make the DC motor rotate in a clockwise direction, a positive voltage is applied to the motor's armature (the rotating part) terminal, while the negative terminal is connected to the motor's field winding (the stationary part).
**Anticlockwise (ACW or Counterclockwise) Direction:**

- Conversely, to make the DC motor rotate in an anticlockwise direction, the polarity is reversed. The negative voltage is applied to the armature terminal, and the positive voltage is connected to the field winding.


The direction control is typically achieved using an H-bridge circuit or a similar configuration that allows the reversal of the voltage polarity. In some applications, a simple switch or a relay may be used to change the direction by switching the connections.

## MOTOR DRIVER
- A motor driver is an electronic device or circuit that controls the movement or rotation of an electric motor.
- It acts as an interface between a microcontroller or other control circuit and the motor, facilitating the precise control of the motor's speed, direction, and other parameters.
- Motor drivers are commonly used in various applications, including robotics, automation, electric vehicles, and other systems where motors play a vital role.

## L293D MOTOR DRIVER

<div style="text-align:center;">
    <img src="../../Assets/Images/L293D motor driver.jpg" width="250">
</div>

- Need for Motor Driver The 20mA current limit of microcontroller port pins is insufficient for driving motors, especially DC motors that may require up to 500mA for maximum speed.
- To overcome this limitation, a motor driver like the L293D is needed.
- The L293D provides higher current and voltage levels, serving as an interface between the microcontroller and the motor, ensuring safe and efficient motor operation.
- The L293D motor driver is capable of handling higher currents and voltages, making it suitable for driving motors with higher power requirements.
- It typically contains multiple H-bridges, allowing for control of the motor's direction and speed.

## Take a look at the following table to find the input for various trajectories


<div style="text-align:center;">
    <img src="../../Assets/Images/servo motor tabulation.png" width="250">
</div>