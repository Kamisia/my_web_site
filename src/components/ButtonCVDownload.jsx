import cv from "../assets/KamilaSamczuk.pdf";

const ButtonCVDownload = () => {
  return (
    <div>
      <button
        type="button"
        className="  h-8 w-32  rounded border-0 hover:border-2 hover:border-black hover:bg-transparent hover:text-black transition duration-300 ease-in-out bg-lightAccent  text-white "
      >
        <a
          href={cv}
          download="Kamila Samczuk - Curriculum Vitea"
          className="text-s text-center"
        >
          Download CV
        </a>
      </button>
    </div>
  );
};
export default ButtonCVDownload;
