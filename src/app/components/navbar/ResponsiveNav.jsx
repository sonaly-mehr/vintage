"use client";
import React, { Fragment, useState } from "react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import logo from "../../../assets/Logo.svg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Menu, Transition } from "@headlessui/react";
import { usePathname } from "next/navigation";
import használtNavLinks from "../../data/használtNavLinks.json";
import információkNavLinks from "../../data/információkNavLinks.json";

const ResponsiveNav = ({ nav, handleNav }) => {
  const pathname = usePathname();
  const [használtLinks, setHasználtLinks] = useState(használtNavLinks);
  const [információkLinks, setInformációkLinks] = useState(információkNavLinks);

  const [navbarOpen, setNavbarOpen] = useState(true);
  const [használtSubMenu, setHasználtSubMenu] = useState(false);
  const [showHasználtChildMenu, setShowHasználtChildMenu] = useState(false);
  const [infoSubMenu, setInfoSubMenu] = useState(false);

  const toggelNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div className="absolute z-40 w-full">
      <div
        className={
          nav
            ? "md:hidden absolute left-[-24px] top-[-103px] w-full h-[185vh] bg-black/70"
            : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " absolute left-0 top-0 w-full h-[185vh] bg-[#232323] px-8 py-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 px-6 py-10 ease-in duration-500 h-screen"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  src={logo}
                  width="55"
                  height="20"
                  alt="/"
                  unoptimized={true}
                />
              </Link>
              <div onClick={handleNav}>
                <AiOutlineClose className="text-white text-3xl cursor-pointer" />
              </div>
            </div>
          </div>
          <ul className="py-14 flex flex-col justify-center gap-5 relative z-[200]">
            <li className="font-bold text-base uppercase tracking-wider pb-4 border-b-[1px] border-solid border-[#4F4F4F]">
              <Link href="/" onClick={() => setNav(false)}>
                kezdőlap
              </Link>
            </li>

            <li className="w-full">
              <button
                onClick={() => {
                  setHasználtSubMenu(!használtSubMenu);
                }}
                className="w-full"
              >
                <div className="w-full font-bold text-base uppercase tracking-wider flex items-center justify-between pb-4 border-b-[1px] border-solid border-[#4F4F4F]">
                  hangszereink
                  {!használtSubMenu ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  )}
                </div>
              </button>

              {használtSubMenu && (
                <div className="">
                  <ul className="flex flex-col justify-center gap-3 mt-5">
                    <li onClick={toggelNavbar} className="w-full">
                      <div className="">
                        <button
                          onClick={() => {
                            setShowHasználtChildMenu(!showHasználtChildMenu);
                          }}
                          className="w-full"
                        >
                          <div className="pl-5 w-full font-bold text-base uppercase tracking-wider flex items-center justify-between pb-4 border-b-[1px] border-solid border-[#4F4F4F]">
                            használt
                            {!showHasználtChildMenu ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 15l7-7 7 7"
                                />
                              </svg>
                            )}
                          </div>
                        </button>
                      </div>

                      {showHasználtChildMenu && (
                        <ul className="ml-8 space-y-1 py-1">
                          {használtLinks.map((menu) => (
                            <li
                              onClick={toggelNavbar}
                              className="border-b-[1px] border-solid border-[#4F4F4F] li-border"
                            >
                              <Link
                                href={`${menu.link && menu.link}`}
                                onClick={() => setNav(false)}
                              >
                                <button className="group flex w-full items-center p-3 text-xs uppercase font-bold tracking-wider">
                                  {menu.nav}
                                </button>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>

                    <li
                      className="font-bold text-base uppercase tracking-wider pl-5 pb-4 border-b-[1px] border-solid border-[#4F4F4F]"
                      onClick={toggelNavbar}
                    >
                      <Link href="/instrument-categoris">új</Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li className=" w-full">
              <button
                onClick={() => {
                  setInfoSubMenu(!infoSubMenu);
                }}
                className="w-full"
              >
                <div className="w-full font-bold text-base uppercase tracking-wider flex items-center justify-between pb-4 border-b-[1px] border-solid border-[#4F4F4F]">
                  információk
                  {!infoSubMenu ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  )}
                </div>
              </button>

              {infoSubMenu && (
                <div className="">
                  <ul className="flex flex-col justify-center gap-3 mt-5">
                    {információkLinks.map((menu) => (
                      <li
                        className="font-bold text-base uppercase tracking-wider pb-4 border-b-[1px] border-solid border-[#4F4F4F] w-full pl-5 li-border"
                        onClick={toggelNavbar}
                      >
                        <Link
                          href={`${menu.link && menu.link}`}
                          onClick={() => setNav(false)}
                        >
                          {menu.nav}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>

            <li className="font-bold text-base uppercase tracking-wider">
              <Link href="/detailed-search" onClick={() => setNav(false)}>
                részletes kereső
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveNav;
