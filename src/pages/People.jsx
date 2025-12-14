import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "../components/topnav/Topnav";
import Dropdown from "../components/dropdown/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../components/card/Card";
import BouncingLoader from "../components/loader/BouncingLoader";
import api from "../utils/axios";

const People = () => {
  document.title = `CineCraze | People `;
  const navigate = useNavigate();
  const [category, setCategory] = useState("popular");
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const getPeople = async () => {
    try {
      const { data } = await api.get(`/person/${category}?page=${page}`);
      console.log(data);
      
      if (data.results.length > 0) {
        setPage(page + 1);
        setPeople((prev) => [...prev, ...data.results]);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const refreshHandler = () => {
    if (people.length === 0) getPeople();
    else {
      setPeople([]);
      setPage(1);
      getPeople();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, []);
  return people.length > 0 ? (
    <div className="bg-[#1F1E24] w-full min-h-screen p-4">
      <div className="w-full h-[10vh] flex justify-between items-center">
        <div className="flex items-center gap-5 text-white">
          <i
            onClick={() => navigate(-1)}
            className="text-2xl hover:scale-110 duration-200 ri-arrow-left-line cursor-pointer"
          ></i>
          <h2 className="text-2xl ">
            movies
            {<small className="text-sm text-zinc-500 ml-2">({category})</small>}
          </h2>
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
            selectOption={["popular", "top_rated", "upcoming", "now_playing"]}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={people.length}
        next={getPeople}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <div className=" bg-[#1F1E24] flex flex-wrap w-full justify-between gap-y-10">
          {people.map((item, index) => (
            <Card
              showPara={false}
              key={index}
              width={"w-[15%]"}
              height={"h-fit"}
              item={item}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  ) : (
    <BouncingLoader />
  );
};

export default People;
