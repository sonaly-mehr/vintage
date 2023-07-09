"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import { AiOutlineStar } from "react-icons/ai";
import { BsArrowLeftShort } from "react-icons/bs";

const page = () => {
  return (
    <div className="width pt-12 pb-12">


      <div className="flex gap-28 justify-between">
        <div>
        <div className="mb-10">
        <h1 className="heading md:text-[#202020]">
          applause by ovation
        </h1>
        <h2 className="subHeading mt-3">AE 127</h2>
      </div>
          <div className="basis-1/2 flex gap-32">
            <div className="flex flex-col gap-2">
              <h6 className="text-[15px] font-semibold leading-[23px]">
                Márka:
              </h6>
              <h6 className="text-[15px] font-semibold leading-[23px]">
                Típus:
              </h6>
              <h6 className="text-[15px] font-semibold leading-[23px]">
                Használt:
              </h6>
              <h6 className="text-[15px] font-semibold leading-[23px]">
                Kategória:
              </h6>
              <h6 className="text-[15px] font-semibold leading-[23px]">
                Szín:
              </h6>
              <h6 className="text-[15px] font-semibold leading-[23px]">
                Származás:
              </h6>
              <h6 className="text-[15px] font-semibold leading-[23px]">
                Eladási ár:
              </h6>
            </div>

            <div className="flex flex-col gap-2">
              <span className="body">Applause by Ovation</span>
              <span className="body">AE 127</span>
              <span className="body">Igen</span>
              <span className="body">Akusztikus gitárok</span>
              <span className="body">Sunburst</span>
              <span className="body">Kína</span>
              <span className="body">90 000 Ft</span>
            </div>
          </div>
          <p className="body my-10">
            Applause by Ovation AE 127 elektro-akusztikus gitár. Puhatokkal.
          </p>

          <div className="flex gap-10 mt-24">
            <Link href="/reservation">
              <Button text="lefoglalom" icon={<AiOutlineStar />} />
            </Link>
            <Link href="/">
              <button className="bttn">
                <BsArrowLeftShort className="text-2xl" /> vissza
              </button>
            </Link>
          </div>
        </div>

        <Link href="/view-product" className="basis-1/2">
          <div className="grid grid-cols-3 gap-5">
            <Image
              src="https://images.unsplash.com/photo-1559466170-d854d05cb115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
              alt=""
              priority
              unoptimized
              width="0"
              height="0"
              className="w-full h-full rounded-md row-span-3 col-span-2"
            />
            <Image
              src="https://images.unsplash.com/photo-1559466170-d854d05cb115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
              alt=""
              priority
              unoptimized
              width="0"
              height="0"
              className="w-full h-full rounded-md block"
            />
            <Image
              src="https://images.unsplash.com/photo-1559466170-d854d05cb115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
              alt=""
              priority
              unoptimized
              width="0"
              height="0"
              className="w-full h-full rounded-md"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default page;
