import { useState } from "react";
import {BsClipboardCheck} from 'react-icons/bs'


const CopyModal = ({text})=>{
    const [copySuccess, setCopySuccess] = useState(false);
  
    const copyToClipboard = () => {
        navigator.clipboard.writeText(text)
          .then(() => {
            setCopySuccess(true);
          })
          .catch(err => {
            console.error('Failed to copy to clipboard: ', err);
          });
      };
return (


    <>
    <div className="w-full h-full py-5">
    
    <div className="border border-neutral-400 p-2 flex items-center justify-between rounded-xl gap-1">
      <p className="sm:text-xs text-[10px] truncate px-1 text-neutral-200">{text}</p>
      <button onClick={copyToClipboard}><BsClipboardCheck className="text-xl hover:text-pink-500  transition-all"/></button>
      
    </div>
      {copySuccess && <p className="sm:text-xs text-[10px] text-right text-neutral-200 "> copied to clipboard !</p>}
    </div>

    </>
)

}

export default CopyModal