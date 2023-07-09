import Link from "next/link";
import React from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { BsArrowLeftShort } from "react-icons/bs";
import Button from "../components/Button";

const page = () => {
  return (
    <div div className="mb-24">
      <div className="width">
        <h1 className="heading pt-10 pb-4">Foglalásod</h1>
      </div>

      <div className="bg-[#F4F4F4F2] py-10">
        <div className="width flex gap-28 justify-between">
          <div>
            <div className="basis-1/2 flex gap-32">
              <div className="flex flex-col gap-6">
                <h6 className="text-[15px] font-bold leading-[23px] h-10">
                  Termék:
                </h6>
                <h6 className="text-[15px] font-bold leading-[23px]">Ár:</h6>
                <h6 className="text-[15px] font-bold leading-[23px]">
                  Mennyiség:
                </h6>
                <h6 className="text-[15px] font-bold leading-[23px]">
                  Összesen:
                </h6>
              </div>

              <div className="flex flex-col gap-6">
                <span className="body flex flex-col h-10">
                  Framus <span>FM-20SE MIJ</span>
                </span>
                <span className="body">170 000 Ft</span>
                <div className="flex gap-3 items-center">
                  <button className="border-2 border-solid border-[#C4C4C4] p-1 rounded">
                    <MdKeyboardArrowDown className="text-[#C4C4C4]" />
                  </button>
                  <span className="body">1 db</span>
                  <button className="border-2 border-solid border-[#C4C4C4] p-1 rounded">
                    <MdKeyboardArrowUp className="text-[#C4C4C4]" />
                  </button>
                </div>
                <span className="text-[15px] font-semibold leading-[22px]">
                  170 000 Ft
                </span>
              </div>
            </div>

            <div className="border-y-2 border-solid border-[#C4C4C4] py-6 flex gap-10 items-center my-12">
              <p className="text-sm font-light">
                Az{" "}
                <Link href="/" className="font-semibold underline">
                  általános üzletszabályzatot és a vásárlási/megrendelési
                  feltételeket
                </Link>{" "}
                elolvastam és tudomásul veszem.
              </p>
              <input type="checkbox" className="w-7 h-7" />
            </div>

            <div className="flex gap-10">
              <Link href="/reservation-data">
                <Button text="tovább a foglaláshoz" icon="" />
              </Link>
              <Link href="/product-details">
                <button className="bttn">
                  <BsArrowLeftShort className="text-2xl" /> vissza
                </button>
              </Link>
            </div>
          </div>

          <div className="basis-1/2">
            <h6 className="text-[15px] font-semibold leading-[23px] mb-3">
              Szállítási feltételek
            </h6>
            <p className="text-sm font-light leading-[21px]">
              A rendelés leadása után a kollégák hamarosan felveszik veled a
              kapcsolatot. <br />A megrendelt hangszer(eke)t a Vintage’52
              hangszerboltban tudod személyesen átvenni, vagy kérheted
              házhozszállítással (DPD futár), vagy – mérettől függően - Foxpost
              csomagpontra vagy Foxpost házhozszállítással való küldéssel is.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
