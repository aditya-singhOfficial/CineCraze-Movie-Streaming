import { useState } from "react";
import { Link } from "react-router-dom";

const Topnav = () => {
  const [query, setQuery] = useState("");
  return (
    <div
      className={`relative w-full h-[10vh] flex items-center justify-center  `}
    >
      <i className="ri-search-line text-zinc-200 text-2xl"></i>
      <input
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
        {/* <Link className={`flex p-10 font-semibold border-b-2 border-zinc-200`}>
        <img src="" alt="" />
        <span>Something</span>
        </Link> */}
      </div>
    </div>
  );
};

export default Topnav;
