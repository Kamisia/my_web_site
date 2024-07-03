import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";
import {
  SiTailwindcss,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiReactquery,
  SiJest,
  SiTestinglibrary,
  SiStyledcomponents,
} from "react-icons/si";

const Skills = () => {
  return (
    <section className="p-2 align-element bg-lightMain " id="skills">
      <SectionTitle text="Technology" />
      <div className="  p-10 grid gap-8 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        <SkillsCard
          icon={<SiHtml5 className="h-7 w-7 text-main" />}
          title={"HTML"}
          text={
            <p>
              With solid knowledge of&nbsp;HTML, creating responsive websites
              becomes second nature. Proficient in&nbsp;utilizing HTML
              to&nbsp;structure and&nbsp;design web pages that&nbsp;adapt
              seamlessly to different devices.
            </p>
          }
        />
        <SkillsCard
          icon={<SiCss3 className="h-7 w-7 text-main" />}
          title={"CSS"}
          text={
            <p>
              Experienced in creating responsive and&nbsp;aesthetically pleasing
              website layouts using CSS. Skilled in&nbsp;designing user
              interfaces, applying CSS animations, and&nbsp;creating visual
              effects
            </p>
          }
        />
        <SkillsCard
          icon={<SiJavascript className="h-7 w-7 text-main" />}
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
          icon={<SiReact className="h-7 w-7 text-main" />}
          title={"React"}
          text={
            <p>
              With a strong understanding of&nbsp;React, I&nbsp;can build
              dynamic and&nbsp;interactive user interfaces. React has been
              utilized to&nbsp;develop advanced components and&nbsp;web
              applications.
            </p>
          }
        />

        <SkillsCard
          icon={<SiReactquery className="h-7 w-7 text-main" />}
          title={"React Query"}
          text={
            <p>
              My expertise in React Query allows me to&nbsp;handle server-state
              in&nbsp;React applications seamlessly, ensuring real&ndash;time
              data synchronization and&nbsp;reduced loading times.
            </p>
          }
        />
        <SkillsCard
          icon={<SiRedux className="h-7 w-7 text-main" />}
          title={"Redux"}
          text={
            <p>
              My skills in Redux Toolkit, I&nbsp;streamline state management
              processes, simplifying the&nbsp;development of&nbsp;scalable
              and&nbsp; maintainable React applications.
            </p>
          }
        />
        <SkillsCard
          icon={<SiStyledcomponents className="h-7 w-7 text-main" />}
          title={"Styled Components"}
          text={
            <p>
              Using Styled Components, I&nbsp;can seamlessly integrate styled
              elements within React applications, leading to&nbsp;clean
              and&nbsp; efficient code management.
            </p>
          }
        />
        <SkillsCard
          icon={<SiTailwindcss className="h-7 w-7 text-main" />}
          title={"Tailwind CSS"}
          text={
            <p>
              Using Tailwind CSS helps in&nbsp;building clean,
              well-structured&nbsp;and easily navigable web applications,
              following best practices from the&nbsp;documentation.
            </p>
          }
        />

        <SkillsCard
          icon2={<SiJest className="h-7 w-7 text-main" />}
          icon={<SiTestinglibrary className="h-7 w-7 text-main" />}
          title={"Unit Tests"}
          subtitle={"Testing Library + Jest"}
          text={
            <p>
              I utilize Testing Library and&nbsp;Jest to&nbsp;develop unit
              tests, enhancing application stability and&nbsp;facilitating
              efficient debugging processes.
            </p>
          }
        />
      </div>
    </section>
  );
};
export default Skills;
