import { useNavigate } from "react-router-dom";
import Dropdown from "../components/dropdown/Dropdown";
import Topnav from "../components/topnav/Topnav";

const Popular = () => {
  document.title = "CineCraze | Popular";
  const navigate = useNavigate();
  return (
    <div className="bg-[#1F1E24] w-full h-screen px-6">
      <div className="flex items-center gap-5 text-white">
        <i
          onClick={() => navigate(-1)}
          className="text-2xl hover:scale-110 duration-200 ri-arrow-left-line cursor-pointer"
        ></i>
        <h2 className="text-2xl ">Popular</h2>
      </div>
      <div className="w-[70%]">
        <Topnav />
      </div>
      <div className="flex gap-3 w-[26%]">
        <Dropdown
          changeCategory={(e) => {
            setCategory(e.target.value);
          }}
          dropdownName={"category"}
          selectOption={["all", "movie", "tv"]}
        />
        <Dropdown
          changeCategory={(e) => {
            setDuration(e.target.value);
          }}
          dropdownName={"duration"}
          selectOption={["week", "day"]}
        />
      </div>
    </div>
  );
};

export default Popular;
