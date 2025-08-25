from abc import ABC, abstractmethod

class Robot(ABC):
    @abstractmethod
    def move_forward(self):
        pass

    @abstractmethod
    def turn(self, direction):
        pass

    @abstractmethod
    def perform_task(self):
        pass

class CleaningRobot(Robot):
    def move_forward(self):
        print("CleaningRobot moves forward 1 meter.")

    def turn(self, direction):
        print(f"CleaningRobot turns {direction}.")

    def perform_task(self):
        print("CleaningRobot vacuums the floor.")

class DeliveryRobot(Robot):
    def move_forward(self):
        print("DeliveryRobot rolls forward to the destination.")

    def turn(self, direction):
        print(f"DeliveryRobot turns {direction} to follow the path.")

    def perform_task(self):
        print("DeliveryRobot delivers a package.")

class SurveillanceRobot(Robot):
    def move_forward(self):
        print("SurveillanceRobot hovers forward silently.")

    def turn(self, direction):
        print(f"SurveillanceRobot rotates camera {direction}.")

    def perform_task(self):
        print("SurveillanceRobot scans the area.")

def operate_robot(robot: Robot):
    robot.move_forward()
    robot.turn("left")
    robot.perform_task()

# Example usage
operate_robot(CleaningRobot())
print()
operate_robot(DeliveryRobot())
print()
operate_robot(SurveillanceRobot())
