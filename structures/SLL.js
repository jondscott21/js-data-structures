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
}

let sll = new SLL()
let n1 = new Node(1)
let n2 = new Node(2)
let n3 = new Node(3)
sll.head = n1
n1.next = n2
n2.next = n3
sll.addToEnd(5)
console.log(sll.head.next.next)