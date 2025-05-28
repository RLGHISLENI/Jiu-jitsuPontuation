import React, { useContext, useState } from "react";
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
}) {
  const {Scores, handleChangingScores} = useScore()
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full md:flex md:flex-row md:gap-3 2xl:gap-4 md:w-auto">
      <PlayerInput
        player={player}
        textLabel={textLabel}
        textInput={textInput}
        borderColor={borderColor}
        placeholderColor={placeholderColor}
      />

      {/* ScoreButtons com espaçamento proporcional */}
      <ScoreButton
        ButtonScorePoint={() => handleChangingScores(1, 4)}
        borderColorScore={borderColorScore}
        backgroundColorBLows={backgroundColorBLows}
        buttonColor={buttonColor}
        nameBlow="Passagem de guarda"
        score={Scores[0].score.toString().padStart(2, "0")}
      />
      <ScoreButton
        ButtonScorePoint={() => handleChangingScores(2, 3)}
        borderColorScore={borderColorScore}
        backgroundColorBLows={backgroundColorBLows}
        buttonColor={buttonColor}
        nameBlow="Montada Pegada nas Costas"
        score={Scores[1].score.toString().padStart(2, "0")}
      />
      <ScoreButton
        ButtonScorePoint={() => handleChangingScores(3, 2)}
        borderColorScore={borderColorScore}
        backgroundColorBLows={backgroundColorBLows}
        buttonColor={buttonColor}
        nameBlow="Queda/Raspagem/Joelho"
        score={Scores[2].score.toString().padStart(2, "0")}
      />
    </div>
  );
}
