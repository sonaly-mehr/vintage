import React from "react";
import Button from "../Button";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import instrument2 from "../../../assets/instrument2.jpg";
import instrument3 from "../../../assets/instrument3.jpg";
import instrument4 from "../../../assets/instrument4.jpg";
import instrument6 from "../../../assets/instrument6.jpg";
import instrument7 from "../../../assets/instrument7.jpg";
import instrument11 from "../../../assets/instrument11.jpg";
import styles from "../../styles/index.module.css";

const FeaturedInstrument = () => {
  const instruments = [
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
      img: instrument4,
      name: "XiTone",
      model: "FRFR Active Wedge",
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
      img: instrument11,
      name: "Nowsonic",
      model: "Guitar Legend",
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
  ];

  return (
    <div className={`${styles.featured__bg} py-16`}>
      <div className="width">
        <div className="flex justify-between items-center pb-10">
          <h4 className="heading text-[#202020]">kiemelt hangszereink</h4>
          <Link href="/">
            <Button text="összes hangszer" icon={<BsArrowRightShort />} />
          </Link>
        </div>

        <div className="grid grid-cols-6 gap-x-3">
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
      </div>
    </div>
  );
};

export default FeaturedInstrument;
