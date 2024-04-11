import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import ButtonCVDownload from "./ButtonCVDownload";

const Hero = () => {
  return (
    <div className="bg-white p-10 mt-20">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article className="ml-4">
          <h1 className="text-7xl font-bold tracking-wider flex-nowrap text-black">
            I'm <span className="text-main">Kamila</span>
          </h1>
          <p className="mt-4  text-3xl text-darkGray capitalize tracking-wide">
            Front-End Developer
          </p>
          <p className="mt-2 text-lg text-gray capitalize tracking-wide">
            Coding. Creation. Conversion.
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaGithubSquare className="h-8 w-8 text-lightAccent hover:text-main duration-300" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
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
