import { PriorityQueue } from "./priority-queue.js";
import { Element } from "./element.js";

const queue = new PriorityQueue();

console.time("Creating priority queue");
for (let i = 0; i < 100_000; i++) {
	queue.push(new Element(`Payload ${i}`, Math.floor(Math.random() * 100_000)));
}
console.timeEnd("Creating priority queue");
