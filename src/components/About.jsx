import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white p-2" id="about">
      <SectionTitle text="About" />
      <div className="align-element grid lg:grid-cols-2 items-center gap-16 p-2">
        <article>
          <div className="text-gray mt-5 leading-loose p-5 text-justify">
            <p>
              I am passionate about
              <span className="font-bold">
                creation and personal development
              </span>
              , with a deep love for nature. My hobby of experimenting with
              various crafting techniques enriches both my life and work. Over
              the past two years, I’ve become captivated by macramé, which has
              allowed me to create practical and decorative items. I
              particularly enjoy weaving hanging planters that beautifully
              complement my home and plant collection.
            </p>
            <p>
              Beyond my creative pursuits, I am committed to{" "}
              <span className="font-bold">
                continuous personal and professional growth
              </span>
              . Recently, I’ve been transitioning from molecular biotechnologist
              to front-end developer, dedicating significant time to learning
              through online courses and hands-on projects. My portfolio
              features my latest work with React.js, reflecting my strong
              interest in front-end development.
            </p>
            <p>
              I specialize in <span className="font-bold">React.js</span>,{" "}
              <span className="font-bold">JavaScript</span>, and{" "}
              <span className="font-bold">JavaScript</span>,{" "}
              <span className="font-bold">Tailwind CSS</span>, with expertise in{" "}
              <span className="font-bold">UI component development</span>,{" "}
              <span className="font-bold">API integration</span>, and{" "}
              <span className="font-bold">application optimization</span>.
              Currently, I am expanding my backend skills by learning{" "}
              <span className="font-bold">Spring</span>. I’m excited to bring my
              skills and passion to innovative projects.
            </p>
            <p>Feel free to reach out to discuss potential collaboration</p>
          </div>
        </article>
        <img src={aboutSvg} className="w-full h-64 hidden lg:block" />
      </div>
    </section>
  );
};
export default About;
