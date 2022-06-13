/**
 * @description
 * Calculate Dog Age
 * 
 * This function should return the dog age based in the human ages and dog weight.
 * 
 * The user should passes a dog (human) age and a dog weight.
 * And based in this 2 value the program should return the dog age.
 * 
 * To simplify the function we will assume that:
 * - dogs under 10 kg are small;
 * - dogs from 10 kg to 30 kg are medium;
 * - dogs over 30 kg are large;
 * 
 * And so you don't have to create a very complex formula:
 * - All dogs aged 5 and under, the calculation per year is 7;
 * - Small dogs that are over 5 years old are calculated at 4 dog years for each human year;
 * - The medium dogs that are more than 5 years old, the calculation goes to 6 dog years for each human year;
 * - Large dogs that are over 5 years old, the calculation becomes 9 dog years for each human year;
 * - Large dogs that are over 15 years old are calculated at 15 dog years for each human year;
 * 
 * 
 * @example calculateDogAge(1, 9); // 7
 * @example calculateDogAge(2, 2.5); // 14
 * @example calculateDogAge(5, 7); // 35
 * @example calculateDogAge(10, 5); // 55
 * @example calculateDogAge(15, 5); // 75
 * 
 * @example calculateDogAge(1, 15); // 7
 * @example calculateDogAge(6, 15); // 41
 * @example calculateDogAge(10, 15); // 65
 * @example calculateDogAge(15, 15); // 95
 * 
 * @example calculateDogAge(1, 40); // 7
 * @example calculateDogAge(5, 40); // 35
 * @example calculateDogAge(6, 40); // 44
 * @example calculateDogAge(10, 40); // 80
 * @example calculateDogAge(15, 40); // 125
 * @example calculateDogAge(16, 40); // 140
 * @example calculateDogAge(20, 40); // 200
 * 
 * @param {number} years - the dog (human) years
 * @param {number} weight - the dog weight
 * @returns {number}
 */
export default function calculateDogAge(years, weight) {
	let result = 0;
	let remainingYears = years - 5;

	if (years <= 5) return years * 7;

	result = 5 * 7;

	if (weight > 30) {
		if (remainingYears <= 10) result += remainingYears * 9;
		else {
			remainingYears -= 10;
			result += (10 * 9) + (remainingYears * 15);
		}
	} else if (weight <= 30 && weight >= 10) result += remainingYears * 6;
	else result += remainingYears * 4;

	return result;
}
