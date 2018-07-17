



// Graphs are data structures that allows you represent relationships using nodes and connection, with the node holding the data and the connection showing their relationship, Graph data structure are being applied in real life use cases such as representing maps and representing friend relationship.Graphs could be undirected(where connections implies relationships in both directions) or directed(where connection implies relationship only in the direction specified), they can also be weighted and unweighted, An example of a use case of a weighted connection is in maps to determine which connection amongst multiple connections between two points is shorter. 

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



    //  'James Gosling': { edges: { 'Guido Rossum': true } },
    // 'Guido Rossum': { edges: { 'James Gosling': true } },
    // 'Linus Torvalds': { edges: { 'Michael Olorunnisola': true } },
    // 'Michael Olorunnisola': { edges: { 'Linus Torvalds': true } }
}