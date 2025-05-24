import React from 'react'

export default function TotalScoreCard({title, score}) {
  return (
    <div className="bg-white w-80 mr-14 text-black text-center text-4xl font-bold rounded-lg">
      <h4 className="bg-red-600 text-white text-center text-4xl font-bold py-2">{title}</h4>
      <p className="text-8xl font-extrabold">{score}</p>
    </div>
  )
}
