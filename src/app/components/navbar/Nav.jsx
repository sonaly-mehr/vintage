"use client";
import React, { Fragment, useState } from "react";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Menu, Transition } from "@headlessui/react";
import logo from "../../../assets/Logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import ResponsiveNav from "./ResponsiveNav";
import használtNavLinks from "../../data/használtNavLinks.json";
import információkNavLinks from "../../data/információkNavLinks.json";
import styles from "../../styles/index.module.css";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const pathname = usePathname();
  const [használtLinks, setHasználtLinks] = useState(használtNavLinks);
  const [információkLinks, setInformációkLinks] = useState(információkNavLinks);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div>
        <ul className="hidden md:flex md:gap-0 lg:gap-7 font-bold md:text-[11px] lg:text-xs uppercase items-center text-[#CCCCCC]">
          <li>
            <Link
              href="/"
              className={`${
                pathname === "/" ? "active" : ""
              } py-2.5 px-2 lg:px-4 block`}
            >
              kezdőlap
            </Link>
          </li>
          <li
            className={`${
              pathname === "/instrument-categories" ||
              pathname === "/product-categories" ||
              pathname === "/product-details" ||
              pathname === "/view-product" ||
              pathname === "/reservation" ||
              pathname === "/reservation-data" ||
              pathname === "/reservation-logged-in" ||
              pathname === "/reservation-sucessful" ||
              pathname === "/checkout"
                ? "active"
                : ""
            } py-1 px-3 lg:px-4 block`}
          >
            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button
                className={`flex items-center w-full justify-between rounded hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 font-bold md:text-[11px] lg:text-xs uppercase `}
              >
                Hangszereink
                <MdKeyboardArrowDown className=" md:text-xl lg:text-3xl" />
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
                    <div className={`relative ${styles.sub__menu}`}>
                      <Menu.Item as="div">
                        {({ active }) => (
                          <Link href="/instrument-categories">
                            <button
                              className={`${
                                active
                                  ? "text-white bg-[#3F3F3F]"
                                  : "text-gray-900"
                              } group flex w-full items-center rounded px-3 py-2 md:text-[11px] lg:text-xs uppercase font-bold tracking-wider`}
                            >
                              használt
                            </button>
                          </Link>
                        )}
                      </Menu.Item>

                      <ul class="p-2 divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border-2 border-solid border-[#D6D6D6] absolute top-[-10px] right-[-10px] transition duration-150 ease-in-out origin-top-left w-60">
                        {használtLinks.map((menu) => (
                          <Menu.Item as="div">
                            {({ active }) => (
                              <Link href={`${menu.link && menu.link}`}>
                                <button
                                  className={`${
                                    active
                                      ? "text-white bg-[#3F3F3F]"
                                      : "text-gray-900"
                                  } group flex w-full items-center rounded p-3 md:text-[11px] lg:text-xs uppercase font-bold tracking-wider`}
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
                        <Link href="/instrument-categories">
                          <button
                            className={`${
                              active
                                ? "text-white bg-[#3F3F3F]"
                                : "text-gray-900"
                            } group flex w-full items-center rounded px-3 py-2 md:text-[11px] lg:text-xs uppercase font-bold tracking-wider`}
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
              className="relative inline-block text-left py-1 md:px-0 lg:px-4"
            >
              <Menu.Button className="flex items-center w-full justify-center rounded hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 font-bold md:text-[11px] lg:text-xs uppercase">
                információk
                <MdKeyboardArrowDown className=" md:text-xl lg:text-3xl" />
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
                          <Link href={`${menu.link && menu.link}`}>
                            <button
                              className={`${
                                active
                                  ? "text-white bg-[#3F3F3F]"
                                  : "text-gray-900"
                              } group flex w-full items-center rounded px-3 py-2 md:text-[11px] lg:text-xs uppercase font-bold tracking-wider`}
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
          <li className="md:hidden lg:hidden xl:block">
            <Link href="/">
              <Image src={logo} alt="" className="" priority />
            </Link>
          </li>
          <li>
            <Link
              href="/detailed-search"
              className={`${
                pathname === "/search-no-results" ||
                pathname === "/detailed-search" ||
                pathname === "/search-results"
                  ? "active"
                  : ""
              } py-2.5 md:px-3 lg:px-4 block`}
            >
              részletes kereső
            </Link>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div
          onClick={handleNav}
          className="flex justify-between items-center md:hidden w-[200px]"
        >
          <AiOutlineMenu className="cursor-pointer mr-6" size={40} />

          <Link href="/">
            <Image src={logo} alt="" className="" priority />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <ResponsiveNav nav={nav} handleNav={handleNav} />
    </div>
  );
};

export default Nav;
