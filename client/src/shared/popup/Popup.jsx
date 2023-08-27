import { Transition } from "@headlessui/react";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import toast from "react-hot-toast";


const Popup= ({
  show,
  productImage,
  t
  

}) => {

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  
  };
  const spinner = ()=>{
    return(
     <div className="flex align-center justify-center items-center justify-content-center">          
           <HashLoader
         color={"#ffffff"}
         loading={show}
         cssOverride={override}
         size={35}
         aria-label="Loading Spinner"
         data-testid="loader"
         />
         
         </div>
   )
  }


  const renderProductCartOnNotify = () => {
    return (
      <div className="flex p-0 m-0 ">
        <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
          <img
            src={productImage}
            alt={'name hello from the other side'}
            className="h-full w-full object-cover object-center "
          />
        </div>

        <div className="ml-4 flex flex-1 flex-col ">
          <div>
            <div className="flex justify-between items-start ">
              <div>
                <h3 className="text-base font-medium m-0 p-0 text-left">{'hello from the other side'}</h3>
                <p className="mt-1 text-sm text-neutral-300 p-0 ">
                  <span className="m-0 p-0 text-left">
                    { `Natural`}
                  </span>
                  <span className="mx-2 border-l border-slate-700 h-4"></span>
                  <span>{'sizeSelected' }</span>
                </p>
              </div>

{spinner()}
{/* <p className="p-0 m-0 text-white">price 150</p> */}
            </div>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <p className="text-slate-400">{`Qty ${'qualitySelected'}`}</p>

            <div className="flex">
              <Link
                onClick={()=>toast.remove(t.id)}
                className="font-medium text-neutral-400 button "
              >
                Dismiss
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Transition
      appear
      show={show}
      className="p-4 max-w-md w-full bg-neutral-900 shadow-lg rounded-2xl pointer-events-auto ring-1 ring-neutral-700 text-slate-200"
      enter="transition-all duration-300"
      enterFrom="opacity-0 translate-x-20"
      enterTo="opacity-100 translate-x-0"
      leave="transition-all duration-500"
      leaveFrom="opacity-100 translate-x-0"
      leaveTo="opacity-0 translate-x-20"
    >
      <p className="block text-base font-semibold leading-none m-0 p-0 text-left text-white">
        Added to cart!
      </p>
      <hr className=" border-slate-700 my-4" />
      {renderProductCartOnNotify()}
    </Transition>
  );
};

export default Popup;
