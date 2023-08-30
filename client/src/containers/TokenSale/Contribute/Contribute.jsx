
import { CgDanger } from 'react-icons/cg'
import ContributionForm from "./ContributionForm";
import Discount from './Discount';



const Disclamer = ()=> {
    return (
        <div className="py-5">
        <div className="flex gap-4 justify-center items-center  px-4 py-1 bg-[#fff] bg-opacity-80 rounded-full  ">
            <CgDanger className="text-2xl text-neutral-700" />
        
            <p className="py-0 m-0 text-sm text-neutral-700" >You need to own at least 1 NFT in order to participate !</p>
        </div>
    </div>
    )
}

const Contribute = () => {

    return (<div className=" w-auto h-full flex flex-col justify-center items-start gap-5 relative  ">


        {/* <h3 className="text-left my-2 p-0 border-b border-neutral-800 w-full pb-2 text-pink-600 font-bold text-lg ">Contribute<span className="m-0 pl-5 text-neutral-400 text-sm ">Be the First to get Twicrypt Token !</span>  </h3> */}
        <div className="flex flex-col items-center justify-center  w-full gap-2 bg-[#00000073]  rounded-xl borde">
                <Disclamer />
            <div className=" h-full w-full flex justify-start items-start ">
             
                <div className='w-full'>
                <ContributionForm />
                </div>


            </div>
        </div>
        <Discount />


    </div>

    )
}

export default Contribute