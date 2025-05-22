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
            <div className="w-full max-w-full   overflow-hidden">
              <div className="grid grid-cols-1 gap-3 bg-blue-600 text-white ">
                {/* Parte Azul (Topo) */}
                <div className="ml-10">
                  <img
                    src="/logo.png"
                    alt="Logo do evento"
                    className="w-24 h-auto" // ajuste o tamanho como quiser
                  />
                </div>
                <div className="col-span-2 p-8  pt-[120px]">

                  <div className="flex items-end gap-20 ms-20 ">
                    {/* Montada / Pegada pelas costas */}
                    <div className="flex flex-col items-center text-center">
                      <p className="text-md font-medium mb-2">Passagem de guarda</p>

                      <div
                        className="w-[130%] flex items-center justify-center cursor-pointer 
  text-white text-9xl font-extrabold border border-white rounded-xl 
  ring-2 ring-white/40 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                      >
                        <h1>00</h1>
                      </div>
                    </div>

                    {/* Passagem de guarda */}
                    <div className="flex flex-col items-center text-center">
                      <p className="text-md font-medium mb-2">Passagem de guarda</p>

                      <div
                        className="w-[130%] flex items-center justify-center cursor-pointer 
  text-white text-9xl font-extrabold border border-white rounded-xl 
  ring-2 ring-white/40 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                      >
                        <h1>00</h1>
                      </div>
                    </div>

                    {/* Queda / Raspagem / Joelho na barriga */}
                    <div className="flex flex-col items-center text-center">
                      <p className="text-md font-medium mb-2">Passagem de guarda</p>

                      <div
                        className="w-[130%] flex items-center justify-center cursor-pointer 
  text-white text-9xl font-extrabold border border-white rounded-xl 
  ring-2 ring-white/40 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                      >
                        <h1>00</h1>
                      </div>
                    </div>

                    {/* Vantagem / Punição */}
                    <div className="flex flex-col items-end text-right justify-end">
                      <p className="text-sm">Vantagem</p>
                      <button
                        className="w-[130%] text-yellow-400 text-4xl font-extrabold border border-white rounded-xl 
  ring-2 ring-white/40 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 
  flex items-center justify-center cursor-pointer"
                        onClick={() => console.log("Vantagem clicada")}
                      >
                        01
                      </button>

                      <p className="text-sm mt-4">Punição</p>
                      <button
                        className="w-[130%] text-red-400 text-4xl font-extrabold border border-white rounded-xl 
  ring-2 ring-white/40 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 
  flex items-center justify-center cursor-pointer"
                        onClick={() => console.log("Vantagem clicada")}
                      >
                        01
                      </button>
                    </div>
                  </div>
                  <div class="inline-flex items-center gap-3 bg-gray-100 dark:bg-gray-800 px-5 py-3 rounded-lg shadow-md">
                    <h5 class="text-lg font-semibold text-gray-700 dark:text-gray-200 select-none">Parado</h5>
                    <span id="cronometro" class="text-xl font-mono text-indigo-600 dark:text-indigo-400 tracking-widest select-mono">00:00:00</span>
                  </div>
                  {/* <div className="mt-10 text-right">
                    <p className="text-xl">Pontuação total</p>
                    <p className="text-8xl font-extrabold">09</p>
                  </div> */}
                </div>

                {/* Temporizador */}
                {/* <div className="bg-white text-black col-span-1 p-8">
                <div className="text-center">
                  <div className="bg-red-600 text-white text-4xl font-bold py-2 rounded-lg">
                    Parado
                  </div>
                  <p className="text-8xl font-extrabold mt-6">05:00</p>
                  <p className="text-lg mt-2">Clique para definir o tempo</p>
                </div>
                <div className="mt-10 text-center">
                  <p className="text-xl">Pontuação total</p>
                  <p className="text-8xl font-extrabold">00</p>
                </div>
              </div> */}

              </div>

              {/* Parte inferior (cinza claro) */}
              <div className="bg-white grid grid-cols-2 gap-0 p-8 border-t-4 border-black">
                <div className="flex justify-between gap-6">
                  <div>
                    <h2 className="text-2xl font-bold leading-tight">
                      Montada
                      <br />
                      Pegada pelas costas
                    </h2>
                    <p className="text-6xl font-extrabold">00</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Passagem de guarda</h2>
                    <p className="text-6xl font-extrabold">00</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold leading-tight">
                      Queda
                      <br />
                      Raspagem
                      <br />
                      Joelho na barriga
                    </h2>
                    <p className="text-6xl font-extrabold">00</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl">Vantagem</p>
                    <p className="text-yellow-400 text-4xl font-extrabold">00</p>
                    <p className="text-xl mt-4">Punição</p>
                    <p className="text-red-400 text-4xl font-extrabold">00</p>
                  </div>
                </div>
                <div className="flex items-end justify-end">
                  <div className="text-right">
                    <p className="text-xl">Pontuação total</p>
                    <p className="text-8xl font-extrabold">00</p>
                    <div className="text-lg text-right mt-6 font-semibold text-gray-700">CENTAURUS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
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
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
