import React from "react";
import "./App.css";
import { About } from "./components/About/About";
import Slayder from "./components/slayder/slayd";
import { Banner } from "./components/Banner/Banner";
import Products from "./components/Products/HomePageProducts/HomePageProduts";
import { Partner } from "./components/Partner/Partner";

export const Component = ({ Data }) => {
  return (
    <>
      <Banner />
      <Products Data={Data} />
      <About />
      <Slayder />
      <Partner />
    </>
  );
};
