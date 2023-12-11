import { BiSolidZap } from "react-icons/bi";
import Skill from "../../components/ui/Skill";
import LanguagePro from "../../components/ui/LanguagePro";

const Sidebar = () => {
  return (
    <div className="">
      {/* avater */}
      <div className="pb-10 rounded-3xl border border-purple-800 shadow-purple-400 shadow-md   ">
        <div className="avatar p-5 w-full mt-10">
          <div className="w-36 text-center  mx-auto rounded-full ">
            <img
              className=" "
              src="https://i.ibb.co/8NNtNz8/367437869-1452948585483278-4922338124868821993-n.jpg"
            />
          </div>
        </div>
        <h1 className="text-center text-2xl lg:text-3xl font-bold">
          Rabious Sunny
        </h1>
        <div className="text-center  text-sm flex items-center gap-2 justify-center mt-1">
          <p>Front-end-developre</p> <BiSolidZap className="text-yellow-500" />
        </div>
        <p className="text-center text-xs mt-1 mb-5">Bangladesh , Barisal</p>
      </div>
      <div className="rounded-xl border border-purple-800 shadow-purple-400 shadow-lg mt-5 p-3 ">
        <div className="h-[520px]  hover:overflow-y-scroll overflow-hidden ">
          <Skill></Skill>
          <LanguagePro></LanguagePro>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
