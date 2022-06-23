// import { fibonacciSequence } from "./exercise"; // Uncomment this line
import { fibonacciSequence } from "./solution"; // Comment this line

describe("Fibonacci", () => {
	test("0", () => { expect(fibonacciSequence(0)).toEqual([0, 1]); });
	test("1", () => { expect(fibonacciSequence(1)).toEqual([0, 1, 1]); });
	test("5", () => { expect(fibonacciSequence(5)).toEqual([0, 1, 1, 2, 3, 5, 8]); });
	test("10", () => { expect(fibonacciSequence(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]); });
});
