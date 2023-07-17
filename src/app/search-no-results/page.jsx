import Link from "next/link";
import React from "react";
import Button from "../components/Button";
import BreadCrumbs from "../components/BreadCrumbs";

const page = () => {
  const breadCrumbs=[
    {
        name: "részletes keresés",
    },
    {
        name: "nincs találat",
        url: "/search-no-results"
        
    },
  ]
  return (
    <div className="width pb-40">
            <BreadCrumbs breadCrumbs={breadCrumbs} />
      <h2 className="text-[17px] font-semibold leading-[25px] text-[#202020] my-6">
        A keresés eredménye:
      </h2>
      <p className="body3 w-4/5">
        A megadott paraméterek alapján nem található termék.
      </p>

      <div className="mt-8">
        <Link href="/">
          <Button text="új Keresés" />
        </Link>
      </div>
    </div>
  );
};

export default page;
