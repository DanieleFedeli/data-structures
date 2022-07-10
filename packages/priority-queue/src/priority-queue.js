import { Queue } from "../../queue/src/queue.js";
import { Element } from "./element.js";

export class PriorityQueue extends Queue {
	constructor() {
		super();
	}

	push(item) {
		if (!item instanceof Element) {
			throw new Error("Item must be a Element");
		}

		if (this.size === 0) return super.push(item);

		for (let i = 0; i < this.size; i++) {
			if (item.priority >= this.values[i].priority) {
				this.values.splice(i, 0, item);

				return i;
			}
		}

		return super.push(item);
	}
}
