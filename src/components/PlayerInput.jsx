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
        left-5 right-0 mt-auto
        gap-2 
        flex flex-col 
        items-start sm:items-start md:items-start 
        text-left sm:text-left md:text-center
        
      `}
    >
      <label
        htmlFor={player}
        className={`text-xl sm:text-2xl md:text-3xl 2xl:text-5xl tv-4k:text-8xl tv-lg:text-7xl font-extrabold ${textLabel} select-none`}
      >
        {player}
      </label>
      <input
        id={player}
        
        type="text"
        placeholder="Digite o nome do atleta"
        className={` tv-4k:max-w-[70rem] lg-4k:max-w-[70rem] tv-lg:max-w-[50rem]
          tv-4k:text-8xl
          tv-lg:text-7xl
          w-full max-w-xl md:max-w-xl lg:max-w-xl
          text-2xl sm:text-3xl md:text-5xl lg:text-5xl
          ${textInput} bg-transparent outline-none ${placeholderColor}
          tracking-wide
        `}
      />
    </div>
  );
}
