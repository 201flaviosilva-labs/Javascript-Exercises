export function fibonacciSequence(terms) {
	let n1 = 0;
	let n2 = 1;
	let next;

	const sequence = [n1, n2];

	for (let i = 1; i <= terms; i++) {
		next = n1 + n2;
		n1 = n2;
		n2 = next;
		sequence.push(n2);
	}

	return sequence;
}
