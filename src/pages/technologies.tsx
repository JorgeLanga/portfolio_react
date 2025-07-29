
import { InfiniteMovingImages } from "../../src/components/ui/infinite-moving-cards";
import { techStackDetails } from "../types/details";

export function InfiniteMovingCardsDemo() {
    const techStackImages = Object.entries(techStackDetails).map(([key, value]) => ({
  src: value,
  alt: key.toUpperCase(),
}));
  return (
    <>

    <section className="bg-black pt-10">
    <h2 className="text-white text-2xl font-bold text-center mb-6">TECNOLOGIAS</h2>
  <InfiniteMovingImages
  items={techStackImages}
  direction="left"
  speed="normal"
  pauseOnHover={true}
/>

 <InfiniteMovingImages
  items={techStackImages}
  direction="right"
  speed="normal"
  pauseOnHover={true}
  
/>
</section>
</>
  );
}
