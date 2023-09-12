
import React, {useRef, useState } from "react"
import { useGetNftByContract } from "../hooks/useGetNftByContract"
import { useHasNft } from "../hooks/web3Hooks/useHasNft"
import { Link } from "react-router-dom";
import Disclaimer from '../../../shared/Disclamer/Disclaimer'
//Nft contract address 
import { nft_contract } from "../data/Addresses";
import { useSelector } from "react-redux";
import { toDecimals } from "../../../utils/web3Functions";
import { useCreateListing } from "../hooks/web3Hooks/useCreateListing";
import { marketplace_contract } from "../data/Addresses";



const CreateListing = () => {
    const [selectedNft, setSelectedNft] = useState(null);
    const [nftPrice,setNftPrice]=useState(0)
    //connected user address
    const { address } = useSelector(state => state.session)

    // hook to fetch collection from contract
    const Nfts = useGetNftByContract()
    // nft collection contrac address

    const hasNft = useHasNft({
        contract: nft_contract,
        chain: 'bsctestnet',
        execute: true
    })

// const approve = useCreateListing({
//     tokenId:selectedNft.identifier,
//     price : '156',
//     value :toDecimals(0.025,18),
//     nftContract:selectedNft.contract,
//     marketplaceContract:marketplace_contract,

// })
console.log(toDecimals(0.025,18))
const approve = useCreateListing({

    tokenId: selectedNft && selectedNft.identifier,
     price : nftPrice,
     value : toDecimals(0.025,18).toString(),
     image:selectedNft?.image_url || '',
     name:selectedNft?.name || ''

})


const handleChangePrice =(e)=> {
    const inputVal = e.target.value;
    
    // Use a regular expression to validate and accept float numbers
    // This regex allows numbers like: 123, 123.45, .45, 0.123, etc.
    const regex = /^-?\d+(\.\d*)?$/;
    
    if (regex.test(inputVal)) {
        setNftPrice(Number(e.target.value))
        e.target.setCustomValidity(''); // Set a custom validity message
       
    }else {
        e.target.setCustomValidity('Please enter a valid  number.'); // Set a custom validity message
      }

}

const handleSubmit =(e)=>{
e.preventDefault()
approve.write()

}


    const handleSelect = (nft, i, e) => {
        e.preventDefault()
        setSelectedNft(nft);
    };

   

    const RenderNfts = () => {
        return (
            <div className="py-5 px-5 border-pink-600 rounded-3xl w-full h-full flex  justify-center border-l border-r ">
                <div className="flex  flex-col ">
                    <h5 className="text-left pl-2">Select from your twicript Collection :</h5>
                    <div className="flex">
                        <div className=" w-full h-full flex my-10 items-start justify-center">
                            {selectedNft && Nfts.data ?
                                <div className="">
                                    <img src={selectedNft?.image_url} className="w-80 h-80 object-cover rounded-xl cursor-pointer" />
                                    <h5 className="font-bold">{selectedNft?.name}</h5>
                                </div> : <div className="">
                                    <div className="w-80 h-80  rounded-xl cursor-pointer border border-neutral-800 flex items-center justify-center text-neutral-800" >
                                        <p className=" text-neutral-800">                                        Select An Nft to list !
                                        </p>
                                    </div>
                                </div>
                            }
                        </div>

                        <div className="   w-1/3 flex flex-col border rounded-l-md h-[50vh] overflow-y-scroll p-2 m-0 border-neutral-800 items-start justify-start  gap-2 ">
                            {Nfts?.data && Nfts?.data?.map((nft, i) => {
                                if (nft_contract?.toLowerCase() == nft?.contract?.toLowerCase()) {
                                    return <img key={i} src={nft.image_url} className={`w-26 h-26 object-cover rounded-xl cursor-pointer ${selectedNft == nft && ' outline outline-pink-600 '} `} onClick={(e) => handleSelect(nft, i, e)} />
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    const RenderForm = () => {

   
        return (
            <div className="my-5 px-5 rounded-2xl w-full">
                <div className="  rounded-xl w-full flex flex-col items-start justify-center">
                    <h3 className="m-0 p-0 font-bold mb-5">create listing:</h3>
                    <form className="p-0 m-0 w-full text-left" onSubmit={(e)=>handleSubmit(e)}>
                    <input onChange={handleChangePrice} type="text" className="w-1/4 text-black rounded-lg px-5 py-2" placeholder="Price in BNB" required />
                    <p className="text-left text-neutral-500 font-bold text-xs my-2">Set Selling Price</p>
                    <button type="submit" className="w-1/4 h-12 bg-blue-500 hover:bg-pink-600 text-white transition-all rounded-lg my-2">Create Listing</button>
                    </form>
                </div>
            </div>
        )
    }


    const RenderNftDetails = () => {


        return (
            <>
                       <div className="h-full border-l border-neutral-900 rounded-2xl  " >
                            <div className="flex items-start px-5 flex-col text-xs gap-2 text-left  ">
                {selectedNft ? <div className=" w-full h-full rounded-xl">
                  <div className="mt-5 text-sm">

                    <p className="font-extrabold">name :<span className="font-light pl-2">{selectedNft?.name} </span> </p>
                    <p className="font-extrabold">date created : <span className="font-light pl-2">{selectedNft?.created_at}</span> </p>
                    <p className="font-extrabold">contract: <span className="font-light pl-2">{selectedNft?.contract} </span> </p>
                    <p className="py-5"> {selectedNft?.description}</p>
                  
                  </div>
                  
                    <Link className="border border-neutral-800 px-5 py-2 rounded-lg hover:bg-neutral-800 text-white transition-all duration-300" to={`/earn/marketplace/my-nfts/nft/?address=${selectedNft?.contract}&id=${selectedNft?.identifier}&cid=${selectedNft?.metadata_url}&chain=97`} >view full details</Link >
                </div>
                    : <Disclaimer message={'select Nft to list'} className={"w-full opacity-70"} />
                }
                       </div>
                        </div>
            </>
        )
    }

    return (
        <React.Fragment>
            {address ? <div className="container--xxlarge container--center  mb-20 ">
                <main className="w-full h-full">
                    {/* FILTER */}
                    <div className="flex gap-5 w-auto h-auto">

                        <div className="flex flex-col w-1/2 gap-5">
                                <RenderNftDetails />
                     
                        <div className="h-full border-l border-neutral-900 py-5 rounded-2xl" >
                            <div className="flex items-start px-5 flex-col text-xs gap-2 text-left  ">
                           
                            </div>
                            {Nfts?.data && selectedNft && RenderForm()}
                        </div>
                     
                        </div>
                     
                     
                     
                        <div className=" w-1/2 h-full flex flex-col"  >
                            {Nfts.data && <RenderNfts />}
                        </div>
                    </div>
                </main>
            </div> :
                <div className="container--xxxlarge container--center  mb-10 ">
                    <main className="w-full h-screen">
                        <h1>Please connect you wallet !</h1>
                    </main>
                </div>
            }
        </React.Fragment>
    )
}


export default CreateListing