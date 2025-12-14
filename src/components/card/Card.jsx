import { Link } from "react-router-dom";
import noimage from "/noimage.avif";

const Card = ({
  item,
  width = "w-[18%]",
  height = "h-full",
  showPara = true,
}) => {
  return (
    <>
      <Link className={`${width}  shrink-0 ${height} flex flex-col gap-2`}>
        <img
          className="w-full shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] rounded object-cover"
          src={
            item.poster_path || item.backdrop_path
              ? `https://image.tmdb.org/t/p/original${
                  item.poster_path || item.backdrop_path
                }`
              : noimage
          }
          alt=""
        />
        <div className="flex flex-col gap-2 mt-2 p-0.5">
          <h1 className="text-lg text-white font-semibold">
            {item.title || item.name || item.original_name}
          </h1>
          {showPara && (
            <p className="text-white">
              {item.overview.slice(0, 45)}....{" "}
              <span className="text-blue-500">more</span>
            </p>
          )}
        </div>
      </Link>
    </>
  );
};

export default Card;
