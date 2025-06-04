import React, { useState } from "react";
import Modal from "./Modal";
import { useScore } from "./context/ScoreContet";

export default function PlayerInput({
  player,
  textLabel,
  textInput,
  borderColor,
  placeholderColor,
  modal,
  nameWinner,
  onPressWinner,
}) {
  const { namePlayer1, namePlayer2, setNamePlayer1, setNamePlayer2 } =
    useScore();
  return (
    <>
      <div
        className={`
        absolute 
        
      `}
      >
        <div
          className={`
    flex flex-col gap-2
    items-start sm:items-start 
    w-full
  `}
        >
          {/* <label
            htmlFor={player}
            className={`text-xl lg:text-lg sm:text-2xl md:text-3xl 2xl:text-5xl tv-4k:text-8xl tv-lg:text-7xl${textLabel} select-none`}
          >
            {player}
          </label> */}

          <div className="flex flex-row justify-center w-full">
            <input
              id={player}
              value={player === "Lutador 1" ? namePlayer1 : namePlayer2}
              onChange={(e) => {
                player === "Lutador 1"
                  ? setNamePlayer1(e.target.value.toUpperCase())
                  : setNamePlayer2(e.target.value.toUpperCase())
              }}
              type="text"
              placeholder="Digite o nome do atleta"
              className={`tv-4k:max-w-[70rem] font-extrabold lg-4k:max-w-[70rem] tv-lg:max-w-[50rem]
            tv-4k:text-8xl tv-lg:text-7xl 2xl:text5xl
            w-full max-w-xl md:max-w-xl lg:max-w-xl
            text-2xl sm:text-3xl md:text-5xl lg:text-4xl
            ${textInput} bg-transparent outline-none ${placeholderColor}
            tracking-wide`}
            />

            <button
              onClick={onPressWinner}
              className={`
            md:w-32 lg:w-44 text-green-400 text-xl md:text-2xl lg:text-lg tv-lg:text-4xl tv-4k:text-6xl
            font-bold border rounded-xl ring-2 ring-white/40 shadow-md hover:shadow-2xl
            flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300`}
            >
              {nameWinner}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
