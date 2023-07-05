import React from "react";

const Button = (props) => {
  return (
    <>
      <button className="bg-primary py-2 px-5 font-bold text-xs tracking-widest uppercase text-white flex items-center gap-1 rounded">
        {props.text} <span className="text-2xl">{props.icon}</span>
      </button>
    </>
  );
};

export default Button;
