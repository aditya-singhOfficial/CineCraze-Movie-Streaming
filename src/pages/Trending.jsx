import { Link, useNavigate } from "react-router-dom";
import Dropdown from "../components/dropdown/Dropdown";
import Topnav from "../components/topnav/Topnav";
import { useEffect, useState } from "react";
import api from "../utils/axios";
import Card from "../components/card/Card";
import BouncingLoader from "../components/loader/BouncingLoader";

const Trending = () => {
  document.title = "CineCraze | Trending";
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState(null);

  const getTrending = async () => {
    try {
      const { data } = await api.get(`/trending/${category}/${duration}`);
      setTrending(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    getTrending();
  }, [category, duration]);

  return trending ? (
    <div className="bg-[#1F1E24] w-full h-screen p-4">
      <div className="w-full h-[10vh] flex justify-between items-center">
        <div className="flex items-center gap-5 text-white">
          <i
            onClick={() => navigate(-1)}
            className="text-2xl hover:scale-110 duration-200 ri-arrow-left-line cursor-pointer"
          ></i>
          <h2 className="text-2xl ">Trending</h2>
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

      <div className="h-[85vh] flex flex-wrap w-full overflow-y-auto justify-between gap-y-10">
        {trending.map((item, index) => (
          <Card key={index} width={"w-[23%]"} height={"h-fit"} item={item} />
        ))}
      </div>
    </div>
  ) : (
    <BouncingLoader />
  );
};

export default Trending;
