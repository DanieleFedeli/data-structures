export class Queue {
	constructor() {
		this.values = [];
	}

	push(value) {
		return this.values.push(value);
	}

	shift() {
		return this.values.shift();
	}

	get size() {
		return this.values.length;
	}

	*[Symbol.iterator]() {
		for (let element; (element = this.shift()); ) {
			yield element;
		}
	}
}
