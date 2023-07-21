import React, { Fragment } from "react";
import styles from "../styles/index.module.css";
import { Menu, Transition } from "@headlessui/react";
import { MdKeyboardArrowDown } from "react-icons/md";

const OrderDropdown = () => {
  const options = [
    "Név (A-Z)",
    "Név (Z-A)",
    "Ár szerint csökkenő",
    "Ár szerint növekvő",
  ];
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="flex items-center w-full justify-center rounded bg-white text-[#333333] border-2 border-solid border-[#D6D6D6] py-2 px-6 font-bold text-xs tracking-wider uppercase cursor-pointer">
          Legújabbak előre
          <MdKeyboardArrowDown className="text-xl md:text-3xl" />
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
          <Menu.Items className="absolute z-30 left-0 mt-1 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border-2 border-solid border-[#D6D6D6]">
            <div className="p-2 flex flex-col gap-2 ">
              {options.map((option) => (
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "text-white bg-[#3F3F3F]" : "text-gray-900"
                      } group flex w-full items-center rounded px-3 py-2 text-[11px] md:text-xs uppercase font-bold tracking-wider`}
                    >
                      {option}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default OrderDropdown;
