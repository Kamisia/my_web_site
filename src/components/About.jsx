import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white p-10" id="about">
      <SectionTitle text="About" />
      <div className="align-element grid lg:grid-cols-2 items-center gap-16 p-10">
        <img src={aboutSvg} className="w-full h-64 hidden lg:block" />
        <article>
          <p className="text-gray mt-5 leading-loose p-5">
            I am a person full of passion for creating. As a hobby, I enjoy
            trying out new craft techniques. Professionally, I would like to
            focus on creating web applications that are intuitive and
            user-friendly, so that their users can enjoy using them. I am
            looking for a place where, together with other passionate
            individuals, we will create amazing projects, motivate each other to
            continue working and learning. I started my journey out of pure
            curiosity by taking a free course on YouTube platform. The topic
            fascinated me so much that I decided to dedicate bits of my time to
            learning. Along the way, my life paths were going in a different
            direction. However, the thought of trying my hand at being a
            front-end developer was always lingering in my mind. I made the
            decision and spent the last year dividing my time between
            responsibilities as a mother and learning. In the future, I want to
            continue to develop and create applications not alone, but with a
            group of people from whom I will be able to draw knowledge gained
            along with experience.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
