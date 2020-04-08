class MaxHeap {
    constructor(data) {
        this.data = data
    }
}

class MinHeap {
    constructor(capacity) {
        this.capacity = capacity
        this.size = 0
        this.storage = new Array(capacity)
    }
    insert(value) {
        this.storage[this.size] = value
        this.heapify()
        this.size++
    }
    heapify() {
        if(this.size % 2 === 0) {
            let idx = this.size / 2
            if (this.storage[this.size] < this.storage[idx]) {
                let temp = this.storage[idx]
                this.storage[idx] = this.storage[this.size]
                this.storage[this.size] = temp
            } 
        }
        else if(this.size % 2 !== 0) {
            let idx = (this.size - 1) / 2
            if (this.storage[this.size] < this.storage[idx]) {
                let temp = this.storage[idx]
                this.storage[idx] = this.storage[this.size]
                this.storage[this.size] = temp
            } 
        }
    }
}

let h = new MinHeap(10)
h.insert(4)
h.insert(1)
h.insert(3)
h.insert(7)
h.insert(5)
h.insert(9)
console.log(h)