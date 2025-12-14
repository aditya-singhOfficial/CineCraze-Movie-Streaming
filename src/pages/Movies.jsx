import { useNavigate } from "react-router-dom";
import Dropdown from "../components/dropdown/Dropdown";
import Topnav from "../components/topnav/Topnav";
import { useEffect, useState } from "react";
import api from "../utils/axios";
import BouncingLoader from "../components/loader/BouncingLoader";
import Card from "../components/card/Card";

const Movies = () => {
  document.title = "CineCarze | Movies";
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [duration, setDuration] = useState("day");
  const getMovie = async () => {
    try {
      const { data } = await api.get(`/movie/now_playing`);
      console.log(data);
      setMovies(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    getMovie();
  }, [duration]);
  return movies.length > 0 ? (
    <div className="bg-[#1F1E24] w-full  px-6">
      <div className="w-full h-[10vh] flex justify-between items-center">
        <div className="flex items-center gap-5 text-white">
          <i
            onClick={() => navigate(-1)}
            className="text-2xl hover:scale-110 duration-200 ri-arrow-left-line cursor-pointer"
          ></i>
          <h2 className="text-2xl ">Movies</h2>
        </div>
        <div className="w-[70%]">
          <Topnav />
        </div>
        <div className="flex gap-3 w-[26%]">
          <Dropdown
            changeCategory={(e) => {
              setDuration(e.target.value);
            }}
            dropdownName={"duration"}
            selectOption={["week", "day"]}
          />
        </div>
      </div>

      <div className=" bg-[#1F1E24] flex flex-wrap w-full justify-between gap-y-10">
        {movies.map((item, index) => (
          <Card key={index} width={"w-[23%]"} height={"h-fit"} item={item} />
        ))}
      </div>
    </div>
  ) : (
    <BouncingLoader />
  );
};

export default Movies;
