import React from "react";
import Reservation from "../components/Reservation";
import { BsArrowLeftShort } from "react-icons/bs";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="width">
        <div className="my-8">
          <h6 className="text-[15px] font-semibold leading-[23px] mb-3">
            Szállítási feltételek
          </h6>
          <p className="text-sm font-light leading-[21px] md:w-1/2">
            A lentebb látható termék(eke)t sikeresen lefoglaltad. A foglalásról
            a megadott e-mail címre visszaigazolást küldünk. Amennyiben nem
            érkezett meg a visszaigazoló e-mail, kattints ide:
          </p>
        </div>

        <Link href="/" className="block mb-6">
          <button className="bttn">visszaigazoló e-mail újraküldése</button>
        </Link>

        <h1 className="heading pt-10 pb-4">Foglalásod</h1>
      </div>

      <div className="bg-[#F4F4F4F2] py-10">
        <div className="width">
          <Reservation />
        </div>
      </div>

      <div className="width py-12">
        <div className="flex flex-col md:flex-row gap-5 md:gap-10 items-center w-full">
          <Link href="/checkout" className="w-full">
            <button className="bttn w-full md:w-auto flex justify-center md:justify-start">
              Kijelentkezés
            </button>
          </Link>
          <Link href="/" className="w-full">
            <button className="bttn w-full md:w-auto flex justify-center md:justify-start">
              <BsArrowLeftShort className="text-2xl" /> vissza a főoldalra
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default page;
