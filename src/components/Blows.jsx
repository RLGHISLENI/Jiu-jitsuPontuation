import React, { useState } from 'react'
import ScoreButton from './ScoreButton'
import PlayerInput from './PlayerInput'

export default function Blows({nameBlow, borderColorScore, player, buttonColor, backgroundColorBLows, textLabel, textInput, borderColor, placeholderColor}) {
  const [ScoreButtonData, SetScoreButtonData] = useState({
    passagemGuard: 0
  })
  
  const handleChangingScores = (blowName, score) => {
    if(blowName !== null && undefined && score !== null && score !== undefined){
      SetScoreButtonData({...ScoreButtonData.passagemGuard, passagemGuard: + 1})
    }
  }

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full md:flex md:flex-row md:gap-3 2xl:gap-4 md:w-auto">
        <PlayerInput 
          player={player} 
          textLabel={textLabel} 
          textInput={textInput} 
          borderColor={borderColor} 
          placeholderColor={placeholderColor} 
        />
      
      {/* ScoreButtons com espaçamento proporcional */}
      <ScoreButton 
        ButtonScorePoint={handleChangingScores(nameBlow, ScoreButtonData.passagemGuard)}
        borderColorScore={borderColorScore}
        backgroundColorBLows={backgroundColorBLows}
        buttonColor={buttonColor}
        nameBlow={nameBlow}
        score={ScoreButtonData.passagemGuard.toString().padStart(2, '0')}
      />
      <ScoreButton 
        borderColorScore={borderColorScore}
        backgroundColorBLows={backgroundColorBLows}
        buttonColor={buttonColor}
        nameBlow="Montada Pegada nas Costas"
        score="00"
      />
      <ScoreButton 
        borderColorScore={borderColorScore}
        backgroundColorBLows={backgroundColorBLows}
        buttonColor={buttonColor}
        nameBlow="Queda/Raspagem/Joelho"
        score="00"
      />
    </div>
  )
}
