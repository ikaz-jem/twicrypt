import { createSlice } from "@reduxjs/toolkit";



const stats = {
    result:{
    
            total_mined: 0,
         total_miners: 0,
         nft_minng_rate:0  ,
         bank_mining_rate:0 ,
         max_mining_time:0,
         boost_duration:0,
         claim_wait:0,
         couldown_time:0,
         min_funds_to_withdraw:0,
          claim_enabled :false,
         min_claim_token_holding:0,
         min_claim_nft_holding:0,
         min_nft_for_mining: 0,
         boost_fees:0,
         claim_fees_percent:0,
         maxclaim_amount:0,
             maxWorkers :0
    }}

const session = {
    result:{
        bankData:[],
        boostEndTime:0,
        claimEnable:false,
        miningStarted:false,
        nftBalance:0,
        staked:[],
        userData:{earnedRewards:0}
    }
}


export const MiningSlice = createSlice({
    name:'mining',
    initialState:{
        user:null,
        data:null,
        session:session,
        page:'',
        transaction:null,
        platformInfos:null,
        banks:null,
        stats:stats
    },
    reducers:{
        setData:(state,action)=>{
            state.data = action.payload
        },
        setMiningPage:(state,action)=>{
            state.page = action.payload
        },
        setMiningSession:(state,action)=> {
            state.session = action.payload
        },
        setTransaction:(state,action)=> {
            state.transaction=action.payload    
            },
            setMiningPlatformInfos:(state,action)=>{
                state.stats = action.payload
            },
            setBanks :(state,action)=>{
                state.banks = action.payload
            }

    }

})



export const {
    setData,
    setMiningPage,
    setMiningSession,
    setTransaction,
    setMiningPlatformInfos,
    setBanks
} = MiningSlice.actions




/*



[object Object][object Object]

session

*/