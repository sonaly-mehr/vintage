"use client";
import React from "react";
import friend from "../../assets/friend1.jpg";
import Image from "next/image";
import PaginationButtons from "../components/pagination/PaginationButtons";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const page = () => {
  const friends = [
    {
      img: friend,
      boldDescp: "Godzilla,",
      descp: "aki a legcsúnyább bringás a világon",
    },
    {
      img: friend,
      boldDescp: "Balázska,",
      descp:
        "aki a legjobb cd-ket árulja.Nagy Gergő (no nem a kimnowakból) a woodcraft nagymestere, de a Kozmix koncerteken Ő is nyomja az ipart mint a fekete-fehér billentyűk megszálottja.",
    },
    {
      img: friend,
      boldDescp: "Nagy Gergő,",
      descp:
        "(no nem a kimnowakból) a woodcraft nagymestere, de a Kozmix koncerteken Ő is nyomja az ipart mint a fekete-fehér billentyűk megszálottja.",
    },
    {
      img: friend,
      boldDescp: "Szász Gergő,",
      descp: "Ádám gyermekkori barija. Rossz évjárat volt, pont olyan mint Ő.",
    },
    {
      img: friend,
      boldDescp: "Godzilla",
      descp: "aki a legcsúnyább bringás a világon.",
    },
    {
      img: friend,
      boldDescp: "Gyula ",
      descp:
        "árulja a legfonnyadtabb, legrohadtabb, legsavanyúbb és legdrágább zölséget és gyümölcsöt.",
    },
    {
      img: friend,
      boldDescp: "Balázska,",
      descp:
        "aki a legjobb cd-ket árulja.Nagy Gergő (no nem a kimnowakból) a woodcraft nagymestere, de a Kozmix koncerteken Ő is nyomja az ipart mint a fekete-fehér billentyűk megszálottja.",
    },
    {
      img: friend,
      boldDescp: "Nagy Gergő,",
      descp:
        "(no nem a kimnowakból) a woodcraft nagymestere, de a Kozmix koncerteken Ő is nyomja az ipart mint a fekete-fehér billentyűk megszálottja.",
    },
    {
      img: friend,
      boldDescp: "Szász Gergő,",
      descp: "Ádám gyermekkori barija. Rossz évjárat volt, pont olyan mint Ő.",
    },
    {
      img: friend,
      boldDescp: "Nagy Gergő,",
      descp:
        "(no nem a kimnowakból) a woodcraft nagymestere, de a Kozmix koncerteken Ő is nyomja az ipart mint a fekete-fehér billentyűk megszálottja.",
    },
    {
      img: friend,
      boldDescp: "Szász Gergő,",
      descp: "Ádám gyermekkori barija. Rossz évjárat volt, pont olyan mint Ő.",
    },
    {
      img: friend,
      boldDescp: "Godzilla",
      descp: "aki a legcsúnyább bringás a világon.",
    },
    {
      img: friend,
      boldDescp: "Gyula ",
      descp:
        "árulja a legfonnyadtabb, legrohadtabb, legsavanyúbb és legdrágább zölséget és gyümölcsöt.",
    },
    {
      img: friend,
      boldDescp: "Balázska,",
      descp:
        "aki a legjobb cd-ket árulja.Nagy Gergő (no nem a kimnowakból) a woodcraft nagymestere, de a Kozmix koncerteken Ő is nyomja az ipart mint a fekete-fehér billentyűk megszálottja.",
    },
  ];
  return (
    <div className="width pt-16 pb-28">
      <h1 className="heading">hírek</h1>

      <div className="flex justify-center mb-5">
        <PaginationButtons />
      </div>

      <div className="p-5">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
          <Masonry gutter="20px">
            {friends.map((friend) => (
              <div className="border-b-[1px] border-solid border-[#B1B1B1] pb-5 md:pb-8 h-fit mb-6">
                <Image src={friend.img} alt="" priority className="w-full" />
                <p className="body3 mt-2 h-full md:py-0">
                  <span className="font-semibold text-primary">
                    {friend.boldDescp}
                  </span>{" "}
                  {friend.descp}
                </p>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      {/* <div className="grid grid-cols-4 gap-5">
        {friends.map((friend) => (
          <div className="border-b-[1px] border-solid border-[#B1B1B1] pb-4 md:pb-10 h-fit">
            <Image src={friend.img} alt="" priority className="w-full" />
            <p className="body3 mt-2 h-full py-3 md:py-0">
              <span className="font-semibold text-primary">
                {friend.boldDescp}
              </span>{" "}
              {friend.descp}
            </p>
          </div>
        ))}
      </div> */}
      <div className="flex justify-center mt-3 mb-5">
        <PaginationButtons />
      </div>
    </div>
  );
};

export default page;
