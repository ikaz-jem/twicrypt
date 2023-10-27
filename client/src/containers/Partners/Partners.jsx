
import { useSelector } from "react-redux"
import ConnectWalletError from "../../shared/ConnectWalletError/ConnectWalletError"
import PartnerProgram from "./PartnerProgram"

const Partners = () => {
const {address} = useSelector(state=>state.session)
    return (
        <div className="light-ball ">
            <div className="lg:flex ">
                <div className=" wrapper container container--xxlarge container--center  ">
                    <div className=" w-full  flex flex-cols">

                       
                       {address ? <PartnerProgram />: <ConnectWalletError message={'connect your wallet'} />}
                    </div>

                </div>
            </div>
            {/* <SectionWhy /> */}

        </div>

    )
}

export default Partners