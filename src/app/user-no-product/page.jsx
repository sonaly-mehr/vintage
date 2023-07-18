import React from "react";
import Link from "next/link";
import Image from "next/image";
import user from "../../assets/user-icon.svg";

const page = () => {
  return (
    <div className="mb-20">
      <div className="width">
        <h1 className="heading pt-10 pb-4">felhasználó</h1>
        <div className="flex gap-6 md:gap-10 mt-5 mb-8">
          <Image src={user} alt="" priority />
          <div>
            <h1 className="heading">nagy Attila</h1>
            <h4 className="font-semibold text-base mt-2">
              attila.nagy.88@gmail.com
            </h4>
          </div>
        </div>

        <Link href="/user-data">
          <button className="bttn">adataim</button>
        </Link>

        <div className="mt-8">
          <p className="body3 mb-6">
            Jelenleg nincs lefoglalt terméked. Nézz szét hangszereink között!{" "}
          </p>

          <div className="flex flex-col md:flex-row gap-6">
            <Link href="/user-product" className="w-full md:w-auto">
              <button className="bttn flex md:block justify-center w-full md:w-auto">
                tovább a főoldalra
              </button>
            </Link>

            <Link href="/checkout" className="w-full md:w-auto">
              <button className="bttn flex md:block justify-center w-full md:w-auto">
                Kijelentkezés
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
