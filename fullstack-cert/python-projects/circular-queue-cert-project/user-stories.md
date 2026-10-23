In this project, you will build a circular queue: a queue that stores its items in a fixed-size list and, once it reaches the end of the list, wraps around to the beginning. Circular queues use a constant amount of memory, which makes them useful for buffering data streams such as audio, video, or keyboard input.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the project.

**User Stories:**

1. You should have a class named `CircularQueue` whose `__init__` method takes a `size` parameter and an optional `overwrite` parameter that defaults to `False`.
1. If `size` is not an integer greater than `0`, the `__init__` method should raise a `ValueError` with the message `Size must be a positive integer.`.
1. A `CircularQueue` instance should have the following attributes:
   -  `size`: the value of the `size` parameter.
   -  `overwrite`: the value of the `overwrite` parameter.
   -  `queue`: a list of length `size`, where every empty slot holds `None`. Its length should never change.
   -  `read`: the index of the slot holding the oldest item, starting at `0`.
   -  `write`: the index of the slot where the next item will be written, starting at `0`.
1. The `CircularQueue` class should have the following methods:
   -  An `is_empty` method that returns `True` if the queue holds no items, and `False` otherwise.
   -  An `is_full` method that returns `True` if every slot of the queue holds an item, and `False` otherwise.
   -  An `enqueue` method that takes an item, writes it in the slot at the `write` index, moves `write` forward by one, and returns the item.
   -  A `dequeue` method that returns the item in the slot at the `read` index, sets that slot back to `None`, and moves `read` forward by one.
   -  A `peek` method that returns the item in the slot at the `read` index without removing it.
1. Both `read` and `write` should wrap around to `0` when they move past the last index of `queue`.
1. When the queue is full and `overwrite` is `False`, `enqueue` should not change the queue and should return `None`, so items that have not been read yet are never overwritten.
1. When the queue is full and `overwrite` is `True`, `enqueue` should overwrite the oldest item with the new item, move both `read` and `write` forward by one, and return the new item.
1. When the queue is empty, `dequeue` and `peek` should return `None` without changing the queue.
1. Calling `len()` on a `CircularQueue` instance should return the number of items currently in the queue.
1. When a `CircularQueue` instance is printed, it should display the slots of `queue` in index order, separated by a comma and a space and wrapped in square brackets. Each item should be converted to a string, and each empty slot should be displayed as `_`.