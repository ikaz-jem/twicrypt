import { useNavigate } from "react-router-dom"
import Nav from "../../../../shared/Nav/Nav"
import NavItem from "../../../../shared/NavItem/NavItem"
import NumberInput from "../../../../shared/NumberInput/NumberInput"

const
    QuickMint = ({setShowPanel}) => {

const handleSwithAdvancedMode = ()=> {

Navigate('/earn/mint')
setShowPanel(false)

}

const Navigate = useNavigate()

        return (

            <div className=" w-auto flex flex-col justify-center items-center  ">

                <h5>Mint your Nfts</h5>
                <div className="flex flex-col items-center justify-center  w-full gap-5 bg-[#00000073] py-5 rounded-xl">

                    <img src="https://public.nftstatic.com/static/nft/res/nft-cex/S3/1676270529666_mwppsd282lglzlxlo1olb4t693qkw4br_600x600.gif" className=" rounded-xl w-40 h-60" />
                    <div>

                        <NumberInput label={'quantity'} max={20} desc={"limit : 20 NFTS"} />


                    </div>

                    <Nav className="flex items-center justify-center gap-5">
                        <NavItem className="w-40 h-10">Mint</NavItem>
                    </Nav>

                </div>

                <h5 className="m-5">Or you can mint Lucky box with 10%+ Off !</h5>
                <div className="flex gap-5">

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

                    
                </div>

<button className="button my-5" onClick={handleSwithAdvancedMode}>

switch to advanced mode
</button>

            </div>
        )

    }

export default QuickMint