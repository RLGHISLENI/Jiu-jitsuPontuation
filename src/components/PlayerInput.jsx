import React from 'react';

export default function PlayerInput({
  player,
  textLabel,
  textInput,
  borderColor,
  placeholderColor,
}) {
  return (
    <div
      className={`
        absolute 
        top-[-50px] md:top-[-80px] lg:top-[-70px]
        left-0 right-0 
        gap-2 
        flex flex-col 
        items-start sm:items-start md:items-start 
        text-left sm:text-left md:text-center
        
      `}
    >
      <label
        htmlFor={player}
        className={`text-xl sm:text-2xl md:text-3xl font-extrabold ${textLabel} select-none`}
      >
        {player}
      </label>
      <input
        id={player}
        type="text"
        placeholder="Digite o nome do atleta"
        className={`
          w-full max-w-xl md:max-w-xl lg:max-w-xl
          text-2xl sm:text-3xl md:text-5xl lg:text-5xl
          ${textInput} bg-transparent outline-none ${placeholderColor}
          tracking-wide
        `}
      />
    </div>
  );
}
