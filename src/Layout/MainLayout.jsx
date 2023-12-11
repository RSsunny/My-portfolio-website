import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Sidebar/Sidebar";
import Navber from "../components/ui/Navber";
import Footer from "../components/ui/Footer";

const MainLayout = () => {
  return (
    <div className="grid grid-cols-12 gap-5 lg:gap-10 m-8 ">
      <div className="hidden md:block md:col-span-3  sticky top-4 h-screen  ">
        <Sidebar></Sidebar>
      </div>
      <div className="col-span-12 md:col-span-9   border rounded-2xl border-purple-800 shadow-purple-400 shadow-lg   overflow-hidden  ">
        <Navber></Navber>
        <Outlet />
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
