const Node = require('./Node')

class SLL {
    constructor() {
        this.head = null
        this.size = 0
    }
    addToEnd(data) {
        if(!this.head) {
            this.addtoHead(data)
            return this.head
        }
        let cur = this.head
        while(cur) {
            if(!cur.next) {
                cur.next = new Node(data)
                this.size++
                return this.head
            }
            cur = cur.next
        }
    }
    addtoHead(data) {
        let prevHead = this.head
        this.head = new Node(data)
        this.head.next = prevHead
        this.size++
        return this.head
    }
    removeNode(data) {
        if(data === this.head || data === this.head.value) {
            this.head = this.head.next
            this.size--
            return this.head
        }
        let cur = this.head
        let prev = null
        while(cur) {
            if(data === cur || data === cur.value) {
                prev.next = cur.next
                this.size--
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
            this.size++
            return this.head
        }
        while(cur) {
            if(count === idx) {
                prev.next = newNode
                newNode.next = cur
                this.size++
                return this.head
            }
            if(!cur.next) {
                cur.next = newNode
                this.size++
                return this.head
            }
            prev = cur
            cur = cur.next
            count++
        }
    }
    removeLast() {
        let cur = this.head
        let prev = null
        while(cur) {
            if(!cur.next) {
                if(!prev) {
                    let removed = this.head
                    this.head = null
                    this.size--
                    return removed
                }
                else {
                    prev.next = null
                    this.size--
                    return cur
                }
            }
            prev = cur
            cur = cur.next
        }
    }

    removeAt(location) {
        let cur = this.head
        let prev = null
        let count = 0
        if(location === 0) {
            this.head = this.head.next
            this.size--
            return this.head
        }
        while(cur) {
            if(count === location) {
                prev.next = cur.next
                this.size--
                return this.head
            }
            count++
            prev = cur
            cur = cur.next
        }
    }
    length() {
        return this.size
    }
}

module.exports = SLL

let sll = new SLL()
sll.addToEnd(1)
sll.addToEnd(2)
sll.addToEnd(3)
sll.addToEnd(5)
sll.removeNode(1)
sll.insertAt(10, 0)
sll.removeAt(1)
sll.removeLast()
sll.removeLast()
sll.removeLast()
sll.addToEnd(4)

// console.log(sll.head)
// console.log(sll.length())
// console.log(sll.size)