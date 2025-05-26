import React from "react";

export default function ScoreButton({ nameBlow, score, buttonColor, backgroundColorBLows, borderColorScore }) {
  return (
    <div className="flex flex-col items-center text-center mt-28">
      <p className="text-sm md:text-md font-medium mb-1 md:mb-2">{nameBlow}</p>
      <button
        className={`w-full md:w-56 flex items-center justify-center cursor-pointer 
          ${buttonColor} text-6xl md:text-9xl font-extrabold border ${borderColorScore} rounded-xl 
          ring-2 ring-white/40 ${backgroundColorBLows} shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300`}
      >
        <h4>{score}</h4>
      </button>
    </div>
  );
}
