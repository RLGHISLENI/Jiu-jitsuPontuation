import React, { useState } from "react";

export default function AdvantagePunishement({
  backgroundColorPunishement,
  borderColorPunishement,
}) {
  const [punishementValue, setPunishementValue] = useState(0);
  const [vantagemValue, setvantagemValue] = useState(0);

  const handlePunishement = (isPushiment) => {
    if (isPushiment) {
      setPunishementValue((prev) => prev + 1);
    } else {
      setvantagemValue((prev) => prev + 1);
    }
  };

  return (
    <div className="grid grid-cols-1 w-24 md:flex md:flex-col md:items-center md:w-auto mt-28 2xl:mt-48 lg:mt-24 tv-4k:gap-2 tv-4k:w-96 tv-4k:mt-[30rem] tv-lg:gap-1 tv-lg:w-64 tv-lg:mt-[18rem]">
      <div className=" flex flex-col items-center md:items-center text-center md:text-right">
        <p className="text-xs md:text-xl mb-2 tv-4k:text-6xl tv-lg:text-4xl tv-4k:mb-5 tv-lg:mb-5">Vantagem</p>
        <button
          onClick={() => handlePunishement(true)}
          className={`${backgroundColorPunishement} w-full md:w-[130%] text-yellow-400 text-3xl md:text-4xl font-extrabold border ${borderColorPunishement} rounded-xl
          ring-2 ring-white/40 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300
          flex items-center justify-center cursor-pointer tv-4k:text-8xl tv-lg:text-7xl`}
        >
          {punishementValue.toString().padStart(2, "0")}
        </button>
      </div>

      <div className="flex flex-col items-center md:items-center text-center md:text-right ">
        <p className="text-xs md:text-xl mt-2 tv-4k:mb-5 tv-4k:text-6xl tv-lg:text-4xl tv-lg:mb-5 ">Punição</p>
        <button
          onClick={() => handlePunishement(false)}
          className={`${backgroundColorPunishement} w-full md:w-[160%] text-red-400 text-3xl md:text-4xl font-extrabold border ${borderColorPunishement} rounded-xl
          ring-2 ring-white/40 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300
          flex items-center justify-center cursor-pointer tv-4k:text-8xl tv-lg:text-7xl`}
        >
          {vantagemValue.toString().padStart(2, "0")}
        </button>
      </div>
    </div>
  );
}
