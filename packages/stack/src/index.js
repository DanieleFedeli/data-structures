import { Stack } from "./stack.js";
const NODE_NUM = 100_000;
const elementArray = Array.from({ length: NODE_NUM }, (_, i) => Math.random());

console.log("Start insertion");
console.time(`insert ${NODE_NUM} nodes`);
const stack = new Stack();
elementArray.forEach(stack.push.bind(stack));
console.timeEnd(`insert ${NODE_NUM} nodes`);

// You can use iterator too
for (const element of stack) {
	console.log({ element }, "Stack size:", stack.size);
}
