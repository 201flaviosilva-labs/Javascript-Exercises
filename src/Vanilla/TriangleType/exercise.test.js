// import {checkTriangleType} from "./exercise"; // Uncomment this line
import { checkTriangleType } from "./solution"; // Comment this line

describe("CheckTriangleType", () => {

	describe("Impossible", () => {
		test("0,1,2", () => {
			expect(checkTriangleType(0, 1, 2)).toBe("Impossible");
		});
	});

	describe("Equilateral", () => {
		test("10,10,10", () => {
			expect(checkTriangleType(10, 10, 10)).toBe("Equilateral");
		});
	});

	describe("Isosceles", () => {
		test("10,10,5", () => {
			expect(checkTriangleType(10, 10, 5)).toBe("Isosceles");
		});
	});

	describe("Scalene", () => {
		test("9,10,5", () => {
			expect(checkTriangleType(9, 10, 5)).toBe("Scalene");
		});
	});
});
