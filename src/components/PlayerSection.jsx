import React from "react";
import PlayerInput from "./PlayerInput";
import Blows from "./Blows";
import AdvantagePunishement from "./AdvantagePunishement";
import TimerCard from "./TimerCard";

export default function PlayerSection({player, showTimer, backgroundColorPunishement, borderColorScore, borderColorPunishement, backgroundColorBLows,buttonColor, placeholderColor ,BackGroundColor, textColor }) {
  return (
     <section className="h-full">
      <div className="bg-white h-full flex"> {/* Adicione flex aqui */}
        {/* Conteúdo principal */}
        <div className={`${BackGroundColor} ${textColor} p-4 md:p-4 flex-1`}>
          <div className="flex flex-col md:flex-row h-full gap-4 md:gap-6">
            <Blows player={player} backgroundColorBLows={backgroundColorBLows} buttonColor={buttonColor} borderColorScore={borderColorScore} placeholderColor={placeholderColor} />
            <AdvantagePunishement borderColorPunishement={borderColorPunishement}backgroundColorPunishement={backgroundColorPunishement} />
          </div>
        </div>
        {/* Timer no espaço à direita */}
        {showTimer && (
          <div className="flex items-center  justify-center absolute right-12 top-16">
            <TimerCard titleTimer="Parado" time="10:00" />
          </div>
        )}
      </div>
    </section>
  );
}
