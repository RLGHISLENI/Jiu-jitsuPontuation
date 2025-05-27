import React from "react";

export default function AdvantagePunishement({backgroundColorPunishement, borderColorPunishement}) {
  return (
    <div className="grid grid-cols-1 w-24 md:flex md:flex-col md:items-center md:w-auto mt-28 2xl:mt-48">
      <div className=" flex flex-col items-center md:items-center text-center md:text-right">
        <p className="text-xs md:text-xl mb-2">Vantagem</p>
        <button
          className={`${backgroundColorPunishement} w-full md:w-[130%] text-yellow-400 text-3xl md:text-4xl font-extrabold border ${borderColorPunishement} rounded-xl
          ring-2 ring-white/40 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300
          flex items-center justify-center cursor-pointer`}
        >
          00
        </button>
      </div>

      <div className="flex flex-col items-center md:items-center text-center md:text-right">
        <p className="text-xs md:text-xl mt-2">Punição</p>
        <button
          className={`${backgroundColorPunishement} w-full md:w-[160%] text-red-400 text-3xl md:text-4xl font-extrabold border ${borderColorPunishement} rounded-xl
          ring-2 ring-white/40 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300
          flex items-center justify-center cursor-pointer`}
        >
          00
        </button>
      </div>
    </div>
  );
}
