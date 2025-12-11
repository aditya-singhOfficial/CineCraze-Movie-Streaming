import { Link } from "react-router-dom";
import Card from "../card/Card";

const Trendingcards = ({ data }) => {
  return (
    <div className="w-full h-[50vh] p-3 flex flex-col gap-4">
      <div className="w-full h-[10%]">
        <h1 className="text-2xl font-semibold text-zinc-500">Trending</h1>
      </div>
      <div className="w-full h-[90%] flex gap-2 overflow-x-auto pb-5">
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Trendingcards;
