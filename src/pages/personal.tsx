import logo2 from "../img/perfil.jpg";
import { FlipWords } from "../components/ui/flip-words";


export const Personal = () => {
  const firstPart = "Olá! Sou Jorge Langa, ";
  const lastPart =
    " apaixonado por transformar ideias em experiências digitais funcionais e elegantes.";
  const flip = [
    "desenvolvedor front-end",
    "desenvolvedor back-end",
    "Jr. fullstack developer",
    "engenheiro de software",
    "criador de interfaces",
  ];

  return (
    <>
     <section className="bg-color-back mt-16">
  <div className="flex justify-center items-center min-h-screen bg-black px-4">
    <div className="flex flex-col-reverse lg:flex-row items-center gap-8">

      {/* Texto */}
      <div className="w-[350px] shadow-lg flex flex-col items-center justify-center animate-slideFromLeft p-4 text-sm gap-4">
        <div className="text-center text-white text-xl leading-snug">
          {firstPart}
          <FlipWords words={flip} />
          {lastPart}
        </div>

        <div className="flex flex-wrap m-4 gap-4 justify-center">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
             
              <a href="#contato"> CONTACT ME</a>
            </span>
          </button>

<a
  href="https://www.canva.com/design/DAGnhS50BEs/_OjU6w0spbUnRMr7XTWtFg/edit?utm_content=DAGnhS50BEs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  target="_blank"
  rel="noopener noreferrer"
  className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none"
>
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    GET RESUME
  </span>
</a>
        </div>
      </div>

   
      <div className="w-[250px] lg:w-[350px]">
        <div className="w-60 h-60 mx-auto py-2 px-2 bg-back rounded-full shadow-lg flex items-center justify-center animate-slideFromRight">
          <img
            src={logo2}
            alt="logo"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

    </div>
  </div>
</section>

     
    </>
  );
};
