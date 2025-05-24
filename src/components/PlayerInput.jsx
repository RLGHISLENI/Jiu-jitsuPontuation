import React from 'react'

export default function PlayerInput({player, textLabel, textInput, borderColor, placeholderColor}) {
  return (
    <div className="absolute top-[-70px] left-0 right-0 gap-2 flex flex-col items-start md:items-start md:text-center md:top-[-80px]">
      <label
        htmlFor={player}
        className={`text-3xl font-extrabold ${textLabel} select-none`}
      >
        {player}
      </label>
      <input
        id={player}
        type="text"
        placeholder="Digite o nome do atleta"
        className={`w-full max-w-xl text-5xl ${textInput} bg-transparent outline-none ${placeholderColor} tracking-wider `}
      />
    </div>
  )
}
