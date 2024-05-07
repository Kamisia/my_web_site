import ProjectsCard from "./ProjectsCard";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";

import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <section className="p-2 align-element bg-lightMain" id="projects">
      <SectionTitle text="Projects" />
      <div className="p-10 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        <ProjectsCard
          url={"https://kamisia.github.io/fake-book-store/"}
          img={project4}
          github={"https://github.com/Kamisia/fake-book-store"}
          title={"Fake Book Store"}
          text={
            "The 'Fake Book Store' project is a dynamic e-commerce application built using React.js and Redux. It simulates interactions in a bookstore, allowing users to browse, search, and purchase books. The application features various components such as a title search, shopping cart, and store information, all integrated into a cohesive whole. The use of Redux for state management enables smooth transitions between different pages, providing users with a consistent experience. The project's code is meticulously organized for readability and modularity, facilitating understanding and future development. 'Fake Book Store' is not only a technical challenge for me but also an opportunity for continuous improvement in programming skills and crafting functional, user-friendly web applications."
          }
        />
        <ProjectsCard
          url={" https://kamisia.github.io/QOTD_APP/"}
          img={project1}
          github={"https://github.com/Kamisia/QOTD_APP"}
          title={"Your Quote Of The Day"}
          text={
            "The 'Your Quote Of The Day' project is the result of my work using React.js technology. Through this application, users can enjoy randomly generated quotes via the quotableAPI. By ensuring responsiveness, I have ensured that the interface is comfortable and user-friendly on various devices. Additionally, I organized the code in a way that will facilitate future development of the project."
          }
        />

        <ProjectsCard
          url={" https://kamisia.github.io/Screen_Safari/"}
          img={project3}
          github={"https://github.com/Kamisia/Screen_Safari"}
          title={"Screen Safari"}
          text={
            "The Screen Safari project utilizes the TMDB API to showcase movie posters from two categories: 'Top Rented' and 'Most Popular', presented in an interactive carousel format. The application also allows users to search for movies by name, enhancing usability. Upon hovering over a poster, users are presented with a movie description along with its rating. While crafting the code, I paid particular attention to its readability and modularity to facilitate understanding and potential project expansion. I aimed to create a developer-friendly environment that supports efficient work on the application. "
          }
        />

        <ProjectsCard
          url={"https://kamisia.github.io/task-manager-app/"}
          img={project5}
          github={"https://github.com/Kamisia/task-manager-app"}
          title={"Start Now, Succeed "}
          text={
            "The 'Task Manager App' project is a task management application written in JavaScript using the React.js library. It is a tool that enables users to create, edit, and delete tasks. The application offers an intuitive user interface that allows for easy navigation and quick task operations. Leveraging React.js technology, the project has been organized in a modular manner, facilitating code scalability and maintenance. The 'Task Manager App' project represents my skills in developing interactive web applications and my approach to building readable and efficient code."
          }
        />
        <ProjectsCard
          url={" https://kamisia.github.io/weather_app/"}
          img={project2}
          github={"https://github.com/Kamisia/weather_app"}
          title={"Sun Seeker"}
          text={
            "Sun Seeker is a weather application built with React.js, allowing users to quickly check current weather conditions for various locations. Through integration with the OpenWeatherMap API, users can easily search for places and obtain information about temperature, humidity, and wind speed. The project is designed responsively, ensuring an optimal user experience across different devices. The aim of the application is to provide fast and convenient access to current weather data, enabling users to better plan their outdoor activities. Technologies used include HTML, CSS, JavaScript, and the React.js framework, ensuring scalability and performance of the application."
          }
        />
      </div>
    </section>
  );
};
export default Projects;
