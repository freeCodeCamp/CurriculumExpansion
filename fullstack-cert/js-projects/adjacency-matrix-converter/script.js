function adjacencyListToMatrix(adjList) {
  const n = Object.keys(adjList).length;

  const adjMatrix = Array.from({ length: n }, () => Array(n).fill(0));

  for (const [srcStr, neighbors] of Object.entries(adjList)) {
    const srcNode = Number(srcStr);
    for (const destNode of neighbors) {
      adjMatrix[srcNode][destNode] = 1;
    }
  }

  for (const row of adjMatrix) {
    console.log(row);
  }

  return adjMatrix;
}

const adjList = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [2]
};

const matrix = adjacencyListToMatrix(adjList);