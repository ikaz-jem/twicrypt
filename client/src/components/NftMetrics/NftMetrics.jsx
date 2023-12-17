import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";



const NftMetrics = () => {



  const titles = ['nft holdings', 'mining', 'cash reward', 'token sale', 'referral program', 'gift cards']
  const nftTitles = ['cash reward', 'available units']
  const nftRows = [
    {
      reward: '100 BNB',
      unit: '1 Unit'
    },
    {
      reward: '50 BNB',
      unit: '2 Unit'
    },
    {
      reward: '4 BNB',
      unit: '25 Unit'
    },
    {
      reward:'2 BNB',
      unit: '25 Unit'
    },
    {
      reward: '1 BNB',
      unit: '50 Unit'
    },
  ]


  const rows = [
    {
      holdings: 'No holdings',
      mining: '❌',
      cashReward: '❌',
      tokenSale: '✔️',
      referral: '❌',
      gift: '❌',
    },
    {
      holdings: '1+ nft',
      mining: '✔️',
      cashReward: '✔️',
      tokenSale: '✔️',
      referral: '✔️',
      gift: '✔️',
    },


  ]


  const RewardAllocation = () => {

    return (

      <>
        <h5 className='text-yellow-500 font-bold text-left p-0 m-0 text-sm'>Twicrypt Nft utility and use Cases </h5>
        <table className="w-full shadow-lg">
          <thead className=''>
            <tr className="text-xs font-semibold   text-left text-neutral-300 bg-neutral-600 uppercase  border-gray-600 ">

              {
                titles?.map((title, i) =><th className="px-0 text-xs text-center py-1" key={'d'+i} >{title}</th>
                  
              
                )
              }
            </tr>
          </thead>
          <tbody className="bg-neutral-800 ">
            {

              rows?.map((row, index) =>
                <tr className="text-gray-300 text-xs " key={'c'+index} >
                  <td className="px-4 py-1 border border-neutral-700 ">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="font-semibold">{row?.holdings}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-neutral-700 text-md font-semibold">{row?.mining}</td>
                  <td className="px-4 py-1 border border-neutral-700 text-xs">{row?.cashReward}</td>
                  <td className="px-4 py-1 border border-neutral-700 text-xs">{row?.tokenSale}</td>
                  <td className="px-4 py-1 border border-neutral-700 text-xs">{row?.referral}</td>
                  <td className="px-4 py-1 border border-neutral-700 text-sm">{row?.gift}</td>
                </tr>)}

          </tbody>
        </table>

      </>
    )

  }

  const NftRewardAllocations = () => {

    return (

      <>



        <h5 className='text-yellow-500 font-bold text-left text-sm p-0 m-0'>Twicrypt cash reward allocation </h5>
        <table className="w-full shadow-lg ">
          <thead className='th'>
            <tr className="text-xs font-semibold   text-left text-neutral-300 bg-neutral-600 uppercase  border-gray-600 ">

              {
                nftTitles?.map((title, i) => 
                <th className="px-4 py-1" key={'b'+i} >{title}</th>
                
                )
              }
            </tr>
          </thead>
          <tbody className="bg-neutral-800 ">
            {

              nftRows?.map((row, index) =>
                <tr className="text-gray-300 text-xs " key={'t-'+index} >
                  <td className="px-4 py-1 border border-neutral-700 ">
                    <div className="flex items-center  text-sm">
                      <div>
                        <p className="font-semibold">{row?.reward}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-1 border border-neutral-700 text-md  text-left font-semibold">{row?.unit}</td>
                </tr>)}

          </tbody>
        </table>

      </>
    )

  }





  return (
    <>
      <div className='container container--xxxlarge container--center py-20  light-ball pb-40 '>

        <div className='container container--xxlarge container--center py-20 '>


          <h1 className='p-0 pb-10 m-0 text-center font-bold'>Twicrypt Nft Metrics <span className='text-yellow-500'>and Rewards </span> </h1>
          <p className='p-0 m-0 text-center font-bold'>mint  <span className='text-yellow-500 p-0 m-0'>win cash 💲 </span> </p>



          <div className='w-full h-atuto flex justify-around relative items-center flex-wrap flex-col md:flex-row'>


            <div className=' flex justify-start items-start h-full flex-col gap-0 w-auto'>

              <RewardAllocation />
              <NftRewardAllocations />
            </div>

            <div className=' text-left  bg-neutral-950 bg-opacity-20  rounded-md py-10 shadow-lg '>

                <div className='flex   justify-start gap-2'>
                  <ul className=' text-neutral-300'>
                    <li className=' text-lg font-extrabold text-pink-500'>Total/Max supply</li>
                    <li className=' text-sm font-bold text-neutral-200'>max nft per wallet  </li>
                    <li className=' text-sm font-bold text-neutral-200'>max mint per transaction </li>
                    <li className=' text-sm font-bold text-neutral-200'>Total included rewards </li>
                    <li className=' text-sm font-bold text-neutral-200'>Total planted nfts (includes a cash reward) </li>
                  </ul>

                  <ul className='font-bold text-neutral-300'>
                    <li className=' text-pink-500'>20 k Nft token</li>
                    <li className=' text-sm font-bold text-neutral-200'>50</li >
                    <li className=' text-sm font-bold text-neutral-200'>10 nfts per tx </li>
                    <li className=' text-sm font-bold text-neutral-200'>100K $ + </li>
                    <li className=' text-sm font-bold text-neutral-200'>100+ nft</li>
                  </ul>
                </div>

              </div>



          </div >

        </div>
      </div>

    </>
  )

}


export default NftMetrics