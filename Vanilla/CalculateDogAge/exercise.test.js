import calculateDogAge from "./exercise";

describe("CalculateDogAge", () => {
	test("Age: 1, Weight: 9 -> 7", () => {
		expect(calculateDogAge(0, 1)).toBe(0);
	});

	describe("Small Dog", () => {
		test("Age: 1, Weight: 9 -> 7", () => {
			expect(calculateDogAge(1, 9)).toBe(7);
		});
		test("Age: 2, Weight: 2.5 -> 14", () => {
			expect(calculateDogAge(2, 2.5)).toBe(14);
		});
		test("Age: 5, Weight: 7 -> 35", () => {
			expect(calculateDogAge(5, 7)).toBe(35);
		});
		test("Age: 10, Weight: 5 -> 55", () => {
			expect(calculateDogAge(10, 5)).toBe(55);
		});
		test("Age: 15, Weight: 5 -> 75", () => {
			expect(calculateDogAge(15, 5)).toBe(75);
		});
	});

	describe("Medium Dog", () => {
		test("Age: 1, Weight: 15 -> 7", () => {
			expect(calculateDogAge(1, 15)).toBe(7);
		});
		test("Age: 6, Weight: 15 -> 41", () => {
			expect(calculateDogAge(6, 15)).toBe(41);
		});
		test("Age: 10, Weight: 15 -> 65", () => {
			expect(calculateDogAge(10, 15)).toBe(65);
		});
		test("Age: 15, Weight: 15 -> 95", () => {
			expect(calculateDogAge(15, 15)).toBe(95);
		});
	});

	/**
	* @example calculateDogAge(1, 40); // 7
	* @example calculateDogAge(5, 40); // 35
	* @example calculateDogAge(6, 40); // 44
	* @example calculateDogAge(10, 40); // 80
	* @example calculateDogAge(15, 40); // 125
	* @example calculateDogAge(16, 40); // 140
	* @example calculateDogAge(20, 40); // 200
	 */

	describe("Large Dog", () => {
		test("Age: 1, Weight: 40 -> 7", () => {
			expect(calculateDogAge(1, 40)).toBe(7);
		});
		test("Age: 5, Weight: 40 -> 35", () => {
			expect(calculateDogAge(5, 40)).toBe(35);
		});
		test("Age: 6, Weight: 40 -> 44", () => {
			expect(calculateDogAge(6, 40)).toBe(44);
		});
		test("Age: 10, Weight: 40 -> 80", () => {
			expect(calculateDogAge(10, 40)).toBe(80);
		});
		test("Age: 15, Weight: 40 -> 125", () => {
			expect(calculateDogAge(15, 40)).toBe(125);
		});
		test("Age: 16, Weight: 40 -> 140", () => {
			expect(calculateDogAge(16, 40)).toBe(140);
		});
		test("Age: 20, Weight: 40 -> 200", () => {
			expect(calculateDogAge(20, 40)).toBe(200);
		});
	});
});
