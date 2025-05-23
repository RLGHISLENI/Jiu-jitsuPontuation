import React, { useEffect, useState } from "react";

const LandingPage = ({ disableInstall, handleInstall }) => {
  const [showInstallAlert, setShowInstallAlert] = useState(false);

  useEffect(() => {
    if (!disableInstall) {
      setShowInstallAlert(true); // exibe o alerta automaticamente
    }
  }, [disableInstall]);

  return (
    <>
      {showInstallAlert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl text-center max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Instalar Aplicativo</h2>
            <p className="mb-6">Deseja instalar este aplicativo em seu dispositivo?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  handleInstall();
                  setShowInstallAlert(false);
                }}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Instalar
              </button>
              <button
                onClick={() => setShowInstallAlert(false)}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="font-sans text-gray-900 min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="bg-gray-100 ">
          {/* Aqui insere seu layout customizado (primeira UI) */}
          <div className="bg-white flex items-center">
            <div className="w-full max-w-full overflow-hidden">
              <div className="bg-blue-600 text-white p-4 md:p-8">
                <div className="ml-4 md:ml-0 flex justify-center md:justify-start ">
                  {/* Ajustei margens para mobile e centralizei o logo */}
                  <img
                    src="/logo.png"
                    alt="Logo do evento"
                    className="w-20 md:w-24 h-auto" // largura menor em mobile
                  />
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:gap-8">
                  {/* Passagem de Guarda - Container */}
                  <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full md:flex md:flex-row md:gap-3 md:mt-10 md:w-auto">

                    {/* Passagem de guarda 1 */}
                    <div className="flex flex-col items-center text-center">
                      <p className="text-sm md:text-md font-medium mb-1 md:mb-2">Passagem de guarda</p>
                      <div className="w-full md:w-56 flex items-center justify-center cursor-pointer 
          text-white text-6xl md:text-9xl font-extrabold border border-white rounded-xl 
          ring-2 ring-white/40 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                        <h4>00</h4>
                      </div>
                    </div>

                    {/* Passagem de guarda 2 */}
                    <div className="flex flex-col items-center text-center">
                      <p className="text-sm md:text-md font-medium mb-1 md:mb-2">Montada Pegada nas Costas</p>
                      <div className="w-full md:w-56 flex items-center justify-center cursor-pointer 
          text-white text-6xl md:text-9xl font-extrabold border border-white rounded-xl 
          ring-2 ring-white/40 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                        <h1>00</h1>
                      </div>
                    </div>



                    {/* Passagem de guarda 3 */}
                    <div className="flex flex-col items-center text-center">
                      <p className="text-sm md:text-md font-medium mb-1 md:mb-2">Passagem de guarda</p>
                      <div className="w-full md:w-56 flex items-center justify-center cursor-pointer 
          text-white text-6xl md:text-9xl font-extrabold border border-white rounded-xl 
          ring-2 ring-white/40 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                        <h1>00</h1>
                      </div>
                    </div>
                  </div>



                  {/* Vantagem / Punição */}
                  <div className="grid grid-cols-1 gap-4 w-24 md:flex md:flex-col md:items-end md:w-auto md:mt-auto ">
                    <div className="flex flex-col items-center md:items-center text-center md:text-right">
                      <p className="text-xs md:text-sm md:mb-2">Vantagem</p>
                      <button
                        className="w-full md:w-[130%] text-yellow-400 text-3xl md:text-4xl font-extrabold border border-white rounded-xl 
          ring-2 ring-white/40 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 
          flex items-center justify-center cursor-pointer"
                        onClick={() => console.log("Vantagem clicada")}
                      >
                        01
                      </button>
                    </div>

                    <div className="flex flex-col items-center md:items-end text-center md:text-right">
                      <p className="text-xs md:text-sm mt-2 md:mt-4">Punição</p>
                      <button
                        className="w-full md:w-[130%] text-red-400 text-3xl md:text-4xl font-extrabold border border-white rounded-xl 
          ring-2 ring-white/40 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 
          flex items-center justify-center cursor-pointer"
                        onClick={() => console.log("Punição clicada")}
                      >
                        01
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-0 flex flex-col items-end text-center justify-center mr-20">
                <div className="bg-white w-80  text-black text-center text-4xl font-bold rounded-lg">
                  <div className="bg-red-600 text-white text-center text-4xl font-bold py-2">
                    Parado
                  </div>
                  <p className="text-8xl font-extrabold mt-6">05:00</p>
                  <p className="text-lg mt-2">Clique para definir o tempo</p>
                </div>
              </div>

              {/* Parte inferior (cinza claro) */}
              
              <div className="flex bg-gray-200 md:p-8 flex-grow flex-col md:flex-row md:items-center md:gap-8 min-h-[51.5vh]">
              {/* Passagem de Guarda - Container */}
                  <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full md:flex md:flex-row md:gap-3 md:mt-10 md:w-auto">

                    {/* Passagem de guarda 1 */}
                    <div className="flex flex-col items-center text-center">
                      <p className="text-sm md:text-md font-medium mb-1 md:mb-2">Passagem de guarda</p>
                      <div className="w-full md:w-56 flex items-center justify-center cursor-pointer 
          text-black text-6xl md:text-9xl font-extrabold border border-white rounded-xl 
          ring-2 ring-white/40 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                        <h4>00</h4>
                      </div>
                    </div>

                    {/* Passagem de guarda 2 */}
                    <div className="flex flex-col items-center text-center">
                      <p className="text-sm md:text-md font-medium mb-1 md:mb-2">Montada Pegada nas Costas</p>
                      <div className="w-full md:w-56 flex items-center justify-center cursor-pointer 
          text-black text-6xl md:text-9xl font-extrabold border border-white rounded-xl 
          ring-2 ring-white/40 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                        <h1>00</h1>
                      </div>
                    </div>



                    {/* Passagem de guarda 3 */}
                    <div className="flex flex-col items-center text-center">
                      <p className="text-sm md:text-md font-medium mb-1 md:mb-2">Passagem de guarda</p>
                      <div className="w-full md:w-56 flex items-center justify-center cursor-pointer 
          text-black text-6xl md:text-9xl font-extrabold border border-white rounded-xl 
          ring-2 ring-white/40 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                        <h1>00</h1>
                      </div>
                    </div>
                  </div>



                  {/* Vantagem / Punição */}
                  <div className="grid grid-cols-1 gap-4 w-24 md:flex md:flex-col md:items-center md:w-auto mt-4 ">
                    <div className="flex flex-col items-center md:items-end text-center md:text-right">
                      <p className="text-xs md:text-sm">Vantagem</p>
                      <button
                        className="w-full md:w-[130%] text-yellow-400 text-3xl md:text-4xl font-extrabold border border-white rounded-xl 
          ring-2 ring-white/40 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 
          flex items-center justify-center cursor-pointer"
                        onClick={() => console.log("Vantagem clicada")}
                      >
                        01
                      </button>
                    </div>

                    <div className="flex flex-col items-center md:items-end text-center md:text-right">
                      <p className="text-xs md:text-sm mt-2 md:mt-4">Punição</p>
                      <button
                        className="w-full md:w-[130%] text-red-400 text-3xl md:text-4xl font-extrabold border border-white rounded-xl 
          ring-2 ring-white/40 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 
          flex items-center justify-center cursor-pointer"
                        onClick={() => console.log("Punição clicada")}
                      >
                        01
                      </button>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        {/* <footer
          id="contact"
          className="bg-gray-900 text-gray-200 py-10 mt-auto"
        >
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} MyBrand. All rights reserved.</p>
            <div className="space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">
                Privacy
              </a>
              <a href="#" className="hover:text-white">
                Terms
              </a>
              <a href="#" className="hover:text-white">
                Support
              </a>
            </div>
          </div>
        </footer> */}
      </div>
    </>
  );
};

export default LandingPage;
