import { createContext, useContext, useState } from "react"

// Primeiro eu crio o Contexto
const ScoreContext = createContext()

// Segundo torno ele exportavel e atraves da funcao propria do react useContext, ele ira tornar aquele contexto Utilizavel
export const useScore = () => useContext(ScoreContext)

// Terceiro Crio o contexto
export const ScoreProvider = ({ children }) => {
  const [namePlayer1, setNamePlayer1] = useState("")
  const [namePlayer2, setNamePlayer2] = useState("")

  const [scoresPlayer1, setScoresPlayer1] = useState([
    {
      id: 1,
      score: 0,
      nameBlowButton: "Passagem de guarda",
    },
    { id: 2, score: 0, nameBlowButton: "Montada Pegada nas Costas" },
    { id: 3, score: 0, nameBlowButton: "Queda/Raspagem/Joelho" },
  ])

  const [scoresPlayer2, setScoresPlayer2] = useState([
    { id: 1, score: 0, nameBlowButton: "Passagem de guarda" },
    { id: 2, score: 0, nameBlowButton: "Montada Pegada nas Costas" },
    { id: 3, score: 0, nameBlowButton: "Queda/Raspagem/Joelho" },
  ])

  const handleChangingScores = (player, blowNameId, pontuation) => {
    if (player === "Lutador 1") {
      setScoresPlayer1(
        scoresPlayer1.map((item) =>
          item.id === blowNameId
            ? { ...item, score: item.score + pontuation }
            : item
        )
      )
    } else {
      setScoresPlayer2(
        scoresPlayer2.map((item) =>
          item.id === blowNameId
            ? { ...item, score: item.score + pontuation }
            : item
        )
      )
    }
  }

  const handleCleaningScore = (player) => {
    if(player === "Lutador 1"){
      const updateScores = scoresPlayer1.map((scores) => scores.score > 0 ? {...scores, score: 0} : scores ) 
      setScoresPlayer1(updateScores)
    } else {
      const updateScores = scoresPlayer2.map((scores) => scores.score > 0 ? {...scores, score: 0} : scores )
      setScoresPlayer2(updateScores)

    }
  }

  const getTotalScore = (player) => {
    const totalScores =
      player === "Lutador 1"
        ? scoresPlayer1.reduce(
            (accumulator, valor) => accumulator + valor.score,
            0
          )
        : scoresPlayer2.reduce(
            (accumulator, valor) => accumulator + valor.score,
            0
          )

    return totalScores
  }

  return (
    <ScoreContext.Provider
      value={{ scoresPlayer1,
        namePlayer2,
        namePlayer1,
        setNamePlayer1,
        setNamePlayer2,
        scoresPlayer2,
        handleChangingScores,
        getTotalScore, handleCleaningScore}}
    >
      {children}
    </ScoreContext.Provider>
  )
}