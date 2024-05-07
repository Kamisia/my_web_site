import ButtonCVDownload from "./ButtonCVDownload";
import SocialButtonComponent from "./SocialButtonComponent";

const Contact = () => {
  return (
    <section className="bg-main p-2 text-white flex flex-col " id="contact">
      <div className="flex flex-col md:flex-row justify-between m-5 ">
        <div className="md:w-1/2 ">
          <h1 className="text-4xl font-small mb-2 tracking-wider uppercase">
            Contact
          </h1>
          <p className="mb-2 p-2">kamila@samcz.uk</p>

          <SocialButtonComponent />
        </div>
        <div className="mt-5">
          <ButtonCVDownload />
        </div>
      </div>
    </section>
  );
};

export default Contact;
