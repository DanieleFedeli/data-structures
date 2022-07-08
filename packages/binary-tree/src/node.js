export class Node {
	constructor(value) {
		this.value = value;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	isLeaf() {
		return !this.left && !this.right;
	}

	isBranch() {
		return !this.isLeaf();
	}

	isRoot() {
		return !this.parent;
	}

	toJSON() {
		return {
			value: this.value,
			left: this.left ? this.left.toJSON() : null,
			right: this.right ? this.right.toJSON() : null,
		};
	}
}
