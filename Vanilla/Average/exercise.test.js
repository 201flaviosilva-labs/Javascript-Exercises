// import average from "./exercise"; // Uncomment this line
import average from "./solution"; // Comment this line

describe("Average", () => {
	test("[] = 0", () => { expect(average([])).toBe(0); });
	test("[0,5,10] = 5", () => { expect(average([0, 5, 10])).toBe(5); });
	test("[1,2,3,4,5] = 3", () => { expect(average([1, 2, 3, 4, 5])).toBe(3); });
	test("[10,5,7.5,15,0] = 7.5", () => { expect(average([10, 5, 7.5, 15, 0])).toBe(7.5); });
	test("[-2] = -2", () => { expect(average([-2])).toBe(-2); });
	test("[-10,0,-100,-32,10] = -26.4", () => { expect(average([-10, 0, -100, -32, 10])).toBe(-26.4); });
});
