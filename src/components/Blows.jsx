import React from "react";
import ScoreButton from "./ScoreButton";
import PlayerInput from "./PlayerInput";
import { useScore } from "./context/ScoreContet";

export default function Blows({
  borderColorScore,
  player,
  buttonColor,
  backgroundColorBLows,
  textLabel,
  textInput,
  borderColor,
  placeholderColor,
  onPressWinner,
  borderButton,
  nameWinner
}) {
  const { handleChangingScores, scoresPlayer1, scoresPlayer2 } = useScore();
  const scoresPlayer = player === "Lutador 1" ? scoresPlayer1 : scoresPlayer2;

  return (
    <div
      className="grid grid-cols-2 grid-rows-2  w-full 
                   md:flex md:flex-row md:items-start lg:gap-4
                   md:gap-3 2xl:gap-4 tv-lg:gap-6 tv-4k:gap-8 
                   md:w-auto"
    >
      <PlayerInput
        nameWinner={nameWinner}
        player={player}
        borderButton={borderButton}
        onPressWinner={onPressWinner}
        textLabel={textLabel}
        textInput={textInput}
        borderColor={borderColor}
        placeholderColor={placeholderColor}
      />

      <ScoreButton
        ButtonScorePoint={() => handleChangingScores(player, 1, 4)}
        RemoveScorePoint={() => handleChangingScores(player, 1, -4)}
        borderColorScore={borderColorScore}
        backgroundColorBLows={backgroundColorBLows}
        buttonColor={buttonColor}
        nameBlow="Montada / Pegada Pelas Costas"
        score={scoresPlayer[0].score.toString().padStart(2, "0")}
      />
      <ScoreButton
        ButtonScorePoint={() => handleChangingScores(player, 2, 3)}
        RemoveScorePoint={() => handleChangingScores(player, 2, -3)}
        borderColorScore={borderColorScore}
        backgroundColorBLows={backgroundColorBLows}
        buttonColor={buttonColor}
        nameBlow="Passsagem de Guarda"
        score={scoresPlayer[1].score.toString().padStart(2, "0")}
      />
      <ScoreButton
        ButtonScorePoint={() => handleChangingScores(player, 3, 2)}
        RemoveScorePoint={() => handleChangingScores(player, 3, -2)}
        borderColorScore={borderColorScore}
        backgroundColorBLows={backgroundColorBLows}
        buttonColor={buttonColor}
        nameBlow="Queda / Raspagem / Joelho na barriga"
        score={scoresPlayer[2].score.toString().padStart(2, "0")}
      />
      
    </div>
  );
}
