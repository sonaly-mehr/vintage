import Link from "next/link";
import React from "react";
import Button from "../components/Button";

const page = () => {
  return (
    <div className="mb-20">
      <div className="width">
        <h1 className="heading pt-10 pb-4">Adataim</h1>

        <form action="" className="w-3/5 m-auto">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="body2 text-[#20102B]">
                Név
              </label>
              <input
                type="text"
                placeholder="Teljes név"
                className="body2 input"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="body2 text-[#20102B]">
                E-mail cím
              </label>
              <input
                type="email"
                placeholder="emailcim@email.com"
                className="body2 input"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="body2 text-[#20102B]">
                Telefon
              </label>
              <input
                type="text"
                placeholder="06 20 111 2222"
                className="body2 input"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="body2 text-[#20102B]">
                Személyi szám
              </label>
              <input
                type="text"
                placeholder="123456678"
                className="body2 input"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="body2 text-[#20102B]">
                Cím
              </label>
              <textarea
                name=""
                id=""
                rows="3"
                placeholder="Irányítószám, város, közterület, házszám"
                className="body2 input"
              ></textarea>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="body2 text-[#20102B]">
                Jelszó
              </label>
              <input
                type="text"
                placeholder="min. 8 karakter"
                className="body2 input"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="body2 text-[#20102B]">
                Jelszó még egyszer
              </label>
              <input
                type="text"
                placeholder="min. 8 karakter"
                className="body2 input"
              />
            </div>
          </div>

          <div className="mt-10 flex gap-6">
            <Link href="/reservation-logged-in">
              <Button text="regisztráció" />
            </Link>

            <Link href="/reservation">
              <button className="bttn">Kijelentkezés</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
