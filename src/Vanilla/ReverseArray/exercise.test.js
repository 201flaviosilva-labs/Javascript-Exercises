// import {reverseArray} from "./exercise"; // Uncomment this line
import { reverseArray } from "./solution"; // Comment this line

describe("reverseArray", () => {
	test("[0] -> [0]", () => {
		expect(reverseArray([0])).toEqual([0]);
	});

	test("[0,1,2,3] -> [3,2,1,0]", () => {
		expect(reverseArray([0, 1, 2, 3])).toEqual([3, 2, 1, 0]);
	});

	test("[0,1,2,3,4] -> [4,3,2,1,0]", () => {
		expect(reverseArray([0, 1, 2, 3, 4])).toEqual([4, 3, 2, 1, 0]);
	});

	test("['one','two','three'] -> ['three','two','one']", () => {
		expect(reverseArray(["one", "two", "three"])).toEqual(["three", "two", "one"]);
	});

	test("[true, false, false] -> [false, false, true]", () => {
		expect(reverseArray([true, false, false])).toEqual([false, false, true]);
	});

	test("[{one:1},{two:2},{three:3}] -> [{three:3},{two:2},{one:1}]", () => {
		expect(reverseArray([{ one: 1 }, { two: 2 }, { three: 3 }])).toEqual([{ three: 3 }, { two: 2 }, { one: 1 }]);
	});
});
