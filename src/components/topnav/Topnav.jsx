import { useEffect, useState } from "react";
import { data, Link } from "react-router-dom";
import api from "../../utils/axios";
import noImage from "../../../public/noimage.avif";
const Topnav = () => {
  const [query, setQuery] = useState("");
  const [movieSearches, setMovieSearches] = useState(null);
  const getSearches = async () => {
    try {
      const { data } = await api.get(`/search/multi?query=${query}`);
      setMovieSearches(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const keyUp = (event) => {
    if (event.key == "Enter") {
      getSearches();
    }
  };

  useEffect(() => {
    getSearches();
  }, [query]);

  return (
    <div
      className={`relative w-full h-[10vh] flex items-center justify-center  `}
    >
      <i className="ri-search-line text-zinc-200 text-2xl"></i>
      <input
        onKeyUp={keyUp}
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className={`w-[50%] outline-none border-none text-lg text-zinc-400 placeholder-zinc-400 p-5`}
        type="text"
        placeholder="Search Anything..."
      />
      {query.length > 0 ? (
        <i
          onClick={() => setQuery("")}
          className="ri-close-line cursor-pointer duration-100 text-zinc-200 text-2xl"
        ></i>
      ) : (
        <i className="ri-close-line duration-100 text-2xl text-transparent"></i>
      )}

      <div
        className={`absolute w-[50%] max-h-[50vh]  top-[90%] rounded overflow-auto bg-zinc-100`}
      >
        {movieSearches &&
          movieSearches.map((item, index) => (
            <Link
              key={item.id}
              className={`flex p-10 font-semibold border-b-2 border-zinc-200`}
            >
              <img
                className="h-[10vh] w-[10vh] object-cover rounded mr-5 shadow-lg"
                src={
                  item.poster_path || item.profile_path || item.backdrop_path
                    ? `https://image.tmdb.org/t/p/original${
                        item.poster_path ||
                        item.profile_path ||
                        item.backdrop_path
                      }`
                    : noImage
                }
                alt=""
              />
              <div className="flex flex-col gap-2">
                <span>
                  {item.name ||
                    item.title ||
                    item.original_title ||
                    item.original_name}
                </span>
                <span>{item.release_date}</span>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Topnav;
