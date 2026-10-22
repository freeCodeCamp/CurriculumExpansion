In this lab, you will build a doubly linked list, where each node keeps a reference to both the next and the previous node in the list.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should have a class named `DoublyLinkedList`.
1. `DoublyLinkedList` should have a nested class named `Node`, whose `__init__` method should:
   -  take an `element` parameter and an optional `previous` parameter that defaults to `None`.
   -  set the `element` attribute to the value of the `element` parameter.
   -  set the `previous` attribute to the value of the `previous` parameter.
   -  set the `next` attribute to `None`.
1. The `__init__` method of `DoublyLinkedList` should set the `length` attribute to `0`, and the `head` and `tail` attributes to `None`.
1. `DoublyLinkedList` should have an `is_empty` method that returns `True` if the list has no nodes, and `False` otherwise.
1. `DoublyLinkedList` should have an `add` method that takes an `element` and:
   -  creates a new `Node` holding that `element` and adds it to the end of the list.
   -  sets the `previous` attribute of the new node to the node that was the tail before the addition, or `None` if the list was empty.
   -  updates the `head` (when the list was empty), the `tail`, and the `length` of the list.
   -  does not loop through the list to find its end.
1. `DoublyLinkedList` should have a `remove` method that takes an `element` and:
   -  removes every node whose `element` is equal to the given `element`.
   -  keeps the `next` and `previous` references of the remaining nodes correctly linked.
   -  updates the `head`, the `tail`, and the `length` of the list when needed.
   -  leaves the list unchanged if no node matches, or if the list is empty.
1. `DoublyLinkedList` should have a `reverse` method that reverses the order of the nodes in place.
1. `DoublyLinkedList` should have a `to_list` method that returns a list of the elements in the linked list, from the `head` to the `tail`.
