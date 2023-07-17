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

        <div className="mt-8">
          <p className="body3 mb-6">
            Jelenleg nincs lefoglalt terméked. Nézz szét hangszereink között!{" "}
          </p>

          <div className="flex gap-6">
            <Link href="/reservation">
              <button className="bttn">tovább a főoldalra</button>
            </Link>

            <Link href="/reservation">
              <button className="bttn">Kijelentkezés</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
