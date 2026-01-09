"use client";

import { useEffect, useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";


function Sobre() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const animarRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const elemento = animarRef.current;
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
      id="SOBRE"
      className="flex flex-col justify-center items-center bg-[#1E2833] w-full mx-auto"
    >
      <div id="sobre" className="h-auto w-full flex">
        <div id="LADO-ESQUERDO-SOBRE" className="w-[50%] mt-30 h-auto pt-20">
          <div
            id="quadrado"
            className="ml-30 w-160 h-165  bg-cover"
            style={{ backgroundImage: `url(/img/sobre/advogado.webp)` }}
          >
            <span className="text-white font-medium text-2xl p-3 flex items-center justify-center pt-145 pl-10">
              O conhecimento das leis é o primeiro passo para transformar
              direitos em justiça.
            </span>
          </div>
        </div>

        <div id="LADO-DIREITO-SOBRE" className="flex flex-col mt-30 mb-30">
          <span
            id="text-sobre-title"
            className="mt-22 leading-13 text-white/90 text-5xl w-180"
          >
            Nós somos advogados pelo direito e justiça, com base nos mais altos
            padrões de conhecimento
          </span>

          <div
            id="line"
            className="mt-4 w-100 h-1 bg-linear-to-r from-[#AC925F] to-purple-600/0"
          ></div>

          <span className="w-180 mt-10 text-white/90 text-2xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos unde
            dolorem est! Iusto earum, minus odio ullam culpa optio est
            explicabo! Harum autem eos suscipit voluptatum provident nihil
            consequuntur dolor?
          </span>

          <div className="flex mt-10">
            <img className="w-30 rounded-full" src="/img/sobre/profile.webp" />
            <div className="flex flex-col">
              <span className="text-3xl ml-8 mt-5 text-white/90 font-bold">
                Willian Felipe de Almeida
              </span>
              <span className="text-white/70 ml-8 mt-2">
                Acessor Executivo da Civix
              </span>
            </div>
          </div>

          <div
            ref={ref}
            className="flex mt-7 gap-20 items-center justify-center"
          >
            <div className="w-90 rounded-tl-3xl rounded-br-3xl h-40 bg-[#161D28] flex opacity-70 shadow-2xl">
              <img
                className="h-32 w-29 mt-4 ml-3"
                src="/img/sobre/cases.webp"
              />
              <div className="flex flex-col">
                <span className="text-[#D0B06E] font-bold text-6xl ml-3 mt-6">
                  {inView && <CountUp end={95} duration={2} />}%
                </span>
                <span className="w-56 ml-3 text-[#D0B06E]">
                  Sucesso em casos nos tribunais da capital e interior
                </span>
              </div>
            </div>

            <div className="items-center justify-center w-90 rounded-br-3xl rounded-tl-3xl shadow-2xl h-40 bg-[#D0B06E] flex opacity-70">
              <span className="text-[#1E2833] font-bold text-7xl">
                +{inView && <CountUp start={0} end={20} duration={3} />}
              </span>
              <span className="text-[#1E2833] text-2xl ml-2">
                Anos de <br /> Experiência
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center flex flex-col items-center justify-center">
        <div className="w-full bg-[#D0B06E] h-1"></div>

        <h1
          id="text-sobre-title"
          className="text-5xl py-2 font-bold text-white/90 mt-30"
        >
          Sobre a <span className="text-[#D0B06E]">CIVIX</span> Advocacia
        </h1>
        <div
          id="line"
          className="w-200 h-1 bg-linear-to-r from-gray-50/0 via-[#D0B06E] to-gray-50/0"
        ></div>

        <p
          ref={animarRef}
          className="animar opacity-0 translate-y-11 blur-xs transition-all duration-700 mt-10 mx-30 my-10 text-3xl text-[#D0B06E] leading-12 font-libre"
        >
          A Civix Advocacia é uma associação de advogados sediada em Manaus,
          Amazonas, com atuação estratégica na capital e no interior do estado.
          Nosso trabalho é orientado pela análise técnica, pela responsabilidade
          profissional e pela busca de soluções jurídicas adequadas à realidade
          de cada cliente. Atuamos de forma preventiva e contenciosa, oferecendo
          assessoria jurídica, elaboração e revisão de contratos, acompanhamento
          processual, atuação administrativa e judicial, além de orientação
          contínua para pessoas físicas e jurídicas. Cada demanda é tratada de
          maneira individual, com atenção aos detalhes legais e aos impactos
          práticos das decisões. Nossa atuação no Amazonas nos permite
          compreender as particularidades regionais, os órgãos locais, a
          dinâmica do Judiciário e as necessidades específicas de quem vive e
          empreende no estado. Isso se reflete em um atendimento próximo, claro
          e tecnicamente fundamentado. A Civix Advocacia acredita na advocacia
          exercida com ética, transparência e compromisso, mantendo o cliente
          informado, respeitando prazos e atuando com responsabilidade em todas
          as etapas do trabalho jurídico.
        </p>

        
      </div>
    </div>
  );
}

export default Sobre;
