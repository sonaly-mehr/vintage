import React from "react";
import Reservation from "../components/Reservation";
import Link from "next/link";
import Button from "../components/Button";
import { BsArrowLeftShort } from "react-icons/bs";
import Image from "next/image";
import user from "../../assets/user-icon.svg";

const page = () => {
  return (
    <div className="mb-20">
      <div className="width">
        <h1 className="heading pt-10 pb-4">felhasználó</h1>
        <div className="flex gap-10 mt-5 mb-8">
          <Image src={user} alt="" priority />
          <div>
            <h1 className="heading">nagy Attila</h1>
            <h4 className="font-semibold text-base mt-2">
              attila.nagy.88@gmail.com
            </h4>
          </div>
        </div>

        <Link href="/reservation">
          <button className="bttn">adataim</button>
        </Link>

        <h1 className="heading pt-10 pb-4">Foglalásod</h1>
      </div>

      <div className="bg-[#F4F4F4F2] py-10">
        <div className="width">
          <Reservation />
        </div>
      </div>

      <div className="width flex gap-6 pt-8 pb-6">
          <Link href="/reservation">
            <button className="bttn">tovább a főoldalra</button>
          </Link>

          <Link href="/reservation">
            <button className="bttn">Kijelentkezés</button>
          </Link>
        </div>
    </div>
  );
};

export default page;
