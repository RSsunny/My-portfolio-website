import { FaLocationArrow, FaArrowTrendUp } from "react-icons/fa6";
import SocialLinl from "../shared/SocialLinl";
import AnimationText from "./AnimationText";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between lg:px-10 2xl:pl-32 2xl:pr-32 gap-20 md:gap-5   my-20 relative">
      <div className="text-white  px-5 ">
        <p className="text-xl font-semibold ">Hello,</p>
        <h1 className="text-4xl lg:text-4xl xl:text-5xl font-bold my-5">
          I'm Rabious Sunny
        </h1>
        <p className="text-xs  w-[350px] lg:w-[400px]   leading-5">
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
          <div className="flex items-center gap-2 border px-4 py-2 rounded-full border-purple-600 bg-purple-600">
            <button>About me</button>
            <FaArrowTrendUp />
          </div>
          <div className="flex items-center gap-2 border px-4 py-2 rounded-full border-purple-600 hover:bg-purple-600 ease-linear duration-1000 text-purple-600 hover:text-white">
            <button>Explor...</button>
            <FaLocationArrow className="animate-bounce mt-2" />
          </div>
        </div>
      </div>
      <div className=" md:mt-10 border rounded-full md:px-5  pt-10 md:pt-5 overflow-hidden border-purple-600 shadow-xl shadow-purple-500 md:mr-4 lg:mr-0 z-20 bg-transparent">
        <img
          className="h-[300px] lg:h-[350px] w-[350px] "
          src="https://i.ibb.co/0Q7rFFf/man1-removebg-preview-1.png"
          alt=""
        />
      </div>
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
// https://i.ibb.co/Hr5Gh3N/ufo-for-game-3d-model-c4d-max-obj-fbx-ma-lwo-3ds-3dm-stl-3476528-o-removebg-preview.png
// https://i.ibb.co/zmp08fR/440636627b454ce38d615f5241727fae-removebg-preview.png
// https://i.ibb.co/L6ff31R/photos5-removebg-preview.png
