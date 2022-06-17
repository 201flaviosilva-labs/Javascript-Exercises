// import {rockPaperScissor} from "./exercise"; // Uncomment this line
import { rockPaperScissor } from "./solution"; // Comment this line

describe("Rock Paper Scissor", () => {
	describe("Draw", () => {
		test("Player: paper, CPU: paper", () => {
			expect(rockPaperScissor("paper", "paper")).toBe("Draw");
		});

		test("Player: scissor, CPU: scissor", () => {
			expect(rockPaperScissor("scissor", "scissor")).toBe("Draw");
		});

		test("Player: rock, CPU: rock", () => {
			expect(rockPaperScissor("rock", "rock")).toBe("Draw");
		});
	});

	describe("Win", () => {
		test("Player: paper, CPU: rock", () => {
			expect(rockPaperScissor("paper", "rock")).toBe("Win");
		});

		test("Player: scissor, CPU: paper", () => {
			expect(rockPaperScissor("scissor", "paper")).toBe("Win");
		});

		test("Player: rock, CPU: scissor", () => {
			expect(rockPaperScissor("rock", "scissor")).toBe("Win");
		});
	});

	describe("Lose", () => {
		test("Player: rock, CPU: paper", () => {
			expect(rockPaperScissor("rock", "paper")).toBe("Lose");
		});

		test("Player: paper, CPU: scissor", () => {
			expect(rockPaperScissor("paper", "scissor")).toBe("Lose");
		});

		test("Player: scissor, CPU: rock", () => {
			expect(rockPaperScissor("scissor", "rock")).toBe("Lose");
		});
	});
});
