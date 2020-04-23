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
    dftIterative(startingVertex) {
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
    dftRecursive(startingVertex, visited=null) {
        if(visited === null) {
            visited = new Set()
        }
        if(!visited.has(startingVertex)) {
            visited.add(startingVertex)
            console.log(startingVertex)
            this.vertices[startingVertex].forEach(edge => {
                this.dftRecursive(edge, visited)
            })
        }
    }
    bfs(startingVertex, target) {
        let visited = new Set()
        let q = new Queue()
        q.enqueue([startingVertex])
        while(q.length > 0) {
            let path = q.dequeue()
            let vertex = path[path.length-1]
            if(!visited.has(vertex)) {
                if(vertex === target) {
                    return path
                }
                visited.add(vertex)
                this.vertices[vertex].forEach(edge => {
                    let newPath = [...path]
                    newPath.push(edge)
                    q.enqueue(newPath)
                })
            }
        }
    }
    dfs(startingVertex, target) {
        let visited = new Set()
        let s = new Stack()
        s.push([startingVertex])
        while(s.length > 0) {
            let path = s.pop()
            let vertex = path[path.length-1]
            if(!visited.has(vertex)) {
                if(vertex === target) {
                    return path
                }
                visited.add(vertex)
                this.vertices[vertex].forEach(edge => {
                    let newPath = [...path]
                    newPath.push(edge)
                    s.push(newPath)
                })
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
console.log(g)
g.bft(1)
console.log('********************')
g.dftIterative(1)
console.log('********************')
g.dftRecursive(1)
console.log('********************')
console.log(g.bfs(1,5))