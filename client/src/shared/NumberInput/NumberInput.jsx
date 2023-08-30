import React, {  useEffect, useState } from "react";
import {AiOutlineMinus,AiOutlinePlus}from 'react-icons/ai'

const NumberInput= ({
  className = "w-full",
  defaultValue = 1,
  min = 1,
  max = 99,
  onChange,
  setBNB

}) => {
  const [value, setValue] = useState(defaultValue);
console.log(value)
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handleClickDecrement = () => {
    if (min >= value) return;
    setValue((state) => {
      return state - 1;
    });
  
    onChange && onChange((value - 1) /10);
    
  };
  const handleClickIncrement = () => {
    if (max && max <= value) return;
    setValue((state) => {
      return state + 1;
    });
  

    onChange && onChange((value + 1 )/10) ;
  };

  
  return (
    <div
      className={`nc-NcInputNumber flex items-center justify-between space-x-5 ${className}`}
    >

      <div
        className={`nc-NcInputNumber__content flex items-center justify-between w-[104px] sm:w-28`}
      >
        <button
          className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-600 bg-neutral-800 focus:outline-none hover:border-neutral-100 disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default"
          type="button"
          onClick={handleClickDecrement}
          disabled={min >= value}
        >
          <AiOutlineMinus className="w-4 h-4 text-white" />
        </button>
        <span className="select-none block flex-1 text-center leading-1 text-white">
          {value}
        </span>
        <button
          className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-600 bg-neutral-800 focus:outline-none hover:border-neutral-100 disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default"
          type="button"
          onClick={handleClickIncrement}
          disabled={max ? max <= value : false}
        >
          <AiOutlinePlus className="w-4 h-4 text-white"  />
        </button>
      </div>
    </div>
  );
};

export default NumberInput;
