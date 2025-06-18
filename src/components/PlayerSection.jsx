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
  borderButton,
  logoSrc,
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
}) {
  const [isRunning, setIsRunning] = useState(false);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  useEffect(() => {
    window.addEventListener("keydown", handlePause);
    return () => window.removeEventListener("keydown", handlePause);
  }, []);

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
  const handlePause = (e) => {
    const isTyping =
      e.target.tagName === "INPUT" ||
      e.target.tagName === "TEXTAREA" ||
      e.target.isContentEditable;

    if (!isTyping && e.code === "Space") {
      e.preventDefault();
      setIsRunning((prev) => !prev);
    }
  };
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
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-4">
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 xl:gap-8">
                <Blows
                  borderButton={borderButton}
                  player={player}
                  backgroundColorBLows={backgroundColorBLows}
                  buttonColor={buttonColor}
                  borderColorScore={borderColorScore}
                  placeholderColor={placeholderColor}
                  nameWinner={nameWinner}
                  onPressWinner={onPressWinner}
                />

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

              {/* TimerCard - posicionado à direita com margem automática */}
              {showTimer && (
                <div className="h-0 lg:ml-0 me-4 flex items-end justify-center mt-[19%]">
                  {" "}
                  {/* ml-auto empurra para a direita */}
                  <TimerCard
                    handleStart={handleStart}
                    handlePause={(e) => handlePause(e)}
                    handleReset={handleReset}
                    setTime={handleSetTime}
                    titleTimer={
                      isRunning && timeLeft > 0 ? "Iniciado" : "Parado"
                    }
                    time={formatTime(timeLeft)}
                    setIsOpen={setIsOpen}
                    handleOpenModal={() => setIsOpen(!isOpen)}
                    logoSrc={logoSrc}
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
