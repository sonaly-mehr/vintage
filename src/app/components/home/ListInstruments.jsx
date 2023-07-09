"use client";
import React, { useState } from "react";
import instrumentData from "@/app/data/data";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const ListInstruments = () => {
  const [instruments, setInstruments] = useState(instrumentData);

  return (
    <div className="grid grid-cols-2 gap-y-3 gap-x-8">
      {instruments.map((list) => (
        <div className="flex justify-between items-center border-b-[1px] border-solid border-[#B1B1B1] pb-3">
          <div>
            <h6 className="font-semibold text-[15px] leading-[23px]">
              {list.name}
            </h6>
            <span className="font-light text-[15px] leading-[22px] block my-1">
              {list.type}
            </span>
            <h6 className="font-bold text-[15px] leading-[22px] text-primary ">
              {list.salePrice}
            </h6>
          </div>

          <Link href="/product-details">
            <button className="border-2 border-solid border-black p-1 rounded-md">
              <FiArrowRight className="text-xl" />
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ListInstruments;
