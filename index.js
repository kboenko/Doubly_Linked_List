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
        list.addInTail(new Node(i+1));
    }

    console.log(list.getValues());

    list.addInHead(new Node(9999));

    console.log(list.getValues());
    console.log('____________________________________________________________');

    list.deleteByValue(2);
    console.log(list);
    console.log('--------------------------------');
    /*console.log(list.head.next);
    console.log('--------------------------------');
    console.log(list.head.next.value);
    console.log('--------------------------------');
    console.log(list.head.next.prev);
    console.log('--------------------------------');*/

    console.log(list.getValues());

    console.log(list.find(1));

    /*list.insertAfter(new Node(38), 9999);
    console.log(list.getValues());
    list.insertAfter(new Node(38), 47);
    console.log(list.getValues());*/
    /*console.log('____________________________________________________________');
    console.log('____________________________________________________________');
    console.log('____________________________________________________________');
    console.log('____________________________________________________________');
    console.log('____________________________________________________________');
    console.log('____________________________________________________________');
    console.log('____________________________________________________________');
    console.log('____________________________________________________________');
    console.log('____________________________________________________________');
    console.log('____________________________________________________________');
    console.log('____________________________________________________________');
    console.log('____________________________________________________________');

    let lst = new LinkedList()

    lst.addInTail(new Node(3));
    lst.addInTail(new Node(4));
    lst.addInTail(new Node(5));
    lst.addInTail(new Node(6));
    lst.addInTail(new Node(7));

    console.log(lst.getValues());

    lst.deleteByValue(5);

    console.log(lst.getValues());*/

    console.log('____________________________________________________________');
    console.log('____________________________________________________________');
    console.log('____________________________________________________________');
    console.log('____________________________________________________________');
    console.log('____________________________________________________________');
    console.log('____________________________________________________________');
    console.log('____________________________________________________________');
    console.log('____________________________________________________________');
    console.log('____________________________________________________________');
    console.log('____________________________________________________________');
    console.log('____________________________________________________________');
    console.log('____________________________________________________________');


    let anotherList = new LinkedList();
    anotherList.addInTail(new Node(2));
    anotherList.addInTail(new Node(21));
    anotherList.addInTail(new Node(25));
    anotherList.addInTail(new Node(27));
    anotherList.addInTail(new Node(202));

    console.log(anotherList.getValues());

    let m = anotherList.find(25);

    console.log(anotherList.find(25));

    console.log(m.before.getValues());
    console.log(m.before);

    //anotherList.deleteByValue2(25);

    console.log(anotherList.getValues());
    console.log(anotherList);
})();