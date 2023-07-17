import React from "react";
import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import Login from "../components/user-login/Login";
import SignUp from "../components/user-login/SignUp";

const page = () => {
  return (
    <div className="bg-[#FCFCFC] pb-40">
      <div className="width">
        <h1 className="heading pt-10 pb-4">felhasználó</h1>

        <div className="flex justify-between gap-52">
          <div className="basis-1/2">
            <div className="flex gap-4 items-center mt-2 mb-10">
                <FaRegUserCircle className="text-3xl"/>
              <h3 className="font-bold text-sm uppercase tracking-wider">
                bejelentkezés
              </h3>
            </div>
            {/* Login-form */}
            <Login />
          </div>

          <div className="basis-1/2">
          <div className="flex gap-4 items-center mt-2 mb-10">
                <FaRegUserCircle className="text-3xl"/>
              <h3 className="font-bold text-sm uppercase tracking-wider">
              regisztráció
              </h3>
            </div>

            {/* Signup-form */}
            <SignUp/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
