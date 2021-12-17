import React from "react";
import Banner from "../sections/Banner";
import Cupcakes from "./Cupcakes";

const Home = () => {
  return (
    <>
      <Banner />
      <Cupcakes uri="cupcakes?sabor_like=fresa" />
    </>
  );
};

export default Home;
