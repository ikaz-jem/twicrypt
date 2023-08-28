import Nav from "../../../../shared/Nav/Nav";
import NavItem from "../../../../shared/NavItem/NavItem";
import NumberInput from "../../../../shared/NumberInput/NumberInput";
import SingleAccordion from "../../../../shared/Accordion/SingleAccordion";
import NftSlider from "../NftSlider/NftSlider";

const Mint = () => {

    return (<div className=" w-auto h-full flex flex-col justify-center items-start gap-5 relative  ">
                        <h3 className="text-left my-2 p-0 border-b border-neutral-800 w-full pb-2 text-pink-600 font-bold text-lg ">Mint your NFTs <span className="m-0 pl-5 text-neutral-400 text-sm ">Start earning and increase your Assets Value overTime !</span>  </h3>
        <div className="flex flex-col items-center justify-center  w-full gap-2 bg-[#00000073] py-5 rounded-xl">

            <img src="https://public.nftstatic.com/static/nft/res/nft-cex/S3/1676270529666_mwppsd282lglzlxlo1olb4t693qkw4br_600x600.gif" className=" rounded-xl w-40 h-60" />
            <div>

                <NumberInput label={'quantity'} max={20} desc={"limit : 20 NFTS"} />


            </div>

            <Nav className="flex items-center justify-center gap-5">
                <NavItem className="w-40 h-10">Mint</NavItem>
            </Nav>

        </div>

        <h3 className="text-left my-2 p-0 border-b border-neutral-800 w-full pb-2 text-pink-600 font-bold text-lg ">Get welcome discounts !  <span className="m-0 pl-5 text-neutral-400 text-sm ">Up to 20% discount when buying packages</span>  </h3>
        <div className="flex gap-5 flex-wrap items-center justify-center w-full">

            <div className="flex flex-col items-center hover:bg-neutral-800 p-2 rounded-xl cursor-pointer bg-[#00000071]">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCbudcyXWo3gbCUdYgoV7Nr7janSoGZ2u4hyW1VRs19VpN7GiO73v-T8A-SVwaL58-Has&usqp=CAU" className="w-20 h-20 rounded-full" />
                <p className="m-0 py-3 text-xs text-white">5 NFTs / 5% off</p>
            </div>

            <div className="flex flex-col items-center hover:bg-neutral-800 p-2 rounded-xl cursor-pointer bg-[#00000071]">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCbudcyXWo3gbCUdYgoV7Nr7janSoGZ2u4hyW1VRs19VpN7GiO73v-T8A-SVwaL58-Has&usqp=CAU" className="w-20 h-20 rounded-full" />
                <p className="m-0 py-3 text-xs text-white">10 NFTs / 10% off</p>
            </div>

            <div className="flex flex-col items-center hover:bg-neutral-800 p-2 rounded-xl cursor-pointer bg-[#00000071]">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCbudcyXWo3gbCUdYgoV7Nr7janSoGZ2u4hyW1VRs19VpN7GiO73v-T8A-SVwaL58-Has&usqp=CAU" className="w-20 h-20 rounded-full" />
                <p className="m-0 py-3 text-xs text-white">15 NFTs / 15% off</p>
            </div>
            <div className="flex flex-col items-center hover:bg-neutral-800 p-2 rounded-xl cursor-pointer bg-[#00000071]">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCbudcyXWo3gbCUdYgoV7Nr7janSoGZ2u4hyW1VRs19VpN7GiO73v-T8A-SVwaL58-Has&usqp=CAU" className="w-20 h-20 rounded-full" />
                <p className="m-0 py-3 text-xs text-white">20 NFTs / 20% off</p>
            </div>
         

        </div>




    </div>

    )
}

const MintPage = () => {
    return (
        <div className="grid grid-cols-2 gap-10  w-auto  place-items-start place-content-start relative">
         
                <h3 className="text-left my-2 p-0 border-b border-neutral-800 w-full pb-2 text-pink-600 font-bold text-lg ">My Assets Quick view   </h3>
<div className="w-full flex justify-center items-center overflow-clip relative   ">

                <NftSlider/>
</div>



<div className="w-full lg:w-[45%] h-full my-5">
                <div className="flex justify-between h-full">

                    <ul className="flex justify-start gap-10 py-4 wrap border w-full border-neutral-800 rounded-xl text-sm text-neutral-400">
                        <li>Total Owned Nfts : 0</li>
                        <li>Totla Assets Value : 0</li>
                        <li>Total Owned Nfts :</li>

                    </ul>
                </div>

        <div className="my-10 flex flex-col gap-2">


                <SingleAccordion title={'Mining'} desc={'some descriptions'} />
                <SingleAccordion title={'Interaction Mining'} desc={'some descriptions'} />
                <SingleAccordion title={'All Assets'} desc={'some descriptions'} />
                <SingleAccordion title={'title'} desc={'some descriptions'} />
                </div>
               

            </div>

            <div className=" w-full lg:w-[50%]">
                <Mint />
            </div>





       





        </div>






    )

}

export default MintPage