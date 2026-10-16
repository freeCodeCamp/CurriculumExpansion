class CircularQueue:
    def __init__(self, size, overwrite=False):
        if not isinstance(size, int) or size < 1:
            raise ValueError('Size must be a positive integer.')
        self.size = size
        self.overwrite = overwrite
        self.queue = [None] * size
        self.read = 0
        self.write = 0
        self.length = 0

    def __len__(self):
        return self.length

    def __str__(self):
        slots = ['_' if item is None else str(item) for item in self.queue]
        return f"[{', '.join(slots)}]"

    def is_empty(self):
        return self.length == 0

    def is_full(self):
        return self.length == self.size

    def enqueue(self, item):
        if self.is_full():
            if not self.overwrite:
                return None
            # The oldest item is about to be overwritten,
            # so the read pointer moves on to the next oldest one.
            self.read = (self.read + 1) % self.size
        else:
            self.length += 1
        self.queue[self.write] = item
        self.write = (self.write + 1) % self.size
        return item

    def dequeue(self):
        if self.is_empty():
            return None
        item = self.queue[self.read]
        self.queue[self.read] = None
        self.read = (self.read + 1) % self.size
        self.length -= 1
        return item

    def peek(self):
        if self.is_empty():
            return None
        return self.queue[self.read]


queue = CircularQueue(5)
for item in ['a', 'b', 'c']:
    queue.enqueue(item)
print(queue)  # [a, b, c, _, _]

for _ in range(3):
    queue.dequeue()
print(queue)  # [_, _, _, _, _]

for item in ['d', 'e', 'f']:
    queue.enqueue(item)
print(queue)  # [f, _, _, d, e]
print(queue.read, queue.write)  # 3 1
print(queue.peek())  # d
print(len(queue))  # 3

for item in ['g', 'h', 'i']:
    print(queue.enqueue(item))  # g, h, None
print(queue)  # [f, g, h, d, e]

stream = CircularQueue(3, overwrite=True)
for frame in range(1, 6):
    stream.enqueue(frame)
print(stream)  # [4, 5, 3]
print(stream.dequeue())  # 3
print(stream)  # [4, 5, _]
