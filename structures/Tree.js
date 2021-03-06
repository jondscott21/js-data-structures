const Queue = require('./Queue')
const Stack = require('./Stack')

class Tree {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
    add(data) {
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
    dftRecursive(tree) {
        if(tree.left) {
            this.dftRecursive(tree.left)
        }
        console.log(tree.data)
        if(tree.right) {
            this.dftRecursive(tree.right)
        }
        return
    }
    bft(tree) {
        let q = new Queue()
        q.enqueue(tree)
        while(q.length > 0) {
            let node = q.dequeue()
            console.log(node.value.data)
            if(node.value.left) {
                q.enqueue(node.value.left)
            }
            if(node.value.right) {
                q.enqueue(node.value.right)
            }
        }
    }
    dft(tree) {
        let s = new Stack()
        s.push(tree)
        while(s.length > 0) {
            let node = s.pop()
            if(node.left) {
                s.push(node.left)
            }
            if(node.right) {
                s.push(node.right)
            }
        }
    }
    contains(target) {
        if(this.data === target) {
            return true
        }
        if(this.data > target) {
            if(this.left) {
                return this.left.contains(target)
            }
            else {
                return false
            }
        }
        if(this.data < target) {
            if(this.right) {
                return this.right.contains(target)
            }
            else {
                return false
            }
        }
    }
    getMin() {
        if(!this.left) {
            return this.data
        }
        else {
            return this.left.getMin()
        }
    }
    getMax() {
        if(!this.right) {
            return this.data
        }
        else {
            return this.right.getMax()
        }
    }
}
module.exports = Tree

let root = new Tree(5)

root.add(3)
// root.add(4)
// root.add(1)
// root.add(2)
// root.add(7)
root.add(6)
root.add(9)
root.add(8)
root.add(10)
// root.dftRecursive(root)
// root.bft(root)
// root.remove(5)
// console.log(root.contains(5))
// console.log(root.contains(1))
// console.log(root.contains(6))
// console.log(root.contains(8))
// console.log(root.contains(2))
// console.log(root.contains(11))
console.log(root.getMin())
