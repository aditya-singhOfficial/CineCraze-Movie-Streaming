import Card from "../card/Card";
import Dropdown from "../dropdown/Dropdown";

const Trendingcards = ({ data, changeCategory }) => {
  return (
    <div className="w-full h-[80vh] p-3 flex flex-col gap-6">
      <div className="w-full h-[10%] flex justify-between">
        <h1 className="text-2xl font-semibold text-zinc-500">Trending</h1>
        <Dropdown
          changeCategory={changeCategory}
          selectOption={["all", "tv", "movie"]}
        />
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
