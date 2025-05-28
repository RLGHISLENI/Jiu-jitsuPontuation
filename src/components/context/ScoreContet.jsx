import { createContext, useContext, useState } from "react"

// Primeiro eu crio o Contexto
const ScoreContext = createContext()

// Segundo torno ele exportavel e atraves da funcao propria do react useContext, ele ira tornar aquele contexto Utilizavel
export const useScore = () => useContext(ScoreContext)

// Terceiro Crio o contexto
export const ScoreProvider = ({ children }) => {
  const [Scores, setScores] = useState([
    {
      id: 1,
      score: 0,
      nameBlowButton: "Passagem de guarda",
    },
    { id: 2, score: 0, nameBlowButton: "Montada Pegada nas Costas" },
    { id: 3, score: 0, nameBlowButton: "Queda/Raspagem/Joelho" },
  ])
//   const [Scores, setScores] = useState({
//   player1: [
//     { id: 1, score: 0, nameBlowButton: "Passagem de guarda" },
//     { id: 2, score: 0, nameBlowButton: "Montada Pegada nas Costas" },
//     { id: 3, score: 0, nameBlowButton: "Queda/Raspagem/Joelho" },
//   ],
//   player2: [
//     { id: 1, score: 0, nameBlowButton: "Passagem de guarda" },
//     { id: 2, score: 0, nameBlowButton: "Montada Pegada nas Costas" },
//     { id: 3, score: 0, nameBlowButton: "Queda/Raspagem/Joelho" },
//   ]
// })

  const handleChangingScores = (blowNameId, pontuation) => {
    setScores(
      Scores.map((item) =>
        item.id === blowNameId
          ? { ...item, score: item.score + pontuation }
          : item
      )
    )
  };

  const totalScores = Scores.reduce(
    (accumulator, valor) => accumulator + valor.score,
    0
  )
  return (
    <ScoreContext.Provider value={{Scores, handleChangingScores, totalScores}}>
        {children}
    </ScoreContext.Provider>
  )
}
