import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
const Skills = () => {
  return (
    <section className="p-10 align-element bg-lightMain " id="skills">
      <SectionTitle text="Skills" />
      <div className="p-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <SkillsCard
          icon={<FaHtml5 className="h-16 w-16 text-main" />}
          title={"HTML"}
          progressValue={85}
          text={"bal bla b;a bsiugyugihkjj"}
        />
        <SkillsCard
          icon={<FaCss3 className="h-16 w-16 text-main" />}
          title={"CSS"}
          progressValue={75}
          text={"bal bla b;a bsiugyugihkjj"}
        />
        <SkillsCard
          icon={<FaJs className="h-16 w-16 text-main" />}
          title={"Java Script"}
          progressValue={60}
          text={"bal bla b;a bsiugyugihkjj"}
        />
        <SkillsCard
          icon={<FaReact className="h-16 w-16 text-main" />}
          title={"React"}
          progressValue={55}
          text={"bal bla b;a bsiugyugihkjj"}
        />
      </div>
    </section>
  );
};
export default Skills;
