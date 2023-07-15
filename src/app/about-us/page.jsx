import React from "react";
import Image from "next/image";
import img1 from "../../assets/Rectangle 167.jpg";
import img2 from "../../assets/Rectangle 218.jpg";
import img3 from "../../assets/Rectangle 219.jpg";
import img4 from "../../assets/Rectangle 220.jpg";
import img5 from "../../assets/Rectangle 221.jpg";
import img6 from "../../assets/Rectangle 222.jpg";
import img7 from "../../assets/Rectangle 223.jpg";

const page = () => {
  return (
    <div className="width py-16">
      <h1 className="heading mb-8">rólunk</h1>

      <div className="w-3/5 m-auto flex flex-col gap-10">
        <Image src={img1} alt="" className="" priority />
        <p className="body3">
          Műhelyünkben, sokak megelégedésére, immár másfél évtizede változatlan
          lelkesedéssel folyik a hangszerészmunka. Profilunk főként gitár, de
          mindenféle vonós-pengetős hangszernek ellátjuk a baját. Minden
          nyűgöddel fordulhatsz hozzánk, a legkisebb beállítástól,
          pickupcserétől, egészen az új hangszer készítéséig, a hagyományos jó
          minőségben, és rövid határidővel állunk rendelkezésedre.
        </p>

        <div className="grid grid-cols-2 gap-5">
          <div className="">
            <Image src={img2} alt="" className="w-full" priority />
          </div>
          <div className="">
            <Image src={img3} alt="" className="w-full" priority />
          </div>
          <div className="">
            <Image src={img4} alt="" className="w-full" priority />
          </div>
          <div className="">
            <Image src={img5} alt="" className="w-full" priority />
          </div>
        </div>
        <p className="body3">
          A kész munkáért, ha teheted, személyesen gyere, mert amíg nem vagy
          teljesen elégedett az eredménnyel, úgysem engedünk el! <br />
          Ha kérdésed van a hangszereddel kapcsolatban, gyere, szaktanácsadással
          is szívesen várunk. Az aktuális árakról érdeklődj a szervizünkben.
        </p>

        <div className="flex flex-col gap-6">
          <Image src={img6} alt="" className="" priority />
          <Image src={img7} alt="" className="" priority />
        </div>

        <div className="body3">
          <p className="body3 mb-2">
            Vonós-pengetős hangszerek teljeskörű szervizelése:
          </p>
          <ul className="ml-5">
            <li className="list-disc">Húrozás</li>
            <li className="list-disc">Beállítás</li>
            <li className="list-disc">Javítás</li>
            <li className="list-disc">Lakkozás</li>
            <li className="list-disc">Hangszerkészítés</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
