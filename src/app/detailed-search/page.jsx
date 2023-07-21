import Link from "next/link";
import React from "react";
import Button from "../components/Button";

const page = () => {
  return (
    <>
      <div className="width">
        <h1 className="heading py-6 md:py-10">részletes kereső</h1>
      </div>
      <form action="" className="bg-[#F4F4F4] py-8 md:py-12 mb-20">
        <div className="flex flex-col gap-4 width md:w-1/2 lg:w-2/5 m-auto">
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="body2 text-[#20102B]">
              Leírás
            </label>
            <input
              type="text"
              placeholder="Kezdj el gépelni!"
              className="body2 input"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="" className="body2 text-[#20102B]">
              Kategória
            </label>
            <input
              type="email"
              placeholder="Kezdj el gépelni!"
              className="body2 input"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="" className="body2 text-[#20102B]">
              Márka
            </label>
            <input
              type="text"
              placeholder="Kezdj el gépelni!"
              className="body2 input"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="" className="body2 text-[#20102B]">
              Típus
            </label>
            <input
              type="text"
              placeholder="Kezdj el gépelni!"
              className="body2 input"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="" className="body2 text-[#20102B]">
              Szín
            </label>
            <input
              type="text"
              placeholder="Kezdj el gépelni!"
              className="body2 input"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="" className="body2 text-[#20102B]">
              Állapot
            </label>
            <select id="options" className="body5 input bg-white cursor-pointer ">
              <option selected>Mindegy</option>
              <option value="1" className="body5">
                Option 2
              </option>
              <option value="2" className="body5">
                Option 3
              </option>
              <option value="3" className="body5">
                Option 4
              </option>
              <option value="4" className="body5">
                Option 5
              </option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="" className="body2 text-[#20102B]">
              Származási ország
            </label>
            <input
              type="text"
              placeholder="Kezdj el gépelni!"
              className="body2 input"
            />
          </div>

          <div className="flex gap-4">
            <div className="basis-1/2 flex flex-col gap-1">
              <label htmlFor="" className="body2 text-[#20102B]">
                Ár (-tól)
              </label>
              <input type="text" placeholder="10 000" className="body2 input" />
            </div>

            <div className="basis-1/2 flex flex-col gap-1">
              <label htmlFor="" className="body2 text-[#20102B]">
                Ár (-ig)
              </label>
              <input type="text" placeholder="10 000" className="body2 input" />
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/reservation-logged-in"
              className="w-full md:w-auto bttn-width"
            >
              <Button text="Keresés" />
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default page;
