import React, { useState } from "react";

export default function AdvantagePunishement({
  backgroundColorPunishement,vantagemValue, punishementValue,
  borderColorPunishement, onPressPunishementTrue, onPressPunishementFalse
}) {
  
  return (
    <div className="grid grid-cols-1 w-24 md:flex md:flex-col md:items-center md:w-auto mt-auto">
      <div className=" flex flex-col items-center md:items-center text-center md:text-right">
        <p className="text-xs md:text-xl mb-2 tv-4k:text-5xl tv-lg:text-4xl tv-4k:mb-5 tv-lg:mb-5">Vantagem</p>
        <button
          onClick={onPressPunishementTrue}
          className={`${backgroundColorPunishement} w-full md:w-[130%] text-yellow-400 text-3xl md:text-4xl font-extrabold border ${borderColorPunishement} rounded-xl
          ring-2 ring-white/40 shadow-lg hover:shadow-2xl 2xl:w-40 2xl:text-6xl hover:scale-105 transition-all duration-300
          flex items-center justify-center cursor-pointer tv-4k:text-9xl tv-4k:w-96 tv-lg:text-7xl`}
        >
          {punishementValue.toString().padStart(2, "0")}
        </button>
      </div>

      <div className="flex flex-col items-center md:items-center text-center md:text-right ">
        <p className="text-xs md:text-xl mt-2 tv-4k:mb-5 tv-4k:text-5xl tv-lg:text-4xl tv-lg:mb-5 ">Punição</p>
        <button
          onClick={onPressPunishementFalse}
          className={`${backgroundColorPunishement} w-full md:w-[160%] text-red-400 text-3xl md:text-4xl font-extrabold border ${borderColorPunishement} rounded-xl
          ring-2 ring-white/40 shadow-lg hover:shadow-2xl 2xl:w-40 2xl:text-6xl hover:scale-105 transition-all duration-300
          flex items-center justify-center cursor-pointer tv-4k:w-96 tv-4k:text-9xl tv-lg:text-7xl`}
        >
          {vantagemValue.toString().padStart(2, "0")}
        </button>
      </div>
    </div>
  );
}
