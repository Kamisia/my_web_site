import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white p-2" id="about">
      <SectionTitle text="About" />
      <div className="align-element grid lg:grid-cols-2 items-center gap-16 p-2">
        <article>
          <p className="text-gray mt-5 leading-loose p-5 text-justify">
            I am passionate about crafting and&nbsp;personal development,
            with&nbsp;a&nbsp;deep love for&nbsp;nature. My&nbsp;hobby,
            experimenting with various crafting techniques, enriches
            my&nbsp;approach to&nbsp;life and&nbsp;work. For the past two years,
            I've&nbsp;been fascinated by the art of&nbsp;macramé, which offers
            me many possibilities for&nbsp;creating both practical
            and&nbsp;decorative items. I&nbsp;particularly value weaving hanging
            planters, which adorn my home and plant collection.
            <br />
            <br />
            Regardless of my passions, I&nbsp;always strive for personal
            and&nbsp;professional growth. Lately, I've been focusing
            on&nbsp;transitioning from a molecular biotechnologist
            to&nbsp;a&nbsp;front-end developer. Since my college days, I've been
            exploring this field, learning from online courses and working
            on&nbsp;my&nbsp;own projects. My portfolio showcases my latest
            projects based on React.js, which is my primary interest
            in&nbsp;front-end development.
            <br />
            <br />
            In the long run, I aim to&nbsp;deepen my knowledge
            of&nbsp;PostgreSQL and&nbsp;broaden my skills as a full-stack
            developer.
            <br />
            <br />
            Currently, I am seeking inspiring projects and&nbsp;teams where
            I&nbsp;can develop, share knowledge, and&nbsp;collaborate.
            If&nbsp;you're interested in&nbsp;working together
            or&nbsp;discussing opportunities, feel free to&nbsp;reach out!
          </p>
        </article>
        <img src={aboutSvg} className="w-full h-64 hidden lg:block" />
      </div>
    </section>
  );
};
export default About;
