import React from 'react'

export default function TotalScoreCard({title, score}) {
  return (
    <div className="bg-gray-200  w-full text-black text-center font-bold rounded-lg tv-lg:rounded-2xl tv-4k:rounded-3x ">
      <h4 className="bg-red-600  text-white text-center py-2 text-2xl font-bold tv-lg:text-5xl tv-lg:py-4 tv-4k:text-6xl tv-4k:py-6">
        {title}
      </h4>
      <p className="text-8xl font-extrabold  2xl:text-9xl tv-lg:text-[12rem] tv-4k:text-[20rem]">
        {score}
      </p>
    </div>
  )
}
