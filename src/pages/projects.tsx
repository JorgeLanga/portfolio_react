
import Project from "../components/project";
import { projectDetails } from "../types/details";

function Projects() {
  return (
   
  <main className="w-full bg-black px-4 pt-10 pb-20 mb-0">
  <section>
    <h1 className="text-2xl text-center p-3 m-4 text-white md:text-2xl xl:text-3xl font-bold mb-8">
      PROJECTOS
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
      {projectDetails.map((project) => (
        <Project key={project.title} {...project} />
      ))}
    </div>
  </section>
</main>

      
  );
}

export default Projects;