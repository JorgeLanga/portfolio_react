
import type { ProjectProps } from "../types/projectProps";
import { BackgroundGradient } from "./ui/background-gradient";

function Project({
  title,
  image,
  description,
  techstack,
  previewLink,
  githubLink,
}: ProjectProps) {
  return (
    <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-10 bg-black dark:bg-black">
      <img
        src={image}
        alt={title}
        height={400}
        width={400}
        className="object-contain w-full rounded-xl"
      />

      <p className="text-base sm:text-xl text-white mt-4 mb-2 font-semibold">
        {title}
      </p>

      <p className="text-sm text-justify text-gray-300">{description}</p>

      <p className="text-sm text-gray-300 mt-3">
        <span className="font-medium text-white">Tech Stack:</span>{" "}
        {techstack}
      </p>

      <div className="flex justify-between items-center mt-5 text-sm font-light">
        <a
          href={previewLink}
          target="_blank"
          rel="noreferrer noopener"
          className="underline text-blue-400"
        >
          Live Preview
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer noopener"
          className="underline text-blue-400"
        >
          View Code
        </a>
      </div>
    </BackgroundGradient>
  );
}

export default Project;
