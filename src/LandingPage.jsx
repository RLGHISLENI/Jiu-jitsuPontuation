import React, { useEffect, useRef, useState } from "react";
import logo from "./assets/logo3.png";
import Blows from "components/Blows";
import PlayerInput from "components/PlayerInput";
import PlayerSection from "components/PlayerSection";
import TimerCard from "components/TimerCard";
import { ScoreProvider, useScore } from "components/context/ScoreContet";
import Modal from "components/Modal";
import Swal from "sweetalert2";
import defaultLogo from "./assets/logo3.png";

const LandingPage = ({ disableInstall, handleInstall }) => {
  const [showInstallAlert, setShowInstallAlert] = useState(false);
  const {
    punishementValue1,
    punishementValue2,
    handlePunishement,
    vantagemValue1,
    vantagemValue2,
    namePlayer1,
    namePlayer2,
    resetValuesPunishment,
    handleCleaningScore,
  } = useScore();
  const [timeModalOpen, setTimeModalOpen] = useState(false);
  const [time, setTime] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);

  const handleSetTime = (newTimeInSeconds) => {
    setTime(newTimeInSeconds);
    setTimeLeft(newTimeInSeconds);
    setTimeModalOpen(false);
  };

  const handleWinner = (player) => {
    if (player === "Lutador 1") {
      Swal.fire({
        title: "🏆 Ganhador da Luta",
        icon: "success",
        text: `Jogador cujo nome é ${
          namePlayer1 ? namePlayer1 : "Lutador 1"
        } venceu!`,
        confirmButtonText: "OK",
        allowOutsideClick: false,
        allowEscapeKey: false,
      }).then((result) => {
        if (result.isConfirmed) {
          handleCleaningScore("Lutador 1");
          handleCleaningScore("Lutador 2");
          resetValuesPunishment();
        }
      });
    } else {
      Swal.fire({
        title: "🏆 Ganhador da Luta",
        icon: "success",
        text: `Jogador cujo nome é ${
          namePlayer2 ? namePlayer2 : "Lutador 2"
        } venceu!`,
        confirmButtonText: "OK",
        allowOutsideClick: false,
        allowEscapeKey: false,
      }).then((result) => {
        if (result.isConfirmed) {
          handleCleaningScore("Lutador 1");
          handleCleaningScore("Lutador 2");
          resetValuesPunishment();
        }
      });
    }
  };

  const [logoSrc, setLogoSrc] = useState(() => {
    const savedLogo = localStorage.getItem("customLogo");
    return savedLogo ? savedLogo : defaultLogo;
  });

  const [showLogoModal, setShowLogoModal] = useState(false);
  const [tempLogo, setTempLogo] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setTempLogo(reader.result);
      setShowLogoModal(true);
    };
    reader.readAsDataURL(file);
  };

  const handleOpenLogoModal = () => {
  fileInputRef.current?.click(); // isso abre o seletor de arquivos
};

  const confirmLogoChange = () => {
    if (tempLogo) {
      setLogoSrc(tempLogo);
      localStorage.setItem("customLogo", tempLogo);
      setTempLogo(null);
    }
    setShowLogoModal(false);
  };

  const resetToDefaultLogo = () => {
    setLogoSrc(defaultLogo);
    localStorage.removeItem("customLogo");
    setShowLogoModal(false);
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
      {showLogoModal && (
        <Modal
          title="Alterar Logo"
          description="Confirme a nova logo ou cancele para manter a atual."
          input={false}
          handleOnPressClose={() => {
            setShowLogoModal(false);
            setTempLogo(null);
          }}
          customContent={
            <div className="flex flex-col items-center space-y-4">
              {tempLogo && (
                <img
                  src={tempLogo}
                  alt="Prévia da nova logo"
                  className="w-40 h-auto object-contain rounded border"
                />
              )}
              <div className="flex space-x-4">
                <button
                  onClick={confirmLogoChange}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                >
                  Confirmar
                </button>
                <button
                  onClick={() => {
                    setShowLogoModal(false);
                    setTempLogo(null);
                  }}
                  className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
                >
                  Cancelar
                </button>
                <button
                  onClick={resetToDefaultLogo}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                >
                  Resetar para padrão
                </button>
              </div>
            </div>
          }
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
              handleOpenModal={() => setShowLogoModal(true)}
              textColor="text-white"
              borderColorScore="border-white"
              borderColorPunishement="border-white"
              punishementValue={punishementValue1}
              nameWinner="Ganhador 1"
              onPressWinner={() => handleWinner("Lutador 1")}
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
              nameWinner="Ganhador 2"
              onPressWinner={() => handleWinner("Lutador 2")}
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
