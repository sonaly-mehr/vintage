import React from "react";

const Reservation = () => {
  return (
    <div className="basis-1/2 flex gap-32">
      <div className="flex flex-col gap-6">
        <h6 className="text-[15px] font-bold leading-[23px] h-10">Termék:</h6>
        <h6 className="text-[15px] font-bold leading-[23px]">Ár:</h6>
        <h6 className="text-[15px] font-bold leading-[23px]">Mennyiség:</h6>
        <h6 className="text-[15px] font-bold leading-[23px]">Összesen:</h6>
      </div>

      <div className="flex flex-col gap-6">
        <span className="body flex flex-col h-10">
          Framus <span>FM-20SE MIJ</span>
        </span>
        <span className="body">170 000 Ft</span>
        <span className="body">1 db</span>

        <span className="text-[15px] font-semibold leading-[22px]">
          170 000 Ft
        </span>
      </div>
    </div>
  );
};

export default Reservation;
