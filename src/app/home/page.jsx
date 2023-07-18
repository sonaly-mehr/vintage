import React from "react";
import Instrument from "../components/home/LatestInstrument";
import FeaturedInstrument from "../components/home/FeaturedInstrument";
import News from "../components/home/News";
import LatestInstrument from "../components/home/LatestInstrument";

const page = () => {
  return (
    <>
      <LatestInstrument />
      <FeaturedInstrument />
      <News />
    </>
  );
};

export default page;
