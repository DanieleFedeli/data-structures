export class Element {
	priority = 0;

	constructor(payload, priority) {
		this.payload = payload;
		this.priority = priority;
	}

	set priority(priority) {
		throw new Error("Priority is read-only");
	}
}
