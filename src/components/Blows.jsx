import React from 'react'
import ScoreButton from './ScoreButton'
import PlayerInput from './PlayerInput'

export default function Blows({borderColorScore, player, buttonColor, backgroundColorBLows, textLabel, textInput, borderColor, placeholderColor}) {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full md:flex md:flex-row md:gap-3 md:w-auto">
      <PlayerInput player={player} textLabel={textLabel} textInput={textInput} borderColor={borderColor} placeholderColor={placeholderColor} />
      <ScoreButton borderColorScore={borderColorScore} backgroundColorBLows={backgroundColorBLows} buttonColor={buttonColor} nameBlow="Passagem de guarda" score="00"  />
      <ScoreButton borderColorScore={borderColorScore} backgroundColorBLows={backgroundColorBLows} buttonColor={buttonColor} nameBlow="Montada Pegada nas Costas" score="00" />
      <ScoreButton borderColorScore={borderColorScore} backgroundColorBLows={backgroundColorBLows} buttonColor={buttonColor} nameBlow="Queda / Raspagem / Joelho na barriga" score="00" />
    </div>
  )
}
