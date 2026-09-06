import React, { useEffect } from "react";

import Landing from "../components/home/Landing";
import LandingIntro from "../components/home/LandingIntro";
import HotCollections from "../components/home/HotCollections";
import NewItems from "../components/home/NewItems";
import TopSellers from "../components/home/TopSellers";
import BrowseByCategory from "../components/home/BrowseByCategory";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Landing />
      <LandingIntro />
      <HotCollections />
      <NewItems />
      <TopSellers />
      <BrowseByCategory />
    </main>
  );
};

export default Home;