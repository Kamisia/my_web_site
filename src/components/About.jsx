import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white p-2" id="about">
      <SectionTitle text="About" />
      <div className="align-element grid lg:grid-cols-2 items-center gap-16 p-2">
        <article>
          <p className="text-gray mt-5 leading-loose p-5 text-justify">
            I am a person full of&nbsp;passion for creating.
            As&nbsp;a&nbsp;hobby, I&nbsp;enjoy trying&nbsp;out new craft
            techniques. Professionally, I&nbsp;would like to&nbsp;focus
            on&nbsp;creating web applications that&nbsp;are intuitive
            and&nbsp;user-friendly, so&nbsp; that their users can enjoy using
            them. I&nbsp;am looking for&nbsp;a&nbsp; place where, together
            with&nbsp;other passionate individuals, we&nbsp;will create amazing
            projects, motivate each other to&nbsp;continue working
            and&nbsp;learning. I&nbsp;started my journey out of&nbsp;pure
            curiosity by&nbsp;taking a&nbsp;free course on&nbsp;YouTube
            platform. The&nbsp;topic fascinated me so&nbsp;much that
            I&nbsp;decided to&nbsp;dedicate bits of&nbsp;my time
            to&nbsp;learning. Along the&nbsp;way, my life paths were
            going&nbsp;in&nbsp;a&nbsp;different direction. However,
            the&nbsp;thought of&nbsp;trying my&nbsp;hand at&nbsp;being a&nbsp;
            front-end developer was always lingering in&nbsp;my&nbsp;mind.
            I&nbsp;made the&nbsp;decision and&nbsp;spent the&nbsp;last year
            dividing my time between responsibilities&nbsp;as&nbsp;a&nbsp;mother
            and&nbsp;learning. In the&nbsp;future, I&nbsp;want to&nbsp;continue
            to&nbsp;develop and&nbsp;create applications not alone,
            but&nbsp;witha&nbsp;&nbsp;group of&nbsp;people from whom I&nbsp;will
            be able to&nbsp;draw knowledge gained along with experience.
          </p>
        </article>
        <img src={aboutSvg} className="w-full h-64 hidden lg:block" />
      </div>
    </section>
  );
};
export default About;
