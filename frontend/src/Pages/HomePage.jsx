import React from "react";
import Banner1 from "../Components/Banner1/Banner1";
import Subscription from "../Components/Subscription/Subscription";
import LinkMenu from "../Components/LinkMenu/LinkMenu";
import Produce from "../Components/Produce/Produce";
import Reviews from "../Components/Reviews/Reviews";

const HomePage = () => {
  return (
    <div>
      <Banner1 />
      <Subscription />
      <LinkMenu />
      <Produce />
      <Reviews/>
    </div>
  );
};

export default HomePage;
