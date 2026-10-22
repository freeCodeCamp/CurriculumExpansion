class DoublyLinkedList:
    class Node:
        def __init__(self, element, previous=None):
            self.element = element
            self.previous = previous
            self.next = None

    def __init__(self):
        self.length = 0
        self.head = None
        self.tail = None

    def is_empty(self):
        return self.length == 0

    def add(self, element):
        node = self.Node(element, self.tail)
        if self.is_empty():
            self.head = node
        else:
            self.tail.next = node
        self.tail = node
        self.length += 1

    def remove(self, element):
        current_node = self.head
        while current_node is not None:
            next_node = current_node.next
            if current_node.element == element:
                if current_node.previous is not None:
                    current_node.previous.next = current_node.next
                else:
                    self.head = current_node.next
                if current_node.next is not None:
                    current_node.next.previous = current_node.previous
                else:
                    self.tail = current_node.previous
                self.length -= 1
            current_node = next_node

    def reverse(self):
        current_node = self.head
        while current_node is not None:
            current_node.previous, current_node.next = current_node.next, current_node.previous
            current_node = current_node.previous
        self.head, self.tail = self.tail, self.head

    def to_list(self):
        elements = []
        current_node = self.head
        while current_node is not None:
            elements.append(current_node.element)
            current_node = current_node.next
        return elements


my_list = DoublyLinkedList()
print(my_list.is_empty())  # True

my_list.add(1)
my_list.add(2)
my_list.add(3)
my_list.add(2)
print(my_list.to_list())  # [1, 2, 3, 2]
print(my_list.length)  # 4

my_list.remove(2)
print(my_list.to_list())  # [1, 3]
print(my_list.tail.element)  # 3

my_list.reverse()
print(my_list.to_list())  # [3, 1]
print(my_list.head.previous)  # None
print(my_list.tail.next)  # None
