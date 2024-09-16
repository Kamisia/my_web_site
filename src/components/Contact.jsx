import ButtonCVDownload from "./ButtonCVDownload";
import SocialButtonComponent from "./SocialButtonComponent";
import contactSvg from "../assets/contact.svg";
const Contact = () => {
  return (
    <section className="bg-main pt-10  text-white algin-element" id="contact">
      <h1 className="text-3xl text-center font-thin mb-2 tracking-wider uppercase">
        Contact
      </h1>
      <div className="  mr-auto ml-auto">
        <div
          className="md:items-center
         flex flex-col  mr-auto ml-auto lg:gap-20 md:flex-row md:justify-between  w-11/12 max-w-fit"
        >
          <div className="  p-3 ">
            <p className="text-white ">You can text me email</p>

            <p className="mb-6 text-xl uppercase">kamila@samcz.uk</p>

            <p className="text-white mb-2">You can find me here</p>

            <SocialButtonComponent />
          </div>
          <div className="  hidden md:block  ">
            <img src={contactSvg} className="w-fit h-64  " />
          </div>
          <div className="  p-3">
            <p className="text-white mb-2 mr-auto ml-auto">
              You can download my curriculum vitae
            </p>

            <ButtonCVDownload />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
