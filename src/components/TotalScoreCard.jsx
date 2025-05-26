import React from 'react'

export default function TotalScoreCard({title, score}) {
  return (
    <div className="bg-gray-100 w-full sm:w-72 md:w-80 text-black text-center lg:mr-32 font-bold rounded-lg">
      <h4 className="bg-red-600 text-white text-center py-2 text-xl sm:text-2xl md:text-4xl font-bold">
        {title}
      </h4>
      <p className="lg:text-8xl text-7xl md:text-8xl font-extrabold py-6">
        {score}
      </p>
    </div>
  )
}
