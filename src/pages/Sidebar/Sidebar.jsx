import { BiSolidZap } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="">
      {/* avater */}
      <div className="pb-10 rounded-xl border border-purple-800 shadow-purple-400 shadow-sm   ">
        <div className="avatar p-5 w-full mt-10">
          <div className="w-36 text-center  mx-auto rounded-full ">
            <img className=" " src="https://i.ibb.co/phXvcg0/authore-5.jpg" />
          </div>
        </div>
        <h1 className="text-center text-2xl lg:text-3xl font-bold">
          Rabious Sunny
        </h1>
        <div className="text-center  text-sm flex items-center gap-2 justify-center mt-1">
          <p>Front-end-developre</p> <BiSolidZap className="text-yellow-500" />
        </div>
      </div>
      <div className="rounded-xl border border-purple-800 shadow-purple-400 shadow-sm mt-5 p-3 lg:p-8  ">
        <div className="flex gap-2 lg:gap-3 items-center">
          <p>Nationality</p>
          <p>: Bangladesh</p>
        </div>
        <div className="flex gap-14 lg:gap-16 items-center my-2">
          <p>City</p>
          <p>: Barishal</p>
        </div>
        <div className="flex gap-14 lg:gap-16 items-center">
          <p>Age</p>
          <p>: 24</p>
        </div>

        <hr className="my-5 " />

        <p className="h-[400px]  hover:overflow-y-scroll  ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          sapiente molestiae, quibusdam numquam porro commodi explicabo
          distinctio odio vitae dicta, doloremque Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Delectus sapiente molestiae, quibusdam
          numquam porro commodi explicabo distinctio odio vitae dicta,
          doloremque Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Delectus sapiente molestiae, quibusdam numquam porro commodi explicabo
          distinctio odio vitae dicta, doloremque Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Delectus sapiente molestiae, quibusdam
          numquam porro commodi explicabo distinctio odio vitae dicta,
          doloremque Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Delectus sapiente molestiae, quibusdam numquam porro commodi explicabo
          distinctio odio vitae dicta, doloremque Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Delectus sapiente molestiae, quibusdam
          numquam porro commodi explicabo distinctio odio vitae dicta,
          doloremque Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Delectus sapiente molestiae, quibusdam numquam porro commodi explicabo
          distinctio odio vitae dicta, doloremque
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
