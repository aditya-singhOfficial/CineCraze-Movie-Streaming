import { useNavigate } from "react-router-dom";
import Dropdown from "../components/dropdown/Dropdown"
import Topnav from "../components/topnav/Topnav"

const Trending = () => {
  document.title = "CineCraze | Trending";
  const navigate = useNavigate();
  return (
    <div className="bg-[#1F1E24] w-full h-screen p-4">
      <div className="w-full h-[10vh] flex items-center">
        <div className="flex items-center gap-5 text-white">
          <i onClick={()=>navigate(-1)} className="text-2xl hover:scale-110 duration-200 ri-arrow-left-line cursor-pointer"></i>
          <h2 className="text-2xl ">Trending</h2>
        </div>
        <div className="w-2/3">
          <Topnav />
        </div>
        <div className="flex gap-3">
          <Dropdown dropdownName={"category"} selectOption={["all","movie","tv"]}/>
          <Dropdown dropdownName={"duration"} selectOption={["week","day"]}/>
        </div>
      </div>
    </div>
  )
}

export default Trending
