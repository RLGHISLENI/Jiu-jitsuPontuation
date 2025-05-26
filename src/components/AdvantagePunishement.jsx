import React from "react";

export default function AdvantagePunishement({backgroundColorPunishement}) {
  return (
    <div className="grid grid-cols-1 w-24 md:flex md:flex-col md:items-center md:w-auto md:mt-auto mt-2">
      <div className=" flex flex-col items-center md:items-center text-center md:text-right">
        <p className="text-xs md:text-xl">Vantagem</p>
        <button
          className={`${backgroundColorPunishement} w-full md:w-[130%] text-yellow-400 text-3xl md:text-4xl font-extrabold border border-white rounded-xl
          ring-2 ring-white/40 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300
          flex items-center justify-center cursor-pointer mt-2`}
        >
          01
        </button>
      </div>

      <div className="flex flex-col items-center md:items-center text-center md:text-right mt-2">
        <p className="text-xs md:text-xl">Punição</p>
        <button
          className={`${backgroundColorPunishement} w-full md:w-[160%] text-red-400 text-3xl md:text-4xl font-extrabold border border-white rounded-xl
          ring-2 ring-white/40 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300
          flex items-center justify-center cursor-pointer mt-2`}
        >
          01
        </button>
      </div>
    </div>
  );
}
