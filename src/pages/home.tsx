import { Header } from "../components/header";
import { BackgroundBeams } from "../components/ui/background-beams";
import { Personal } from "./personal";
import { About } from "./about";

import Projects from "./projects";
import { InfiniteMovingCardsDemo } from "./technologies";

export const PaginaInicial = () => {
  return (
    <>
      <Header />

      <Personal />
      <About />
      <InfiniteMovingCardsDemo />
      <Projects />
      <BackgroundBeams />
    </>
  );
};
