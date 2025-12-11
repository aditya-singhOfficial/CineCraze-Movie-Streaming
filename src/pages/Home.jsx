import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Sidenav from "../components/sidenav/Sidenav";
import Topnav from "../components/topnav/Topnav";
import api from "../utils/axios";
import Trendingcards from "../components/trendingcards/Trendingcards";
import BouncingLoader from "../components/loader/BouncingLoader";

const Home = () => {
  document.title = "CineCraze | Home";

  const [backdrop, setBackdrop] = useState(null);
  const [trending, setTrending] = useState(null);
  const getBackdrop = async () => {
    try {
      const { data } = await api.get(`/trending/all/day`);
      const randomBackdrop =
        data.results[(Math.random() * data.results.length).toFixed()];

      setBackdrop(randomBackdrop);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await api.get(`/trending/all/day`);
      setTrending(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  useEffect(() => {
    !backdrop && getBackdrop();
    !trending && getTrending();
  }, []);

  return backdrop && trending ? (
    <>
      <Sidenav />
      <div className={`w-[80%] h-screen overflow-y-auto`}>
        <Topnav />
        <Header data={backdrop} />
        <Trendingcards data={trending} />
      </div>
    </>
  ) : (
    <BouncingLoader />
  );
};

export default Home;
