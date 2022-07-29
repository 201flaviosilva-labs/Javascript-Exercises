export function fibonacciSequence(terms) {
	let lastLast = 0;
	let last = 1;

	const sequence = [lastLast, last];

	for (let i = 1; i <= terms; i++) {
		const current = lastLast + last;
		lastLast = last;
		last = current;
		// console.log(current);
		sequence.push(current);
	}

	return sequence;
}
