import { Transition } from "@headlessui/react";
import { CSSProperties, FC } from "react";
import { Link } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";



const Popup = ({hash,show,uint256,message,image,title,showSpinner}) => {

 const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
      
      };
      const spinner = (show)=>{
        return(
         <div className="flex align-center justify-center items-center justify-content-center">          
               <HashLoader
             color={"#0000"}
             loading={show}
             cssOverride={override}
             size={30}
             aria-label="Loading Spinner"
             data-testid="loader"
             />
             
             </div>
       )
      }


  const renderProductCartOnNotify = (hash,show,uint256,message,image,title,showSpinner) => {
    return (
      <div className="flex ">
        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-full bg-slate-100">
          <img
            src={image}
            alt={"hello"}
            className="h-full w-full object-contain object-center rounded-full object-cover"
          />
        </div>

        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between ">
              <div>
                <h3 className="text-base font-medium ">{message}</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  <span>
                    { /* variants ? variants[variantActive].name : `Natural`  */}
                  </span>
                  <span className="mx-2 border-l border-slate-200 dark:border-slate-700 h-4"></span>
                  <Link to={ hash && hash} target="blank" >
                  <span>{hash && hash.slice(0,30)+"..."}</span>
                  </Link>
                </p>
              </div>
{uint256 ==0 ? '' : uint256}
{showSpinner ? spinner() :''}            </div>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <p className="text-gray-500 dark:text-slate-400">{`Qty ${15000}`}</p>

            <div className="flex">
              <p
                className="font-medium text-primary-6000 dark:text-primary-500 "
              >
                View Status
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Transition
      appear
      show={true}
      className="p-4 max-w-md w-full bg-white dark:bg-slate-800 shadow-lg rounded-2xl pointer-events-auto ring-1 ring-black/4 dark:ring-white/10 text-slate-900 dark:text-slate-200"
      enter="transition-all duration-150"
      enterFrom="opacity-0 translate-x-20"
      enterTo="opacity-100 translate-x-0"
      leave="transition-all duration-150"
      leaveFrom="opacity-100 translate-x-0"
      leaveTo="opacity-0 translate-x-20"
    >
      <p className="block text-base font-semibold leading-none">
       {title ==='0' ? '' : title}
      </p>
      <hr className=" border-slate-200 dark:border-slate-700 my-4 shadow-sm" />
      {renderProductCartOnNotify()}
    </Transition>
  );
};

export default Popup;
