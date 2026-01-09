"use client";

import { useEffect } from "react";

function Hero() {
  useEffect(() => {
    const elemento = document.querySelector(".animar");
    if (!elemento) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          elemento.classList.remove("opacity-0", "translate-y-11", "blur-xs");
           observer.unobserve(elemento);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(elemento);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="HOME"
      className="h-233 flex relative overflow-y-hidden mx-auto w-full pt-23" 
      style={{ backgroundImage: `url(/img/home/hero.webp)` }}
    >
      <div id="LADO-ESQUERDO" className="h-233 bg-blue-950/40 w-[55%]">
        <div
          id="text-container"
          className="animar translate-y-11 transition-all duration-700 opacity-0 blur-xs ml-20 flex flex-col gap-5"
        >
          <p className=" text-white/70 ml-17 font-semibold mt-32 text-[16pt] underline">
            INOVANDO IDEIAS
          </p>

          <h1
            id="hero-text"
            className=" justify-center items-center mt-10 ml-15 text-shadow-2xl text-start text-white/80 w-230 z-10 text-[5.5rem] leading-22 font-semibold font-cormorant"
          >
            Onde a lei encontra <span className="text-[#d0af6c]">posicionamento</span> e decisão. Advocacia <span className="text-[#d0af6c]">estratégica </span>
            para quem precisa de resposta.
          </h1>

          <div className=" flex flex-row">
            <div
              id="botao-contato"
              className="ml-17 mt-20 flex opacity-80 text-white w-41.75 h-12.5  bg-[linear-gradient(to_right,#ffff_0%,#ffff_42%,#d0af6c_42%,#d0af6c_100%)] justify-center items-center gap-10 hover:cursor-pointer hover:opacity-100 active:invert-20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#d0af6c"
              >
                <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" />
              </svg>
              <span>Ver mais</span>
            </div>

            <div className="flex gap-7">
              <div className="ml-15 mt-17 h-16 w-1 bg-[#d0af6c]"></div>
              <span className="mt-17 text-2xl font-medium text-shadow-2xs  text-[#d0af6c]">
                Lei, estratégia e posicionamento. <br />
                Atuamos onde decisões importam.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div id="LADO-DIREITO" className="bg-blue-950/40 h-233 w-[45%]">
        <img
          id="herostatue"
          className="mr-22 mt-10 w-180"
          src="/img/home/hero-statue.webp"
        />
      </div>
    </div>
    
  );
}


export default Hero;