import ProgressBar from "../../../shared/ProgressBar/ProgressBar"
import Nav from "../../../shared/Nav/Nav"
import NavItem from "../../../shared/NavItem/NavItem"


const ContributionForm = () => {

    return (
        <div className=" w-full flex  gap-5 justify-start items-start h-full p-5 flex-wrap ">
                        <h3 className="text-left my-2 p-0 border-b border-neutral-800 w-full rounded-2xl px-5 pb-2 text-pink-600 font-bold text-xl ">Private Sale - Stage 1 <span className="m-0 pl-5 text-neutral-400 text-base ">1M tokens Offering  </span>  </h3>
            <div className="w-full m-0  flex flex-col  gap-5 border border-neutral-800 p-5 rounded-lg ">

                <ProgressBar percentage={70} min={0 + ' BNB'} max={150 + ' BNB'} />

                <div className=" flex p-0 gap-1 m-0">

                    <div className="m-0 p-0 flex flex-col w-full justify-center gap-10">


                        <input
                            type='number'
                            className="w-full py-2 h-full  bg-neutral-800 px-4 rounded-xl outline-none text-sm text-white focus:bg-neutral-900   transition-all duration-700 '"
                            placeholder='BNB Amount'
                            name='link'
                        />




                    </div>
                    <Nav>
                        <NavItem > contribute</NavItem>
                    </Nav>
                </div>
            </div>
           
            <div className="w-full flex flex-wrap gap-5 p-0 m-0  ">

            <div className="flex justify-between border border-neutral-800 items-start grow px-5 rounded-lg py-5">
                            <ul className="flex items-start flex-col text-neutral-500 text-base">
                                <li>your Contributions :</li>
                                <li>your Purshased Tokens: </li>
                                <li>NFTs : </li>
                                <li>Refferals :</li>
                                <li>item</li>
                            </ul>
                            <ul className="flex items-start flex-col  text-neutral-500 text-base">
                                <li>0BNB</li>
                                <li> 0BNB</li>
                                <li> 0tokens</li>
                                <li>item</li>
                                <li>item</li>
                            </ul>
                        </div>
                        <div className="flex justify-between  items-start grow px-5 border border-neutral-800 rounded-lg py-5">
                            <ul className="flex items-start flex-col  text-neutral-500 text-base">
                                <li>Tokens For Sale :</li>
                                <li>Current Rate : </li>
                                <li>current Stage : </li>
                                <li>Total Contributors:</li>
                                <li>Min/Max</li>
                            </ul>
                            <ul className="flex items-start flex-col  text-neutral-500 text-base">
                                <li>1M Tokens</li>
                                <li> 0.05$ / 1 token</li>
                                <li>Private Sale</li>
                                <li>0</li>
                                <li>0.1BNB/5BNB</li>
                            </ul>
                        </div>
            </div>



        </div>



    )

}


export default ContributionForm