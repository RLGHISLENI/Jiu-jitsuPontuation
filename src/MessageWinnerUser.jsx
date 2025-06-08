import React, { useEffect } from "react";
import { X } from "lucide-react";

const VictoryModal = ({ playerWinner, winnerName, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const isPlayer1 = playerWinner === "Lutador 1";
  const currentWinner = winnerName || (isPlayer1 ? "Lutador 1" : "Lutador 2");

  return (
    <div
      className={`fixed inset-0 ${
        isPlayer1 ? "bg-black" : "bg-white"
      } z-50 flex flex-col items-center justify-center text-center p-4 transition-all duration-500`}
    >
      {/* Botão de fechar */}
      <button
        onClick={onClose}
        className={`fixed ${
          isPlayer1 ? "top-6 left-6" : "top-6 right-6"
        } p-3 rounded-full transition-all duration-300 
          ${
            isPlayer1
              ? "bg-white text-black hover:bg-gray-300"
              : "bg-black text-white hover:bg-gray-800"
          } 
          hover:scale-110 shadow-lg hover:shadow-xl flex items-center justify-center
          group z-50`}
        aria-label="Fechar (ESC)"
      >
        <X size={30} className="w-8 h-8" />
      </button>

      {/* Conteúdo central */}
      <div className="w-full max-w-4xl mx-auto animate-fadeIn">
        <h1
          className={`text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold ${
            isPlayer1 ? "text-white" : "text-black"
          } mb-8 md:mb-12 animate-pulse`}
        >
          VENCEDOR
        </h1>

        <h2
          className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold ${
            isPlayer1 ? "text-white" : "text-black"
          } mb-10 md:mb-16 animate-float`}
        >
          {currentWinner}
        </h2>

        <p
          className={`text-2xl md:text-3xl ${
            isPlayer1 ? "text-gray-300" : "text-gray-700"
          } mt-8`}
        >
          Pressione ESC ou clique no X para continuar
        </p>
      </div>
    </div>
  );
};

export default VictoryModal;
