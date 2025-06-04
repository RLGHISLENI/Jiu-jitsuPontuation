import React, { useState, useRef, useEffect } from "react";
import TotalScoreCard from "./TotalScoreCard";
import defaultLogo from "../assets/logo3.png";
import { useScore } from "./context/ScoreContet";
import Modal from "./Modal";
import { PauseCircle, PlayCircle, RotateCcw } from "lucide-react";

export default function TimerCard({
  setTime,
  titleTimer,
  handleStart,
  handleOpenLogoModal,
  setShowLogoModal,
  handlePause,
  handleReset,
  time,
  player,
  handleOpenModal,
  openModal,
  setIsOpen,
  logoSrc = defaultLogo,
}) {
  const { getTotalScore } = useScore();
  const totalPlayer1 = getTotalScore("Lutador 1");
  const totalPlayer2 = getTotalScore("Lutador 2");

  return (
    <div className="relative">
       <div className="w-full flex  flex-col lg:flex-row items-center justify-center gap-4 lg:gap-10 tv-lg:gap-16">
    {/* Coluna esquerda (LOGO) */}
   <div className="flex justify-center items-center mt-4 lg:mt-0 max-w-[150px] md:max-w-[150px] lg:max-w-[200px] tv-lg:max-w-[240px]">
  <button onClick={handleOpenLogoModal} className="w-full">
    <img
      src={logoSrc}
      alt="Logo"
      className="w-full h-auto object-contain max-w-full"
    />
  </button>
</div>

    {/* Coluna direita (conteúdo principal) */}
    <div className="flex flex-col items-center gap-4 2xl:gap-10 3xl:gap-12 tv-lg:gap-12 tv-4k:gap-16">
      {/* ScoreCard superior */}
      <div className="w-48 md:w-30 xl:w-64 2xl:w-96 3xl:w-80 tv-lg:w-[35rem] tv-4k:w-[40rem]">
        <TotalScoreCard
          title={"Pontuação Final"}
          player={player}
          score={totalPlayer1.toString().padStart(2, "0")}
        />
      </div>

      {/* Timer */}
      <div className="bg-gray-200 w-full max-w-xs sm:max-w-sm md:max-w-md 
                      lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl 
                      tv-lg:max-w-3xl tv-4k:max-w-4xl
                      text-black text-center font-bold rounded-lg shadow-lg">
        <div className="bg-red-600 text-white text-center text-3xl md:text-3xl lg:text-2xl 2xl:text-5xl font-bold py-2 2xl:py-3 tv-4k:text-8xl tv-lg:text-5xl">
          {titleTimer}
        </div>
        <p className="text-5xl md:text-7xl 2xl:text-9xl tv-4k:text-15xl tv-lg:text-10xl font-extrabold hover:text-red-400 py-1">
          {time}
        </p>
        <div className="flex justify-center items-center p-2 gap-3 tv-lg:gap-10">
          <button onClick={handleStart} className="text-gray-600 hover:text-gray-800">
            <PlayCircle className="size-8 md:size-10 tv-lg:size-16" />
          </button>
          <button onClick={handlePause} className="text-yellow-600 hover:text-yellow-800">
            <PauseCircle className="size-8 md:size-10 tv-lg:size-16" />
          </button>
          <button onClick={handleReset} className="text-red-600 hover:text-red-800">
            <RotateCcw className="size-8 md:size-10 tv-lg:size-16" />
          </button>
          <button
            onClick={handleOpenModal}
            className="text-sm md:text-lg 2xl:text-xl 3xl:text-2xl tv-4k:text-5xl tv-lg:text-3xl text-blue-600 hover:text-blue-800 underline"
          >
            Definir o tempo
          </button>
        </div>
      </div>

      {/* ScoreCard inferior */}
      <div className="w-48 xl:w-64 md:w-30 lg:w-30 2xl:w-96 3xl:w-80 tv-4k:w-[40rem] tv-lg:w-[35rem]">
        <TotalScoreCard
          title={"Pontuação Final"}
          score={totalPlayer2.toString().padStart(2, "0")}
        />
      </div>
    </div>
  </div>
    </div>
  );
}
