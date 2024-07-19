class Stack {
    constructor() {
        this.collection = [];
    }

    push = function (item) {
        this.collection.push(item);
    }

    pop = function () {
        return this.collection.pop();
    }

    peek = function () {
        return this.collection[this.collection.length - 1];
    }

    isEmpty = function () {
        return this.collection.length === 0;
    }

    clear = function () {
        this.collection.length = 0;
    }
}
