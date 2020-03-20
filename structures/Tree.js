class Tree {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
    add(data) {
        let newNode = new Tree(data)
        if(!this.data) {
            this.data = data
            return this.data
        }
        if(data < this.data) {
            this.left !== null ? this.left.add(data) : this.left = newNode
        }
        if(data > this.data) {
            this.right !== null ? this.right.add(data) : this.right = newNode
        }
    }
    contains(data) {
        if(this.data === data) {
            return true
        }
        if(data < this.data) {
            if(this.left !== null) {
                return this.left.contains(data)
            }
            else {
                return false
            }
        }
        if(data > this.data) {
            if(this.right !== null) {
                return this.right.contains(data)
            }
            else {
                return false
            }
        }
        // return false
    }
}

let root = new Tree(5)

root.add(1)
root.add(6)
console.log(root.contains(5))
console.log(root.contains(1))
console.log(root.contains(6))
console.log(root.contains(8))
console.log(root.contains(2))
// console.log(root)