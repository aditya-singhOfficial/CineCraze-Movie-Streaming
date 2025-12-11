import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <>
      <div className="w-[20%] shrink-0 h-full flex flex-col gap-2">
        <img
          className="w-full rounded shadow-lg object-cover"
          src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
          alt=""
        />
        <div className="flex flex-col gap-2 mt-2 p-0.5">
          <h1 className="text-lg text-white font-semibold">
            {item.title || item.name || item.original_name}
          </h1>
          <p className="text-white">
            {item.overview.slice(0, 45)}....{" "}
            <Link className="text-blue-500">more</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
