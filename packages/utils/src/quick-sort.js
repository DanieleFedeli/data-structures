export default function quickSort(collection, opts = {}) {
	const comparator = opts.comparator || defaultComparator;
	const pivotStrategy =
		PIVOT_STRATEGY[opts.pivotStrategy] ?? PIVOT_STRATEGY.FIRST;

	return _quickSort(collection, comparator, pivotStrategy);
}

function _quickSort(collection, comparator, pivotStrategy) {
	if (collection.length <= 1) return collection;

	const pivotIndex = _getPivotIndex(collection, pivotStrategy);

	const leftArray = [];
	const rightArray = [];

	for (let i = 0; i < collection.length; i++) {
		if (i === pivotIndex) continue;

		const compareResult = comparator(collection[i], collection[pivotIndex]);
		if (compareResult < 0) leftArray.push(collection[i]);
		else rightArray.push(collection[i]);
	}

	const sortedLeft = _quickSort(leftArray, comparator, pivotStrategy);
	const sortedRight = _quickSort(rightArray, comparator, pivotStrategy);

	return [...sortedLeft, collection[pivotIndex], ...sortedRight];
}

function _getPivotIndex(collection, pivotStrategy) {
	switch (pivotStrategy) {
		case PIVOT_STRATEGY.FIRST:
			return 0;
		case PIVOT_STRATEGY.LAST:
			return collection.length - 1;
		case PIVOT_STRATEGY.MEDIAN:
			return Math.floor(collection.length / 2);
		default:
			throw new Error(`Unknown pivot strategy: ${pivotStrategy}`);
	}
}

function defaultComparator(a, b) {
	return a - b;
}

const PIVOT_STRATEGY = Object.freeze({
	FIRST: "first",
	LAST: "last",
	MEDIAN: "median",
	RANDOM: "random",
});
