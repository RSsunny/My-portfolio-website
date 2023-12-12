const Work = () => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center gap-10 md:gap-5 px-10 text-center my-20 pt-10">
      <div className="flex flex-col items-center gap-2 text-2xl">
        <h3 className="font-bold text-yellow-400 text-7xl">32+</h3>
        <p className="text-white">Complete Project</p>
      </div>
      <div className="flex flex-col items-center gap-2 text-2xl">
        <h3 className="font-bold text-yellow-400 text-7xl">03</h3>
        <p className="text-white">current project</p>
      </div>
      <div className="flex flex-col items-center gap-2 text-2xl">
        <h3 className="font-bold text-yellow-400 text-7xl">12</h3>
        <p className="text-white">Project</p>
      </div>
    </div>
  );
};

export default Work;
