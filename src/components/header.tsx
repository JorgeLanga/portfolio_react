import { useState } from "react";
import { Menu } from "lucide-react";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="flex fixed bg-header w-full px-3 md:px-20 py-8">
        <div>
          <span className="text-white font-bold text-3xl ">JORGE</span>
        </div>
        <nav className="flex-1">
          <ul className="flex justify-end flex-1 text-white font-bold">
            {/* Links desktop */}
            <li className="px-4 hidden md:block"><a href="#sobre">Sobre-mim</a></li>
            <li className="px-4 hidden md:block"><a href="#tecnologias">Tecnologias</a></li>
            <li className="px-4 hidden md:block"><a href="#projetos">Projectos</a></li>
            <li className="px-4 hidden md:block"><a href="#contacto">Contacto</a></li>
            

            <li className="md:hidden flex items-center px-4">
              <button
                onClick={() => setOpen((prev) => !prev)}
                className="p-2 focus:outline-none"
                aria-label="Abrir menu"
              >
                <Menu size={32} />
              </button>
            </li>
          </ul>
        </nav>
      </div>
      

      {open && (
        <nav className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-black via-back to-black bg-opacity-95 flex flex-col items-center justify-center z-50 animate-fade-in md:hidden">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-8 right-8 text-white bg-red-900  rounded-full p-2 shadow-lg transition-colors"
            aria-label="Fechar menu"
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <ul className="flex flex-col gap-10 text-2xl font-bold text-white mt-8">
            <li><a href="#sobre" onClick={() => setOpen(false)} className="hover:text-blue-400 transition-colors">Sobre-mim</a></li>
            <li><a href="#tecnologias" onClick={() => setOpen(false)} className="hover:text-blue-400 transition-colors">Tecnologias</a></li>
            <li><a href="#projetos" onClick={() => setOpen(false)} className="hover:text-blue-400 transition-colors">Projectos</a></li>
            <li><a href="#contato" onClick={() => setOpen(false)} className="hover:text-blue-400 transition-colors">Contacto</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};