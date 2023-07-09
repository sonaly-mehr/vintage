import React from "react";
import Button from "../Button";
import Link from "next/link";

const SignUp = () => {
  return (
    <>
      <form action="">
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
              Számlázási cím
            </label>
            <textarea
              name=""
              id=""
              rows="4"
              placeholder="Irányítószám, város, közterület, házszám"
              className="body2 input"
            ></textarea>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="" className="body2 text-[#20102B]">
              Számlázási cím
            </label>
            <textarea
              name=""
              id=""
              rows="4"
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

        <div className="mt-8">
          <Link href="/reservation-logged-in">
            <Button text="adatok mentése és foglalás" />
          </Link>
        </div>
      </form>
    </>
  );
};

export default SignUp;
