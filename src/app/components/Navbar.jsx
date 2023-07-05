"use client";
import React, { Fragment, useState } from "react";
import styles from "../styles/index.module.css";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Menu, Transition } from "@headlessui/react";
import logo from "../../assets/Logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
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
    <div className={`${styles.header__bg} text-white`}>
      <div className={`${styles.dark_bg_opacity} py-6`}>
        <div className="width flex items-center justify-between">
          <div>
            <ul className="flex gap-7 font-bold text-xs uppercase items-center text-[#CCCCCC]">
              <li>
                <Link
                  href="/"
                  className={`${
                    pathname == "/" ? "active" : ""
                  } py-2.5 px-4 block`}
                >
                  kezdőlap
                </Link>
              </li>
              <li>
                <Menu
                  as="div"
                  className="relative inline-block text-left py-2.5 px-4"
                >
                  <Menu.Button className="flex items-center w-full justify-center rounded hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 font-bold text-xs uppercase text-[#CCCCCC]">
                    Hangszereink
                    <MdKeyboardArrowDown className=" text-3xl" />
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border-2 border-solid border-[#D6D6D6]">
                      <div className="p-2 ">
                        <Menu.Item>
                          {({ active }) => (
                            <Link href="/">
                              <button
                                className={`${
                                  active
                                    ? "text-white bg-[#3F3F3F]"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded px-3 py-2 text-xs uppercase font-bold tracking-wider`}
                              >
                                használt
                              </button>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? "text-white bg-[#3F3F3F]"
                                  : "text-gray-900"
                              } group flex w-full items-center rounded px-3 py-2 text-xs uppercase font-bold tracking-wider`}
                            >
                              új
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </li>
              <li>
                <Menu
                  as="div"
                  className="relative inline-block text-left py-2.5 px-4"
                >
                  <Menu.Button className="flex items-center w-full justify-center rounded hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 font-bold text-xs uppercase text-[#CCCCCC]">
                    információk
                    <MdKeyboardArrowDown className=" text-3xl" />
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-42 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border-2 border-solid border-[#D6D6D6]">
                      <div className="p-2 flex flex-col gap-2 ">
                        <Menu.Item>
                          {({ active }) => (
                            <Link href="/">
                              <button
                                className={`${
                                  active
                                    ? "text-white bg-[#3F3F3F]"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded px-3 py-2 text-xs uppercase font-bold tracking-wider`}
                              >
                                rólunk
                              </button>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link href="/">
                              <button
                                className={`${
                                  active
                                    ? "text-white bg-[#3F3F3F]"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded px-3 py-2 text-xs uppercase font-bold tracking-wider`}
                              >
                                hírek
                              </button>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link href="/">
                              <button
                                className={`${
                                  active
                                    ? "text-white bg-[#3F3F3F]"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded px-3 py-2 text-xs uppercase font-bold tracking-wider`}
                              >
                                barátaink
                              </button>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link href="/">
                              <button
                                className={`${
                                  active
                                    ? "text-white bg-[#3F3F3F]"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded px-3 py-2 text-xs uppercase font-bold tracking-wider`}
                              >
                                szervízünk
                              </button>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link href="/">
                              <button
                                className={`${
                                  active
                                    ? "text-white bg-[#3F3F3F]"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded px-3 py-2 text-xs uppercase font-bold tracking-wider`}
                              >
                                értékesítés
                              </button>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link href="/">
                              <button
                                className={`${
                                  active
                                    ? "text-white bg-[#3F3F3F]"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded px-3 py-2 text-xs uppercase font-bold tracking-wider`}
                              >
                                szolgáltatások
                              </button>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link href="/">
                              <button
                                className={`${
                                  active
                                    ? "text-white bg-[#3F3F3F]"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded px-3 py-2 text-xs uppercase font-bold tracking-wider`}
                              >
                                ÁSZF
                              </button>
                            </Link>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </li>
              <li>
                <Link href="/">
                  <Image src={logo} alt="" className="" priority />
                </Link>
              </li>
              <li>
                <Link
                  href="/detailed-search-engine"
                  className={`${
                    pathname == "/detailed-search-engine" ? "active" : ""
                  } py-2.5 px-4 block`}
                >
                  részletes kereső
                </Link>
              </li>
            </ul>
          </div>

          <div className="">
            <form action="" className="flex gap-5 items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Keresés"
                  className="bg-white opacity-100 py-1.5 pl-4 pr-6 rounded-md text-[#9B959F] text-sm w-full"
                />

                <RxCross1 className="absolute right-2 top-1/2 translate-y-[-50%] text-[#3F3F3F]" />
              </div>
              <button type="submit">
                <AiOutlineSearch className="text-3xl" />
              </button>
              <FaRegUserCircle className="text-3xl" />
            </form>
          </div>
        </div>
      </div>

      <div className={`${styles.red_bg_opacity} py-2 text-white`}>
        <div className="width flex items-center justify-between">
          {info.map((info) => (
            <div className="flex items-center gap-4">
              <span className="text-3xl">{info.icon}</span>
              <div className="flex gap-3 font-bold text-[10px] uppercase leading-[14px] tracking-widest">
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
