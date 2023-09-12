import { Disclosure } from "@headlessui/react";

import { AiOutlineCaretDown } from 'react-icons/ai'
import { BiUpArrow } from 'react-icons/bi'


const SingleAccordion = ({
  panelClassName = "p-0 overflow-hidden pt-0 last:pb-0  text-sm text-slate-300 leading-6 transition-all duration-500",
  title,
  Icon,
  children,
  className,
  open,
}) => {
  return (
    <div className="w-full">
      {/* ============ */}
  
          <Disclosure defaultOpen={open} >
            {({ open }) => (
              <>
                <Disclosure.Button  className={`flex ${!className && !open && 'rounded-xl'} items-center border border-neutral-700 transition-all justify-between w-full px-4 py-2 group/icon font-medium text-left bg-neutral-900 hover:bg-neutral-800 text-white ${ !className && open ? "rounded-t-xl" : ""}  focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75 ${className} `}>
                 <div className="flex justify-start  items-center gap-2 w-full h-full">
              <div className="flex justify-start items-center gap-2 w-full">
                 <span className="text-white text-md ">
                { Icon && <Icon /> }
                  </span> 
                 
                 <h5 className="text-left m-0 py-2 font-bold">{title} </h5>
              </div>
                 </div>
                                  {!open ? (
                    <AiOutlineCaretDown className="w-4 h-4 text-slate-200 group-hover/icon:text-pink-500" />
                  ) : (
                    < BiUpArrow className="w-4 h-4 text-slate-200  group-hover/icon:pink-500k" />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel
                  className={panelClassName}
                  as="div"
                >
 
                  <div className="w-full text-neutral-300 ">


                     {children}
   
    


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

