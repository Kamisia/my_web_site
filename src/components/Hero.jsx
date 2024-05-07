import heroImg from "../assets/hero.svg";
import ButtonCVDownload from "./ButtonCVDownload";
import SocialButtonComponent from "./SocialButtonComponent";

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
            <SocialButtonComponent />
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
