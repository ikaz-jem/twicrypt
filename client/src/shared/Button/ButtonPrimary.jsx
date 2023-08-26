import Button from './Button'
import React from "react";



const ButtonPrimary = ({
  className = "",
  ...args
}) => {
  return (
    <Button
      className={`ttnc-ButtonPrimary  disabled:bg-slate-500 bg-slate-200 hover:bg-[#7b238d]  text-slate-800 hover:text-white shadow-xl ${className}`}
      {...args}
    />
  );
}; 

export default ButtonPrimary;
