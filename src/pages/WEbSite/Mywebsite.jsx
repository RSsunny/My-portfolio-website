import { LuBox } from "react-icons/lu";
import { RiCheckboxMultipleFill } from "react-icons/ri";
import SliderProject from "../../components/shared/SliderProject";
import { MdDoubleArrow } from "react-icons/md";
import UseTacno from "../../components/shared/UseTacno";
import SharedLink from "../../components/shared/SharedLink";
import SharedTitle from "../../components/shared/SharedTitle";

const Mywebsite = () => {
  return (
    <>
      <div className="flex items-center text-4xl ml-10 gap-3">
        <LuBox className="text-purple-600" />
        <h1 className="  font-bold my-10"> MY Projects</h1>
      </div>
      {/* project-1 */}

      <div className="my-10  md:ml-10">
        <SharedTitle name={"Survey and Polling"}></SharedTitle>
        <UseTacno
          tac1={"React"}
          tac2={"Node.js"}
          tac3={"Mongodb"}
          tac4={"Payment getway ( Stripe )"}
          tac5={"Tanstack Query"}
        ></UseTacno>

        <SharedLink
          link1={"https://github.com/RSsunny/survey-polling"}
          link2={"https://marvelous-squirrel-2e9a26.netlify.app"}
        ></SharedLink>
      </div>

      {/* slider 1*/}
      <div className="px-10">
        <SliderProject
          img1={
            "https://i.ibb.co/PxqP1WL/Screen-Shot-12-12-2023-at-5-48-PM-2.png"
          }
          img2={
            "https://i.ibb.co/xLp5yLr/Screen-Shot-12-12-2023-at-5-54-PM.png"
          }
          img3={
            "https://i.ibb.co/kSHr9V6/Screen-Shot-12-12-2023-at-5-56-PM.png"
          }
        ></SliderProject>
      </div>

      {/* project-2 */}
      <div className="my-10  md:ml-10">
        <SharedTitle name={"Career Crafters"}></SharedTitle>
        <UseTacno
          tac1={"React"}
          tac2={"Node.js"}
          tac3={"Mongodb"}
          tac4={"AOS"}
          tac5={"Tanstack Query"}
        ></UseTacno>

        <SharedLink
          link1={"https://github.com/RSsunny/career-crafters-client"}
          link2={"https://gregarious-taffy-5c03fc.netlify.app"}
        ></SharedLink>
      </div>

      {/* slider 2*/}
      <div className="px-10">
        <SliderProject
          img1={
            "https://i.ibb.co/c2FsYWc/Screen-Shot-12-12-2023-at-6-46-PM-2.png"
          }
          img2={
            "https://i.ibb.co/5Kmdbjb/Screen-Shot-12-12-2023-at-6-47-PM.png"
          }
          img3={
            "https://i.ibb.co/N6Wjfsk/Screen-Shot-12-12-2023-at-6-48-PM.png"
          }
        ></SliderProject>
      </div>
      {/* project-3 */}
      <div className="my-10  md:ml-10">
        <SharedTitle name={"Tech-And-Gaming-Events"}></SharedTitle>
        <UseTacno
          tac1={"React"}
          tac2={"Node.js"}
          tac3={"Mongodb"}
          tac4={"AOS"}
          tac5={"Tanstack Query"}
        ></UseTacno>

        <SharedLink
          link1={"https://github.com/RSsunny/Tech-And-Gaming-Events"}
          link2={"https://tourmaline-druid-a07caa.netlify.app"}
        ></SharedLink>
      </div>

      {/* slider 3*/}
      <div className="px-10">
        <SliderProject
          img1={
            "https://i.ibb.co/HH5Fd6N/Screen-Shot-12-12-2023-at-7-10-PM.png"
          }
          img2={
            "https://i.ibb.co/DMQgtq6/Screen-Shot-12-12-2023-at-7-11-PM-2.png"
          }
          img3={
            "https://i.ibb.co/0hjVtBw/Screen-Shot-12-12-2023-at-7-11-PM.png"
          }
        ></SliderProject>
      </div>
    </>
  );
};

export default Mywebsite;
