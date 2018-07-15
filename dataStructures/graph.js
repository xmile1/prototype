class Graph {

    constructor() {
        this.graph = {};
    }


    addVertex = (node) => {
        if (!this.contains(node)) this.graph[node] = { edges: {} };
    }

    contains = (node) => {
        return !!graph[node]
    }

    addEdge = (startNode, endNode) => {
        if (this.contains(startNode) && this.contains(endNode)) {
            this.graph[startNode].edges[endNode] = true;
            this.graph[endNode].edges[startNode] = true;
        }
    } 
    removeEdge = (startNode, endNode) => {
        if (this.contains(startNode) && this.contains(endNode)) {
            delete this.graph[startNode].edges[endNode]
            delete this.graph[endNode].edges[startNode]
        }
    } 

    removeVertex = (node) => {
        if (this.contains(node)) {
            for (let connectedNode in this.graph[node].edges) {
                this.removeEdge(node, connectedNode);
            }
            delete this.graph[node];
        }
    }
}