class Stack {
    constuctor() {
        this.storage = []
        this.length = this.storage.length
    }
    pop() {
        return this.storage.pop()
    }
    push(item) {
        this.storage.push(item)
    }
}

module.exports = Stack