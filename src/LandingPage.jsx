import React, { useEffect, useState } from "react";
import logo from "./assets/logo3.png";
import Blows from "components/Blows";
import PlayerInput from "components/PlayerInput";
import PlayerSection from "components/PlayerSection";
import TimerCard from "components/TimerCard";

const LandingPage = ({ disableInstall, handleInstall }) => {
  const [showInstallAlert, setShowInstallAlert] = useState(false);
  // const [nameAzulPlayer, setNameAzulPlayer] = useState("")
  // const [nameBrancoPlayer, setNameBrancoPlayer] = useState("")

  useEffect(() => {
    if (!disableInstall) {
      setShowInstallAlert(true); // exibe o alerta automaticamente
    }
  }, [disableInstall]);

  return (
    <>
      {showInstallAlert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className=" p-6 rounded-lg shadow-xl text-center max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Instalar Aplicativo</h2>
            <p className="mb-6">
              Deseja instalar este aplicativo em seu dispositivo?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  handleInstall();
                  setShowInstallAlert(false);
                }}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Instalar
              </button>
              <button
                onClick={() => setShowInstallAlert(false)}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="font-sans flex flex-col h-screen">
        {" "}
        {/* Adicione h-screen aqui */}
        <div className="flex flex-col flex-1">
          {" "}
          {/* Container principal flexível */}
          {/* Primeira seção (preto) */}
          <div className="flex-1 min-h-0">
            {" "}
            {/* Adicione min-h-0 para controle de altura */}
            <PlayerSection
              buttonColor={"text-white"}
              textInput={"text-white"}
              textLabel={"text-white"}
              placeholderColor={"placeholder-white"}
              BackGroundColor="bg-gray-900"
              textColor="text-white"
              borderColorScore={"border-white"}
              player={"Lutador 1"}
              borderColorPunishement={"border-white"}
            />
          </div>
          {/* Segunda seção (cinza) */}
          <div className="flex-1 min-h-0">
            {" "}
            {/* Adicione min-h-0 para controle de altura */}
            <PlayerSection
              player={"Lutador 2"}
              backgroundColorPunishement={"bg-gray-100"}
              backgroundColorBLows={"bg-gray-100"}
              buttonColor={"text-black"}
              textInput={"text-black"}
              borderColorScore={"border-black"}
              textLabel={"text-black"}
              placeholderColor={"placeholder-black"}
              BackGroundColor="bg-white"
              textColor="text-black"
              borderColorPunishement={"border-black"}
              showTimer={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
