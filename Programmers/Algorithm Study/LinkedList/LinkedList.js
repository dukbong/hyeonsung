class node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = new node("head");
    }

    append(data){
        let newNode = new node(data);
        let current = this.head;
        while(current.next != null){
            current = current.next;
        }
        current.next = newNode;
    }

    insert(data, location){
        let newNode = new node(data);
        let current = this.find(location);
        newNode.next = current.next;
        current.next = newNode;
    }

    find(location){
        let currNode = this.head;
        while(currNode.data != location){
            currNode = currNode.next;
        }
        return currNode;
    }
}

let a = new LinkedList();
console.log(a);
a.append(1);
console.log(a);
a.append(2);
console.log(a);
a.insert(99,1);
console.log(a);