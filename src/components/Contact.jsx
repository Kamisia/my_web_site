import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const googleDrivePdfLink =
    "https://drive.google.com/file/d/12VdlQSDDHTTTccfWPmr8FJIbOKrSA1NJ/view?usp=sharing";
  const downloadPDF = () => {
    window.open(googleDrivePdfLink, "_blank");
  };
  return (
    <section className="bg-main p-10 text-white flex flex-col " id="contact">
      <div className="flex flex-col md:flex-row justify-between m-5">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-small mb-2 tracking-wider uppercase">
            Contact
          </h1>
          <p className="mb-2">kamila@samcz.uk</p>

          <div className="flex gap-x-4 mt-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaGithubSquare className="h-8 w-8 text-lightAccent hover:text-white/50 duration-300" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="h-8 w-8 text-lightAccent hover:text-white/50 duration-300" />
            </a>
          </div>
        </div>
        <div className="md:w-1/4 md:text-left mt-6">
          <button
            type="button"
            class=" mt-6 inline-block rounded border-2 border-lightAccent px-6 pb-[6px] pt-2 text-xs font-small uppercase leading-normal text-lightAccent transition duration-150 ease-in-out hover:border-white/50 hover:bg-transparent hover:text-white focus:border-white/50 focus:bg-transparent focus:text-white focus:outline-none focus:ring-0 active:border-white/50 active:text-white motion-reduce:transition-none "
            data-twe-ripple-init
            onClick={downloadPDF}
          >
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
