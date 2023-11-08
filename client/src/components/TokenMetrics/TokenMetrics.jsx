import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";



const TokenMetrics = ()=>{

    const data = {
        labels: ['mining 12%', 'fairlaunch', 'staking', 'liquidity'],
        datasets: [
          {
            // label: ['# of Votes','dd','ff','ss'],
            data: [12, 19, 3 , 4],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
      ChartJS.register(ArcElement, Tooltip, Legend);

return (
<>
<div className='container container--center'>

<div className='container container--xxlarge container--center py-20   '>

<div className='border-l-4 border-pink-800 '>

    <h1 className='p-0 py-2 m-0 text-left font-bold  pl-5 '>Twicrypt Token  <span className='text-yellow-500'>Distribution</span> </h1>
    
</div>
    <div className='w-full h-80 flex justify-around relative items-center '>

            <div className='w-1/3 text-left   bg-neutral-950 bg-opacity-20  rounded-md py-10 shadow-lg   '>
                <div className='flex   justify-start gap-2'>

            <ul className=' text-neutral-300'>
               <li className=' text-lg font-extrabold text-pink-500'>Total supply</li>  
               <li className=' text-sm font-bold text-neutral-200'>Mining / VM </li> 
               <li className=' text-sm font-bold text-neutral-200'>Nft staking / Token staking </li> 
               <li className=' text-sm font-bold text-neutral-200'>Fairlaunch </li> 
               <li className=' text-sm font-bold text-neutral-200'>Launch price </li> 
            </ul>

            <ul className='font-bold text-neutral-300'>
               <li className=' text-pink-500'>10 M token</li>  
               <li className=' text-sm font-bold text-neutral-200'>2 M tokens</li> 
               <li className=' text-sm font-bold text-neutral-200'>1 M token </li> 
               <li className=' text-sm font-bold text-neutral-200'>1 M token </li> 
               <li className=' text-sm font-bold text-neutral-200'>{` >= 0.1$`} </li> 
            </ul>
                </div>
                <p className='text-xs font-bold text-yellow-500 pl-4 py-5'>note : launch price will be greater than 0.1$</p>
            </div>
            <div className='w-1/3  h-full'>
<Doughnut data= {data} width={100} height={60} options={{ maintainAspectRatio: false }} />
            </div>
                
    </div>
</div>
</div>

</>
)

}


export default TokenMetrics