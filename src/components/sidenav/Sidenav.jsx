import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div
      className={`w-[20%] h-screen pt-5 pl-10 pr-1 text-white font-bold border-r border-zinc-600`}
    >
      <h2 className={`text-2xl flex items-center`}>
        <i class="ri-tv-fill text-[#6556CD] mr-2"></i>
        <span>CineCraze</span>
      </h2>
      <nav className={`flex flex-col text-zinc-400 gap-3 text-md mt-10 mb-2`}>
        <h2 className={`text-xl text-white`}>New Feeds</h2>
        <Link
          className={` hover:bg-[#6556CD] duration-200 p-4 hover:text-white rounded-lg`}
        >
          <i class="ri-fire-fill mr-2"></i>Trending
        </Link>
        <Link
          className={` hover:bg-[#6556CD] duration-200 p-4 hover:text-white rounded-lg`}
        >
          <i class="ri-bard-fill mr-2"></i>Popular
        </Link>
        <Link
          className={` hover:bg-[#6556CD] duration-200 p-4 hover:text-white rounded-lg`}
        >
          <i class="ri-movie-2-fill mr-2"></i>Movies
        </Link>
        <Link
          className={` hover:bg-[#6556CD] duration-200 p-4 hover:text-white rounded-lg`}
        >
          <i class="ri-tv-2-fill mr-2"></i>TV-Shows
        </Link>
        <Link
          className={` hover:bg-[#6556CD] duration-200 p-4 hover:text-white rounded-lg`}
        >
          <i class="ri-team-fill mr-2"></i>People
        </Link>
      </nav>
      <hr className={`border-none bg-zinc-600 h-px`} />
      <nav className={`flex text-zinc-400 flex-col gap-2 text-md mt-5`}>
        <h2 className={`text-xl text-white`}>Website Information</h2>
        <Link
          className={` hover:bg-[#6556CD] duration-200 p-4 hover:text-white rounded-lg`}
        >
          <i class="ri-information-2-fill mr-2"></i>About CineCraze
        </Link>
        <Link
          className={` hover:bg-[#6556CD] duration-200 p-4 hover:text-white rounded-lg`}
        >
          <i class="ri-phone-fill mr-2"></i>Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
