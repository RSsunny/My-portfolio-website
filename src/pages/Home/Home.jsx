import Banner from "../../components/ui/Banner";
import Eduction from "./Eduction";
import Tacnolagy from "../../components/shared/Tacnolagy";
import Work from "./Work";
import AllTacnology from "./AllTacnology";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Work />
      <Eduction />

      <div className="text-center">
        <h1 className="text-center text-6xl capitalize font-bold my-10 border-b pb-5 inline-block border-purple-600">
          technology
        </h1>
      </div>

      <AllTacnology />
    </div>
  );
};

export default Home;
