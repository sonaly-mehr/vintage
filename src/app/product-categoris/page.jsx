import React from "react";
import LatestInstrument from "../components/home/LatestInstrument";
import styles from "../styles/index.module.css";
import Link from "next/link";

const page = () => {
  const usedInstruments = [
    {
      name: "elektromos gitárok",
      img: "usedInstrument1",
      link: "/",
    },
    {
      name: "basszusgitárok",
      img: "usedInstrument2",
      link: "/",
    },
    {
      name: "akusztikus gitárok",
      img: "usedInstrument3",
      link: "/",
    },
    {
      name: "effektek",
      img: "usedInstrument4",
      link: "/",
    },
    {
      name: "gitárerősítő fejek",
      img: "usedInstrument5",
      link: "/",
    },
    {
      name: "gitárkombók",
      img: "usedInstrument6",
      link: "/",
    },
    {
      name: "basszusgitár fejek",
      img: "usedInstrument7",
      link: "/",
    },
    {
      name: "basszusgitár kombók",
      img: "usedInstrument8",
      link: "/",
    },
    {
      name: "kiegészítők",
      img: "usedInstrument9",
      link: "/",
    },
    {
      name: "Ládák",
      img: "usedInstrument10",
      link: "/",
    },
    {
      name: "akusztikus erősítők",
      img: "usedInstrument11",
      link: "/",
    },
    {
      name: "billentyűs hangszerek",
      img: "usedInstrument12",
      link: "/",
    },
    {
      name: "hangosítás",
      img: "usedInstrument13",
      link: "/",
    },
    {
      name: "stúdió-berendezések",
      img: "usedInstrument14",
      link: "/",
    },
    {
      name: "vintage hangszereink",
      img: "usedInstrument15",
      link: "/",
    },
  ];
  const newInstruments = [
    {
      name: "elektromos gitárok",
      img: "newInstrument1",
      link: "/",
    },
    {
      name: "basszusgitárok",
      img: "newInstrument2",
      link: "/",
    },
    {
      name: "akusztikus gitárok",
      img: "newInstrument3",
      link: "/",
    },
    {
      name: "effektek",
      img: "newInstrument4",
      link: "/",
    },
    {
      name: "gitárerősítő fejek",
      img: "newInstrument5",
      link: "/",
    },
    {
      name: "gitárkombók",
      img: "newInstrument6",
      link: "/",
    },
    {
      name: "kiegészítők",
      img: "newInstrument7",
      link: "/",
    },
    {
      name: "ládák",
      img: "newInstrument8",
      link: "/",
    },
  ];
  return (
    <>
      <div className="width ">
        <h1 className="heading pt-4 md:pt-16 pb-4">Termékkategóriák</h1>
        <h2 className="subHeading pt-2 pb-7">Használt hangszereink</h2>

        {/* Used-Instruments */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-5 gap-y-3">
          {usedInstruments.map(({ name, img, link }) => (
            <Link
              href={link}
              className={`${styles[img]} ${styles.usedInstrument} w-full text-center flex items-center rounded-lg h-12`}
            >
              <button className="font-bold text-xs tracking-widest flex justify-center px-4 uppercase text-white w-full">
                {name}
              </button>
            </Link>
          ))}
        </div>

        {/* New-Instruments */}
        <h2 className="subHeading py-8 pb-3">Új hangszereink</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-5 gap-y-3">
          {newInstruments.map((instrument) => (
            <Link
              href={instrument.link}
              className={`${styles[instrument.img]} ${
                styles.newInstrument
              } w-full text-center flex items-center rounded-lg h-12`}
            >
              <button className="font-bold text-xs tracking-widest flex justify-center py-1 px-4 uppercase text-white w-full">
                {instrument.name}
              </button>
            </Link>
          ))}
        </div>
      </div>

      <LatestInstrument />
    </>
  );
};

export default page;
