import DownlodCV from "../../components/shared/DownlodCV";

const Eduction = () => {
  return (
    <div className="p-2 md:p-5">
      <h1 className="text-4xl font-bold text-center lg:py-10 pt-10 pb-20 lg:pb-0">
        My Education
      </h1>
      <div className="flex items-center justify-center gap-3 md:gap-10 ">
        <div className="">
          <div className="mb-5 lg:mb-16">
            <h1 className=" lg:text-2xl font-bold mb-3">
              {" "}
              Bachelor of Science (BSc){" "}
            </h1>
            <p>Harvard University / 2015 - 2017</p>
            <p className="mt-5">
              List skill/technologies here. You can change the icon above to any
              of the 1500+ FontAwesome 5 free icons available. Aenean commodo
              ligula eget dolor.
            </p>
          </div>
          <div className="mb-5 lg:mb-16">
            <h1 className=" lg:text-2xl font-bold mb-3">
              Master in Computer Engineering
            </h1>
            <p>Harvard University / 2015 - 2017</p>
            <p className="mt-5">
              List skill/technologies here. You can change the icon above to any
              of the 1500+ FontAwesome 5 free icons available. Aenean commodo
              ligula eget dolor.
            </p>
          </div>
          <div className="mb-5 lg:mb-16">
            <h1 className=" lg:text-2xl font-bold mb-3">
              Master in Computer Engineering
            </h1>
            <p>Harvard University / 2015 - 2017</p>
            <p className="mt-5">
              List skill/technologies here. You can change the icon above to any
              of the 1500+ FontAwesome 5 free icons available. Aenean commodo
              ligula eget dolor.
            </p>
          </div>
        </div>
        <div>
          <ul className="steps steps-vertical h-[1200px] md:[700px] xl:h-[800px]  m-0">
            <li className="step step-primary"></li>
            <li className="step step-primary"> </li>
            <li className="step step-primary"></li>
          </ul>
        </div>
        <div className="">
          <div className="mb-5 lg:mb-16">
            <h1 className=" lg:text-2xl font-bold mb-3">
              Master in Computer Engineering
            </h1>
            <p>Harvard University / 2015 - 2017</p>
            <p className="mt-5">
              List skill/technologies here. You can change the icon above to any
              of the 1500+ FontAwesome 5 free icons available. Aenean commodo
              ligula eget dolor.
            </p>
          </div>
          <div className="mb-5 lg:mb-16">
            <h1 className=" lg:text-2xl font-bold mb-3">
              Master in Computer Engineering
            </h1>
            <p>Harvard University / 2015 - 2017</p>
            <p className="mt-5">
              List skill/technologies here. You can change the icon above to any
              of the 1500+ FontAwesome 5 free icons available. Aenean commodo
              ligula eget dolor.
            </p>
          </div>
          <div className="mb-5 lg:mb-16">
            <h1 className=" lg:text-2xl font-bold mb-3">
              Master in Computer Engineering
            </h1>
            <p>Harvard University / 2015 - 2017</p>
            <p className="mt-5">
              List skill/technologies here. You can change the icon above to any
              of the 1500+ FontAwesome 5 free icons available. Aenean commodo
              ligula eget dolor.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pb-10">
        <p className="px-6 py-2 text-xs rounded-md border border-purple-600 shadow-md shadow-purple-500 hover:bg-purple-500 hover:text-yellow-400 ease-linear duration-500">
          <DownlodCV />
        </p>
      </div>
    </div>
  );
};

export default Eduction;
