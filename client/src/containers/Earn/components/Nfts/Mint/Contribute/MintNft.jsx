
import ContributionForm from "./ContributionForm"; 
// import Disclamer from "../../../../../../shared/Disclamer/Disclaimer";


const MintNft = ({data}) => {

    return (<div className=" w-auto h-full flex flex-col justify-center items-start gap-5 relative    ">


        {/* <h3 className="text-left my-2 p-0 border-b border-neutral-800 w-full pb-2 text-pink-600 font-bold text-lg ">Contribute<span className="m-0 pl-5 text-neutral-400 text-sm ">Be the First to get Twicrypt Token !</span>  </h3> */}
        <div className="flex flex-col items-center justify-center  w-full gap-2 bg-[#00000073]  rounded-xl borde">
                {/* <Disclamer message={"own at least 1 NFT in order to participate !"}/> */}
            <div className=" h-full w-full flex justify-start items-start ">
             
                <div className='w-full'>
                <ContributionForm data={data} />
                </div>


            </div>
        </div>


    </div>

    )
}

export default MintNft