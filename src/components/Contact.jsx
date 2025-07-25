import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Title from "../subComponents/Title";
import contactLogo1 from "./../assets/images/Group 1171275317.png";
import contactLogo2 from "./../assets/images/Group 1171275318.png";
import contactLogo3 from "./../assets/images/Group 1171275321.png";

const Contact = () => {
  return (
    <div className="container w-full px-5 flex flex-col items-center">
      <Title
        title={"Get In Touch"}
        description={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae sunt adipisci voluptas laborum consequatur nemo fugit exercitationem tenetur!"
        }
      ></Title>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 w-full">
        <div className="p-5 rounded-xl border flex flex-col col-span-1 h-full gap-5">
          <div className="p-3 rounded-lg bg-green-100 flex flex-col items-start justify-center h-full gap-2">
            <img className="h-10" src={contactLogo1} alt="contact-logo" />
            <p className="text-sm text-gray-500">Phone Number:</p>
            <h4 className="text-base font-medium">(+62) 123-321-543s</h4>
          </div>
          <div className="p-3 rounded-lg bg-yellow-100 flex flex-col items-start justify-center h-full gap-2">
            <img className="h-10" src={contactLogo2} alt="contact-logo" />
            <p className="text-sm text-gray-500">Email</p>
            <h4 className="text-base font-medium">hockeys@support.com</h4>
          </div>
          <div className="p-3 rounded-lg bg-blue-100 flex flex-col items-start justify-center h-full gap-2">
            <img className="h-10" src={contactLogo3} alt="contact-logo" />
            <p className="text-sm text-gray-500">Location:</p>
            <h4 className="text-base font-medium">
              152/1 Mohakhali Wireless Gate
            </h4>
          </div>
        </div>
        <form className="md:col-span-2 col-span-1 flex flex-col gap-5">
          <div className="flex md:flex-row flex-col gap-5 w-full">
            <div className="w-full flex flex-col gap-3">
              <label htmlFor="Name" className="text-lg font-medium">
                Your Name
              </label>
              <input
                id="Name"
                className="p-2 w-full bg-red-100/30 placeholder:text-gray-500 text-black text-lg shadow-md rounded-xl"
                type="text"
                placeholder="Your Name"
              />
              <label htmlFor="Email" className="text-lg font-medium">
                Your Email
              </label>
              <input
                id="Email"
                className="p-2 w-full bg-red-100/30 placeholder:text-gray-500 text-black text-lg shadow-md rounded-xl"
                type="text"
                placeholder="Your Email"
              />
            </div>
            <div className="w-full flex flex-col gap-3">
              <label htmlFor="Subject" className="text-lg font-medium">
                Subject
              </label>
              <input
                id="Subject"
                className="p-2 w-full bg-red-100/30 placeholder:text-gray-500 text-black text-lg shadow-md rounded-xl"
                type="text"
                placeholder="Subject"
              />
              <label htmlFor="Number" className="text-lg font-medium">
                Phone Number
              </label>
              <input
                id="Number"
                className="p-2 w-full bg-red-100/30 placeholder:text-gray-500 text-black text-lg shadow-md rounded-xl"
                type="text"
                placeholder="Phone Number"
              />
            </div>
          </div>
          <label className="text-lg font-medium" htmlFor="Message">
            Message
          </label>
          <textarea
            id="Message"
            placeholder="Message"
            className="p-2 w-full bg-red-100/30 placeholder:text-gray-500 text-black text-lg shadow-md rounded-xl sm:min-h-60 min-h-40"
          ></textarea>
        </form>
      </div>
      <div className="w-full px-5 lg:py-16 py-10 bg-red-50 mt-10 rounded-xl flex flex-col items-center justify-center">
        <h3 className="md:text-3xl text-2xl font-semibold text-center">
          Social Links
        </h3>
        <div className="flex items-center gap-5 text-3xl mt-3">
          <a
            href="https://x.com/"
            className="hover:text-sky-500 duration-300"
            target="_blank"
          >
            <FaTwitter></FaTwitter>
          </a>
          <a
            href="https://www.facebook.com/"
            className="hover:text-blue-500 duration-300"
            target="_blank"
          >
            <FaFacebook></FaFacebook>
          </a>
          <a
            href="https://www.instagram.com/"
            className="hover:text-pink-500 duration-300"
            target="_blank"
          >
            <FaInstagram></FaInstagram>
          </a>
          <a
            href="https://www.linkedin.com/"
            className="hover:text-cyan-700 duration-300"
            target="_blank"
          >
            <FaLinkedin></FaLinkedin>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
