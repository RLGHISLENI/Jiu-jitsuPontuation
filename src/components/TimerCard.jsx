import React from "react";
import TotalScoreCard from "./TotalScoreCard";
import logo from "../assets/logo3.png";
import { useScore } from "./context/ScoreContet";

export default function TimerCard({ titleTimer, time, player, showTotaScorePlayer1, showTotaScorePlayer2}) {
  const {getTotalScore} = useScore()
  const totalPlayer1 = getTotalScore("Lutador 1");
  const totalPlayer2 = getTotalScore("Lutador 2");
  
  return (
    <div className="relative">
      {/* Container principal - mantendo proporções originais */}
      <div className="flex flex-col items-center justify-center gap-8 
                     2xl:gap-10 3xl:gap-12  tv-lg:gap-12 tv-4k:gap-16">
        {/* TotalScoreCard superior - crescimento moderado */}
        <div className="w-64 2xl:w-96 3xl:w-80 tv-lg:w-[28rem] tv-4k:w-[32rem]">
          <TotalScoreCard title={"Pontuação Final"} player={player} score={totalPlayer1.toString().padStart(2, '0')} />
        </div>

        {/* Timer - crescimento proporcional */}
        <div className="bg-gray-100 w-96 text-black text-center font-bold rounded-lg
                       2xl:w-[38rem] 3xl:w-[32rem]">
          <div className="bg-red-600 text-white text-center text-4xl font-bold py-2
                          2xl:text-5xl 2xl:py-3 3xl:text-6xl">
            {titleTimer}
          </div>
          <p className="text-8xl font-extrabold
                         2xl:text-9xl 3xl:text-9xl">
            {time}
          </p>
          <p className="text-lg mt-2
                         2xl:text-xl 3xl:text-2xl">
            Clique para definir o tempo
          </p>
        </div>

        {/* TotalScoreCard inferior - crescimento moderado */}
        <div className="w-64 2xl:w-96 3xl:w-80">
          <TotalScoreCard title={"Pontuação Final"} score={totalPlayer2.toString().padStart(2, '0')} />
        </div>
      </div>

      {/* Logo - ajuste posicional fino */}
      <div className="absolute -left-52 top-1/2 transform -translate-y-1/3 w-44 hidden opacity-80 md:block
                      2xl:-left-80 2xl:w-72 3xl:-left-64 3xl:w-52">
        <img 
          src={logo} 
          alt="Logo" 
          className="w-full h-auto object-contain" 
        />
      </div>
    </div>
  );
}