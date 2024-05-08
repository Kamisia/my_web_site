import ButtonCVDownload from "./ButtonCVDownload";
import SocialButtonComponent from "./SocialButtonComponent";

const Contact = () => {
  return (
    <section className="bg-darkMain  text-white algin-element" id="contact">
      <h1 className="text-3xl text-center font-thin mb-2 tracking-wider uppercase">
        Contact
      </h1>
      <div className="place-content-center max-w-lg mr-auto ml-auto">
        <div className=" p-6 grid place-content-between grid-cols-2 mt-auto mb-auto ">
          <div>
            <p className="mb-2">kamila@samcz.uk</p>

            <SocialButtonComponent />
          </div>
          <div className="flex justify-end items-center">
            <ButtonCVDownload />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
