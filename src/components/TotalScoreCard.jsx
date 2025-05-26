import React from 'react'

export default function TotalScoreCard({title, score}) {
  return (
    <div className="bg-gray-200  w-full text-black text-center font-bold rounded-lg">
      <h4 className="bg-red-600 text-white text-center py-2 text-3xl font-bold">
        {title}
      </h4>
      <p className="text-8xl font-extrabold  ">
        {score}
      </p>
    </div>
  )
}
