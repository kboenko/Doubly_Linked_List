const Node = require('./Node');

class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
    }

    addInTail(node) {

        if (this.head === null) {
            this.head = node;
            node.prev = null;
            node.next = null;
        } else {
            this.tail.next = node;
            node.prev = this.tail
        }

        this.tail = node;

    }

    addInHead(newNode) {
        let node = this.head;

        if (node.prev === null) {
            newNode.next = node;
            this.head = newNode;
        }
    }

    deleteByValue(value) {
        let node = this.head;

        while (node !== null) {

            if (node.value === value) {
                node.prev.next = node.next;
                break;
            }

            node = node.next;
        }
    }

    insertAfter(newNode, existedValue) {
         if (this.getValues().indexOf(existedValue) === -1) {
             console.log(`Введённое значение ${existedValue} отсутствует в списке!`);
         } else {
             let node = this.head;

             while (node !== null) {
                 if (node.value === existedValue) {
                        newNode.prev = node;
                        newNode.next = node.next;
                        node.next = newNode;
                  }
                 node = node.next;
             }
        }
    }

    getValues() {
        let node = this.head;
        let values = [];

        while (node !== null) {
            values.push(node.value);
            node = node.next;
        }

        return values;
    }

}

module.exports = LinkedList;