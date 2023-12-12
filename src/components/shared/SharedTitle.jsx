import { RiCheckboxMultipleFill } from "react-icons/ri";

const SharedTitle = ({ name }) => {
  return (
    <div className="flex items-center text-2xl gap-3 mb-3">
      <RiCheckboxMultipleFill className="text-yellow-400" />
      <h1 className="  font-bold my-10"> {name}</h1>
    </div>
  );
};

export default SharedTitle;
