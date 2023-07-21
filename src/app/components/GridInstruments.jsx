import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import polygon from "../../assets/Polygon 6.png";
import instrumentData from "../data/data";

const GridInstruments = () => {
  const [instruments, setInstruments] = useState(instrumentData);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-4 md:gap-x-7 gap-y-10 md:gap-y-14">
      {instruments.map((instrument) => (
        <div className="text-black">
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1559466170-d854d05cb115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
              alt=""
              priority
              unoptimized
              width="0"
              height="0"
              className="w-full h-auto rounded-md"
            />
            <div className="absolute right-[-2px] bottom-0">
              <Image src={polygon} alt="" priority />
              <span className="font-bold text-[8px] uppercase tracking-wider absolute right-1 bottom-5 rotate-[-45deg]">
                Használt
              </span>
            </div>
          </div>
          <h6 className="font-semibold text-[15px] leading-[23px] my-3">
            {instrument.name}
          </h6>
          <span className="font-light text-[15px] leading-[22px] block h-[40px]">
            {instrument.type}
          </span>
          <h6 className="font-bold text-[15px] leading-[22px] text-primary my-3">
            {instrument.salePrice}
          </h6>
          <Link href="/product-details">
            <button className="bttn">
              Több infó <FiArrowRight className="text-xl" />
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default GridInstruments;
