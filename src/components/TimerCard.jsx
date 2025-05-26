import React from "react";
import TotalScoreCard from "./TotalScoreCard";

export default function TimerCard({titleTimer, time}) {
  return (
    <div className="lg:h-0 md:flex-row md:items-center flex-col p-4  gap-4 md:mr-0 md:gap-6 md:p-4 flex lg:flex-col lg:items-end text-center justify-center lg:mr-3 lg:gap-7">
      <TotalScoreCard title={'Pontuação Final'} score={'00'} />
      <div className="bg-gray-100 md:w-96 w-full lg:w-1/3  text-black text-center  font-bold rounded-lg">
        <div className="bg-red-600 text-white text-center text-4xl font-bold py-2">
          {titleTimer}
        </div>
        <p className="text-8xl font-extrabold">{time}</p>
        <p className="text-lg mt-2">Clique para definir o tempo</p>
      </div>
      <TotalScoreCard title={'Pontuação Final'} score={'00'} />
    </div>
  );
}


// import React from "react";
// import TotalScoreCard from "./TotalScoreCard";

// export default function TimerCard({ titleTimer, time }) {
//   return (
//     <div className="flex flex-col bg-transparent md:flex-row items-center justify-center gap-6 p-4">
//       <TotalScoreCard title="Pontuação Final" score="00" />

//       <div className="bg-gray-100 w-full sm:w-72 md:w-80 text-black text-center rounded-lg">
//         <div className="bg-red-600 text-white py-2 text-xl sm:text-2xl md:text-4xl font-bold">
//           {titleTimer}
//         </div>
//         <p className="text-5xl sm:text-7xl md:text-8xl font-extrabold py-6">{time}</p>
//         <p className="text-sm sm:text-base mt-2">Clique para definir o tempo</p>
//       </div>

//       <TotalScoreCard title="Pontuação Final" score="00" />
//     </div>
//   );
// }
// import React from "react";
// import TotalScoreCard from "./TotalScoreCard";

// export default function TimerCard({titleTimer, time}) {
//   return (
//     <div className="flex lg:flex-col lg:items-end items-center md:flex-row text-center justify-center md:mr-0 md:p-7 gap-7">
//       <TotalScoreCard title={'Pontuação Final'} score={'00'} />
//       <div className="bg-gray-100 lg:w-full  text-black text-center text-4xl font-bold rounded-lg">
//         <div className="bg-red-600 text-white text-center text-4xl font-bold py-2">
//           {titleTimer}
//         </div>
//         <p className="text-8xl font-extrabold">{time}</p>
//         <p className="text-lg mt-2">Clique para definir o tempo</p>
//       </div>
//       <TotalScoreCard title={'Pontuação Final'} score={'00'} />
//     </div>
//   );
// }
