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
