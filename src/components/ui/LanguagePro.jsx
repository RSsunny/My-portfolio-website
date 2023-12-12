import ProgressBar from "@ramonak/react-progress-bar";

const LanguagePro = () => {
  return (
    <div className="px-2 xl:px-5 py-10">
      <div className="mb-3">
        <div className="flex justify-between text-sm font-bold ">
          <p>JavaScript</p>
          <p>90%</p>
        </div>
        <progress
          className="progress progress-warning "
          value="90"
          max="100"
        ></progress>
      </div>
      <div className="mb-3">
        <div className="flex justify-between text-sm font-bold ">
          <p>React</p>
          <p>90%</p>
        </div>
        <progress
          className="progress progress-warning text-purple-600"
          color="#f1f1f1"
          value="90"
          max="100"
        ></progress>
      </div>
      <div className="mb-3">
        <div className="flex justify-between text-sm font-bold ">
          <p>Next.js</p>
          <p>70%</p>
        </div>
        <progress
          className="progress progress-warning "
          value="70"
          max="100"
        ></progress>
      </div>
      <div className="mb-3">
        <div className="flex justify-between text-sm font-bold ">
          <p>Prisma</p>
          <p>80%</p>
        </div>
        <progress
          className="progress progress-warning "
          color="#f1f1f1"
          value="80"
          max="100"
        ></progress>
      </div>
      <div className="mb-3">
        <div className="flex justify-between text-sm font-bold ">
          <p>MySQL</p>
          <p>50%</p>
        </div>
        <progress
          className="progress progress-warning "
          color="#f1f1f1"
          value="50"
          max="100"
        ></progress>
      </div>
      <div className="mb-3">
        <div className="flex justify-between text-sm font-bold ">
          <p>Mongodb</p>
          <p>70%</p>
        </div>
        <progress
          className="progress progress-warning "
          color="#f1f1f1"
          value="70"
          max="100"
        ></progress>
      </div>
    </div>
  );
};

export default LanguagePro;
