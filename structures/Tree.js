class Tree {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
    add(data) {
        if(data) console.log(data)
        if(!this.data) {
            if(data.data) {
                this.data = data.data
                return this.data
            }
            this.data = data
            return this.data
        }
        if(data.data && data.data < this.data) {
            this.left !== null ? this.left.add(data) : this.left = data
        }
        else if(data < this.data) {
            let newNode = new Tree(data)
            this.left !== null ? this.left.add(data) : this.left = newNode
        }
        if(data.data && data.data > this.data) {
            this.right !== null ? this.right.add(data) : this.right = data
        }
        else if(data > this.data) {
            let newNode = new Tree(data)
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
        else if(data > this.data) {
            if(this.right !== null) {
                return this.right.contains(data)
            }
            else {
                return false
            }
        }
    }
    remove(data) {
        if(!this.data) {
            return
        }
        if(data === this.data) {
            if(!this.left && !this.right) {
               delete this
            }
        }
        if(data < this.data) {
            if(data !== this.left.data) {
                return this.left.remove(data)
            }
            else {
                let removed = this.left
                this.left = null
                this.add(removed.right)
                this.add(removed.left)
                return
            }
        }
        else if(data > this.data) {
            if(data !== this.right.data) {
                return this.right.remove(data)
            }
            else {
                let removed = this.right
                    this.right = null
                    this.add(removed.right)
                    this.add(removed.left)
                    return
            }
        }
    }
}

let root = new Tree(5)

root.add(3)
root.add(4)
root.add(1)
root.add(2)
root.add(7)
root.add(6)
root.add(9)
root.add(8)
root.add(10)
root.remove(5)
// console.log(root.contains(5))
// console.log(root.contains(1))
// console.log(root.contains(6))
// console.log(root.contains(8))
// console.log(root.contains(2))
console.log(root)