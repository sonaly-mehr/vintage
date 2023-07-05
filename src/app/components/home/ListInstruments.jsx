import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const ListInstruments = () => {
  const listInstruments = [
    {
      name: "Applause by Ovation",
      model: "AE 127",
      ft: "90 000 Ft",
      infoLink: "/",
    },
    {
      name: "Jack and Danny",
      model: "Superstrat Név 2. sor",
      ft: "12 000 Ft",
      infoLink: "/",
    },
    {
      name: "EMG",
      model: "T Tele + RPC szett",
      ft: "12 000 Ft",
      infoLink: "/",
    },
    {
      name: "XiTone",
      model: "FRFR Active Wedge",
      ft: "90 000 Ft",
      infoLink: "/",
    },
    {
      name: "Jackson",
      model: "Kelly KEXT Mahogany",
      ft: "230 000 Ft",
      infoLink: "/",
    },
    {
      name: "Alexander Bodrik",
      model: "Tele Style",
      ft: "880 000 Ft",
      infoLink: "/",
    },
    {
      name: "Warwick",
      model: "Streamer Bolt-on 5 Fretless 1993 MIG",
      ft: "350 000 Ft",
      infoLink: "/",
    },
    {
      name: "Seymour Duncan",
      model: "Psyclone Hot hídi nikkel",
      ft: "55 000 Ft",
      infoLink: "/",
    },
    {
      name: "Taurus",
      model: "Stomp-Head 3.CL",
      ft: "150 000 Ft",
      infoLink: "/",
    },
    {
      name: "Noname",
      model: "Eminence 115 láda",
      ft: "70 000 Ft",
      infoLink: "/",
    },
    {
      name: "Nowsonic",
      model: "Guitar Legend",
      ft: "12 000 Ft",
      infoLink: "/",
    },
    {
      name: "Vovox Sonorus",
      model: "Direct S 1m XLRf st. jack kábel 2.",
      ft: "20 000 Ft",
      infoLink: "/",
    },
    {
      name: "Alexander Bodrik",
      model: "Tele Style",
      ft: "880 000 Ft",
      infoLink: "/",
    },
    {
      name: "EMG",
      model: "T Tele + RPC szett",
      ft: "12 000 Ft",
      infoLink: "/",
    },
    {
      name: "Applause by Ovation",
      model: "AE 127",
      ft: "90 000 Ft",
      infoLink: "/",
    },
    {
      name: "XiTone",
      model: "FRFR Active Wedge",
      ft: "240 000 Ft",
      infoLink: "/",
    },
    {
      name: "Jackson",
      model: "Kelly KEXT Mahogany",
      ft: "230 000 Ft",
      infoLink: "/",
    },
    {
      name: "Jack and Danny",
      model: "Superstrat Név 2. sor",
      ft: "12 000 Ft",
      infoLink: "/",
    },
    {
      name: "EMG",
      model: "T Tele + RPC szett",
      ft: "12 000 Ft",
      infoLink: "/",
    },
    {
      name: "Applause by Ovation",
      model: "AE 127",
      ft: "90 000 Ft",
      infoLink: "/",
    },
    {
      name: "XiTone",
      model: "FRFR Active Wedge",
      ft: "240 000 Ft",
      infoLink: "/",
    },
    {
      name: "Jackson",
      model: "Kelly KEXT Mahogany",
      ft: "230 000 Ft",
      infoLink: "/",
    },
    {
      name: "Jack and Danny",
      model: "Superstrat Név 2. sor",
      ft: "12 000 Ft",
      infoLink: "/",
    },
    {
      name: "XiTone",
      model: "FRFR Active Wedge",
      ft: "240 000 Ft",
      infoLink: "/",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
      {listInstruments.map((list) => (
        <div className="flex justify-between items-center border-b-[1px] border-solid border-[#B1B1B1] pb-4">
          <div>
            <h6 className="font-semibold text-[15px] leading-[23px]">
              {list.name}
            </h6>
            <span className="font-light text-[15px] leading-[22px] block my-1">
              {list.model}
            </span>
            <h6 className="font-bold text-[15px] leading-[22px] text-primary ">
              {list.ft}
            </h6>
          </div>

          <Link href="/">
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
