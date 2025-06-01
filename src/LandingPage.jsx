import React, { useEffect, useState } from "react";
import logo from "./assets/logo3.png";
import Blows from "components/Blows";
import PlayerInput from "components/PlayerInput";
import PlayerSection from "components/PlayerSection";
import TimerCard from "components/TimerCard";
import { ScoreProvider, useScore } from "components/context/ScoreContet";
import Modal from "components/Modal";

const LandingPage = ({ disableInstall, handleInstall }) => {
  const [showInstallAlert, setShowInstallAlert] = useState(false);
  const {
    punishementValue1,
    punishementValue2,
    handlePunishement,
    vantagemValue1,
    vantagemValue2,
  } = useScore();
  const [timeModalOpen, setTimeModalOpen] = useState(false);
  const [time, setTime] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);

  const handleSetTime = (newTimeInSeconds) => {
    setTime(newTimeInSeconds);
    setTimeLeft(newTimeInSeconds);
    setTimeModalOpen(false);
  };

  useEffect(() => {
    if (!disableInstall) {
      setShowInstallAlert(true);
    }
  }, [disableInstall]);

  return (
    <>
      {showInstallAlert && (
        <Modal
          buttonInput={true}
          titleButtonSet="Instalar"
          titleButtonCancel="Cancelar"
          title="Instalar Aplicativo"
          description="Deseja instalar este aplicativo em seu dispositivo?"
          handleButtonSet={() => {
            handleInstall();
            setShowInstallAlert(false);
          }}
          handleOnPressClose={() => setShowInstallAlert(false)}
        />
      )}

      {/* Modal de Definir Tempo */}
      {timeModalOpen && (
        <Modal
          input={true}
          setTime={handleSetTime}
          buttonInput={false}
          title="Definir o Tempo de Luta"
          titleButtonSet="Confirmar"
          titleButtonCancel="Cancelar"
          handleOnPressClose={() => setTimeModalOpen(false)}
        />
      )}

      <div className="font-sans flex flex-col h-screen">
        <div className="flex flex-col flex-1">
          <div className="flex-1 min-h-0">
            <PlayerSection
              // Player 1 props
              player="Lutador 1"
              buttonColor="text-white"
              textInput="text-white"
              textLabel="text-white"
              placeholderColor="placeholder-white"
              BackGroundColor="bg-gray-900"
              textColor="text-white"
              borderColorScore="border-white"
              borderColorPunishement="border-white"
              punishementValue={punishementValue1}
              vantagemValue={vantagemValue1}
              onPressPunishementTrue={() =>
                handlePunishement("Lutador 1", true)
              }
              onPressPunishementFalse={() =>
                handlePunishement("Lutador 1", false)
              }
            />
          </div>
          <div className="flex-1 min-h-0">
            <PlayerSection
              // Player 2 props + timer
              player="Lutador 2"
              backgroundColorPunishement="bg-gray-100"
              backgroundColorBLows="bg-gray-100"
              buttonColor="text-black"
              textInput="text-black"
              borderColorScore="border-black"
              textLabel="text-black"
              placeholderColor="placeholder-black"
              BackGroundColor="bg-white"
              textColor="text-black"
              borderColorPunishement="border-black"
              showTimer={true}
              time={time}
              timeLeft={timeLeft}
              setTimeLeft={setTimeLeft}
              setTime={setTime}
              setIsOpen={setTimeModalOpen}
              isOpen={timeModalOpen}
              punishementValue={punishementValue2}
              vantagemValue={vantagemValue2}
              onPressPunishementTrue={() =>
                handlePunishement("Lutador 2", true)
              }
              onPressPunishementFalse={() =>
                handlePunishement("Lutador 2", false)
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
