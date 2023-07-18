"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsGrid, BsArrowRightShort } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Button from "../components/Button";
import styles from "../styles/index.module.css";
import Instruments from "../components/GridInstruments";
import ListInstruments from "../components/ListInstruments";
import PaginationButtons from "../components/pagination/PaginationButtons";
import BreadCrumbs from "../components/BreadCrumbs";

const page = () => {
  const [gridView, setGridView] = useState(true);
  const breadCrumbs = [
    {
      name: "részletes keresés",
    },
    {
      name: "találatok",
      url: "/search-results",
    },
  ];
  return (
    <div>
      <div className="width">
        <BreadCrumbs breadCrumbs={breadCrumbs} />
        <h2 className="subHeading pt-4 md:pt-5 pb-4">A keresés eredménye:</h2>
      </div>

      <div className="bg-[#F7F7F7] py-3">
        <div className="width flex justify-between">
          <div>
            <Link
              href="/"
              className="flex gap-2 items-center bg-white text-[#333333] border-2 border-solid border-[#D6D6D6] py-1.5 px-5 font-bold text-xs tracking-wider uppercase rounded"
            >
              Legújabbak előre{" "}
              <MdKeyboardArrowDown className="text-black text-2xl" />
            </Link>
          </div>

          <div className="flex items-center gap-16">
            <div className="flex items-center gap-5">
              <span
                className={`${
                  gridView ? "black" : "text-[#979797]"
                } text-3xl cursor-pointer`}
                onClick={() => setGridView(true)}
              >
                <BsGrid className={gridView ? "black" : "text-[#979797]"} />
              </span>
              <span
                className={`${
                  gridView ? "text-[#979797]" : "black"
                } text-3xl cursor-pointer`}
                onClick={() => setGridView(false)}
              >
                <AiOutlineUnorderedList />
              </span>
            </div>
            <Link href="/" className="hidden md:block">
              <Button text="összes hangszer" icon={<BsArrowRightShort />} />
            </Link>
          </div>
        </div>
      </div>
      <div className="width pt-8 md:pt-5 pb-16">
        <div className="flex justify-center mb-5">
          <PaginationButtons />
        </div>
        {gridView ? <Instruments /> : <ListInstruments />}

        <Link
          href="/"
          className={`${styles.bttn_width} block md:hidden w-full mt-8`}
        >
          <Button text="összes hangszer" icon={<BsArrowRightShort />} />
        </Link>

        <div className="flex justify-center mt-6 mb-5">
          <PaginationButtons />
        </div>
      </div>
    </div>
  );
};

export default page;
