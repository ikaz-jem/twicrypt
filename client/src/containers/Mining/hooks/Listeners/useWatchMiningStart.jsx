import { watchContractEvent } from '@wagmi/core'
import { mining_contract } from '../../data/addresses'
import abi from "../../abi/mining.json"

export const useWatchMiningStart = ()=> {

    let sessionStart = watchContractEvent(
        {
          address: "0x1abD62C4e5c32C10d1d97bcDC69cf9e7590Da1F8",
          abi: abi ,
          eventName: 'sessionStarted',
          ChainId:97
        },
        (log) => console.log(log),
      )
    let claimed = watchContractEvent(
        {
          address:"0x1abD62C4e5c32C10d1d97bcDC69cf9e7590Da1F8",
          abi: abi ,
          eventName:'userClaimed',
          ChainId:97
        },
        (log)=>{  return console.log(log)},
      )
      
      return {sessionStart,claimed}

}