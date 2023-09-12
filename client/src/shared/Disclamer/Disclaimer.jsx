
import { CgDanger } from 'react-icons/cg'

const Disclamer = ({message ,className=null})=> {
    return (
        <div className={` ${className} py-5`}>
        <div className={`flex gap-4 ${!className && "justify-center"} items-center  px-4 py-1 bg-[#fff] bg-opacity-80 rounded-full `}>
            <CgDanger className="text-2xl text-neutral-700" />
        
            <p className="py-0 m-0 text-sm text-neutral-700" >{message}</p>
        </div>
    </div>
    )
}

export default Disclamer