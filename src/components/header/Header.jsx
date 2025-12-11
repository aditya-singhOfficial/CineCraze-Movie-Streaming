import { Link } from "react-router-dom";

const Header = ({ data }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
        backgroundPosition: `center`,
        backgroundSize: `cover`,
      }}
      className="w-full h-[50vh] flex flex-col gap-3 justify-end items-start pb-16 px-10"
    >
      <h1 className="text-4xl text-white font-black w-[70%]">
        {data.title || data.name || data.original_name}
      </h1>
      <p className="w-[70%] text-white">
        {data.overview.slice(0, 200)}....{" "}
        <Link className="text-blue-500">more</Link>
      </p>
      <p className="text-white">
        <i className="mr-2 text-yellow-500 ri-megaphone-fill"></i>
        {data.release_date || "Not Available"}
        <i className="ml-3 mr-2 text-yellow-500 ri-movie-2-ai-fill"></i>
        {data.media_type.toUpperCase()}
      </p>
      <Link className="p-3 text-white font-semibold bg-[#6556CD] rounded">
        Watch Now
      </Link>
    </div>
  );
};

export default Header;
