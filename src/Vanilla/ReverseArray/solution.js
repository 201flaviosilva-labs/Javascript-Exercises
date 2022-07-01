export function reverseArray(arr) {
	const size = Math.floor(arr.length / 2);

	for (let i = 0; i < size; i++) {
		const tempValue = arr[arr.length - i - 1];
		arr[arr.length - i - 1] = arr[i];
		arr[i] = tempValue;
	}


	console.log(arr);
	return arr;
}
