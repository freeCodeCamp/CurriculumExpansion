class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    Node = class {
        constructor(element) {
            this.element = element;
            this.next = null;
        }
    }

    isEmpty() {
        return this.length === 0;
    }

    add(element) {
        const node = new this.Node(element)
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        this.length++;
    }

    remove(element) {
        if (this.isEmpty()) {
            return
        }
        let previousNode;
        let currentNode = this.head;
        while (currentNode.next !== null && currentNode.element !== element) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        if (currentNode.next === null && currentNode.element !== element) {
            return;
        } else if (previousNode) {
            previousNode.next = currentNode.next
        } else {
            this.head = currentNode.next;
        }
        this.length--
    }
}