import { FaLocationArrow, FaArrowTrendUp } from "react-icons/fa6";
import SocialLinl from "../shared/SocialLinl";
import AnimationText from "./AnimationText";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const Banner = () => {
  Aos.init({
    disable: false,
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    debounceDelay: 50,
    throttleDelay: 99,
    delay: 500,
    duration: 500,
    easing: "ease",
    mirror: false,
    anchorPlacement: "top-bottom",
  });
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between lg:px-10 2xl:pl-32 2xl:pr-32 gap-20 md:gap-5   my-20 relative">
      <div className="text-white  px-5 ">
        <p
          className="text-xl font-semibold "
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
        >
          Hello,
        </p>
        <h1
          className="text-4xl lg:text-4xl xl:text-5xl font-bold my-5 overflow-hidden"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="60"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
        >
          I'm Rabious Sunny
        </h1>
        <p
          className="text-xs  w-[350px] lg:w-[400px]   leading-5"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="90"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
        >
          Web developer with expertise in the MERN stack, specializing in
          MongoDB, Express.js, React.js, and Node.js. Proficient in creating
          dynamic and responsive applications, merging technical skills with
          creative innovation.
        </p>
        <div>
          <AnimationText></AnimationText>
        </div>
        <div className="pt-3">
          <SocialLinl></SocialLinl>
        </div>
        <div className="flex  items-center gap-8 pb-10 pt-5">
          <Link
            to={"/contact"}
            className="flex items-center gap-2 border px-4 py-2 rounded-full border-purple-600 bg-purple-600"
          >
            <button>Contact me</button>
            <FaArrowTrendUp />
          </Link>
          <Link
            to={"/site"}
            className="flex items-center gap-2 border px-4 py-2 rounded-full border-purple-600 hover:bg-purple-600 ease-linear duration-1000 text-purple-600 hover:text-white"
          >
            <button>Explor...</button>
            <FaLocationArrow className="animate-bounce mt-2" />
          </Link>
        </div>
      </div>
      <div className=" md:mt-10 border rounded-full md:px-5  pt-10 md:pt-5 2xl:pt-10 overflow-hidden border-purple-600 shadow-xl shadow-purple-500 md:mr-4 lg:mr-0 z-20 bg-transparent ">
        <img
          className="h-[300px] lg:h-[350px] w-[350px] ml-4"
          src="https://i.ibb.co/KNrf5d2/3cd77606-b9da-4ed3-8cbd-1b66410982e5-removebg-preview-2-1.png"
          alt=""
        />
      </div>

      {/* austronat */}
      <div className="absolute w-12 rotate-12  -top-20 right-10">
        <img
          className="animate-pulse"
          src="https://i.ibb.co/zmp08fR/440636627b454ce38d615f5241727fae-removebg-preview.png"
          alt=""
        />
      </div>
      <div className="absolute w-12 rotate-12  -top-12 right-20">
        <img
          className="animate-pulse"
          src="https://i.ibb.co/L6ff31R/photos5-removebg-preview.png"
          alt=""
        />
      </div>
      <div className="absolute w-20 rotate-45 -top-5  right-10 xl:right-20">
        <img
          className="animate-pulse"
          src="https://i.ibb.co/JzkYTXL/ufo-4912413-4089017.png"
          alt=""
        />
      </div>
      <div className="absolute w-32 rotate-12 -top-10 right-44">
        <img
          className="animate-pulse"
          src="https://i.ibb.co/Hr5Gh3N/ufo-for-game-3d-model-c4d-max-obj-fbx-ma-lwo-3ds-3dm-stl-3476528-o-removebg-preview.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
