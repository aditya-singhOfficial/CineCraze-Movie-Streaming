import Sidenav from "../components/sidenav/Sidenav";
import Topnav from "../components/topnav/Topnav";

const Home = () => {
  document.title = "CineCraze | Home";
  return (
    <>
      <Sidenav />
      <div className={`w-[80%] h-screen`}>
        <Topnav />
      </div>
    </>
  );
};

export default Home;
