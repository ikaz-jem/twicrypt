import { Disclosure } from "@headlessui/react";

import { AiOutlineCaretDown } from 'react-icons/ai'
import { BiUpArrow } from 'react-icons/bi'


const SingleAccordion = ({
  panelClassName = "p-0 overflow-hidden pt-0 last:pb-0  text-sm text-slate-300 leading-6 roundedxl transition-all duration-500",
  title,
  desc,
  Icon,
  children
}) => {
  return (
    <div className="w-full">
      {/* ============ */}
  
          <Disclosure defaultOpen={true} >
            {({ open }) => (
              <>
                <Disclosure.Button  className={`flex  items-center border border-neutral-700 transition-all justify-between w-full px-4 py-2 group/icon font-medium text-left bg-neutral-900 hover:bg-neutral-800 text-white ${ open ? "rounded-t-xl" : "rounded-xl"} focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75 `}>
                 <div className="flex justify-start  items-center gap-2 w-full h-full">

                 <span className="text-lg flex justify-center items-center">
                  <Icon/> 
                  </span>
                 
                 <h4 className="text-left m-0 py-2 font-bold">{title} </h4>
                 </div>
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
 
                  <div className="w-full  ">


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

