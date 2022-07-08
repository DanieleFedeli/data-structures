import { Node } from "./node.js";
import { Queue } from "../../queue/src/queue.js";
import { Stack } from "../../stack/src/stack.js";

export class BinaryTree {
	constructor(options) {
		this.root = options.root;
		this.comparator = options.comparator;
	}

	insert(value) {
		const node = new Node(value);

		if (!this.root) {
			this.root = node;
			return node;
		}

		// if value is less than current.value
		// then go left
		// if left is empty insert it there
		let current = this.root;
		while (true) {
			const comparison = this.comparator(value, current.value);
			if (comparison < 0) {
				if (!current.left) {
					current.left = node;
					node.parent = current;
					return node;
				}

				current = current.left;
			} else {
				if (!current.right) {
					current.right = node;
					node.parent = current;
					return node;
				}
				current = current.right;
			}
		}
	}

	// This implementation assumes that value is serializable
	BFS({ cb, stopAt }) {
		const queue = new Queue();
		const explored = new Set();
		queue.push(this.root);

		while (queue.size) {
			const node = queue.shift();
			if (explored.has(node.value)) continue;
			explored.add(node.value);
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
			cb(node);
			const mayIStop = stopAt(node);
			if (mayIStop) break;
		}
	}

	// This implementation assumes that value is serializable
	DFS({ cb, stopAt }) {
		const stack = new Stack();
		const explored = new Set();
		stack.push(this.root);

		while (stack.size) {
			const node = stack.pop();
			if (explored.has(node.value)) continue;
			explored.add(node.value);
			if (node.left) stack.push(node.left);
			if (node.right) stack.push(node.right);
			cb(node);
			const mayIStop = stopAt(node);
			if (mayIStop) break;
		}
	}

	toJSON() {
		return this.root.toJSON();
	}

	toString() {
		return this.root.toString();
	}

	has(value) {
		return this.find(value) !== null;
	}

	find(value) {
		let current = this.root;
		while (current) {
			const comparison = this.comparator(value, current.value);
			if (comparison < 0) {
				current = current.left;
			} else if (comparison > 0) {
				current = current.right;
			} else {
				return current;
			}
		}

		return null;
	}
}
