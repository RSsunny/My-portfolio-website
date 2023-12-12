import { MdDoubleArrow } from "react-icons/md";

const UseTacno = ({ tac1, tac2, tac3, tac4, tac5 }) => {
  return (
    <div className="ml-10">
      <h2 className="text-xl font-bold">Use Tacnolagy</h2>
      <div className="ml-5 my-3 ">
        <div className="flex items-center gap-3">
          <MdDoubleArrow className="text-purple-500" />

          <h3>{tac1}</h3>
        </div>
        <div className="flex items-center gap-3">
          <MdDoubleArrow className="text-purple-500" />

          <h3>{tac2}</h3>
        </div>
        <div className="flex items-center gap-3">
          <MdDoubleArrow className="text-purple-500" />

          <h3>{tac3}</h3>
        </div>
        <div className="flex items-center gap-3">
          <MdDoubleArrow className="text-purple-500" />

          <h3>{tac4}</h3>
        </div>
        <div className="flex items-center gap-3">
          <MdDoubleArrow className="text-purple-500" />

          <h3>{tac5}</h3>
        </div>
      </div>
    </div>
  );
};

export default UseTacno;
