import { Transition } from "@headlessui/react";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import toast from "react-hot-toast";
import logo from '../../media/logo.png'

const Popup= ({
  title,
  desc,
  button,
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
     <div className="flex align-center justify-center items-center justify-content-center ">          
           <HashLoader
         color={"#ff2080"}
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
        <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-xl ">
         {productImage&& <img
            src={productImage}
            alt={'name hello from the other side'}
            className="h-full w-full object-cover object-center "
          /> ||<img
          src={logo}
          alt={'name hello from the other side'}
          className="h-full w-full object-cover object-center "
        /> }
        </div>

        <div className="ml-4 flex flex-1 flex-col ">
          <div>
            <div className="flex justify-between items-start ">
              <div>
                <h5 className="text-sm font-medium m-0 p-0 text-left word-break break-keep text-ellipsis ">{desc && desc || ''}</h5>
                {/* <p className="mt-1 text-sm text-neutral-300 p-0 ">
                  <span className="m-0 p-0 text-left">
                    { `Natural`}
                  </span>
                  <span className="mx-2 border-l border-slate-700 h-4"></span>
                  <span>{'sizeSelected' }</span>
                </p> */}
              </div>

{spinner()}
{/* <p className="p-0 m-0 text-white">price 150</p> */}
            </div>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
          { button &&  <Link to={button.link} className="font-medium text-white hover:bg-blue-500 bg-neutral-800 rounded-lg py-2 px-5 ">
                {button.title}

              </Link> }
            <p className="text-slate-400"></p>

            <div className="flex">
              {<Link
                onClick={()=>toast.remove(t.id)}
                className="font-medium text-white hover:bg-blue-500 bg-pink-600 rounded-full py-2 px-5 "
              >
                Dismiss
              </Link>}
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
      enterFrom="opacity-0 translate-y-20"
      enterTo="opacity-100 translate-y-0"
      leave="transition-all duration-500"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-20"
    >
      <p className="block text-sm font-semibold leading-none m-0 p-0 text-left text-white">
      {title && title || ''}
      </p>
      <hr className=" border-slate-700 my-4" />
      {renderProductCartOnNotify()}
    </Transition>
  );
};

export default Popup;
