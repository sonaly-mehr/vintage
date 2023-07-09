import React from "react";

const Button = (props) => {
  return (
    <>
      <button className="bg-primary px-5 font-bold text-xs tracking-widest uppercase text-white flex items-center h-9 gap-1 rounded">
        {props.text} <span className="text-2xl">{props.icon}</span>
      </button>
    </>
  );
};

export default Button;
