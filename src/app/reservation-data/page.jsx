import React from "react";
import Reservation from "../components/Reservation";
import Login from "../components/auth/Login";
import SignUp from "../components/auth/SignUp";
import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";

const page = () => {
  return (
    <div>
      <div className="width">
        <h1 className="heading pt-10 pb-4">Foglalásod</h1>
      </div>

      <div className="bg-[#F4F4F4F2] py-10">
        <div className="width">
          <Reservation />
        </div>
      </div>

      <div className="width py-16">
        <div className="flex justify-between gap-52">
          <div className="basis-1/2">
            <h4 className="font-semibold text-base mb-5">
              Ha már rendeltél nálunk:
            </h4>
            {/* Login-form */}
            <Login />
          </div>

          <div className="basis-1/2">
            <h4 className="font-semibold text-base mb-5">
              Ha új vásárlónk vagy:
            </h4>

            {/* Signup-form */}
            <SignUp />
          </div>
        </div>

        <Link href="/reservation">
          <button className="bttn">
            <BsArrowLeftShort className="text-2xl" /> vissza
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
