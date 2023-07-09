import React from "react";
import Reservation from "../components/Reservation";
import Link from "next/link";
import Button from "../components/Button";
import { BsArrowLeftShort } from "react-icons/bs";
import Image from "next/image";
import user from '../../assets/user-icon.svg'

const page = () => {
  return (
    <div className="mb-20">
      <div className="width">
        <div className="flex gap-16 mt-5">
            <Image src={user} alt="" priority/>
            <div>
                <h1 className="heading">nagy Attila</h1>
                <h4 className="font-semibold text-base">attila.nagy.88@gmail.com</h4>
            </div>
        </div>
        <h1 className="heading pt-10 pb-4">Foglalásod</h1>
      </div>

      <div className="bg-[#F4F4F4F2] py-10">
        <div className="width">
          <Reservation />

          <div className="flex gap-10 mt-6 items-center">
            <Link href="/reservation-sucessful">
              <Button text="lefoglalom" icon="" />
            </Link>
            <Link href="/reservation-data">
              <button className="bttn">
                <BsArrowLeftShort className="text-2xl" /> vissza
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
