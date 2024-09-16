import cv from "../assets/KamilaSamczukCurriculumVitae.pdf";

const ButtonCVDownload = () => {
  return (
    <div>
      <button
        type="button"
        className="h-8 w-32  rounded border-0   transition duration-300 ease-in-out bg-lightAccent hover:bg-accent  text-white "
      >
        <a
          href={cv}
          download="Kamila Samczuk - Curriculum Vitae"
          className="text-s text-center font-bold "
        >
          Download CV
        </a>
      </button>
    </div>
  );
};
export default ButtonCVDownload;
