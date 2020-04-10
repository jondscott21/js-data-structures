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
        if(this.size === this.capacity) {
            this.increaseCapacity()
        }
    }
    heapify() {
        let parentIdx = Math.floor(this.size / 2)
        if(this.size > 0 && this.size % 2 === 0) {
            parentIdx--
        }
        let childIdx = this.size
        while(this.storage[childIdx] < this.storage[parentIdx]) {
            let tempVal = this.storage[parentIdx]
            this.storage[parentIdx] = this.storage[childIdx]
            this.storage[childIdx] = tempVal

            childIdx = parentIdx
            parentIdx = Math.floor(parentIdx / 2)
            if(childIdx > 0 && childIdx % 2 === 0) {
                parentIdx--
            }
        }
    }
    increaseCapacity() {
        let tempStorage = [...this.storage]
        this.capacity *= 2
        this.storage = new Array(this.capacity)
        tempStorage.forEach((el, i) => this.storage[i] = el)
    }
    delete(value) {
        for(let i = 0; i < this.storage.length; i++) {
            if(this.storage[i] === value) {
                let left = (i*2) + 1
                let right = (i*2) + 2
            }
        }
    }
}

let h = new MinHeap(10)
h.insert(4)
h.insert(3)
h.insert(7)
h.insert(5)
h.insert(1)
h.insert(9)
h.insert(2)
h.insert(11)
h.insert(23)
h.insert(55)
h.insert(60)

console.log(h)