const Node = require('./Node')

class SLL {
    constructor() {
        this.head = null
    }
    addToEnd(data) {
        let cur = this.head
        while(cur) {
            if(!cur.next) {
                cur.next = new Node(data)
                return this.head
            }
            cur = cur.next
        }
    }
    addtoHead(data) {
        let prevHead = this.head
        this.head = new Node(data)
        this.head.next = prevHead
    }
    removeNode(node) {
        if(node === this.head || node === this.head.value) {
            this.head = this.head.next
            return this.head
        }
        let cur = this.head
        let prev = null
        while(cur) {
            if(node === cur || node === cur.value) {
                prev.next = cur.next
                return this.head
            }
            if(!cur.next) {
                return this.head
            }
            prev = cur
            cur = cur.next
        }
    }
    insertAt(data, idx) {
        let cur = this.head
        let prev = null
        let count = 0
        let newNode = new Node(data)

        if(idx === 0) {
            this.head = newNode
            newNode.next = cur
            return this.head
        }
        while(cur) {
            if(count === idx) {
                prev.next = newNode
                newNode.next = cur
                return this.head
            }
            if(!cur.next) {
                cur.next = newNode
                return this.head
            }
            prev = cur
            cur = cur.next
            count++
        }
    }
    removeAt(location) {
        let cur = this.head
        let prev = null
        let count = 0
        if(location === 0) {
            this.head = this.head.next
            return this.head
        }
        while(cur) {
            if(count === location) {
                prev.next = cur.next
                return this.head
            }
            count++
            prev = cur
            cur = cur.next
        }
    }
}

let sll = new SLL()
let n1 = new Node(1)
let n2 = new Node(2)
let n3 = new Node(3)
sll.head = n1
n1.next = n2
n2.next = n3
sll.addToEnd(5)
sll.removeNode(1)
sll.insertAt(10, 0)
sll.removeAt(1)

console.log(sll.head)