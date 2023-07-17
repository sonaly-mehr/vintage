"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { BsArrowLeftShort } from "react-icons/bs";
import Button from "../components/Button";
import breadCrumbsData from "../data/breadCrumbs";
import BreadCrumbs from "../components/BreadCrumbs";

const page = () => {
  const [breadCrumbs, setBreadCrumbs] = useState(breadCrumbsData.slice(0, 5));
  return (
    <div div className="mb-14 md:mb-24">
      <div className="width">
        <BreadCrumbs breadCrumbs={breadCrumbs} />
        <h1 className="heading pt-10 pb-5">Foglalásod</h1>
      </div>

      <div className="bg-[#F4F4F4F2] py-10">
        <div className="width flex gap-20 md:gap-28 md:justify-between">
          <div>
            <div className="basis-1/2 flex gap-16 md:gap-32">
              <div className="flex flex-col gap-6">
                <h6 className="text-[15px] font-bold leading-[23px] h-10">
                  Termék:
                </h6>
                <h6 className="text-[15px] font-bold leading-[23px]">Ár:</h6>
                <h6 className="text-[15px] font-bold leading-[23px]">
                  Mennyiség:
                </h6>
                <h6 className="text-[15px] font-bold leading-[23px]">
                  Összesen:
                </h6>
              </div>

              <div className="flex flex-col gap-6">
                <span className="body3 flex flex-col h-10">
                  Framus <span>FM-20SE MIJ</span>
                </span>
                <span className="body3">170 000 Ft</span>
                <div className="flex gap-3 items-center">
                  <button className="border-2 border-solid border-[#C4C4C4] p-1 rounded">
                    <MdKeyboardArrowDown className="text-[#C4C4C4]" />
                  </button>
                  <span className="body3">1 db</span>
                  <button className="border-2 border-solid border-[#C4C4C4] p-1 rounded">
                    <MdKeyboardArrowUp className="text-[#C4C4C4]" />
                  </button>
                </div>
                <span className="text-[15px] font-semibold leading-[22px]">
                  170 000 Ft
                </span>
              </div>
            </div>

            <div className="border-y-2 border-solid border-[#C4C4C4] py-6 flex gap-10 items-center my-12">
              <p className="text-sm font-light">
                Az{" "}
                <Link href="/" className="font-semibold underline">
                  általános üzletszabályzatot és a vásárlási/megrendelési
                  feltételeket
                </Link>{" "}
                elolvastam és tudomásul veszem.
              </p>
              <input type="checkbox" className="w-10 h-10 md:w-7 md:h-7" />
            </div>

            <div className="md:hidden block cursor-pointer">
              <select
                id="options"
                className="font-bold uppercase text-xs tracking-wider input bg-white"
              >
                <option selected>szállítási feltételek</option>
                <option value="1" className="body5">
                  Option 2
                </option>
                <option value="2" className="body5">
                  Option 3
                </option>
                <option value="3" className="body5">
                  Option 4
                </option>
                <option value="4" className="body5">
                  Option 5
                </option>
              </select>
            </div>

            <div className="flex gap-10 w-full md:w-auto mt-6 text-center justify-center md:justify-normal">
              <Link
                href="/reservation-data"
                className="w-full md:w-auto bttn-width"
              >
                <Button text="tovább a foglaláshoz" icon="" />
              </Link>
              <Link href="/product-details" className="hidden md:block">
                <button className="bttn">
                  <BsArrowLeftShort className="text-2xl" /> vissza
                </button>
              </Link>
            </div>
          </div>

          <div className="hidden md:block basis-1/2">
            <h6 className="text-[15px] font-semibold leading-[23px] mb-3">
              Szállítási feltételek
            </h6>
            <p className="text-sm font-light leading-[21px]">
              A rendelés leadása után a kollégák hamarosan felveszik veled a
              kapcsolatot. <br />A megrendelt hangszer(eke)t a Vintage’52
              hangszerboltban tudod személyesen átvenni, vagy kérheted
              házhozszállítással (DPD futár), vagy – mérettől függően - Foxpost
              csomagpontra vagy Foxpost házhozszállítással való küldéssel is.
            </p>
          </div>
        </div>
      </div>

      <Link
        href="/product-details"
        className="block md:hidden width pt-5 md:pt-0"
      >
        <button className="bttn">
          <BsArrowLeftShort className="text-2xl" /> vissza
        </button>
      </Link>
    </div>
  );
};

export default page;
