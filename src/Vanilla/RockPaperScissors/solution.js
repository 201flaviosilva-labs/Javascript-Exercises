export function rockPaperScissor(playerChoice, CPUChoice) {
	if (playerChoice === CPUChoice) return "Draw";
	else if (
		(playerChoice === "rock" && CPUChoice === "paper") ||
		(playerChoice === "paper" && CPUChoice === "scissor") ||
		(playerChoice === "scissor" && CPUChoice === "rock")) return "Lose";
	else return "Win";
}
