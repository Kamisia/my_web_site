import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
const Skills = () => {
  return (
    <section className="p-2 align-element bg-lightMain " id="skills">
      <SectionTitle text="Skills" />
      <div className="p-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <SkillsCard
          icon={<FaHtml5 className="h-16 w-16 text-main" />}
          title={"HTML"}
          text={
            "I have a solid intermediate-level knowledge of HTML, which allows me to create responsive websites."
          }
        />
        <SkillsCard
          icon={<FaCss3 className="h-16 w-16 text-main" />}
          title={"CSS"}
          text={
            "I have experience in creating responsive and aesthetically pleasing website layouts using CSS. I possess skills in designing user interfaces, applying CSS animations, and creating visual effects."
          }
        />
        <SkillsCard
          icon={<FaJs className="h-16 w-16 text-main" />}
          title={"Java Script"}
          text={
            "I have experience in creating interactive functions and visual effects using pure JavaScript. In my projects, I have utilized JavaScript for manipulating DOM elements, handling forms, and executing asynchronous HTTP requests."
          }
        />
        <SkillsCard
          icon={<FaReact className="h-16 w-16 text-main" />}
          title={"React"}
          text={
            "I have a strong understanding of React, enabling me to build dynamic and interactive user interfaces. I have utilized React to develop advanced components and web applications, such as e-commerce applications."
          }
        />
      </div>
    </section>
  );
};
export default Skills;
