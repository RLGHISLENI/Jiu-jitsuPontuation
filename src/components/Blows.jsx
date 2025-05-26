import React from 'react'
import ScoreButton from './ScoreButton'

export default function Blows({buttonColor, backgroundColorBLows}) {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full md:flex md:flex-row md:gap-3 md:mt-10 mt-10 lg:mt-10 md:w-auto">
      <ScoreButton backgroundColorBLows={backgroundColorBLows} buttonColor={buttonColor} nameBlow="Passagem de guarda" score="00"  />
      <ScoreButton backgroundColorBLows={backgroundColorBLows} buttonColor={buttonColor} nameBlow="Montada Pegada nas Costas" score="00" />
      <ScoreButton backgroundColorBLows={backgroundColorBLows} buttonColor={buttonColor} nameBlow="Queda / Raspagem / Joelho na barriga" score="00" />
    </div>
  )
}
