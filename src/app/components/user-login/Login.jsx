import React from "react";
import Button from "../Button";
import Link from "next/link";

const Login = () => {
  return (
    <>
      {/* Login-form */}
      <form action="">
        <div className="flex flex-col gap-4">
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
              Jelszó
            </label>
            <input type="text" placeholder="Jelszó" className="body2 input" />
          </div>
        </div>

        <div className="flex gap-10 mt-8">
          <Link href="/reservation-logged-in">
            <Button text="Bejelentkezés" />
          </Link>
          <button className="bttn">elfelejtett jelszó</button>
        </div>
      </form>
    </>
  );
};

export default Login;
