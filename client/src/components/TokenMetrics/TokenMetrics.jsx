import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";



const TokenMetrics = ()=>{

    const data = {
        labels: [ 'fairlaunch','tMining VM', 'token Staking','nft Staking','development','Team','Listings'],
        datasets: [
          {
            // label: ['# of Votes','dd','ff','ss'],
            data: [80, 10, 2.5 , 2.5,2,0.5,2.5],
            backgroundColor: [
              'rgba(0, 254, 10, 0.5)',
              'rgba(255, 220, 0, 0.8)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(0, 255, 255, 0.5)',
              'rgba(240, 50, 0, 0.5)',
            ],
            borderColor: [
              'rgba(50, 254, 10, 0.8)',
              'rgba(255, 240, 10, 0.8)',
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(0, 255, 255, 0.8)',
              'rgba(240, 50, 0, 0.8)',
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
               <li className=' text-sm font-bold text-neutral-200'>Nft staking</li> 
               <li className=' text-sm font-bold text-neutral-200'> Token staking</li> 
               <li className=' text-sm font-bold text-neutral-200'>Listings </li> 
               <li className=' text-sm font-bold text-neutral-200'>Development </li> 
               <li className=' text-sm font-bold text-neutral-200'>Team </li> 
            </ul>

            <ul className='font-bold text-neutral-300'>
               <li className=' text-pink-500'>100 B token</li>  
               <li className=' text-sm font-bold text-neutral-200'>10 B tokens</li> 
               <li className=' text-sm font-bold text-neutral-200'>2.5 B token </li> 
               <li className=' text-sm font-bold text-neutral-200'>2.5 B token </li> 
               <li className=' text-sm font-bold text-neutral-200'>2.5 B </li> 
               <li className=' text-sm font-bold text-neutral-200'>2 B </li> 
               <li className=' text-sm font-bold text-neutral-200'>0.5 B </li> 
            </ul>
                </div>
                <p className='text-xs font-bold text-yellow-500 pl-4 py-5'>note : launch price will be greater than  0.0000001$</p>
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