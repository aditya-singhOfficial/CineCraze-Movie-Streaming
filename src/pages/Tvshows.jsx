import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/axios";
import Dropdown from "../components/dropdown/Dropdown";
import Topnav from "../components/topnav/Topnav";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../components/card/Card";
import BouncingLoader from "../components/loader/BouncingLoader";

const Tvshows = () => {
  document.title = `CineCraze | TV SERIES `;
  const navigate = useNavigate();
  const [category, setCategory] = useState("on_the_air");
  const [tvShows, setTvShows] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const getTvShows = async () => {
    try {
      const { data } = await api.get(`/tv/${category}?page=${page}`);
      if (data.results.length > 0) {
        setPage(page + 1);
        setTvShows((prev) => [...prev, ...data.results]);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const refreshHandler = () => {
    if (tvShows.length === 0) getTvShows();
    else {
      setTvShows([]);
      setPage(1);
      getTvShows();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return tvShows.length > 0 ? (
    <div className="bg-[#1F1E24] w-full min-h-screen p-4">
      <div className="w-full h-[10vh] flex justify-between items-center">
        <div className="flex items-center gap-5 text-white">
          <i
            onClick={() => navigate(-1)}
            className="text-2xl hover:scale-110 duration-200 ri-arrow-left-line cursor-pointer"
          ></i>
          <h2 className="text-2xl text-nowrap">
            TV SERIES
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
            selectOption={[
              "airing_today",
              "on_the_air",
              "popular",
              "top_rated",
            ]}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={tvShows.length}
        next={getTvShows}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <div className=" bg-[#1F1E24] flex flex-wrap w-full justify-between gap-y-10">
          {tvShows.map((item, index) => (
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

export default Tvshows;
