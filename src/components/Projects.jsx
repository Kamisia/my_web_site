import ProjectsCard from "./ProjectsCard";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import project7 from "../assets/project7.png";

import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <section className="p-10 align-element bg-lightMain" id="projects">
      <SectionTitle text="Projects" />
      <div className="p-10 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        <ProjectsCard
          url={""}
          img={project1}
          github={"https://github.com/Kamisia/QOTD_APP"}
          title={"Your Quote Of The Day"}
          text={"Opis projektu"}
        />
        <ProjectsCard
          url={""}
          img={project7}
          github={"https://github.com/Kamisia/ForestUp-js"}
          title={"ForestUp"}
          text={"Opis projektu"}
        />

        <ProjectsCard
          url={""}
          img={project3}
          github={"https://github.com/Kamisia/Screen_Safari"}
          title={"Screen Safari"}
          text={"Opis projektu"}
        />
        <ProjectsCard
          url={""}
          img={project4}
          github={"https://github.com/Kamisia/fake-book-store"}
          title={"Fake Book Store"}
          text={"Opis projektu"}
        />
        <ProjectsCard
          url={""}
          img={project5}
          github={"https://github.com/Kamisia/task-manager-app"}
          title={"Start Now, Succeed "}
          text={"Opis projektu"}
        />
        <ProjectsCard
          url={""}
          img={project2}
          github={"https://github.com/Kamisia/weather_app"}
          title={"Sun Seeker"}
          text={"Opis projektu"}
        />
      </div>
    </section>
  );
};
export default Projects;
