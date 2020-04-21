const Queue = require('./Queue')
const Stack = require('./Stack')

class Graph {
    constructor() {
        this.vertices = {}
    }
    addVertices(vertexId) {
        if(!this.vertices[vertexId]) {
            this.vertices[vertexId] = new Set()
        }
        else {
            
        }
    }
    addEdge(v1, v2) {
        // single direction edge
        if(this.vertices[v1] && this.vertices[v2]) {
            this.vertices[v1].add(v2)
        }
        else {
            if(!this.vertices[v1] && !this.vertices[v2]) {
                throw new RangeError(`${v1} and ${v2} not in graph`)
            }
            else if(!this.vertices[v1]) {
                throw new RangeError(`${v1} not in graph`)
            }
            else if(!this.vertices[v2]) {
                throw new RangeError(`${v2} not in graph`)
            }
        }
    }
    getEdges(vertex) {
        return this.vertices[vertex]
    }
    bft(startingVertex) {
        let q = new Queue()
        q.enqueue(startingVertex)
        let visited = new Set()
        while(q.length > 0) {
            let vertex = q.dequeue()
            if(!visited.has(vertex)) {
                console.log(vertex)
                visited.add(vertex)
                this.vertices[vertex].forEach(edge => q.enqueue(edge))
            }
        }
    }
    dft_iterative(startingVertex) {
        let s = new Stack()
        s.push(startingVertex)
        let visited = new Set()
        while(s.length > 0) {
            let vertex = s.pop()
            if(!visited.has(vertex)) {
                console.log(vertex)
                visited.add(vertex)
                this.vertices[vertex].forEach(edge => s.push(edge))
            }
        }
    }
}
let g = new Graph()
g.addVertices(1)
g.addVertices(2)
g.addVertices(3)
g.addVertices(4)
g.addVertices(5)
g.addVertices(6)
g.addEdge(1, 2)
g.addEdge(2, 4)
g.addEdge(1, 3)
g.addEdge(2, 5)
g.addEdge(3, 6)
console.log(g.getEdges(1))
// console.log(g)
g.bft(1)
g.dft_iterative(1)