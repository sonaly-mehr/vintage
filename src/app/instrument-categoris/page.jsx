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
import OrderDropdown from "../components/OrderDropdown";

const page = () => {
  const [gridView, setGridView] = useState(true);

  const [breadCrumbs, setBreadCrumbs] = useState(breadCrumbsData.slice(0, 3));

  return (
    <div>
      <div className="width">
        <BreadCrumbs breadCrumbs={breadCrumbs} />
        <h1 className="heading pt-4 md:pt-5 pb-64 md:pb-48 lg:pb-24">
          akusztikus gitárok
        </h1>
      </div>

      <div className="bg-[#F7F7F7] py-3">
        <div className="width flex justify-between">
          <div>
          <OrderDropdown option2="Option 2" option3="Option 3" option4="Option 4" option5="Option 5"/>
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
