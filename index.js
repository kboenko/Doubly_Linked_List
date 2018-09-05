const Node = require('./entities/Node');
const LinkedList = require('./entities/LinkedList');

(() => {
    let node1 = new Node(3);
    let node2 = new Node(58);

    node1.next = node2;

    let linkedList = new LinkedList();

    //linkedList.addInTail(node1);
    //linkedList.addInTail(node2);
    linkedList.addInTail(new Node(21));
    linkedList.addInTail(new Node(58));
    linkedList.addInTail(new Node(589));

    console.log(linkedList);
    console.log('----------------------------------------------------------');
    console.log(linkedList.head.value);
    console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
    console.log(linkedList.head.prev);
    console.log(')))))))))))))))))))))))))))))))))))))))))))))))))))))))))))');
    console.log(linkedList.head.next);
    console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%');
    console.log(linkedList.getValues());

    console.log('____________________________________________________________');
    let list = new LinkedList();

    for (let i = 0; i < 3; i++) {
        list.addInTail(new Node(i+45));
    }

    console.log(list.getValues());

    list.addInHead(new Node(9999));

    console.log(list.getValues());
    console.log('____________________________________________________________');

    list.deleteByValue(46);
    console.log(list);
    console.log('--------------------------------');
    console.log(list.head.next);
    console.log('--------------------------------');
    console.log(list.head.next.value);
    console.log('--------------------------------');
    console.log(list.head.next.prev);
    console.log('--------------------------------');

    console.log(list.getValues());

    list.insertAfter(new Node(38), 9999);
    console.log(list.getValues());
    list.insertAfter(new Node(38), 47);
    console.log(list.getValues());
})();