import React from "react";
import twFocusClass from '../../utils/twFocusClass'



const NavItem = ({
  className = "px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize",
  radius = "rounded-full",
  children,
  onClick = () => {},
  isActive = false,
  renderX,
}) => {
  return (
    <li className="nc-NavItem relative" data-nc-id="NavItem">
      {renderX && renderX}
      <button
        className={`block !leading-none font-medium whitespace-nowrap transition  duration-200 border-[#ffffff1e] border   ${className} ${radius} ${
          isActive
            ? "bg-slate-100 text-black text-bold "
            : "text-slate-400 hover:text-white hover:bg-[#7b238d]"
        } ${twFocusClass()}`}
        onClick={() => {
          onClick && onClick();
        }}
      >
        {children}
      </button>
    </li>
  );
};

export default NavItem;
