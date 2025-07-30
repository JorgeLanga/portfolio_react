import { Header } from "../components/header";
import { BackgroundBeams } from "../components/ui/background-beams";
import { Personal } from "./personal";
import { About } from "./about";
import { Footer } from "../components/footer";
import { Contact } from "./contact";

import Projects from "./projects";
import { InfiniteMovingCardsDemo } from "./technologies";

import { useEffect, useState } from "react";

export const PaginaInicial = () => {
 
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <Header />

      <section id="sobre">
        <Personal />
        <About />
      </section>
      <section id="tecnologias">
        <InfiniteMovingCardsDemo />
      </section>
      <section id="projetos">
        <Projects />
      </section>
      <section id="contacto">
        <Contact />
      </section>
      <Footer />
      <BackgroundBeams />

      {/* Botão para voltar ao topo */}
      {showTopBtn && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 bg-blue-600 hover:bg-blue-800 text-white rounded-full shadow-lg p-4 transition-all duration-300 flex items-center justify-center cursor-pointer"
          aria-label="Voltar ao topo"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
      )}
    </>
  );
};
