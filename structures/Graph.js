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
}
let g = new Graph()
g.addVertices(1)
g.addVertices(2)
g.addEdge(2, 1)
console.log(g.getEdges(2))
console.log(g)