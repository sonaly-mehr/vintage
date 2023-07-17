"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "../components/Button";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsGrid, BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import styles from "../styles/index.module.css";
import PaginationButtons from "../components/pagination/PaginationButtons";
import BreadCrumbs from "../components/BreadCrumbs";
import breadCrumbsData from "../data/breadCrumbs";
import Tabs from "../components/instrument-categoris/Tabs";

const page = () => {
  const [gridView, setGridView] = useState(true);

  const [breadCrumbs, setBreadCrumbs] = useState(breadCrumbsData.slice(0, 3));

  return (
    <div>
      <div className="width">
        <BreadCrumbs breadCrumbs={breadCrumbs} />
        <h1 className="heading pt-4 md:pt-5 pb-48 md:pb-24">
          akusztikus gitárok
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
      <div className="width pb-8 md:pb-16">
        {/* --TABS-- */}
        <Tabs gridView={gridView} />

        <Link
          href="/"
          className={`${styles.bttn_width} hidden md:block w-full mt-8`}
        >
          <Button text="összes hangszer" icon={<BsArrowRightShort />} />
        </Link>

        <Link href="/" className="mt-3">
          <button className="bttn">
            <BsArrowLeftShort className="text-2xl" /> vissza
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
