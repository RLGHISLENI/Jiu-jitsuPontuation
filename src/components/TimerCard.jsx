import React from "react";
import TotalScoreCard from "./TotalScoreCard";

export default function TimerCard({titleTimer, time}) {
  return (
    <div className="h-0 flex flex-col items-end text-center justify-center mr-3 gap-7">
      <TotalScoreCard title={'Pontuação Final'} score={'00'} />
      <div className="bg-gray-100 w-1/3  text-black text-center text-4xl font-bold rounded-lg">
        <div className="bg-red-600 text-white text-center text-4xl font-bold py-2">
          {titleTimer}
        </div>
        <p className="text-8xl font-extrabold">{time}</p>
        <p className="text-lg mt-2">Clique para definir o tempo</p>
      </div>
      <TotalScoreCard title={'Pontuação Final'} score={'00'} />
    </div>
  );
}
