import Link from "next/link";
import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import Image from "next/image";
import musician1 from "../../assets/musician1.jpg";
import musician2 from "../../assets/musician2.jpg";
import musician3 from "../../assets/musician3.jpg";
import musician4 from "../../assets/musician4.jpg";
import musician5 from "../../assets/musician5.jpg";

const page = () => {
  return (
    <div className="width pb-40">
      <Link href="/news">
        <button className="bttn">
          <BsArrowLeftShort className="text-2xl" /> vissza
        </button>
      </Link>

      <h2 className="text-[17px] font-semibold leading-[25px] text-[#202020] my-6">
        A hangszerészek utánpótlása
      </h2>
      <p className="body3 w-4/5">
        Tegnap a zuglói Jókai Mór Általános Iskolában jártunk, pályaorientációs
        nap keretében tartott előadást Lendvai Tamás címzetes igazgatónk,
        Kuzmich Borbála jelenlegi és Molnár Csenge egykori hallgatónk. 🎹🎻🎷
      </p>

      <div className="grid grid-cols-2 gap-5 w-3/5 m-auto py-12">
        <div className="row-span-1">
          <Image src={musician1} alt="" className="w-full" priority />
        </div>
        <div className="col-span-1">
          <Image src={musician2} alt="" className="w-full" priority />
        </div>
        <div className="row-span-2 col-span-2">
          <Image src={musician3} alt="" className="w-full" priority />
        </div>
        <div className="col-span-1">
          <Image src={musician4} alt="" className="w-full" priority />
        </div>
        <div className="col-span-1">
          <Image src={musician5} alt="" className="w-full" priority />
        </div>
      </div>

      <Link href="/news">
        <button className="bttn">
          <BsArrowLeftShort className="text-2xl" /> vissza
        </button>
      </Link>
    </div>
  );
};

export default page;
