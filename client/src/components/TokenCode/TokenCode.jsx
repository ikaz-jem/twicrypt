import CopyModal from "../../shared/CopyModal/CopyModal"
import { token_contract } from "../../shared/data/chains"




const TokenCode = () => {

    return (
        <div className="w-full color-ball py-20 px-10 relative">

            <div className='w-full  flex flex-col md:flex-row items-center justify-between '>

                <div className=' flex flex-col items-center justify-start gap-0 md:gap-3 my-5 '>
                    <h1 className=' font-sans tracking-widest text-neutral-200 font-semibold text-lg lg:text-3xl p-0 m-0'>Embark on a Journey with Twicrypt , Redefining Token Excellence.  </h1>
                    {/* <p className='font-sans text-neutral-300 text-sm md:text-base'> Our Smart contract is Following the ERC20 Token Standars , highly secured and safe .. </p> */}
                    <h3 className='font-sans text-neutral-200 text-lg lg:text-2xl'> Twicrypt's smart contract operates without a centralized owner, ensuring an unparalleled level of safety </h3>
                    <div className="flex flex-col w-auto">

                        <p className='font-sans text-neutral-300 text-xs md:text-base'>contract Address :</p>
                        <CopyModal text={token_contract} />
                    </div>
                </div>
                <img src='https://twicrypt.com/media/smartcontract.png' className='rounded-3xl shadow-xl w-full md:w-1/2'></img>
            </div>
        </div>

    )


}



export default TokenCode