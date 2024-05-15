import React from "react";
import Img from "./Img";
import Header from "./Header";

const Home = () => {
  return (
    <div className="p-2 flex flex-col border border-red-500">
      <Header />
      <Img />
    </div>
  );
};

export default Home;
