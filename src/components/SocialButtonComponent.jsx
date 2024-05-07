import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const SocialButtonComponent = () => {
  return (
    <div className="flex gap-x-4 ">
      <a
        href="https://github.com/Kamisia"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithubSquare className="h-8 w-8 text-lightAccent hover:text-accent duration-300" />
      </a>
      <a
        href="https://www.linkedin.com/in/kamila-samczuk/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="h-8 w-8 text-lightAccent hover:text-accent duration-300" />
      </a>
    </div>
  );
};

export default SocialButtonComponent;
