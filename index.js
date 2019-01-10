function findNode (nodeName, vertices) {
  return vertices.find(vertex => {return vertex.name === nodeName})
}

function findAdjacent (nodeName, vertices, edges) {
  return edges.filter(edge => {
    return edge.includes(nodeName)
  }).map(edge => {
    return edge.filter(node => {
      return (node !== nodeName)
    })[0]
  }).map(name => {
    return findNode(name, vertices)
  }).filter(node => {
    return !node.discovered
  })
}

function depthFirstSearch (rootNode, vertices, edges) {
  let stack = []
  stack.push(rootNode)
  let visited = [rootNode]

  while (stack.length !== 0) {
    let v = stack.pop()
    if (!v.discovered) {
      v.discovered = true
      findAdjacent(v.name, vertices, edges).forEach(node => {
        visited.push(node)
        stack.push(node)
      })
    }
  }
  return visited
}
