import React, { useEffect, useState } from "react";
import logo from "./assets/logo2.png";
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl text-center max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Instalar Aplicativo</h2>
            <p className="mb-6">Deseja instalar este aplicativo em seu dispositivo?</p>
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
      <div className="font-sans min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="bg-gray-100">
          <div className="relative w-full md:h-auto">
            <img
              src={logo} // Altere para a URL da sua imagem
              alt="Imagem de fundo"
              className="absolute w-40 top-[60px] h-auto left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity"
            />
          </div>
          <PlayerSection
            buttonColor={"text-black"}
            textInput={"text-black"}
            textLabel={"text-black"}
            placeholderColor={"placeholder-black"}
            BackGroundColor="bg-gray-200"
            textColor="text-black"
          />
          <div className="relative ">
            <TimerCard titleTimer="Parado" time="10:00" />
          </div>

          <div>
            <PlayerSection
              buttonColor={"text-white"}
              textInput={"text-white"}
              textLabel={"text-white"}
              placeholderColor={"placeholder-white"}
              BackGroundColor="bg-gray-900"
              textColor="text-white"
            />
          </div>
        </section>

        {/* Footer */}
        {/* <footer
          id="contact"
          className="bg-gray-900 text-gray-200 py-10 mt-auto"
        >
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} MyBrand. All rights reserved.</p>
            <div className="space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">
                Privacy
              </a>
              <a href="#" className="hover:text-white">
                Terms
              </a>
              <a href="#" className="hover:text-white">
                Support
              </a>
            </div>
          </div>
        </footer> */}
      </div>
    </>
  );
};

export default LandingPage;
