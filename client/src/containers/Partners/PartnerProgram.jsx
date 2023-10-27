import { useGetPartnerStats } from "./hooks/useGetPartnerStats"
import { formatEther } from "viem"
import { useSelector } from "react-redux"
import {  useState } from "react"
import { useWithdrawPartnerProfits } from "./hooks/useWithdrawPartnerProfits"




const PartnerProgram = () => {
    const { address } = useSelector(state => state.session)
    const [id,setId]=useState(null)
   

    const partnerData = useGetPartnerStats()



const withdraw = useWithdrawPartnerProfits({
    id : id && id?.toString()
})

const handleSubmit = ()=> {
withdraw?.write()

}

    return (
        <div className="w-full">
            <h3 className="text-left">team program :</h3>

            <div className="flex gap-5">


                <div className="flex justify-between w-full border rounded p-5 ">

                    <div className="flex flex-col text-white font-bold justify-center items-start">
                        <p>partner</p>
                        <p>address</p>
                        <p>total profits :</p>
                        <p>percentage :</p>
                    </div>
                    <div className="flex flex-col text-white font-bold justify-center items-start">
                       {partnerData?.isPartner ?  <p className="text-green-500">you are a partner</p>  : <p className="text-red-500">you are not a partner yet</p>}
                        <p>{address}</p>
                        <p>{formatEther(Number(partnerData?.totalProfits)) + " BNB"}</p>
                        <p>{Number(partnerData?.partnerPercentage) + "%"}</p>
                    </div>
                </div>

                <div className="flex justify-between w-full items-start border rounded p-5">

                    <div className="flex flex-col text-white font-bold justify-center items-start">
                        <div className="flex flex-col items-start">
                            <h5 className="p-0 m-0">referrals</h5>

                            {
                                partnerData?.referrals?.length > 0 ? partnerData?.referrals?.map((reff) => <p>{reff}</p>) : 'no referrals yet'

                            }
                        </div>
                    </div>
                </div>
                <div className="">

                </div>



            </div>
            <div className="flex my-5 flex-col text-left">
                            
           <p className="font-bold text-white">confirm your partner Id :</p>
           <input onChange={(e)=>setId(e.target.value)} type="text" name="id" className="w-40 my-2 text-black"/>
            <button onClick={handleSubmit} disabled={formatEther(Number(partnerData?.totalProfits))<= 0 ? true : false}  className="w-40 hover:bg-blue-500 transition-all bg-orange-500 px-4 py-2 rounded disabled:cursor-not-allowed disabled:bg-gray-400" >withdraw profits</button>
           
            </div>

        </div>

    )


}


export default PartnerProgram