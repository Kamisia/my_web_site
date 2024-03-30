import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white p-10" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16 p-10">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="About" />
          <p className="text-gray mt-5 leading-loose p-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            maiores itaque doloribus asperiores dolorum quas voluptates
            distinctio, porro beatae quam provident libero animi totam,
            praesentium voluptatem corrupti dignissimos ipsum accusantium!
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
