"use client";
import React, { useState } from "react";
import PaginationButtons from "../pagination/PaginationButtons";
import { Tab } from "@headlessui/react";
import GridInstrumentDetails from "./GridInstrumentDetails";
import ListInstruments from "../ListInstruments";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Tabs = ({ gridView }) => {
  let [categories] = useState({
    "összes akusztikus gitár": [
      {
        id: 1,
        gridItems: <GridInstrumentDetails />,
        listItems: <ListInstruments />,
      },
    ],
    fémhúros: [
      {
        id: 2,
        gridItems: <GridInstrumentDetails />,
        listItems: <ListInstruments />,
      },
      {
        id: 3,
        gridItems: <GridInstrumentDetails />,
        listItems: <ListInstruments />,
      },
    ],
    klasszikus: [
      {
        id: 4,
        gridItems: <GridInstrumentDetails />,
        listItems: <ListInstruments />,
      },
    ],
    "elektro-akusztikus": [
      {
        id: 5,
        gridItems: <GridInstrumentDetails />,
        listItems: <ListInstruments />,
      },
    ],
    "elektro-klasszikus": [
      {
        id: 6,
        gridItems: <GridInstrumentDetails />,
        listItems: <ListInstruments />,
      },
    ],
  });

  return (
    <Tab.Group>
      <Tab.List className="flex flex-wrap md:flex-wrap lg:flex-nowrap gap-4 md:gap-6 p-1 relative top-[-300px] md:top-[-250px] lg:top-[-130px]">
        {Object.keys(categories).map((category) => (
          <Tab
            key={category}
            className={({ selected }) =>
              classNames(
                "w-fit md:w-fit lg:w-fit rounded px-3 py-2 text-xs font-bold leading-5 text-[#333333] uppercase",
                selected
                  ? "border-[3px] border-solid border-black"
                  : "border-[3px] border-solid border-[#CCCCCC]"
              )
            }
          >
            {category}
          </Tab>
        ))}
      </Tab.List>
      <div className="">
        <Tab.Panels className="mt-[-150px] md:mt-[-40px]">
          {Object.values(categories).map((items, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <div>
                {items.map((item) => (
                  <>
                    <div className="flex justify-center mt-[-20px] mb-5">
                      <PaginationButtons />
                    </div>
                    {gridView ? (
                      <div>{item.gridItems}</div>
                    ) : (
                      <div>{item.listItems}</div>
                    )}

                    <div className="flex justify-center mb-5">
                      <PaginationButtons />
                    </div>
                  </>
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </div>
    </Tab.Group>
  );
};

export default Tabs;
