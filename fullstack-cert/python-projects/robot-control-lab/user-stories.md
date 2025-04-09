1. Define an abstract base class `Robot`:
    - Inherit from Python’s `ABC` (Abstract Base Class).
    - Each abstract method should have `@abstractmethod`.

2. Inside the `Robot` class, define three abstract methods:
    - `move_forward(self)`: represents basic forward movement.
    - `turn(self, direction)`: represents turning in a specified direction.
    - `perform_task(self)`: represents the robot's unique behavior.

3. Create a concrete class `CleaningRobot` that inherits from `Robot`:
    - Implement `move_forward()` to print movement behavior.
    - Implement `turn(direction)` to print the turn direction.
    - Implement `perform_task()` to print "vacuuming the floor."

4. Create a concrete class `DeliveryRobot` that inherits from `Robot`:
    - Implement `move_forward()` to print movement behavior.
    - Implement `turn(direction)` to print turning behavior.
    - Implement `perform_task()` to print "delivers a package."

5. Create a concrete class `SurveillanceRobot` that inherits from `Robot`:
    - Implement `move_forward()` to simulate silent movement.
    - Implement `turn(direction)` to rotate the camera.
    - Implement `perform_task()` to scan for intruders.

6. Define a function `operate_robot(robot)` that accepts a `Robot`:
    - Call `robot.move_forward()`.
    - Call `robot.turn("left")`.
    - Call `robot.perform_task()`.