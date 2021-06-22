class Graphs {
  private adjacencyList: {
    [props: string]: string[];
  };

  constructor() {
    this.adjacencyList = {};
  }

  __isExist(vertex: string) {
    if (!this.adjacencyList[vertex]) {
      return false;
    } else return true;
  }

  addVertex(vertex: string) {
    if (!this.__isExist(vertex)) {
      this.adjacencyList[vertex] = [];
      return "Success adding vertex to graph";
    }

    return "Vertex already exist";
  }

  addEdge(vertex1: string, vertex2: string) {
    if (!this.__isExist(vertex1)) {
      return `Vertex ${vertex1} is not exist in the graph`;
    }

    if (!this.__isExist(vertex2)) {
      return `Vertex ${vertex2} is not exist in the graph`;
    }

    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);

    return `Edge is created between vertex ${vertex1} and ${vertex2}`;
  }

  removeEdge(vertex1: string, vertex2: string) {
    if (!this.__isExist(vertex1)) {
      return `Vertex ${vertex1} is not exist in the graph`;
    }

    if (!this.__isExist(vertex2)) {
      return `Vertex ${vertex2} is not exist in the graph`;
    }

    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vertex) => {
        return vertex !== vertex2;
      }
    );

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (vertex) => {
        return vertex !== vertex1;
      }
    );

    return "Success removing edge";
  }

  removeVertex(vertex: string) {
    if (!this.__isExist(vertex)) {
      return `Vertex ${vertex} is not exist in the graph`;
    }

    while (this.adjacencyList[vertex].length > 0) {
      const edgeWith = this.adjacencyList[vertex].pop()!;

      this.adjacencyList[edgeWith] = this.adjacencyList[edgeWith].filter(
        (val) => {
          return val !== vertex;
        }
      );
    }

    delete this.adjacencyList[vertex];
    return this;
  }
}

const grapku = new Graphs();

console.log(grapku.addVertex("A"));
console.log(grapku.addVertex("C"));
console.log(grapku.addVertex("B"));

console.log(grapku.addEdge("A", "B"));
console.log(grapku.addEdge("C", "B"));
console.log(grapku.addEdge("C", "A"));
console.log(grapku);

// console.log(grapku.removeEdge("A", "B"));
console.log(grapku.removeVertex("C"));
console.log(grapku);
