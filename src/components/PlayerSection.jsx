import React from "react";
import PlayerInput from "./PlayerInput";
import Blows from "./Blows";
import AdvantagePunishement from "./AdvantagePunishement";
import logo from "../assets/logo2.png";

export default function PlayerSection({backgroundColorPunishement, backgroundColorBLows,buttonColor, BackGroundColor, textColor, textLabel, textInput, borderColor, placeholderColor }) {
  return (
    <section>
      <div className="bg-white flex items-center">
        <div className="w-full max-w-full h-ful overflow-hidden">
          <div className={`${BackGroundColor} ${textColor} p-4 md:p-8`}>
            <div className="flex relative flex-col mt-20 md:flex-row md:items-center md:gap-8 md:mt-14 lg:mt-28">
              <PlayerInput player="Lutador 1" textLabel={textLabel} textInput={textInput} borderColor={borderColor} placeholderColor={placeholderColor} />
              <Blows backgroundColorBLows={backgroundColorBLows} buttonColor={buttonColor} />
              <AdvantagePunishement backgroundColorPunishement={backgroundColorPunishement} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
