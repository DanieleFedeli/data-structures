import { BinaryTree } from "./binary-tree.js";
const NODE_NUM = 100_000;
const elementArray = Array.from({ length: NODE_NUM }, (_, i) =>
	Math.floor(Math.random() * 100_000)
);

console.log("Start insertion");
console.time(`insert ${NODE_NUM} nodes`);
const binTree = new BinaryTree({ comparator: (a, b) => a - b });
elementArray.forEach(element => binTree.insert(element));
console.timeEnd(`insert ${NODE_NUM} nodes`);

console.log("Start BFS");
console.time(`BFS ${NODE_NUM} nodes`);
binTree.BFS({
	cb: node => {},
	stopAt: node => node.value === 1,
});
console.timeEnd(`BFS ${NODE_NUM} nodes`);

console.log("Bintree has 5:", binTree.has(5));
