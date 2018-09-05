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

    addInHead(node) {

        let node2Insert = node;
        let listNode = Object.assign({}, this.head);

            if (listNode.prev === null) {
                listNode.prev = node2Insert;  // делаем элемент для вставки предыдущим по отношению к текущему (первому)
                this.head.value = node2Insert.value; // значение элемента для вставки делаем первым
                this.head.prev = null;
                this.head.next = listNode; // изначальный первый элемент делаем следующим по отношению к вставляемому
            }
    }

    deleteByValue(value) {
        let node = this.head;
        let prevNode = null;

        while (node !== null) {
            if (node.value !== value) {
                prevNode = node;
            } else if (node.value === value && prevNode !== null) {

                if (node.next !== null) {
                    node.next.prev = prevNode;
                    prevNode.next = node.next;
                } else {
                    prevNode.next = null;
                    this.tail = prevNode;
                    this.tail.next = null;
                }
                break;
            } else if (node.value === value && prevNode === null) {
                node === node.next;
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