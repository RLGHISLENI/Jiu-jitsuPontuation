import React from "react";

const VictoryModal = ({playerWinner, winnerName, onClose}) => {
    console.log(playerWinner)
  return (
    <div className={`fixed inset-0 ${playerWinner === 'Lutador 1' ? 'bg-black' : 'bg-white'} z-50 flex flex-col items-center justify-center text-center p-4`}>
      <h1 className={`text-4xl xl:text-6xl font-bold ${playerWinner === 'Lutador 1' ? 'text-white' : 'text-black'} mb-4`}>Ganhador da Luta</h1>
      <h2 className={`text-2xl ${playerWinner === 'Lutador 1' ? 'text-gray-300' : 'text-gray-700'} mb-6 xl:text-6xl`}>{winnerName}</h2>
      <button
  onClick={onClose}
  className={`px-6 py-2 rounded-lg transition duration-300 
    ${playerWinner === 'Lutador 1' ? 'bg-white text-black hover:bg-gray-300' : 'bg-black text-white hover:bg-gray-800'}`}
>
  OK
</button>
    </div>
  );
};

export default VictoryModal;