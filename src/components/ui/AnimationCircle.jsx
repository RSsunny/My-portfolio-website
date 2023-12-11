import { SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

const AnimationCircle = () => {
  return (
    <div className="w-full h-[500px] text-center ml-20 relative ">
      <div className="w-[400px] h-[400px] border rounded-full animate-spin  absolute top-0 flex gap-10">
        <SiMongodb className="text-green-700 text-5xl  rounded-full bg-white" />
        <SiMongodb className="text-green-700 text-5xl  rounded-full bg-white" />
        <SiMongodb className="text-green-700 text-5xl  rounded-full bg-white" />
        <SiMongodb className="text-green-700 text-5xl  rounded-full bg-white" />
      </div>
    </div>
  );
};

export default AnimationCircle;
