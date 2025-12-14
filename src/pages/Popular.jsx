import { useNavigate } from "react-router-dom";
import Dropdown from "../components/dropdown/Dropdown";
import Topnav from "../components/topnav/Topnav";
import { useEffect, useState } from "react";
import api from "../utils/axios";
import BouncingLoader from "../components/loader/BouncingLoader";
import Card from "../components/card/Card";
import InfiniteScroll from "react-infinite-scroll-component";

const Popular = () => {
  document.title = `CineCraze | Popular `;
  const navigate = useNavigate();
  const [category, setCategory] = useState("movie");
  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const getPopular = async () => {
    try {
      const { data } = await api.get(`/${category}/popular?page=${page}`);
      if (data.results.length > 0) {
        setPage(page + 1);
        setPopular((prev) => [...prev, ...data.results]);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const refreshHandler = () => {
    if (popular.length === 0) getPopular();
    else {
      setPopular([]);
      setPage(1);
      getPopular();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);
  return popular.length > 0 ? (
    <div className="bg-[#1F1E24] w-full min-h-screen p-4">
      <div className="w-full h-[10vh] flex justify-between items-center">
        <div className="flex items-center gap-5 text-white">
          <i
            onClick={() => navigate(-1)}
            className="text-2xl hover:scale-110 duration-200 ri-arrow-left-line cursor-pointer"
          ></i>
          <h2 className="text-2xl ">
            Popular
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
            selectOption={["tv", "movie"]}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={popular.length}
        next={getPopular}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <div className=" bg-[#1F1E24] flex flex-wrap w-full justify-between gap-y-10">
          {popular.map((item, index) => (
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

export default Popular;
