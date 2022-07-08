export class Stack {
	#values = [];

	constructor() {
		this.#values = [];
	}

	push(value) {
		return this.#values.push(value);
	}

	pop() {
		return this.#values.pop();
	}

	get size() {
		return this.#values.length;
	}

	*[Symbol.iterator]() {
		for (let element; (element = this.pop()); ) {
			yield element;
		}
	}
}
