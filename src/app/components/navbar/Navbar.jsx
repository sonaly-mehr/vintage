"use client";
import React, { Fragment, useState } from "react";
import styles from "../../styles/index.module.css";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import { AiOutlineClockCircle } from "react-icons/ai";
import Nav from "./Nav";

const Navbar = () => {
  const info = [
    {
      icon: <HiOutlineLocationMarker />,
      info1: "1136 Bp., Balzac u. 54.",
    },
    {
      icon: <HiOutlineMail />,
      info1: "informacio@vintage52.hu",
    },
    {
      icon: <HiOutlinePhone />,
      info1: "+36 1 329 9241",
      info2: "+36 20 996 7496",
    },
    {
      icon: <AiOutlineClockCircle />,
      info1: "H-P 10:00-18:00",
      info2: "Cs: 10-21:00",
    },
  ];

  return (
    <div className={`${styles.header__bg} text-white relative z-50`}>
      <div className={`${styles.dark_bg_opacity} py-6`}>
        <div className="width flex items-center justify-between">
          {/* --NAV-- */}
          <Nav />

          <div className="">
            <form
              action=""
              className="flex flex-row-reverse md:flex-row gap-5 items-center"
            >
              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="Keresés"
                  className="bg-white opacity-100 py-1.5 pl-4 pr-6 rounded-md text-[#9B959F] text-sm w-full"
                />

                <RxCross1 className="absolute right-2 top-1/2 translate-y-[-50%] text-[#3F3F3F]" />
              </div>
              <button type="submit">
                <AiOutlineSearch className="text-4xl md:text-3xl" />
              </button>
              <FaRegUserCircle className="text-4xl md:text-3xl" />
            </form>
          </div>
        </div>
      </div>

      <div className={`${styles.red_bg_opacity} py-2 text-white`}>
        <div className="width flex gap-3 md:gap-0 items-center justify-between">
          {info.map((info) => (
            <div className="flex items-center gap-0 md:gap-4">
              <span className="text-3xl">{info.icon}</span>
              <div className="hidden md:flex gap-3 font-bold text-[10px] uppercase leading-[14px] tracking-widest">
                <h6>{info.info1}</h6>
                {info.info2 ? <h6>{info.info2}</h6> : ""}
              </div>
            </div>
          ))}

          <div className="font-bold text-xs flex gap-4 uppercase items-center">
            <Link href="/">Hu</Link>
            <span>|</span>
            <Link href="/" className="text-white opacity-50">
              Eng
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
