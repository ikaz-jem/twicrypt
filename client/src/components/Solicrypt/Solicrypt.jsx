import CopyModal from "../../shared/CopyModal/CopyModal"
import { token_contract } from "../../shared/data/chains"
import { Link } from "react-router-dom"



const Solicrypt = () => {

    return (
        <div className="w-full  py-20 px-10 relative">

            <div className='w-full  flex flex-col md:flex-row items-center justify-between '>

                <div className=' flex flex-col items-center justify-start gap-0 md:gap-3 my-5'>
                    <h1 className=' font-sans tracking-widest text-neutral-200 font-semibold text-xl lg:text-4xl'>Our New Platform is on The Way 🚀 </h1>
                    <p className='font-sans text-neutral-300 text-sm md:text-base'> Code with Confidence, Audit with Assurance .. </p>
                    <h3 className='font-sans text-neutral-200 text-xl lg:text-2xl'> Solicrypt.com, your go-to multi-web3 service provider, offers seamless auditing and KYC services. </h3>
                    <div className="flex flex-col w-auto gap-0 md:gap-3">

                        <p className='font-sans text-neutral-300 text-sm md:text-base'>Apply For Audit and KYC , Create your own Contracts and Dapps in Seconds</p>
                        <Link className='font-sans text-neutral-300 text-sm md:text-base hover:text-pink-500 font-bold' to={'https://solicrypt.com/'} target="blank">www.Solicrypt.com</Link>
                        <p className='font-sans text-neutral-300 text-xs '>provided By Twicrypt</p>
                    </div>
                </div>
                <img src='https://twicrypt.com/media/solicrypt.png' className='rounded-3xl shadow-xl w-full md:w-1/2'></img>
            </div>
        </div>

    )


}



export default Solicrypt