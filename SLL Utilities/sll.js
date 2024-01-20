//SLL Utilities

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addToHead(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    contains(value) {
        let current = this.head;

        while (current) {
            if (current.value === value) {
                return true; 
            }
        current = current.next;
        }

        return false; 
    }
}

//Length

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class Linked_List {
    constructor() {
        this.head = null;
    }

    add_head(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    contains(value) {
        let current = this.head;

        while (current) {
            if(current.value === value){
                return true;
            }
            current = current.next;
        }
        return false;
    }

    length() {
        let count = 0;
        let current = this.head;

        while(current) {
            count++;
        }
    return count;
    }
}

// Display

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addToHead(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    contains(value) {
        let current = this.head;

        while (current) {
            if (current.value === value) {
                return true; // Node with the provided value found
            }
            current = current.next;
        }
      return false; // Node with the provided value not found
    }

    length() {
        let count = 0;
        let current = this.head;

        while (current) {
            count++;
            current = current.next;
        }

        return count;
        }

    display() {
        let result = "";
        let current = this.head;

        while (current) {
            result += current.value + " ";
            current = current.next;
        }

        return result.trim(); // Remove trailing space
    }
}
