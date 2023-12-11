import {
  FaFacebook,
  FaLinkedinIn,
  FaInstagramSquare,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";

const SocialLinl = () => {
  return (
    <div className="flex items-center gap-3 my-5 text-2xl">
      <a
        href="https://www.facebook.com/rabious.sunny.94"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook className="text-blue-400 hover:text-red-500 hover:scale-110" />
      </a>
      <a
        href="https://www.linkedin.com/in/rabius-sunny-7b46472a0"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <FaLinkedinIn className="text-blue-500 text-3xl cursor-pointer hover:text-red-500 hover:scale-110" />
      </a>
      <a
        href="https://www.instagram.com/rs.sunny001"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <FaInstagramSquare className="text-red-500 cursor-pointer hover:text-red-500 hover:scale-110" />
      </a>
      <FaTwitter className="text-blue-600 hover:text-red-500 hover:scale-110 cursor-pointer" />
      <a
        href="https://github.com/RSsunny"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className=" cursor-pointer hover:text-red-500 hover:scale-110" />
      </a>
      <Link to={"/contact"}>
        {" "}
        <IoLogoWhatsapp className="text-green-600 hover:text-red-500 hover:scale-110" />
      </Link>
    </div>
  );
};

export default SocialLinl;
