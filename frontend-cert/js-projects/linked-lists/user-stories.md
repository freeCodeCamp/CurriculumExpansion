1. You should create a class named `LinkedList` to represent a linked list data structure.

1. Each time a new `LinkedList` object is instantiated its `length` and `head` properties should be set to `0` and `null`, respectively.

1. The `LinkedList` class should have a property `Node`, which is a class instantiated with an `element` property set to the value passed at the instantiation, and a `next` property set to `null`.

1. The `LinkedList` class should have a method `isEmpty` that returns `true` if the linked list is empty, and `false` otherwise.

1. The `LinkedList` class should have a method `add` that adds a `Node` object to the linked list.

1. The `add` method should either set the head to the new node when the node to be added is the first, or set the `next` property of the last node in the linked list to the node to be added.

1. Each time a new node is added to the list the length of the list should be incremented.

1. The `LinkedList` class should have a method `remove` that removes a node from the list.

1. Whenever a node is removed from the linked list, the `next` property of the previous node should be set to the following node, and the length of the list should be decremented.