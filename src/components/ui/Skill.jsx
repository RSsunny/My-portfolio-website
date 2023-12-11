import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skill = () => {
  const percentage = 90;
  const percentage2 = 70;
  return (
    <div className="flex items-center  gap-5 lg:gap-12 p-4 2xl:px-12">
      <div>
        <div className="flex  flex-col items-center gap-3">
          <CircularProgressbar
            styles={buildStyles({
              strokeLinecap: "butt",
              textSize: "24px",
              pathTransitionDuration: 0.5,

              // Colors
              pathColor: `rgba(255, 240, 0, ${percentage / 100})`,
              textColor: "#f1f1f1",
              trailColor: "#000",
              backgroundColor: "#3e98c7",
            })}
            value={percentage}
            text={`${percentage}%`}
          />
          <p className="text-xs  font-bold">Front-end</p>
        </div>
      </div>
      <div>
        <div className="flex  flex-col items-center gap-3">
          <CircularProgressbar
            styles={buildStyles({
              strokeLinecap: "butt",
              textSize: "24px",
              pathTransitionDuration: 0.5,

              // Colors
              pathColor: `rgba(255, 240, 0, ${percentage / 100})`,
              textColor: "#f1f1f1",
              trailColor: "#000",
              backgroundColor: "#3e98c7",
            })}
            value={percentage2}
            text={`${percentage2}%`}
          />
          <p className="text-xs  font-bold">Back-end</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
