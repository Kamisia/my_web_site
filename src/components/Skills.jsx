import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
const Skills = () => {
  return (
    <section className="p-2 align-element bg-lightMain " id="skills">
      <SectionTitle text="Skills" />
      <div className="  p-10 grid gap-8 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3  ">
        <SkillsCard
          icon={<FaHtml5 className="h-7 w-7 text-main" />}
          title={"HTML"}
          text={
            <p>
              I have a solid intermediate-level knowledge of&nbsp;HTML, which
              allows me&nbsp;to&nbsp;create responsive websites.
            </p>
          }
        />
        <SkillsCard
          icon={<FaCss3 className="h-7 w-7 text-main" />}
          title={"CSS"}
          text={
            <p>
              I have experience in creating responsive and&nbsp;aesthetically
              pleasing website layouts using CSS. I&nbsp;possess skills
              in&nbsp;designing user interfaces, applying CSS animations,
              and&nbsp;creating visual effects.
            </p>
          }
        />
        <SkillsCard
          icon={<FaJs className="h-7 w-7 text-main" />}
          title={"Java Script"}
          text={
            <p>
              I have experience in&nbsp;creating interactive functions
              and&nbsp;visual effects using pure JavaScript.
              In&nbsp;my&nbsp;projects, I&nbsp;have utilized JavaScript
              for&nbsp;manipulating DOM elements, handling forms,
              and&nbsp;executing asynchronous HTTP requests.
            </p>
          }
        />
        <SkillsCard
          icon={<FaReact className="h-7 w-7 text-main" />}
          title={"React"}
          text={
            <p>
              I have a strong understanding of&nbsp;React, enabling
              me&nbsp;to&nbsp;build dynamic and&nbsp;interactive user
              interfaces. I&nbsp;have utilized React to&nbsp;develop advanced
              components and&nbsp;web applications, such as&nbsp;e-commerce
              applications.
            </p>
          }
        />
      </div>
    </section>
  );
};
export default Skills;
