import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";

const page = () => {
  return (
    <div className="width">
      <div className="my-10">
        <h1 className="heading text-[#3F3F3F] md:text-[#202020]">
          applause by ovation
        </h1>
        <h2 className="subHeading mt-3">AE 127</h2>
      </div>

      <Image
        src="https://images.unsplash.com/photo-1559466170-d854d05cb115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
        alt=""
        priority
        unoptimized
        width="0"
        height="0"
        className="w-3/5 rounded-md block"
      />
      <Link href="/product-details" className="block my-12">
        <button className="bttn">
          <BsArrowLeftShort className="text-2xl" /> vissza
        </button>
      </Link>
    </div>
  );
};

export default page;
