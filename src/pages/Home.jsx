import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Sidenav from "../components/sidenav/Sidenav";
import Topnav from "../components/topnav/Topnav";
import api from "../utils/axios";

const Home = () => {
  document.title = "CineCraze | Home";

  const [backdrop, setBackdrop] = useState(null);

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
  useEffect(() => {
    !backdrop && getBackdrop();
  }, []);

  return backdrop ? (
    <>
      <Sidenav />
      <div className={`w-[80%] h-screen`}>
        <Topnav />
        <Header data={backdrop} />
      </div>
    </>
  ) : (
    <h1>Loading.....</h1>
  );
};

export default Home;
