import React from "react";
import PlayerSection from "./PlayerSection";
import { ScoreProvider } from "./context/ScoreContet";

export default function Scoreboard() {
  return (
    <div className="grid grid-cols-2 gap-4 w-full">
      {/* Jogador 1 com ScoreProvider isolado */}
      <ScoreProvider>
        <PlayerSection
          player="Jogador 1"
          showTimer={true}
          backgroundColorPunishement="bg-blue-200"
          borderColorScore="border-blue-500"
          borderColorPunishement="border-blue-700"
          backgroundColorBLows="bg-blue-100"
          buttonColor="bg-blue-300"
          placeholderColor="text-blue-500"
          BackGroundColor="bg-blue-50"
          textColor="text-blue-900"
        />
      </ScoreProvider>

      {/* Jogador 2 com ScoreProvider isolado */}
      <ScoreProvider>
        <PlayerSection
          player="Jogador 2"
          showTimer={true}
          backgroundColorPunishement="bg-green-200"
          borderColorScore="border-green-500"
          borderColorPunishement="border-green-700"
          backgroundColorBLows="bg-green-100"
          buttonColor="bg-green-300"
          placeholderColor="text-green-500"
          BackGroundColor="bg-green-50"
          textColor="text-green-900"
        />
      </ScoreProvider>
    </div>
  );
}
