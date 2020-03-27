const SLL = require('./SLL')

class Queue {
    constructor() {
        this.storage = new SLL()
        this.length = 0
    }
    enqueue(data) {
        this.storage.addtoHead(data)
        this.length = this.storage.size
    }
    dequeue() {
        let removed = this.storage.removeLast()
        this.length = this.storage.size
        return removed
        
    }
    size() {
        return this.storage.size
    }
}

module.exports = Queue

let q = new Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.dequeue()
// console.log(q)
// console.log(q.length)
// console.log(q.size())