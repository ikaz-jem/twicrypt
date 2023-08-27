import { Disclosure } from "@headlessui/react";

import { AiOutlineCaretDown } from 'react-icons/ai'
import { BiUpArrow } from 'react-icons/bi'


const SingleAccordion = ({
  panelClassName = "p-0 mx-1 overflow-hidden pt-0 last:pb-0  text-sm text-slate-300 leading-6 rounded-md transition-all duration-500",
  title,
  desc
}) => {
  return (
    <div className="w-full rounded-2xl space-y-1">
      {/* ============ */}
  
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex  items-center border border-neutral-800 transition-all justify-between w-full px-4 py-2 group/icon font-medium text-left bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75 ">
                  <span>{title}</span>
                  {!open ? (
                    <AiOutlineCaretDown className="w-4 h-4 text-slate-400 group-hover/icon:text-black" />
                  ) : (
                    < BiUpArrow className="w-4 h-4 text-slate-400  group-hover/icon:text-black" />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel
                  className={panelClassName}
                  as="div"
                >
 
                  <div className="flex h-full w-full  gap-0 items-center justify-start relative flex-wrap bg-neutral-900 ">



           {desc}rgzggrzgzrgzrgzrgzrgz
           {desc}rgzggrzgzrgzrgzrgzrgz
           {desc}rgzggrzgzrgzrgzrgzrgz
    


                  </div>



                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
 
      {/* ============ */}
    </div>
  );
};

export default SingleAccordion;

