"use client";
import React from "react";
import friend from "../../assets/friend1.jpg";
import Image from "next/image";
import PaginationButtons from "../components/pagination/PaginationButtons";

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
      <div className="flex flex-col gap-5 md:flex-row flex-wrap flex-none overflow-auto">
        {friends.map((friend) => (
          <div className="basis-[23%] border-b-[1px] border-solid border-[#B1B1B1] pb-4 md:pb-10 h-fit">
            <Image src={friend.img} alt="" priority className="w-full" />
            <p className="body3 mt-2 h-full py-3 md:py-0">
              <span className="font-semibold text-primary">
                {friend.boldDescp}
              </span>{" "}
              {friend.descp}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-3 mb-5">
        <PaginationButtons />
      </div>
    </div>
  );
};

export default page;
