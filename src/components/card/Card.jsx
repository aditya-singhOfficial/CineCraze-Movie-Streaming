import { Link } from "react-router-dom";

const Card = ({ item, width = "w-[20%]", height = "h-full" }) => {
  return (
    <>
      <Link className={`${width} shrink-0 ${height} flex flex-col gap-2`}>
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
            <span className="text-blue-500">more</span>
          </p>
        </div>
      </Link>
    </>
  );
};

export default Card;
