import React, { useEffect, useRef, useState } from "react";
import logo from "./assets/logo3.png";
import Blows from "components/Blows";
import PlayerInput from "components/PlayerInput";
import PlayerSection from "components/PlayerSection";
import TimerCard from "components/TimerCard";
import { ScoreProvider, useScore } from "components/context/ScoreContet";
import Modal from "components/Modal";
import Swal from "sweetalert2";
import defaultLogo from "./assets/logo.png";
import VictoryModal from "MessageWinnerUser";

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
  const [showWinner, setShowWinner] = useState(false);
  const [winnerName, setWinnerName] = useState(null);
  const [playerWinner, setPlayerWinner] = useState(null);
  const [logoSrc, setLogoSrc] = useState(() => {
    const savedLogo = localStorage.getItem("customLogo");
    return savedLogo ? savedLogo : defaultLogo;
  });
  const [showLogoModal, setShowLogoModal] = useState(false);
  const [tempLogo, setTempLogo] = useState(null);
  const fileInputRef = useRef(null);

  const handleSetTime = (newTimeInSeconds) => {
    setTime(newTimeInSeconds);
    setTimeLeft(newTimeInSeconds);
    setTimeModalOpen(false);
  };

  useEffect(() => {
    const savedLogo = localStorage.getItem("customLogo");
    if (savedLogo) {
      setLogoSrc(savedLogo);
    }
  }, []);

  const handleWinner = (player) => {
    const name =
      player === "Lutador 1"
        ? namePlayer1 || "Lutador 1"
        : namePlayer2 || "Lutador 2";
    setWinnerName(name);
    setShowWinner(true);
    setPlayerWinner(player);
  };

  const handleWinnerCloseModal = () => {
    handleCleaningScore("Lutador 1");
    handleCleaningScore("Lutador 2");
    resetValuesPunishment();
    setShowWinner(false);
  };

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
    setTempLogo(logoSrc || null); // logo atual para preview
    setShowLogoModal(true);
    console.log("Logo modal opened");
  };

  const confirmLogoChange = () => {
    if (tempLogo) {
      setLogoSrc(tempLogo);
      localStorage.setItem("customLogo", tempLogo);
      setTempLogo(null);
      // Forçar atualização imediata
      setTimeout(() => {
        setShowLogoModal(false);
      }, 100);
    } else {
      setShowLogoModal(false);
    }
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
      {showWinner && (
        <VictoryModal
          playerWinner={playerWinner}
          winnerName={winnerName}
          onClose={handleWinnerCloseModal}
        />
      )}
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
          handleOnPressClose={() => {
            setShowLogoModal(false);
            setTempLogo(null);
          }}
          customContent={
            <div className="flex flex-col items-center space-y-6 px-4">
              {/* Pré-visualização da logo */}
              <div className="w-full flex justify-center">
                <img
                  src={tempLogo || logoSrc || defaultLogo}
                  alt="Prévia da logo"
                  className="w-40 h-40 object-contain rounded-md border border-gray-300 bg-gray-400 shadow-md"
                />
              </div>

              {/* Botão para selecionar nova imagem */}
              <div className="w-full">
                <label className="block w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-lg cursor-pointer transition">
                  Selecionar Nova Logo
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                    ref={fileInputRef}
                  />
                </label>
              </div>

              {/* Botões de ação */}
              <div className="flex justify-center gap-4 w-full">
                <button
                  onClick={confirmLogoChange}
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md transition"
                >
                  Confirmar
                </button>
                <button
                  onClick={resetToDefaultLogo}
                  className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg shadow-md transition"
                >
                  Usar Padrão
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
              handleOpenLogoModal={handleOpenLogoModal}
              textColor="text-white"
              borderColorScore="border-white"
              borderColorPunishement="border-white"
              punishementValue={punishementValue1}
              borderButton="border-white"
              nameWinner="Ganhador 1"
              onPressWinner={() => handleWinner("Lutador 1")}
              vantagemValue={vantagemValue1}
              onPressPunishementTrue={(e) =>
                handlePunishement("Lutador 1", true, e)
              }
              onPressPunishementFalse={(e) =>
                handlePunishement("Lutador 1", false, e)
              }
              logoSrc={logoSrc}
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
              borderButton="border-black"
              time={time}
              timeLeft={timeLeft}
              setTimeLeft={setTimeLeft}
              setTime={setTime}
              setIsOpen={setTimeModalOpen}
              isOpen={timeModalOpen}
              punishementValue={punishementValue2}
              vantagemValue={vantagemValue2}
              onPressPunishementTrue={(e) =>
                handlePunishement("Lutador 2", true, e)
              }
              onPressPunishementFalse={(e) =>
                handlePunishement("Lutador 2", false, e)
              }
              handleOpenLogoModal={handleOpenLogoModal}
              logoSrc={logoSrc}
            />
          </div>
        </div>
        <footer class="bg-white shadow-sm  dark:bg-gray-800">
          <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-center">
            <span class="text-sm text-gray-500 text-center dark:text-gray-400">
              © 2025{" "}
              <a href="https://www.linkedin.com/in/nicolas-menegussi-ramos-85b933293/" class="hover:underline">
                Desenvolvido por Nicolas Menegussi Ramos™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
