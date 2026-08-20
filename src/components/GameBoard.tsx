import Move from "./Move";

export type Choice = "rock" | "paper" | "scissors";
export type Result = "win" | "lose" | "draw" | null;

interface GameBoardProps {
  choices: Choice[];
  playerChoice: Choice | null;
  computerChoice: Choice | null;
  result: Result;
  score: { wins: number; losses: number; draws: number };
  onPlay: (choice: Choice) => void;
}

const resultCopy: Record<Exclude<Result, null>, string> = {
  win: "You win!",
  lose: "You lose",
  draw: "It's a draw",
};

export default function GameBoard({
  choices,
  playerChoice,
  computerChoice,
  result,
  score,
  onPlay,
}: GameBoardProps) {
  return (
    <main className="game-shell">
      <header className="game-header">
        <p className="eyebrow">Quick match</p>
        <h1>Rock Paper Scissors</h1>
        <p className="subtitle">Choose your move and outsmart the computer.</p>
      </header>

      <section className="scoreboard" aria-label="Scoreboard">
        <div>
          <span>Wins</span>
          <strong>{score.wins}</strong>
        </div>
        <div>
          <span>Losses</span>
          <strong>{score.losses}</strong>
        </div>
        <div>
          <span>Draws</span>
          <strong>{score.draws}</strong>
        </div>
      </section>

      <section className="arena" aria-label="Game board">
        <div className="arena-heading">
          <p className="eyebrow">Make your move</p>
          <span className="round-label">Best of luck</span>
        </div>
        <div className="move-grid">
          {choices.map((choice) => (
            <button
              className="move-button"
              key={choice}
              onClick={() => onPlay(choice)}
            >
              <Move choice={choice} />
            </button>
          ))}
        </div>
      </section>

      <section
        className={`result-panel ${result ? "has-result" : ""}`}
        aria-live="polite"
      >
        {result ? (
          <>
            <p className="eyebrow">Round result</p>
            <h2>{resultCopy[result]}</h2>
            <div className="versus">
              <span>
                You chose <strong>{playerChoice}</strong>
              </span>
              <b>vs</b>
              <span>
                Computer chose <strong>{computerChoice}</strong>
              </span>
            </div>
          </>
        ) : (
          <p className="empty-result">Your result will appear here.</p>
        )}
      </section>
    </main>
  );
}
