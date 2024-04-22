import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import ButtonCVDownload from "./ButtonCVDownload";

const Contact = () => {
  return (
    <section className="bg-main p-2 text-white flex flex-col " id="contact">
      <div className="flex flex-col md:flex-row justify-between m-5">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-small mb-2 tracking-wider uppercase">
            Contact
          </h1>
          <p className="mb-2">kamila@samcz.uk</p>

          <div className="flex gap-x-4 mt-4">
            <a
              href="https://github.com/Kamisia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare className="h-8 w-8 text-lightAccent hover:text-white/50 duration-300" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="h-8 w-8 text-lightAccent hover:text-white/50 duration-300" />
            </a>
          </div>
        </div>
        <div className="mt-5">
          <ButtonCVDownload />
        </div>
      </div>
    </section>
  );
};

export default Contact;
