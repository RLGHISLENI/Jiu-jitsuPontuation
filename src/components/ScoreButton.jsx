import React, { useEffect, useRef } from "react"

export default function ScoreButton({
  ButtonScorePoint,
  RemoveScorePoint,
  nameBlow,
  score,
  buttonColor,
  backgroundColorBLows,
  borderColorScore,
}) {
  const ctrlAndEPressedRef = useRef(false)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key.toLowerCase() === 'e') {
        ctrlAndEPressedRef.current = true
      }
    }

    const handleKeyUp = (e) => {
      if (e.key.toLowerCase() === 'e' || e.key === 'Control') {
        ctrlAndEPressedRef.current = false
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("keyup", handleKeyUp)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("keyup", handleKeyUp)
    }
  }, [])

  const handleClick = () => {
    if (ctrlAndEPressedRef.current) {
      RemoveScorePoint() // Ctrl+E+Click
    } else {
      ButtonScorePoint() // Click normal ou Ctrl sozinho
    }
  }

  return (
    <div className="flex flex-col items-center text-center 2xl:mt-40 lg:mt-20 mt-28">
      <p
        className="text-sm md:text-md font-medium mb-1 md:mb-2 lg:break-words lg:max-w-32
                   2xl:text-sm 2xl:max-w-80 3xl:text-xl tv-lg:text-3xl tv-4k:max-w-[60rem] tv-4k:text-4xl  tv-4k:mb-10 tv-4k:mt-60 tv-lg:mb-5 tv-lg:mt-28"
      >
       {nameBlow}
      </p>
      <button
        onClick={handleClick}
        className={`w-full 2xl:w-72 lg:w-44 xl:w-60 flex items-center justify-center cursor-pointer 
                   ${buttonColor} text-6xl lg:text-9xl xl:text-10xl font-extrabold border ${borderColorScore} rounded-xl 
                   ring-2 ring-white/40 ${backgroundColorBLows} hover:text-yellow-400 shadow-lg hover:shadow-2xl hover:scale-105 
                   transition-all duration-300
                   2xl:text-10xl 2xl:py-5 3xl:text-8xl 3xl:py-6 tv-4k:text-17xl tv-4k:w-[45rem] tv-lg:text-15xl tv-lg:w-[25rem]  `}
      >
        <h4>{score >= 0 ? score : "00"}</h4>
      </button>
    </div>
  )
}
