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

  return (
    <div className="relative z-40">
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-primary px-6 py-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 px-6 py-10 ease-in duration-500 h-screen"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  src={logo}
                  width="87"
                  height="35"
                  alt="/"
                  unoptimized={true}
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-md shadow-gray-800 p-3 cursor-pointer"
              >
                <AiOutlineClose className="text-white" />
              </div>
            </div>
          </div>
          <div className="py-14 flex flex-col justify-center gap-8 relative z-[200]">
            <li className="font-bold text-xs uppercase">
              <Link
                href="/"
                className={`${
                  pathname === "/" ? "active" : ""
                } py-2.5 px-4 block`}
                onClick={() => setNav(false)}
              >
                kezdőlap
              </Link>
            </li>
            <li
              className={`${
                pathname === "/instrument-categoris" ||
                pathname === "/product-categoris" ||
                pathname === "/product-details" ||
                pathname === "/view-product" ||
                pathname === "/reservation" ||
                pathname === "/reservation-data" ||
                pathname === "/reservation-logged-in" ||
                pathname === "/reservation-sucessful" ||
                pathname === "/checkout"
                  ? "active"
                  : ""
              } py-1 px-4 block`}
            >
              <Menu as="div" className="relative inline-block text-left">
                <Menu.Button
                  className={`flex items-center w-full justify-between rounded hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 font-bold text-xs uppercase `}
                >
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
                  <Menu.Items
                    as="div"
                    className="absolute right-0 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border-2 border-solid border-[#D6D6D6]"
                  >
                    <div className="p-2 ">
                      <div className="relative sub-menu">
                        <Menu.Item as="div">
                          {({ active }) => (
                            <Link
                              href="/instrument-categoris"
                              onClick={() => setNav(false)}
                            >
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

                        <ul class="p-2 divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border-2 border-solid border-[#D6D6D6] absolute top-[-10px] right-0 md:right-[-10px] transition duration-150 ease-in-out origin-top-left w-60">
                          {használtLinks.map((menu) => (
                            <Menu.Item as="div">
                              {({ active }) => (
                                <Link
                                  href={`${menu.link && menu.link}`}
                                  onClick={() => setNav(false)}
                                >
                                  <button
                                    className={`${
                                      active
                                        ? "text-white bg-[#3F3F3F]"
                                        : "text-gray-900"
                                    } group flex w-full items-center rounded p-3 text-xs uppercase font-bold tracking-wider`}
                                  >
                                    {menu.nav}
                                  </button>
                                </Link>
                              )}
                            </Menu.Item>
                          ))}
                        </ul>
                      </div>

                      <Menu.Item as="div">
                        {({ active }) => (
                          <Link
                            href="/instrument-categoris"
                            onClick={() => setNav(false)}
                          >
                            <button
                              className={`${
                                active
                                  ? "text-white bg-[#3F3F3F]"
                                  : "text-gray-900"
                              } group flex w-full items-center rounded px-3 py-2 text-xs uppercase font-bold tracking-wider`}
                            >
                              új
                            </button>
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
            <li
              className={`${
                pathname === "/news-details" ||
                pathname === "/news-musicians" ||
                pathname === "/all-news" ||
                pathname === "/about-us" ||
                pathname === "/our-services" ||
                pathname === "/our-friends" ||
                pathname === "/GTC" ||
                pathname === "/sale" ||
                pathname === "/references" ||
                pathname === "/services"
                  ? "active"
                  : ""
              }  px-1 block`}
            >
              <Menu
                as="div"
                className="relative inline-block text-left py-1 px-4"
              >
                <Menu.Button className="flex items-center w-full justify-center rounded hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 font-bold text-xs uppercase">
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
                      {információkLinks.map((menu) => (
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href={`${menu.link && menu.link}`}
                              onClick={() => setNav(false)}
                            >
                              <button
                                className={`${
                                  active
                                    ? "text-white bg-[#3F3F3F]"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded px-3 py-2 text-xs uppercase font-bold tracking-wider`}
                              >
                                {menu.nav}
                              </button>
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
            <li className="font-bold text-xs uppercase">
              <Link
                href="/detailed-search"
                onClick={() => setNav(false)}
                className={`${
                  pathname === "/search-no-results" ||
                  pathname === "/detailed-search" ||
                  pathname === "/search-results"
                    ? "active"
                    : ""
                } py-2.5 px-4 block`}
              >
                részletes kereső
              </Link>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveNav;
