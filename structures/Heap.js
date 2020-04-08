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
        let parentIdx = Math.floor(this.size / 2)
        if(this.size > 0 && this.size % 2 === 0) {
            parentIdx--
        }
        console.log(parentIdx)
        let childIdx = this.size
        while(this.storage[childIdx] < this.storage[parentIdx]) {
            console.log(this.storage, childIdx, this.storage[childIdx], parentIdx, this.storage[parentIdx])
            console.log('hi')
            // console.log(this.storage[childIdx], this.storage[parentIdx])
            let tempVal = this.storage[parentIdx]
            this.storage[parentIdx] = this.storage[childIdx]
            this.storage[childIdx] = tempVal
            childIdx = parentIdx
            parentIdx = Math.floor(parentIdx / 2)
            if(childIdx > 0 && childIdx % 2 === 0) {
                parentIdx--
            }
        }
        console.log(this.storage)
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
// console.log(h)