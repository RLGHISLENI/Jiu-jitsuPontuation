import React from "react";
import PlayerInput from "./PlayerInput";
import Blows from "./Blows";
import AdvantagePunishement from "./AdvantagePunishement";
import logo from "../assets/logo2.png";

export default function PlayerSection({buttonColor, BackGroundColor, textColor, textLabel, textInput, borderColor, placeholderColor }) {
  return (
    <section>
      <div className="bg-white flex items-center">
        <div className="w-full max-w-full overflow-hidden">
          <div className={`${BackGroundColor} ${textColor} p-4 md:p-8`}>
            <div className="flex relative flex-col md:flex-row md:items-center md:gap-8 mt-14">
              <PlayerInput player="Lutador 1" textLabel={textLabel} textInput={textInput} borderColor={borderColor} placeholderColor={placeholderColor} />
              <Blows buttonColor={buttonColor} />
              <AdvantagePunishement />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
