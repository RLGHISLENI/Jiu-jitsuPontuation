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
        <Modal titleButtonSet='Instalar' titleButtonCancel='Cancelar' title='Instalar Aplicativo' description='Deseja instalar este aplicativo em seu dispositivo?' handleButtonSet={() => {
          handleInstall();
          setShowInstallAlert(false)
        }} handleOnPressClose={() => setShowInstallAlert(false)} />
      )}
      <div className="font-sans flex flex-col h-screen">
        <div className="flex flex-col flex-1">
          <div className="flex-1 min-h-0">
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
          <div className="flex-1 min-h-0">
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
