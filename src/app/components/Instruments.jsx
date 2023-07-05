import React from "react";
import Image from "next/image";
import Link from "next/link";
import instrument1 from "../../assets/instrument1.jpg";
import instrument2 from "../../assets/instrument2.jpg";
import instrument3 from "../../assets/instrument3.jpg";
import instrument4 from "../../assets/instrument4.jpg";
import instrument5 from "../../assets/instrument5.jpg";
import instrument6 from "../../assets/instrument6.jpg";
import instrument7 from "../../assets/instrument7.jpg";
import instrument8 from "../../assets/instrument8.jpg";
import instrument9 from "../../assets/instrument9.jpg";
import instrument10 from "../../assets/instrument10.jpg";
import instrument11 from "../../assets/instrument11.jpg";
import instrument12 from "../../assets/instrument12.jpg";
import { FiArrowRight } from "react-icons/fi";

const Instruments = () => {
  const instruments = [
    {
      img: instrument1,
      name: "Applause by Ovation",
      model: "AE 127",
      ft: "90 000 Ft",
      infoLink: "/",
    },
    {
      img: instrument2,
      name: "Jack and Danny",
      model: "Superstrat Név 2. sor",
      ft: "12 000 Ft",
      infoLink: "/",
    },
    {
      img: instrument3,
      name: "EMG",
      model: "T Tele + RPC szett",
      ft: "12 000 Ft",
      infoLink: "/",
    },
    {
      img: instrument4,
      name: "XiTone",
      model: "FRFR Active Wedge",
      ft: "90 000 Ft",
      infoLink: "/",
    },
    {
      img: instrument5,
      name: "Jackson",
      model: "Kelly KEXT Mahogany",
      ft: "230 000 Ft",
      infoLink: "/",
    },
    {
      img: instrument6,
      name: "Alexander Bodrik",
      model: "Tele Style",
      ft: "880 000 Ft",
      infoLink: "/",
    },
    {
      img: instrument7,
      name: "Warwick",
      model: "Streamer Bolt-on 5 Fretless 1993 MIG",
      ft: "350 000 Ft",
      infoLink: "/",
    },
    {
      img: instrument8,
      name: "Seymour Duncan",
      model: "Psyclone Hot hídi nikkel",
      ft: "55 000 Ft",
      infoLink: "/",
    },
    {
      img: instrument9,
      name: "Taurus",
      model: "Stomp-Head 3.CL",
      ft: "150 000 Ft",
      infoLink: "/",
    },
    {
      img: instrument10,
      name: "Noname",
      model: "Eminence 115 láda",
      ft: "70 000 Ft",
      infoLink: "/",
    },
    {
      img: instrument11,
      name: "Nowsonic",
      model: "Guitar Legend",
      ft: "12 000 Ft",
      infoLink: "/",
    },
    {
      img: instrument12,
      name: "Vovox Sonorus",
      model: "Direct S 1m XLRf st. jack kábel 2.",
      ft: "20 000 Ft",
      infoLink: "/",
    },
    {
      img: instrument6,
      name: "Alexander Bodrik",
      model: "Tele Style",
      ft: "880 000 Ft",
      infoLink: "/",
    },
    {
      img: instrument3,
      name: "EMG",
      model: "T Tele + RPC szett",
      ft: "12 000 Ft",
      infoLink: "/",
    },
    {
      img: instrument1,
      name: "Applause by Ovation",
      model: "AE 127",
      ft: "90 000 Ft",
      infoLink: "/",
    },
    {
      img: instrument4,
      name: "XiTone",
      model: "FRFR Active Wedge",
      ft: "240 000 Ft",
      infoLink: "/",
    },
    {
      img: instrument5,
      name: "Jackson",
      model: "Kelly KEXT Mahogany",
      ft: "230 000 Ft",
      infoLink: "/",
    },
    {
      img: instrument2,
      name: "Jack and Danny",
      model: "Superstrat Név 2. sor",
      ft: "12 000 Ft",
      infoLink: "/",
    },
  ];
  return (
    <div className="grid grid-cols-6 gap-x-3 gap-y-14">
      {instruments.map((instrument) => (
        <div className="text-black">
          <Image src={instrument.img} alt="" priority unoptimized />
          <h6 className="font-semibold text-[15px] leading-[23px] my-3">
            {instrument.name}
          </h6>
          <span className="font-light text-[15px] leading-[22px] block h-[40px]">
            {instrument.model}
          </span>
          <h6 className="font-bold text-[15px] leading-[22px] text-primary my-3">
            {instrument.ft}
          </h6>
          <Link href="/">
            <button className="bttn">
              Több infó <FiArrowRight className="text-xl" />
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Instruments;
