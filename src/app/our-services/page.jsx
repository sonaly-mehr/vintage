import React from "react";
import sale1 from "../../assets/sale1.jpg";
import Image from "next/image";

const page = () => {
  const salesDetails = [
    {
      heading: "Hangszerek bizományos értékesítése:",
      descp: [
        "Mi foglalkozunk helyetted az érdeklődőkkel.",
        "Nálunk tudják kipróbálni a hangszered.",
        "Fényképet készítünk róla.",
        "Hirdetjük online illetve személyesen.",
        "E-mailben vagy telefonon értesítünk, mikor elkelt.",
      ],
    },
    {
      heading: "Bizonyos termékekre előrendelést is felveszünk.",
      descp: [
        "Telefonon +361/329-92-41",
        "Személyesen a boltban",
        "E-mailen : informacio@vintage52.hu",
      ],
    },
    {
      heading: "Termékeink kézbesítése belföldön DPD futárszolgálattal.",
      descp: [
        "Csomagfeladás után 3 munkanapon belül megérkezik.",
        "Utánvéttel vagy előreutalással lehet fizetni",
      ],
    },
    {
      heading: "        Hangszerekkel kapcsolatos tanácsadás.",
    },
  ];
  return (
    <div className="width pt-10 md:pt-16 pb-20 md:pb-60">
      <h1 className="heading mb-8">értékesítés</h1>
      <div className="md:w-1/2 m-auto">
        <Image src={sale1} alt="" priority className="w-full mb-6" />

        <div className="flex flex-col gap-3 md:gap-6">
          {salesDetails.map((sale) => (
            <div className="body3 flex flex-col gap-3 md:gap-6">
              <p>{sale.heading}</p>
              <ul className="ml-10">
                {sale.descp &&
                  sale.descp.map((desp) => (
                    <li className="list-disc">{desp}</li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
