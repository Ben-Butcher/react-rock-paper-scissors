import { useState } from "react";
import GameBoard, { type Choice, type Result } from "./components/GameBoard";

export default function App() {
  const beats: Record<Choice, Choice> = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  function getResult(player: Choice, computer: Choice): Result {
    if (player === computer) return "draw";
    return beats[player] === computer ? "win" : "lose";
  }

  const choices: Choice[] = ["rock", "paper", "scissors"];

  function getComputerChoice(): Choice {
    return choices[Math.floor(Math.random() * choices.length)];
  }

  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState<Result>(null);
  const [score, setScore] = useState({ wins: 0, losses: 0, draws: 0 });

  function handlePlay(choice: Choice) {
    const computer = getComputerChoice();
    const outcome = getResult(choice, computer);

    setPlayerChoice(choice);
    setComputerChoice(computer);
    setResult(outcome);

    setScore((prev) => ({
      wins: prev.wins + (outcome == "win" ? 1 : 0),
      losses: prev.losses + (outcome === "lose" ? 1 : 0),
      draws: prev.draws + (outcome === "draw" ? 1 : 0),
    }));
  }

  return (
    <GameBoard
      choices={choices}
      playerChoice={playerChoice}
      computerChoice={computerChoice}
      result={result}
      score={score}
      onPlay={handlePlay}
    />
  );
}
