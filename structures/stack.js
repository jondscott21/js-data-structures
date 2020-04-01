class Stack {
    constuctor() {
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
        this
    }
}

module.exports = Stack