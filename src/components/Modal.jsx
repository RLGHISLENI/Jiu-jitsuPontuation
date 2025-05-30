import { X } from "lucide-react";
import React, { useState } from "react";

export default function Modal({
  title,
  description,
  handleOnPressClose,
  handleButtonSet,
  titleButtonSet,
  titleButtonCancel,
  input = false,
  setTime,
}) {
  const [inputValue, setInputValue] = useState("");

  const handleConfirm = () => {
    const [minStr, secStr] = inputValue.split(":");
    const minutes = parseInt(minStr, 10);
    const seconds = parseInt(secStr, 10);

    const totalSeconds = minutes * 60 + seconds;

    if (
      !isNaN(minutes) &&
      !isNaN(seconds) &&
      minutes >= 0 &&
      seconds >= 0 &&
      seconds < 60 &&
      totalSeconds > 0 &&
      totalSeconds <= 3600
    ) {
      setTime(totalSeconds);
      handleOnPressClose();
    } else {
      alert("⛔ Digite um tempo válido no formato MM:SS, até 60 minutos.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-all duration-300">
      <div className="relative w-full max-w-md tv-lg:max-w-[60rem] tv-lg:p-12 p-6 bg-white rounded-2xl shadow-2xl transform transition-all scale-100 animate-fadeIn">
        {/* Cabeçalho */}
        <div className="flex justify-between items-center mb-4 flex-row">
          <h2 className="text-2xl tv-lg:text-5xl font-semibold text-gray-800 text-start">
            {title}
          </h2>
          <button
            className="bg-blue-100 p-3 rounded-full tv-lg:p-5"
            onClick={handleOnPressClose}
          >
            <X color="blue" size={23} className="tv-lg:size-[3rem]" />
          </button>
        </div>

        {input ? (
          <div className="mb-6">
            <p className="text-xs tv-lg:text-4xl text-gray-500 mb-3 tv-lg:mb-10">
              Escolha o tempo total da luta em minutos ou segundos.
            </p>
            <div className="relative">
              <input
                value={inputValue}
                onChange={(e) => {
                  setInputValue(
                    e.target.value.replace(/[^0-9:]/g, "").slice(0, 5)
                  );
                }}
                id="fight-time"
                min="1"
                max="60"
                placeholder="MM:SS"
                className="w-full px-4 py-2 tv-lg:py-4 tv-lg:px-6 text-sm tv-lg:text-4xl border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                style={{
                  MozAppearance: "textfield",
                }}
              />
            </div>
          </div>
        ) : (
          { description }
        )}

        {/* Botões */}
        <div className="flex justify-center gap-4 tv-lg:gap-8 tv-lg:text-4xl">
          <button
            onClick={handleConfirm}
            className="px-5 py-2.5 tv-lg:px-10 tv-lg:py-5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {titleButtonSet}
          </button>
          <button
            onClick={handleOnPressClose}
            className="px-5 py-2.5 tv-lg:px-10 tv-lg:py-5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            {titleButtonCancel}
          </button>
        </div>
      </div>
    </div>
  );
}
