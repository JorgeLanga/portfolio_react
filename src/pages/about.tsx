import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { GlobalRender } from "./globeRender";

export const About = () => {
  const paragraph1 = `Sou um desenvolvedor fullstack júnior com paixão por criar soluções funcionais e bem estruturadas, tanto no front-end quanto no back-end. Tenho conhecimento em tecnologias como JavaScript, React, Node.js, HTML, CSS e bancos de dados como MySQL e MongoDB.
Gosto de aprender constantemente e me desafio a entender não só o código, mas também a lógica por trás dos problemas. Tenho facilidade em trabalhar em equipe, sou organizado e comprometido com a entrega de resultados que agreguem valor ao usuário final. Busco oportunidades para crescer como desenvolvedor, colaborar com projetos reais e continuar evoluindo minhas habilidades técnicas e interpessoais no mundo da tecnologia.`;

  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Lado esquerdo: Globo */}
        <div className="w-full md:w-1/2 h-[400px] flex justify-center items-center">
          <div className="w-full h-full max-w-[400px]">
            <GlobalRender />
          </div>
        </div>

        {/* Lado direito: Texto */}
        <div className="w-full md:w-1/2 bg-slate-950 border border-slate-800 rounded-2xl p-6 backdrop-blur-md shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Sobre mim</h2>
          <TextGenerateEffect
            words={paragraph1}
            duration={0.4}
            className="text-sm leading-relaxed text-justify"
          />
        </div>
      </div>
    </section>
  );
};
