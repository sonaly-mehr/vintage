"use client";
import React, { useState } from "react";
import Instruments from "../Instruments";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsGrid, BsArrowRightShort } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Button from "../Button";
import ListInstruments from "./ListInstruments";
import styles from '../../styles/index.module.css'

const LatestInstrument = () => {
  const [gridView, setGridView] = useState(true);

  return (
    <div>
      <div className="width">
        <h1 className="heading pt-4 md:pt-16 pb-4">
          legújabb hangszereink
        </h1>
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
                className={`${gridView ? "black" : "text-[#979797]"} text-3xl cursor-pointer`}
                onClick={() => setGridView(true)}
              >
                <BsGrid className={gridView ? "black" : "text-[#979797]"} />
              </span>
              <span
                className={`${gridView ? "text-[#979797]" : "black"} text-3xl cursor-pointer`}
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
        {gridView ? <Instruments /> : <ListInstruments />}

        <Link href="/" className={`${styles.bttn_width} block md:hidden w-full mt-8`}>
          <Button
            text="összes hangszer"
            icon={<BsArrowRightShort />}
          />
        </Link>
      </div>
    </div>
  );
};

export default LatestInstrument;
