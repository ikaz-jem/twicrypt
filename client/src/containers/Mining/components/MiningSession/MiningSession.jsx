import Disclamer from "../../../../shared/Disclamer/Disclaimer"
import { useStartMining } from "../../hooks/useStartMining"
import { useClaimBank } from "../../hooks/useClaimBank"
import { useSelector } from "react-redux"
import { formatEther } from "viem"
import { useCorrectNetwork } from "../../../../hooks/useCorrectNetwork"
import { app_chain_id } from "../../../../shared/data/chains"
import { useNftBalanceOf } from "../../../../hooks/web3/useNftBalanceOf"
import StakedNfts from "./StakedNfts"
import BatteryGauge from 'react-battery-gauge'
import { useChargeBoost } from "../../hooks/useChargeBoost"
import { unixCountDown } from "../../../../utils/unixToDate"
import { TiBatteryCharge } from 'react-icons/ti'
import { useUnstakeMiners } from "../../hooks/useUnstakeMiners"

const cssOverride = {
  batteryBody: {
    strokeWidth: 1,
    cornerRadius: 2,
    fill: '#ffffff30',
    strokeColor: 'none'
  }, batteryCap: {
    fill: '#ffffff30',
    strokeWidth: 1,
    strokeColor: 'none',
    cornerRadius: 2,
    capToBodyRatio: 0.4
  }, batteryMeter: {
    fill: 'green',
    lowBatteryValue: 30,
    lowBatteryFill: 'red',
    outerGap: 0,
    noOfCells: 1, // more than 1, will create cell battery
    interCellsGap: 0
  }, readingText: {
    lightContrastColor: 'yellow',
    darkContrastColor: 'white',
    lowBatteryColor: 'red',
    fontFamily: 'Helvetica',
    fontSize: 12,
    showPercentage: true
  }, chargingFlash: {
    scale: undefined,
    fill: 'orange',
    animated: true,
    animationDuration: 2000
  },
}

const MiningSession = ({ nftWarning }) => {

  // const miningSessionData = useSessionData()

  const startMining = useStartMining()
  const claimBank = useClaimBank();
  // balance check from nft contract
  const nftBalance = useNftBalanceOf()
  const chargeBoost = useChargeBoost()
  // const miningplatform = useGetStats()

  const sessionData = useSelector(state => state.mining.session)
  const stats = useSelector(state => state.mining.stats)

  
  const miningSessionData = stats ? sessionData?.result : [];
  
  const currentTime = Math.floor(new Date().getTime() / 1000);
  
  
  
  const boostEndTime = Number(miningSessionData?.boostEndTime)
  
  let remainingTime = boostEndTime - currentTime;
  let boostDuration = stats ? Number(stats?.result?.boost_duration) : 0
  //2h
  //1 

  let rechargeFees = stats?.result ? formatEther(stats?.result?.boost_fees) : 0;

  {/* <BatteryGauge value={10} animated={true} aspectRatio={0.23} size={150} maxValue={boostEndTime} customization={cssOverride} /> */ }




  const minbBalance = Number(miningSessionData?.nftBalance)
  const bankData = miningSessionData?.bankData
  const minToClaimBank = Number(nftBalance?.data)


  const { chain, switchNetwork } = useCorrectNetwork({
    fallback: () => startMining.write()
  })

  const claim = useCorrectNetwork({
    fallback: () => claimBank.write()
  })

  const isFull = bankData?.funds === bankData?.capacity && bankData?.capacity > 0 ? true : false

  const handleChargeBoost = () => {

    chargeBoost.write()

  }



  const startMiningSession = (e) => {
    if (chain?.id == app_chain_id && minbBalance != 0) {
      e.preventDefault(); startMining.write()
    } else if (chain?.id == app_chain_id && minbBalance != 0) {
      e.preventDefault();
      switchNetwork?.switchNetwork()
    }
  }


  const handleClick = (e) => {
    if (minbBalance == 0 && Number(bankData?.capacity) != 0) {
      nftWarning({ title: 'no active miners found !', message: 'please send Nfts to work in order to start mining' })

    }
    else if (remainingTime <= 0 && minbBalance > 0 && Number(bankData?.capacity) != 0) {
      nftWarning({ title: 'power ended !', message: 'please charge your power' })
    } else if (Number(bankData?.capacity) == 0)

      nftWarning({ title: 'you need a bank to store earnings !', message: 'please claim your free bank ' })



    else {
      startMiningSession(e)
    }
  }



  const handleClaimBank = (e) => {
    if (chain?.id == app_chain_id && minToClaimBank != 0) {
      e.preventDefault();
      claimBank.write()
    } else if (chain?.id !== app_chain_id && minToClaimBank != 0) {
      e.preventDefault();
      claim?.switchNetwork?.switchNetwork()
    } else {
      nftWarning({ title: 'you do not own any Nft Workers !', message: 'you need to own NFT workers to claim your free bank and start mining' })
    }
  }



  return (
    <div className="w-full" >

      <div className="flex flex-wrap gap-2 px-0 justify-center my-2">
        <StakedNfts />


        {miningSessionData?.staked?.length > 0 ?

          <div className="w-full flex gap-1 flex-col md:flex-row flex-wrap border p-2 border-pink-500 rounded-lg bg-[#00000062] mx-10 items-between justify-between">

            <div className="flex justify-start items-start flex-col md:w-1/2 ">
              <p className="text-xs text-pink-300">remaining time : <span className="text-white"> {remainingTime > 0 ? unixCountDown(remainingTime) : '0 hrs'}</span>  </p>
              <p className="text-xs text-pink-300">max battery time : <span className="text-white"> {boostDuration > 0 && (boostDuration / 60) / 60} hrs</span>   </p>
              <p className="text-yellow-500 text-xs text-left"> ❕ recharge costs {rechargeFees !== 0 && ((rechargeFees * 3600) * 24).toFixed(2)} twicrypt tokens per Nft every {(boostDuration / 60) / 60} hrs , amount will be deducted from bank balance </p>
              <p className="text-yellow-500 text-xs text-left"> ❕ if you recharge power before battery dies , only power diffrence will be deducted from your balance  </p>

            </div>
            <div className="flex flex-col gap-2 items-center">
              {remainingTime && boostDuration ? <BatteryGauge orientation={"vertical"} value={remainingTime > 0 ? remainingTime : 0} animated={true} aspectRatio={0.52} size={150} maxValue={boostDuration} customization={cssOverride} /> : "loading ..."}
              <button className=" py-1 text-xs  hover:bg-neutral-200 hover:text-black transition-all duration-300 bg-blue-500 rounded flex items-center justify-center w-20 mx-5" onClick={handleChargeBoost}><TiBatteryCharge className="text-xl " />  recharge</button>

            </div>
            <div className="flex items-center justify-center w-full">

              {remainingTime <= 0 && <Disclamer message={' your power is empty please recharge 🔋'} />}
            </div>

          </div>


          :
          ''

        }

      </div>
      <div className="flex justify-between px-5 py-5">

        <div className="flex  gap-1 items-center justify-center w-full">
          {miningSessionData?.staked?.length > 0 && currentTime >= miningSessionData?.userData?.miningStartTime ? <button onClick={handleClick} disabled={isFull} className={`rounded-lg px-5  py-2 bg-blue-500 hover:bg-neutral-200 hover:text-black transition-all duration-300 text-xs disabled:cursor-not-allowed`}>Start mining</button> :
            null
          }

          {

            miningSessionData?.staked?.length > 0 && miningSessionData?.userData?.miningStartTime != "0" && currentTime <= miningSessionData?.userData?.miningStartTime ? <p className="text-xs text-green-500">session started !! you can come back later when the next session is available if you want , note that your earnings will be transfered to bank after a new session is started ! happy earnings 🥳🥳</p>
              : null
          }
          {miningSessionData?.bankData?.capacity > 0 ? null : <button onClick={handleClaimBank} className=" rounded-lg px-5 py-2 bg-orange-500 hover:bg-neutral-200 hover:text-black transition-all duration-300 text-xs">Claim free Bank</button>}
        </div>

      </div>
      <div className="flex items-center justify-center flex-col">

        {isFull && <Disclamer message={' bank is full please upgrade 🤫'} />}


      </div>
    </div>

  )
}

export default MiningSession