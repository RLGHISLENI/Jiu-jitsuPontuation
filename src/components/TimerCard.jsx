import React from "react";
import TotalScoreCard from "./TotalScoreCard";
import logo from "../assets/logo3.png";
import { useScore } from "./context/ScoreContet";
import Modal from "./Modal";
import { PauseCircle, PlayCircle, RotateCcw } from "lucide-react";

export default function TimerCard({
  setTime,
  titleTimer,
  handleStart,
  handlePause,
  handleReset,
  time,
  player,
  handleOpenModal,
  openModal,
  setIsOpen,
}) {
  const { getTotalScore } = useScore();
  const totalPlayer1 = getTotalScore("Lutador 1");
  const totalPlayer2 = getTotalScore("Lutador 2");

  return (
    <div className="relative">
      {/* Container principal */}
      <div className="flex flex-col items-center justify-center gap-4  2xl:gap-10 3xl:gap-12 tv-lg:gap-12 tv-4k:gap-16">
        {/* TotalScoreCard superior */}
        <div className="w-48 md:w-30 xl:w-64 2xl:w-96 3xl:w-80 tv-lg:w-[35rem] tv-4k:w-[40rem]">
          <TotalScoreCard
            title={"Pontuação Final"}
            player={player}
            score={totalPlayer1.toString().padStart(2, "0")}
          />
        </div>

        {/* Timer */}
        <div className="bg-gray-100 w-full xl:w-80 max-w-sm md:max-w-md 2xl:max-w-[38rem] 3xl:max-w-[32rem] tv-lg:max-w-[45rem] tv-4k:w-[50rem] text-black text-center font-bold rounded-lg">
          <div className="bg-red-600 text-white text-center text-3xl md:text-3xl  lg:text-2xl 2xl:text-5xl font-bold py-2 2xl:py-3 tv-4k:text-8xl tv-lg:text-5xl">
            {titleTimer}
          </div>
          <p className="text-5xl md:text-7xl 2xl:text-9xl tv-4k:text-15xl tv-lg:text-10xl font-extrabold hover:text-red-400 py-1">
            {time}
          </p>
          <div className="flex justify-center items-center p-2 gap-3 tv-lg:gap-10 mt-1 md:mt-3">
            <button
              onClick={handleStart}
              className="flex flex-col items-center text-gray-600 hover:text-gray-800 text-2xl md:text-3xl tv-lg:text-5xl"
            >
              <PlayCircle size={27} className="md:size-27 tv-lg:size-16" />
            </button>

            <button
              onClick={handlePause}
              className="flex flex-col items-center text-yellow-600 hover:text-yellow-800 text-2xl md:text-3xl tv-lg:text-5xl"
            >
              <PauseCircle size={27} className="md:size-27 tv-lg:size-16" />
            </button>

            <button
              onClick={handleReset}
              className="flex flex-col items-center text-red-600 hover:text-red-800 text-2xl md:text-3xl tv-lg:text-5xl"
            >
              <RotateCcw size={27} className="md:size-27 tv-lg:size-16" />
            </button>

            <button
              onClick={handleOpenModal}
              className="text-sm md:text-lg 2xl:text-xl 3xl:text-2xl tv-4k:text-5xl tv-lg:text-3xl text-blue-600 hover:text-blue-800 underline"
            >
              Definir o tempo
            </button>
          </div>
        </div>

        {/* TotalScoreCard inferior */}
        <div className="w-48 xl:w-64 md:w-30 lg:w-30 2xl:w-96 3xl:w-80 tv-4k:w-[40rem] tv-lg:w-[35rem]">
          <TotalScoreCard
            title={"Pontuação Final"}
            score={totalPlayer2.toString().padStart(2, "0")}
          />
        </div>
      </div>

      {/* Logo */}
      <div
        className="absolute -left-40 top-1/2 transform -translate-y-1/3 w-32 hidden opacity-80 md:block
                      2xl:-left-80 2xl:w-72 tv-4k:-left-[40rem] tv-lg:-left-[35rem] tv-lg:w-[25rem] 3xl:w-52 tv-4k:w-[40rem]"
      >
        <img src={logo} alt="Logo" className="w-full h-auto object-contain" />
      </div>    
    </div>
  );
}
