import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-full bg-black md:py-20 py-10 mt-10">
      <div className="container px-5 mx-auto w-full flex sm:items-start flex-wrap gap-10 items-center sm:justify-between justify-center">
        <div className="flex flex-col sm:text-left text-center gap-3">
          <h3 className="font-semibold text-2xl text-white">Get In Touch</h3>
          <p className="text-gray-500 max-w-2xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            consequuntur, alias sequi sed facere velit in!
          </p>
          <p className="flex items-center sm:justify-start justify-center gap-2 text-gray-400">
            <MdOutlineEmail className="text-lg text-red-700"></MdOutlineEmail>
            hockeys@support.com
          </p>
          <p className="flex items-center sm:justify-start justify-center gap-2 text-gray-400">
            <FaPhoneAlt className="text-lg text-red-700"></FaPhoneAlt>(+62)
            123-321-543
          </p>
        </div>
        <div className="flex flex-col sm:text-left text-center gap-3 text-gray-500">
          <h4 className="text-xl font-semibold text-white">Company</h4>
          <ul className="flex flex-col sm:text-left text-center gap-1">
            <li>
              <a className="hover:text-white duration-300" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="hover:text-white duration-300" href="#">
                Leadership
              </a>
            </li>
            <li>
              <a className="hover:text-white duration-300" href="#">
                Careers
              </a>
            </li>
            <li>
              <a className="hover:text-white duration-300" href="#">
                News & Articles
              </a>
            </li>
            <li>
              <a className="hover:text-white duration-300" href="#">
                Legal Notice
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col sm:text-left text-center gap-3 text-gray-500">
          <h4 className="text-xl font-semibold text-white">Support</h4>
          <ul className="flex flex-col sm:text-left text-center gap-1">
            <li>
              <a className="hover:text-white duration-300" href="#">
                Help Center
              </a>
            </li>
            <li>
              <a className="hover:text-white duration-300" href="#">
                FAQ
              </a>
            </li>
            <li>
              <a className="hover:text-white duration-300" href="#">
                Ticket Support
              </a>
            </li>
            <li>
              <a className="hover:text-white duration-300" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col sm:text-left text-center gap-3 text-gray-500">
          <h4 className="text-xl font-semibold text-white">Services</h4>
          <ul className="flex flex-col sm:text-left text-center gap-1">
            <li>
              <a className="hover:text-white duration-300" href="#">
                Academy
              </a>
            </li>
            <li>
              <a className="hover:text-white duration-300" href="#">
                group Lesson
              </a>
            </li>
            <li>
              <a className="hover:text-white duration-300" href="#">
                Private Lesson
              </a>
            </li>
            <li>
              <a className="hover:text-white duration-300" href="#">
                Hockeys for Kids
              </a>
            </li>
            <li>
              <a className="hover:text-white duration-300" href="#">
                Hockeys for Adults
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
