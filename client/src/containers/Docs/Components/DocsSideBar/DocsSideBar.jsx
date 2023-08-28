import React from "react";

import { Disclosure } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import ButtonPrimary from "../../../../shared/Button/ButtonPrimary";
import { NAVIGATION_DEMO_2 } from "../../Navigation/navigation";
import {AiFillCaretDown} from 'react-icons/ai'

const DocsSideBar = ({
  data = NAVIGATION_DEMO_2,
  onClickClose,
}) => {
  const _renderMenuChild = (
    item,
    itemClass = " pl-3 text-neutral-200 font-medium text-left "
  ) => {
    return (
      <ul className="nav-mobile-sub-menu pl-6 pb-1 text-base text-left">
        {item.children?.map((i, index) => (
          <Disclosure key={i.href + index} as="li">
            <NavLink
              to={{
                pathname: i.href || undefined,
              }}
              className={({ isActive }) =>
                `flex text-sm rounded-lg hover:bg-neutral-800 mt-0.5 pr-4  ${itemClass} ${
                  isActive ? "text-secondary" : ""
                }`
              }
            >
              <span
                className={`py-2.5 ${!i.children ? "block w-full" : ""}`}
                onClick={onClickClose}
              >
                {i.name}
              </span>
              {i.children && (
                <span
                  className="flex items-center flex-grow "
                  onClick={(e) => e.preventDefault()} 
                >
                  <Disclosure.Button
                    as="span"
                    className="flex justify-end flex-grow"
                  >
                    <AiFillCaretDown
                      className="ml-2 h-4 w-4 text-slate-500"
                      aria-hidden="true"
                    />
                  </Disclosure.Button>
                </span>
              )}
            </NavLink>
            {i.children && (
              <Disclosure.Panel>
                {_renderMenuChild(
                  i,
                  "pl-3 text-slate-400 "
                )}
              </Disclosure.Panel>
            )}
          </Disclosure>
        ))}
      </ul>
    );
  };

  const _renderItem = (item, index) => {
    return (
      <Disclosure
        key={index}
        as="li"
        className="text-white"
      >
        <NavLink
          className={({ isActive }) =>
            `flex w-full items-center py-2.5 px-4 font-medium uppercase tracking-wide text-sm hover:bg-slate-800 rounded-lg ${
              isActive ? "text-secondary" : ""
            }`
          }
          to={{
            pathname: item.href || undefined,
          }}
        >
          <span
            className={!item.children ? "block w-full" : ""}
            onClick={onClickClose}
          >
            {item.name}
          </span>
          {item.children && (
            <span
              className="block flex-grow"
              onClick={(e) => e.preventDefault()}
            >
              <Disclosure.Button
                as="span"
                className="flex justify-end flex-grow"
              >
                <AiFillCaretDown
                  className="ml-2 h-4 w-4 text-neutral-500"
                  aria-hidden="true"
                />
              </Disclosure.Button>
            </span>
          )}
        </NavLink>
        {item.children && (
          <Disclosure.Panel>{_renderMenuChild(item)}</Disclosure.Panel>
        )}
      </Disclosure>
    );
  };

  const renderMagnifyingGlassIcon = () => {
    return (
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 22L20 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };



  return (
    <div className="overflow-y-auto relative h-screen py-2 transition transform shadow-lg ring-1 ring-neutral-700 bg-neutral-900 divide-y-2 divide-neutral-800 text-left ">
      <div className="py-6 px-5">
    
        <div className="flex flex-col mt-5 text-slate-600 dark:text-slate-300 text-xs">
          <span>
            Discover the most outstanding articles on all topics of life. Write
            your stories and share them
          </span>

          <div className="flex justify-between items-center mt-4">
            <span className="block">
            </span>
          </div>
        </div>
        <span className="absolute right-2 top-2 p-1">
        </span>

      </div>
      <ul className="flex flex-col py-6 px-2 space-y-1">
        {data.map(_renderItem)}
      </ul>
      <div className="flex items-center justify-between py-6 px-5 space-x-2">

      </div>
    </div>
  );
};

export default DocsSideBar;
