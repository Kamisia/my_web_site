import { FaGithub } from "react-icons/fa";

import { TfiWorld } from "react-icons/tfi";

const ProjectsCard = ({ url, img, github, title, text }) => {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300">
      <a href={url}>
        <img
          src={img}
          alt={title}
          className="w-full object-cover rounded-t-lg h-64"
        />
      </a>
      <div className=" p-4 h-50">
        <h2 className="text-xl  h-12 tracking-wide font-medium capitalize">
          {title}
        </h2>
        <div className=" text-div h-40  overflow-auto ">
          <p className="   mt-1 text-darkGray leading-loose text-m">{text}</p>
        </div>

        <div className="mt-4 flex gap-x-4">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <TfiWorld className="h-8 w-8 text-lightAccent hover:text-accent duration-300" />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="h-8 w-8 text-lightAccent hover:text-accent duration-300" />
          </a>
        </div>
      </div>
    </article>
  );
};
export default ProjectsCard;
