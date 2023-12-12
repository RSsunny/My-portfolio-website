import { NavLink } from "react-router-dom";
import DownlodCV from "../shared/DownlodCV";

const Navber = () => {
  return (
    <div className="p-10 flex justify-between items-center  gap-8 font-bold z-50">
      <div></div>
      <div className="flex justify-center  gap-8 font-bold">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-yellow-400 border-b pb-1 border-yellow-400 "
              : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/site"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-yellow-400 border-b pb-1 border-yellow-400 "
              : ""
          }
        >
          web Site
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-yellow-400 border-b pb-1 border-yellow-400 "
              : ""
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-yellow-400 border-b pb-1 border-yellow-400 "
              : ""
          }
        >
          Contact
        </NavLink>
      </div>
      <div>
        <p className="px-6 py-2 text-xs rounded-md border border-purple-600 shadow-md shadow-purple-500 hover:bg-purple-500 hover:text-yellow-400 ease-linear duration-500">
          <DownlodCV />
        </p>
      </div>
    </div>
  );
};

export default Navber;
