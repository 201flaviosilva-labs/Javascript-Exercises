export function fizzBuzz(number) {
	let result = "";
	if (number % 2 === 0) result += "Fizz";
	if (number % 3 === 0) result += "Buzz";
	return result;
}
