export default function average(numbers) {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}

	return numbers.length ? sum / numbers.length : 0;
}
