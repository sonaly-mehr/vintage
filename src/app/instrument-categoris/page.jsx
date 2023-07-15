"use client";
import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import Button from "../components/Button";
import Instruments from "../components/Instruments";
import ListInstruments from "../components/home/ListInstruments";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsGrid, BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import styles from "../styles/index.module.css";
import PaginationButtons from "../components/pagination/PaginationButtons";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const page = () => {
  const [gridView, setGridView] = useState(true);

  // const acousticGuitars=[
  //     {
  //         name: "összes akusztikus gitár",
  //         link: "/"
  //     }
  // ]
  let [categories] = useState({
    acousticGuitars: [
      {
        id: 1,
        gridItems: <Instruments />,
        listItems: <ListInstruments />,
      },
    ],
    Popular: [
      {
        id: 2,
        gridItems: <Instruments />,
        listItems: <ListInstruments />,
      },
      {
        id: 3,
        gridItems: <Instruments />,
        listItems: <ListInstruments />,
      },
    ],
    Trending: [
      {
        id: 4,
        gridItems: <Instruments />,
        listItems: <ListInstruments />,
      },
    ],
  });
  return (
    //   <div className="w-full max-w-md px-2 py-16 sm:px-0">
    //   <Tab.Group>
    //     <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
    //       {Object.keys(categories).map((category) => (
    //         <Tab
    //           key={category}
    //           className={({ selected }) =>
    //             classNames(
    //               'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
    //               'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
    //               selected
    //                 ? 'bg-white shadow'
    //                 : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
    //             )
    //           }
    //         >
    //           {category}
    //         </Tab>
    //       ))}
    //     </Tab.List>
    //     <Tab.Panels className="mt-2">
    //       {Object.values(categories).map((posts, idx) => (
    //         <Tab.Panel
    //           key={idx}
    //           className={classNames(
    //             'rounded-xl bg-white p-3',
    //             'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
    //           )}
    //         >
    //           <div>
    //             {posts.map((post) => (
    //               <div>
    //                 {post.gridItems}
    //               </div>
    //             ))}
    //           </div>
    //         </Tab.Panel>
    //       ))}
    //     </Tab.Panels>
    //   </Tab.Group>
    // </div>

    <div>
      <div className="width">
        <h1 className="heading pt-4 md:pt-16 pb-4">legújabb hangszereink</h1>
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
      <div className="width pb-16">
        <div className="flex justify-center mb-5">
          <PaginationButtons />
        </div>
        {gridView ? <Instruments /> : <ListInstruments />}

        <div className="flex justify-center mt-3 mb-5">
          <PaginationButtons />
        </div>

        <Link
          href="/"
          className={`${styles.bttn_width} block md:hidden w-full mt-8`}
        >
          <Button text="összes hangszer" icon={<BsArrowRightShort />} />
        </Link>

        <Link href="/">
          <button className="bttn">
            <BsArrowLeftShort className="text-2xl" /> vissza
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
