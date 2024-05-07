import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import ButtonCVDownload from "./ButtonCVDownload";

const Hero = () => {
  return (
    <div className="bg-white p-10 mt-20">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article className="ml-4">
          <h1 className="text-6xl flex-nowrap text-black">
            Hi! I'm <span className="text-main">Kamila</span>
          </h1>
          <p className="mt-1 font-thin text-3xl pl-1 text-darkGray capitalize tracking-wide">
            Front-End Developer
          </p>

          <div className="flex gap-x-4 mt-4 pl-1">
            <a
              href="https://github.com/Kamisia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare className="h-8 w-8 text-lightAccent hover:text-main duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/kamila-samczuk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-8 w-8 text-lightAccent hover:text-main duration-300" />
            </a>
            <ButtonCVDownload />
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};
export default Hero;
