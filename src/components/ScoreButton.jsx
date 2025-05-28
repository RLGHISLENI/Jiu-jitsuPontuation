import React from "react";

export default function ScoreButton({ButtonScorePoint, nameBlow, score, buttonColor, backgroundColorBLows, borderColorScore }) {
  return (
    <div className="flex flex-col items-center text-center 2xl:mt-40 mt-28">
      <p className="text-sm md:text-md font-medium mb-1 md:mb-2
                   2xl:text-lg 3xl:text-xl tv-lg:text-2xl tv-4k:text-3xl"> {/* Aumenta apenas em telas muito grandes */}
        {nameBlow}
      </p>
      <button
        onClick={ButtonScorePoint}
        className={`w-full 2xl:w-72 md:w-56 flex items-center justify-center cursor-pointer 
                   ${buttonColor} text-6xl md:text-9xl font-extrabold border ${borderColorScore} rounded-xl 
                   ring-2 ring-white/40 ${backgroundColorBLows} hover:text-yellow-400 shadow-lg hover:shadow-2xl hover:scale-105 
                   transition-all duration-300
                   2xl:text-9xl 2xl:py-5 3xl:text-8xl 3xl:py-6  tv-lg:w-80 tv-4k:w-96 `} 
      >
        <h4>{score}</h4>
      </button>
    </div>
  );
}
