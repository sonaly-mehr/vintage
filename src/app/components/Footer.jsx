import React from "react";
import styles from "../styles/index.module.css";
import { TbBrandFacebook } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import logo from "../../assets/GS fanatic logo.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={`${styles.footer__bg}`}>
      <div className="width flex justify-between text-white py-12">
        <div>
          <h6 className="font-semibold text-base mb-6">Nyitvatartás:</h6>
          <ul className="flex flex-col gap-3 text-sm font-light">
            <li>H-P 10:00-18:00</li>
            <li>Cs: 10-21:00</li>
          </ul>
        </div>

        <div>
          <h6 className="font-semibold text-base mb-6">Elérhetőségek:</h6>
          <ul className="flex flex-col gap-3 text-sm font-light">
            <li>+36 1 329 9241</li>
            <li>+36 20 996 7496</li>
            <li>1136 Bp., Balzac u. 54.</li>
            <li>informacio@vintage52.hu</li>
          </ul>
        </div>

        <div>
          <h6 className="font-semibold text-base mb-6">
            Vásárlási információk
          </h6>
          <ul className="flex flex-col gap-3 text-sm font-light">
            <li className="underline">ÁSZF</li>
          </ul>
        </div>

        <div>
          <h6 className="font-semibold text-base mb-6">
            Vásárlási információk
          </h6>
          <ul className="flex flex-row gap-4 text-sm font-light items-center">
            <li>
              <Link href="/">
                <TbBrandFacebook className="text-3xl" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <FaInstagram className="text-3xl" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <AiOutlineYoutube className="text-3xl" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image src={logo} alt="" priority />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={`${styles.white_bg_opacity} py-4`}>
      <div className="width flex gap-40">
        <div>
            <h6 className="font-bold text-[15px] leading-[22px] text-[#1D1D1B] mb-1">Vintage'52 Hangszerviz  </h6>
            <h6 className="font-semibold text-[15px] leading-[23px] text-primary">2023 </h6>
        </div>

        <div>
            <span className="text[#1D1D1B] font-light text-[15px] leading-[22px]">1136 Bp., Balzac u. 54.</span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
