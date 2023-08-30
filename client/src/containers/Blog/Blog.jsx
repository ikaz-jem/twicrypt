
import { useState, useEffect } from "react"
import axios from "axios"
import SingleAccordion from "../../shared/Accordion/SingleAccordion"
import SaleStagesCards from "../TokenSale/SaleStages/SaleStagesCards"
import Contribute from "../TokenSale/Contribute/Contribute"
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { MdOutlinePending, MdGeneratingTokens } from 'react-icons/md'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { FaUsers } from 'react-icons/fa'
import { W3mQrCode } from '@web3modal/react'




const Blog = ()=> {

    const RenderMenu = () => {


        return (
    
            <div className={`w-full shadow-md shadow-black  h-auto border-b    bg-opacity-30 rounded-3xl mt-5 panel-1 py-2 relative flex gap-20 items-center pl-10`}>
    
    
                {/* 
    {
    userNft && userNft.map((nft)=>nft.image_url ? <img src={nft.image_url} key={nft.created_at} />:'' )
    
    } */}
    
                <div className="flex items-center justify-start  m-0 p-0">
                    <RiMoneyDollarCircleLine className="text-white text-2xl m-0" />
                    <h6 className="m-0 pl-4">106587</h6>
                </div>
                <div className="flex items-center justify-start  m-0 p-0">
                    <MdGeneratingTokens className="text-white text-2xl m-0" />
                    <h6 className="m-0 pl-4">58486</h6>
                </div>
                <div className="flex items-center justify-start  m-0 p-0">
                    <AiOutlineCheckCircle className="text-white text-2xl m-0" />
                    <h6 className="m-0 pl-4">84487</h6>
                </div>
                <div className="flex items-center justify-start  m-0 p-0">
                    <MdOutlinePending className="text-white text-2xl m-0" />
                    <h6 className="m-0 pl-4">Pending</h6>
                </div>
    
                <div className="flex items-center justify-start  m-0 p-0">
                    <FaUsers className="text-white text-2xl m-0" />
                    <h6 className="m-0 pl-4">10</h6>
                </div>
    
            </div>
    
        )
    }
const imgUrl = "https://media.tokize.com/fr/app/uploads/2023/05/BTC.jpg"

return (
    <div className=" w-auto container--xxxlarge p-0 container--center ">

 <W3mQrCode size={200} imageUrl={imgUrl} uri="ipfs://bafybeiefzvptnmjns6mq37wgey3hhh5hth7vznnrdrv2km6nkhvs23kthq/1.png" />


        <SaleStagesCards />
        <div className="grid grid-cols-2 gap-10  w-auto container--xxxlarge px-5 container--center  place-items-start place-content-start relative   ">
{RenderMenu()}
                {/* <ul className="flex justify-start gap-10 py-2 wrap my-2  w-full border-b border-neutral-800  rounded-xl text-sm text-neutral-400">
                    <li>Total purchased Tokens : 0</li>
                    <li>Totla Assets Value : 0</li>
                    <li>Address:</li>
                </ul> */}
            <div className="w-full lg:w-[45%] h-full my-5">
                <div className="w-full flex justify-center items-center overflow-clip relative gap-10  ">
                </div>
                <div className="m-0 p-0 flex flex-col gap-1">
                 
                    <SingleAccordion title={'Private Sale'}  >
                    <h1 className="p-10 m-0">hello</h1>
                    </SingleAccordion >
                    <SingleAccordion title={'Presale Stage 1'} desc={'some descriptions'} />
                    <SingleAccordion title={'Presale Stage 2'} desc={'some descriptions'} />
                </div>
            </div>
            <div className=" w-full lg:w-[50%] ">
                <Contribute />
            </div>
        </div>
    </div>
)


}


export default Blog