import type { Choice } from "./GameBoard";

const moveDetails: Record<Choice, { icon: string; label: string }> = {
  rock: { icon: "✊", label: "Rock" },
  paper: { icon: "✋", label: "Paper" },
  scissors: { icon: "✌", label: "Scissors" },
};

interface MoveProps {
  choice: Choice;
}

export default function Move({ choice }: MoveProps) {
  const move = moveDetails[choice];

  return (
    <div className={`move move-${choice}`}>
      <span className="move-icon" aria-hidden="true">
        {move.icon}
      </span>
      <span className="move-label">{move.label}</span>
    </div>
  );
}
