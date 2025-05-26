import React from "react";
import TotalScoreCard from "./TotalScoreCard";
import logo from "../assets/logo3.png";

export default function TimerCard({ titleTimer, time }) {
  return (
    <div className="relative"> {/* Container relativo para posicionamento absoluto da logo */}
      {/* Estrutura original sem alterações */}
      <div className="flex flex-col items-center  justify-center gap-8">
        <div className="w-64">
          <TotalScoreCard title={"Pontuação Final"} score={"00"} />
        </div>

        <div className="bg-gray-100 w-96 text-black text-center font-bold rounded-lg">
          <div className="bg-red-600 text-white text-center text-4xl font-bold py-2">
            {titleTimer}
          </div>
          <p className="text-8xl font-extrabold">{time}</p>
          <p className="text-lg mt-2">Clique para definir o tempo</p>
        </div>

        <div className="w-64">
          <TotalScoreCard title={"Pontuação Final"} score={"00"} />
        </div>
      </div>

      {/* Logo posicionada absolutamente sem afetar o layout */}
      <div className="absolute -left-52 top-1/2 transform -translate-y-1/4 w-44 hidden opacity-80 md:block">
        <img 
          src={logo} 
          alt="Logo" 
          className="w-full h-auto object-contain" 
        />
      </div>
    </div>
  );
}
