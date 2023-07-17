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
      <div className="width flex flex-col md:flex-row gap-7 md:gap-0 justify-between text-white py-12">
        <div>
          <h6 className="font-semibold text-base mb-3 md:mb-6">
            Nyitvatartás:
          </h6>
          <ul className="flex flex-col gap-3 text-sm font-light">
            <li>H-P 10:00-18:00</li>
            <li>Cs: 10-21:00</li>
          </ul>
        </div>

        <div>
          <h6 className="font-semibold text-base mb-3 md:mb-6">
            Elérhetőségek:
          </h6>
          <ul className="flex flex-col gap-3 text-sm font-light">
            <li>+36 1 329 9241</li>
            <li>+36 20 996 7496</li>
            <li>1136 Bp., Balzac u. 54.</li>
            <li>informacio@vintage52.hu</li>
          </ul>
        </div>

        <div>
          <h6 className="font-semibold text-base mb-3 md:mb-6">
            Vásárlási információk
          </h6>
          <ul className="flex flex-col gap-3 text-sm font-light">
            <li className="underline">ÁSZF</li>
          </ul>
        </div>

        <div>
          <h6 className="font-semibold text-base mb-3 md:mb-6">
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

      <div className={`${styles.white_bg_opacity} py-6 md:py-4`}>
        <div className="width">
          <div className="flex flex-col md:flex-row gap-0 md:gap-40">
            <h6 className="font-bold text-[15px] leading-[22px] text-[#1D1D1B] mb-1">
              Vintage'52 Hangszerviz{" "}
            </h6>
            <span className="text[#1D1D1B] body3">1136 Bp., Balzac u. 54.</span>
          </div>

          <div>
          <h6 className="font-semibold text-[15px] leading-[23px] text-primary mt-3 md:mt-0">
              2023{" "}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
