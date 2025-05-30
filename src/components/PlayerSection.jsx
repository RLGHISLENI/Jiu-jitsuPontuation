import React, { useEffect, useState } from "react";
import PlayerInput from "./PlayerInput";
import Blows from "./Blows";
import AdvantagePunishement from "./AdvantagePunishement";
import TimerCard from "./TimerCard";
import { ScoreProvider, useScore } from "./context/ScoreContet";
import Swal from "sweetalert2";

export default function PlayerSection({
  player,
  showTimer,
  showTotaScorePlayer1,
  backgroundColorPunishement,
  borderColorScore,
  borderColorPunishement,
  backgroundColorBLows,
  buttonColor,
  placeholderColor,
  BackGroundColor,
  textColor,
}) {
  const [time, setTime] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { getTotalScore } = useScore();

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  useEffect(() => {
    let interval;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (timeLeft === 0 && isRunning) {
      const score1 = getTotalScore("Lutador 1");
      const score2 = getTotalScore("Lutador 2");

      if (score1 > score2) {
        Swal.fire({
          title: "Ganhador da Luta",
          icon: "success",
          confirmButtonTet: "OK",
          text: "Jogador 1",
        });
      } else if (score2 > score1) {
        alert("O jogador 2 ganhou");
      } else {
        alert("empate");
      }
      setIsRunning(false);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const handleStart = () => {
    if (time > 0) {
      setIsRunning(true);
    }
  };
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(0);
  };

  const handleSetTime = (newTimeInSeconds) => {
    setTime(newTimeInSeconds);
    setTimeLeft(newTimeInSeconds);
  };

  return (
    <section className="h-full">
      <div className="bg-white h-full flex">
        <div
          className={`${BackGroundColor} ${textColor} tv-4k:ps-10 tv-lg:ps-6 p-4 md:p-4 flex-1`}
        >
          <div className="flex flex-col md:flex-row h-full gap-4 md:gap-6 tv-lg:gap-1 tv-4k:gap-1">
            <Blows
              player={player}
              backgroundColorBLows={backgroundColorBLows}
              buttonColor={buttonColor}
              borderColorScore={borderColorScore}
              placeholderColor={placeholderColor}
            />
            <AdvantagePunishement
              borderColorPunishement={borderColorPunishement}
              backgroundColorPunishement={backgroundColorPunishement}
            />
          </div>
        </div>
        {showTimer && (
          <div
            className="flex items-center  justify-center absolute right-12 2xl:top-36 tv-lg:right-24 tv-4k:right-6 
                         top-16 tv-lg:top-64 tv-4k:top-96 "
          >
            <TimerCard
              handleStart={handleStart}
              handlePause={handlePause}
              handleReset={handleReset}
              setTime={handleSetTime}
              titleTimer={isRunning ? "Iniciado" : "Parado"}
              time={formatTime(timeLeft)}
              setIsOpen={setIsOpen}
              handleOpenModal={() => setIsOpen(!isOpen)}
              openModal={isOpen}
            />
          </div>
        )}
      </div>
    </section>
  );
}
