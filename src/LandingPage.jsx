import React, { useState } from "react";

const LandingPage = ({ disableInstall, handleInstall }) => {
  const [count, setCount] = useState(0);

  return (
    <>
    <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">MyBrand</h1>
          <nav className="space-x-6">
            <a href="#features" className="text-gray-700 hover:text-blue-600">
              Features
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
            {!disableInstall && (
              <button
                onClick={handleInstall}
                className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded-lg text-lg transition duration-300"
              >
                Install App
              </button>
            )}
          </nav>
        </div>
      </header>
    <div className="font-sans text-gray-900 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gray-100 ">     
        {/* Aqui insere seu layout customizado (primeira UI) */}
        <div className="bg-white flex items-center p-4 rounded-lg shadow-2xl">
          <div className="w-full max-w-full rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 gap-0">
              {/* Parte Azul (Topo) */}
              <div className="bg-blue-600 text-white col-span-0 p-8">
                <div className="flex justify-between items-center gap-6">
                  <div>
                    <h2 className="text-3xl font-bold leading-tight">
                      Montada
                      <br />
                      Pegada pelas costas
                    </h2>
                    <p className="text-8xl font-extrabold">00</p>
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold">Passagem de guarda</h2>
                    <p className="text-8xl font-extrabold">00</p>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold leading-tight">
                      Queda
                      <br />
                      Raspagem
                      <br />
                      Joelho na barriga
                    </h2>
                    <p className="text-8xl font-extrabold">02</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg">Vantagem</p>
                    <p className="text-yellow-400 text-5xl font-extrabold">01</p>
                    <p className="text-lg mt-4">Punição</p>
                    <p className="text-red-400 text-5xl font-extrabold">01</p>
                  </div>
                </div>
                <div className="mt-10 text-right">
                  <p className="text-xl">Pontuação total</p>
                  <p className="text-8xl font-extrabold">09</p>
                </div>
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
            <div className="bg-gray-100 grid grid-cols-2 gap-0 p-8 border-t-4 border-black">
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
