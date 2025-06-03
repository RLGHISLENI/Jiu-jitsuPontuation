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
  backgroundColorPunishement,
  borderColorScore,
  borderColorPunishement,
  backgroundColorBLows,
  buttonColor,
  placeholderColor,
  BackGroundColor,
  textColor,
  time,
  timeLeft,
  setTimeLeft,
  setTime,
  isOpen,
  setIsOpen,
  vantagemValue,
  nameWinner,
  onPressWinner,
  onPressPunishementTrue,
  onPressPunishementFalse,
  handleOpenModal,
  punishementValue,
  handleOpenLogoModal,
  winnerChosen,
}) {
  const [isRunning, setIsRunning] = useState(false);
  const {
    getTotalScore,
    namePlayer1,
    namePlayer2,
    handleCleaningScore,
    resetValuesPunishment,
  } = useScore();

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

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const handleStart = () => {
    if (time > 0 && timeLeft > 0) {
      setIsRunning(true);
    } else {
      Swal.fire({
        icon: "warning",
        title: "Tempo inválido",
        text: "Defina um tempo antes de iniciar a luta.",
      });
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
      <div className={`${BackGroundColor} ${textColor} p-4 flex-1 h-full`}>
        <div className="flex flex-col gap-4">
          {/* Container principal com justify-between para ocupar todo o espaço */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-4">
            {/* Container dos componentes Blows e AdvantagePunishement */}
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 xl:gap-8">
              {/* Blows */}
              <div className="shrink-0">
                <Blows
                  player={player}
                  backgroundColorBLows={backgroundColorBLows}
                  buttonColor={buttonColor}
                  borderColorScore={borderColorScore}
                  placeholderColor={placeholderColor}
                />
              </div>

              {/* AdvantagePunishement */}
              <div className="shrink-0">
                <AdvantagePunishement
                  onPressPunishementTrue={onPressPunishementTrue}
                  onPressPunishementFalse={onPressPunishementFalse}
                  punishementValue={punishementValue}
                  onPressWinner={onPressWinner}
                  vantagemValue={vantagemValue}
                  nameWinner={nameWinner}
                  borderColorPunishement={borderColorPunishement}
                  backgroundColorPunishement={backgroundColorPunishement}
                />
              </div>
            </div>

            {/* TimerCard - posicionado à direita com margem automática */}
            {showTimer && (
              <div className="h-0 ml-auto lg:ml-0 flex items-end justify-center mt-[20%]"> {/* ml-auto empurra para a direita */}
                <TimerCard
                  handleStart={handleStart}
                  handlePause={handlePause}
                  handleReset={handleReset}
                  setTime={handleSetTime}
                  titleTimer={isRunning && timeLeft > 0 ? "Iniciado" : "Parado"}
                  time={formatTime(timeLeft)}
                  setIsOpen={setIsOpen}
                  handleOpenModal={() => setIsOpen(!isOpen)}
                  handleOpenLogoModal={handleOpenLogoModal}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
