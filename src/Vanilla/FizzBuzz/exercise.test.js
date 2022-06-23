// import { fizzBuzz } from "./exercise"; // Uncomment this line
import { fizzBuzz } from "./solution"; // Comment this line

describe("FizzBuzz", () => {
	describe("Empty", () => {
		test("1", () => { expect(fizzBuzz(1)).toBe(""); });
		test("5", () => { expect(fizzBuzz(5)).toBe(""); });
		test("7", () => { expect(fizzBuzz(7)).toBe(""); });
		test("11", () => { expect(fizzBuzz(11)).toBe(""); });
		test("67", () => { expect(fizzBuzz(67)).toBe(""); });
		test("121", () => { expect(fizzBuzz(121)).toBe(""); });
		test("155", () => { expect(fizzBuzz(155)).toBe(""); });
	});

	describe("Fizz", () => {
		test("2", () => { expect(fizzBuzz(2)).toBe("Fizz"); });
		test("4", () => { expect(fizzBuzz(4)).toBe("Fizz"); });
		test("8", () => { expect(fizzBuzz(8)).toBe("Fizz"); });
		test("10", () => { expect(fizzBuzz(10)).toBe("Fizz"); });
		test("100", () => { expect(fizzBuzz(100)).toBe("Fizz"); });
		test("268", () => { expect(fizzBuzz(268)).toBe("Fizz"); });
	});

	describe("Buzz", () => {
		test("3", () => { expect(fizzBuzz(3)).toBe("Buzz"); });
		test("9", () => { expect(fizzBuzz(9)).toBe("Buzz"); });
		test("15", () => { expect(fizzBuzz(15)).toBe("Buzz"); });
		test("33", () => { expect(fizzBuzz(33)).toBe("Buzz"); });
		test("99", () => { expect(fizzBuzz(99)).toBe("Buzz"); });
	});

	describe("FizzBuzz", () => {
		test("0", () => { expect(fizzBuzz(0)).toBe("FizzBuzz"); });
		test("6", () => { expect(fizzBuzz(6)).toBe("FizzBuzz"); });
		test("12", () => { expect(fizzBuzz(12)).toBe("FizzBuzz"); });
		test("18", () => { expect(fizzBuzz(18)).toBe("FizzBuzz"); });
		test("24", () => { expect(fizzBuzz(24)).toBe("FizzBuzz"); });
		test("120", () => { expect(fizzBuzz(120)).toBe("FizzBuzz"); });
		test("1050", () => { expect(fizzBuzz(1050)).toBe("FizzBuzz"); });
	});
});
