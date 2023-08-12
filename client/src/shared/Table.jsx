import './Table.css'


import { useState } from 'react'

// import { Tooltip } from 'react-tooltip'
import { Link } from 'react-router-dom'
// import CoinModal from './coinModal'
import { useLocation } from 'react-router-dom';



//icones 
import { BiUser } from 'react-icons/bi';
import { GoBook } from 'react-icons/go'
import { AiOutlineSecurityScan } from 'react-icons/ai'
import { FaStreetView } from 'react-icons/fa'
import { GoVerified } from 'react-icons/go'
import { CryptoPlaceholder } from './CryptoPlaceholder';
import HashLoader from "react-spinners/HashLoader";



export const Table = () => {

	

	const data = CryptoPlaceholder







	const renderData= (data) => {

		return data.map((coin, index) => {
			return <tr key={coin.uuid} className=" hover:bg-gray-800 m-10 transition-all shadow-sm  ">
				<td className="pl-4 py-1  ">
					<img className="rounded-full h-7 w-7  object-cover" src={coin.iconUrl} alt="unsplash image" />
				</td >
				<td className="p-0 pl-0  ">
					
						<Link to={ `./${coin.uuid}`} >
							{coin.name}
						</Link>
				
					
				</td>
				<td className="py-0  ">
					{coin.change > 0 ? <span className="text-green-500 
">{'+' + coin.change + "%"}</span> : <span className="text-red-500">{coin.change + "%"}</span>}
				</td>
				<td className="p-0 ">
					{Math.floor(coin.price) + "$"}
				</td>
				<td className="p-0">
					<span className="bg-green-200 text-gray-500 rounded-2xl px-2">available</span>
				</td>
				<td className="p-0 ">
					<span className='flex justify-start gap-1'>
						<FaStreetView className='text-2xl cursor-pointer' data-tooltip-id="Coins-tooltip"
							data-tooltip-content={'Quick View'}
							data-tooltip-variant={'light'}
							 />
						<AiOutlineSecurityScan className='text-2xl cursor-pointer' data-tooltip-id="Coins-tooltip"
							data-tooltip-content={'Has KYC audit Dox and audit'}
							data-tooltip-variant={'light'} />

						<GoBook className='text-2xl cursor-pointer' data-tooltip-id="Coins-tooltip"
							data-tooltip-content={'Has audit'}
							data-tooltip-variant={'light'} />

						<BiUser className='text-2xl cursor-pointer' data-tooltip-id="Coins-tooltip"
							data-tooltip-content={'Has KYC audit Dox and audit'}
							data-tooltip-html={"<div><h2>passed Audit</h2><ul><li>This is cool</li><li>This too</li></ul></div>"}
							data-tooltip-variant={'light'}
						/>
						{
							coin.isTrusted === 'true' ? <GoVerified className='text-xl text-blue-400 cursor-pointer' data-tooltip-id="Coins-tooltip"
								data-tooltip-content={'Trusted'}
								data-tooltip-variant={'light'}
							/> : null
						}
					</span>
					{/*<LikeButton productIndex={coin.uuid} className='block inline'/>*/}
				</td>
				<td className="p-0">
					<span className="bg-green-200 text-gray-500 rounded-2xl px-2  cursor-pointer shadow-md text-center">Upvote 1531</span>

				</td >
			</tr>
		})
	}


	return (
		<>
		{ !data ? 
			<div className='flex items-center justify-center w-[100%] h-[50%] '>
				<HashLoader
				color="#ffffff"
				loading={true}
				
				size={50}
				aria-label="Loading Spinner"
				data-testid="loader"
				/>	
			</div> :
			<table className="table  text-gray-400 border-separate  text-sm border-neutral-700 w-full flex justify-center  shrink ">

				<thead className=" text-gray-500  shadow-sm items-left  ">
					<tr className="text-left m-5 p-10 " >
						<th className="py-0  "></th>
						<th className="py-0 ">Name</th>
						<th className="py-2 ">Change</th>
						<th className="py-2 ">Price</th>
						<th className="py-2 ">Status</th>
						<th className="py-2 ">Action</th>
						<th className="py-2 ">Vote</th>
					</tr>
					
				</thead>

		
				 
				<tbody>
{				renderData(data) 
}	  		</tbody>
				

				<tfoot>
					{/* <Tooltip id='Coins-tooltip' className=''

/> */}
					{/* <CoinModal
						show={showCoinModal}
						onCloseCoinModal={() => setShowCoinModal({ ...showCoinModal, true: false })}
					coinData={data[showCoinModal.index]} /> */}
				</tfoot>
			</table>
				}
		</>
	)
}





