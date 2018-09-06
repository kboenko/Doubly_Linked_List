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
            node.prev = newNode;
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

    deleteByValue2(value) {
        let targetNode = this.find(value);
        let before;
        let target;

        if (targetNode) {
            before = targetNode.before;
            target = targetNode.target;

            target.next.prev = target.prev;
            target = target.next;
            target.prev.next = target.next;

            while (target !== null) {
                before.addInTail(new Node(target.value));
                target = target.next;
            }

            this.head = before.head;
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

    find(value) {
        let node = this.head;
        let before = new LinkedList();
        let target;

        while (node !== null) {
            if (node.value === value) {
                target = node;
                break;
            } else {
                before.addInTail(new Node(node.value));
            }
            node = node.next;
        }

        return {
            before: before,
            target: target
        }
    }

}

module.exports = LinkedList;