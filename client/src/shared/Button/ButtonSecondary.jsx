import React from "react";
import Button from "./Button";


const ButtonSecondary = ({
  className = " border  border-slate-700 ",
  ...args
}) => {
  return (
    <Button
      className={`ttnc-ButtonSecondary   bg-slate-900 text-slate-300  hover:bg-blue-700 ${className}`}
      {...args}
    />
  );
};

export default ButtonSecondary;
