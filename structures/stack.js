class Stack {
    constructor() {
        this.storage = []
        this.length = 0
    }
    pop() {
        this.length--
        return this.storage.pop()
    }
    push(item) {
        this.length++
        this.storage.push(item)
    }
}

module.exports = Stack