import React, { useState } from "react"
import TotalScoreCard from "./TotalScoreCard"
import logo from "../assets/logo3.png"
import { useScore } from "./context/ScoreContet"
import Modal from "./Modal"
import { PauseCircle, PlayCircle, RotateCcw } from "lucide-react"

export default function TimerCard({setTime, titleTimer, handleStart,
  handlePause,
  handleReset ,time, player, handleOpenModal, openModal, setIsOpen}) {
  const {getTotalScore} = useScore()
  const totalPlayer1 = getTotalScore("Lutador 1")
  const totalPlayer2 = getTotalScore("Lutador 2")
  return (
    <div className="relative">
      {/* Container principal - mantendo proporções originais */}
      <div className="flex flex-col items-center justify-center gap-8 
                     2xl:gap-10 3xl:gap-12  tv-lg:gap-12 tv-4k:gap-16">
        {/* TotalScoreCard superior - crescimento moderado */}
        <div className="w-64 2xl:w-96 3xl:w-80 tv-lg:w-[35rem] tv-4k:w-[55rem]">
          <TotalScoreCard title={"Pontuação Final"} player={player} score={totalPlayer1.toString().padStart(2, '0')} />
        </div>

        {/* Timer - crescimento proporcional */}
        <div className="bg-gray-100 w-96 tv-4k:w-[73rem] tv-lg:w-[45rem] text-black text-center font-bold rounded-lg
                       2xl:w-[38rem] 3xl:w-[32rem]">
          <div className="bg-red-600 text-white text-center text-4xl font-bold py-2
                          2xl:text-5xl 2xl:py-3 tv-4k:text-8xl tv-lg:text-5xl">
            {titleTimer}
          </div>
          <p className="text-8xl font-extrabold
                         2xl:text-9xl tv-4k:text-16xl tv-lg:text-10xl hover:text-red-400">
            {time}
          </p>
          <div className="flex justify-center items-center gap-4 mt-4 tv-lg:gap-10 tv-lg:mt-8">
            <button onClick={handleStart}
              className="flex flex-col items-center text-gray-600 hover:text-gray-800 tv-lg:text-5xl"
            >
              <PlayCircle size={23} className="2xl:size-10 tv-lg:size-16" />
            </button>

            <button onClick={handlePause} className="flex flex-col items-center text-yellow-600 hover:text-yellow-800 tv-lg:text-5xl">
              <PauseCircle size={23} className="2xl:size-10 tv-lg:size-16" />
            </button>

            <button onClick={handleReset} className="flex flex-col items-center text-red-600 hover:text-red-800 tv-lg:text-5xl">
              <RotateCcw size={23} className="2xl:size-10 tv-lg:size-16" />
            </button>
            <button onClick={handleOpenModal} className="text-lg
                         2xl:text-xl 3xl:text-2xl tv-4k:text-5xl tv-lg:text-3xl">
            Clique para definir o tempo
          </button>
          
          </div>
        </div>

        {/* TotalScoreCard inferior - crescimento moderado */}
        <div className="w-64 2xl:w-96 3xl:w-80 tv-4k:w-[55rem] tv-lg:w-[35rem]">
          <TotalScoreCard title={"Pontuação Final"} score={totalPlayer2.toString().padStart(2, '0')} />
        </div>
      </div>

      {/* Logo - ajuste posicional fino */}
      <div className="absolute -left-52 top-1/2 transform -translate-y-1/3 w-44 hidden opacity-80 md:block
                      2xl:-left-80 2xl:w-72 tv-4k:-left-[40rem] tv-lg:-left-[35rem] tv-lg:w-[25rem] 3xl:w-52 tv-4k:w-[40rem]">
        <img 
          src={logo} 
          alt="Logo" 
          className="w-full h-auto object-contain" 
        />
      </div>
      {openModal && (
        <Modal setTime={setTime} title='Definir o Tempo de Luta' input={true} handleOnPressClose={() => setIsOpen(false)} titleButtonSet={'Confirmar'} titleButtonCancel={'Cancelar'} />
      )}
    </div>
  )
}