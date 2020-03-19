const SLL = require('./SLL')

class Queue {
    constructor() {
        this.storage = new SLL()
    }
}

module.exports = Queue