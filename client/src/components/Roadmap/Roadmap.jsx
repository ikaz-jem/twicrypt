
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { IoMdDoneAll } from "react-icons/io";
import { IoMdTime } from "react-icons/io";


const RoadMap = () => {

  return (
    <>
      <div className=' w-full h-auto  overflow-hidden  ' >

        <VerticalTimeline lineColor='red' className=''  >



          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              borderTop: '4px solid rgb(150, 150, 250 ,.8)',
              background: 'linear-gradient(90deg , rgb(150, 150, 243 ,.1), rgb(250, 0, 100,.1))', color: '#fff'
            }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2023"
            iconStyle={{ background: 'rgb(0, 200, 50)', color: '#fff' }}

            icon={<IoMdDoneAll />}
          >


            <h3 className="vertical-timeline-element-title text-left">Twicrypt Preparations</h3>
            <h4 className="vertical-timeline-element-subtitle  text-left text-pink-500">Preparing for Launch</h4>

            <p className='text-neutral-300 text-left text-sm font-light'>
            This present platform is meant to provide users with necessary information and to pre-create their accounts on the main platform. It also offers earning options and benefits to users, including NFTs, staking, referral systems, mining, free passes, gift coupons, cash rewards, etc.            </p>
            <div className='flex justify-end gap-5'>

              {/* <button className='button'> view More </button>
              <button className='button'> view </button> */}
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023"
            contentStyle={{
              borderTop: '4px solid rgb(150, 150, 243 ,.1)',
              background: 'linear-gradient(90deg , rgb(150, 150, 243 ,.1), rgb(250, 0, 100,.1))', color: '#fff'
            }}
            iconStyle={{ background: 'rgb(0, 200, 50)', color: '#fff' }}
            icon={<IoMdDoneAll />}
          >
            <h3 className="vertical-timeline-element-title text-left">twictypt Nfts Minting</h3>
            <h4 className="vertical-timeline-element-subtitle  text-pink-600 text-left ">twicrypt nfts and its importance & use case</h4>
            <div className="flex justify-start items-start gap-1 m-0 p-0  w-full flex-wrap" >

              
              <p className=" text-white p-0 m-0 relative bg-green-500 px-5 rounded-xl   ">
                in-nft cash
              </p>
              <p className=" text-white p-0 m-0 relative bg-pink-500 px-5 rounded-xl">
                mining
              </p>
              <p className=" text-white p-0 m-0 relative bg-[#4D3C77] px-5 rounded-xl">
                pass
              </p>

            </div>

            <p className='text-neutral-300 text-left'>
            launch twicrypt mint app and minitng starts , twicrypt nft is an art that combines numerous use cases , it includes a cash reward from 10$ to 1BTC , reward is claimable from twicrypt app , this nft along with the included cash reward will allow holder to mine twicrypt tokens before fairlaunch using twicrypt mining app , as well as its itself an art it can be solde on twicrypt marketplace or openSea or any other marketPlace
            </p>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023"
            contentStyle={{
              borderTop: '4px solid rgb(150, 150, 243 ,.1)',
              background: 'linear-gradient(90deg , rgb(150, 150, 243 ,.1), rgb(250, 0, 100,.1))', color: '#fff'
            }}
            iconStyle={{ background: 'rgb(0, 200, 50)', color: '#fff' }}
            icon={<IoMdDoneAll />}
          >
            <h3 className="vertical-timeline-element-title text-left">Mining App</h3>
            <h4 className="vertical-timeline-element-subtitle  text-pink-600 text-left ">The Twicrypt Mining App takes the lead:</h4>
   

            <ul className='text-neutral-300 text-left'>
<li className='text-neutral-300 text-left'>1. The Twicrypt Mining App initiates before all.</li>
<li className='text-neutral-300 text-left'>2. It enables NFT holders to mine tokens both before and after launch.</li>
<li className='text-neutral-300 text-left'>3. Leveraging a clever mechanism, it ensures project sustainability and overall health.</li>
<li className='text-neutral-300 text-left'>4. Additionally, it provides a secure income source.</li>

            </ul>
          </VerticalTimelineElement>
        


          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              borderTop: '4px solid rgb(150, 150, 250 ,.8)',
              background: 'linear-gradient(90deg , rgb(150, 150, 243 ,.1), rgb(250, 0, 100,.1))', color: '#fff'
            }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2024"
            iconStyle={{ background: 'rgb(0, 200, 50)', color: '#fff' }}

            icon={<IoMdDoneAll />}
          >


            <h3 className="vertical-timeline-element-title text-left">Fair Launch </h3>
            <h4 className="vertical-timeline-element-subtitle  text-left text-pink-500">Embarking on the Twicrypt Token Fair Launch journey:</h4>
              <ul className='text-neutral-300 text-left'>
  <li className='text-neutral-300 text-left'>- Ensuring fairness and security in the creation of the Twicrypt Token.</li>
  <li className='text-neutral-300 text-left'>- Utilizing a third-party launchpad for a transparent and equitable fair launch process.</li>
              </ul>

            <div className='flex justify-end gap-5'>
{/* 
              <button className='button'> view More </button>
              <button className='button'> view </button> */}
            </div>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              borderTop: '4px solid rgb(150, 150, 250 ,.8)',
              background: 'linear-gradient(90deg , rgb(150, 150, 243 ,.1), rgb(250, 0, 100,.1))', color: '#fff'
            }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2024"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

            icon={<IoMdTime />}
          >


            <h3 className="vertical-timeline-element-title text-left">Listings , Partnerships , Sponsorships</h3>
            <h4 className="vertical-timeline-element-subtitle  text-left text-pink-500">Navigating the Twicrypt Token journey</h4>

            <ul className='text-neutral-300 text-left'>
  <li className='text-neutral-300 text-left'>- Continuous planning from the inception.</li>
  <li className='text-neutral-300 text-left'>- The planning process starts from the very first moment and never stops.</li>
  <li className='text-neutral-300 text-left'>- Twicrypt capitalizes on every occasion to enhance trust, value, project, and recognition.</li>
              </ul>


            <div className='flex justify-end gap-5'>

              {/* <button className='button'> view More </button>
              <button className='button'> view </button> */}
            </div>
          </VerticalTimelineElement>




          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              borderTop: '4px solid rgb(150, 150, 250 ,.8)',
              background: 'linear-gradient(90deg , rgb(150, 150, 243 ,.1), rgb(250, 0, 100,.1))', color: '#fff'
            }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2024"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

            icon={<IoMdTime />}
          >


            <h3 className="vertical-timeline-element-title text-left">Mining Launchpad</h3>
            <h4 className="vertical-timeline-element-subtitle  text-left text-pink-500">Empowering Project Owners with a Specialized Mining Launchpad</h4>
           
            <ul className='text-neutral-300 text-left'>
  <li className='text-neutral-300 text-left'>   - Tailored for project owners and developers.</li>
  <li className='text-neutral-300 text-left'>   - An automated mining app creation platform, mirroring Twicrypt's mechanism.</li>
  <li className='text-neutral-300 text-left'>   - Hosted on Twicrypt, it allows quick and easy creation with just one click, completing the process within seconds.</li>
              </ul>


            <div className='flex justify-end gap-5'>

              {/* <button className='button'> view More </button>
              <button className='button'> view </button> */}
            </div>
          </VerticalTimelineElement>



          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              borderTop: '4px solid rgb(150, 150, 250 ,.8)',
              background: 'linear-gradient(90deg , rgb(150, 150, 243 ,.1), rgb(250, 0, 100,.1))', color: '#fff'
            }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2024"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

            icon={<IoMdTime />}
          >


            <h3 className="vertical-timeline-element-title text-left">Marketplace Launchpad</h3>
            <h4 className="vertical-timeline-element-subtitle  text-left text-pink-500">Revolutionizing Marketplaces with Twicrypt Launchpad</h4>

            <ul className='text-neutral-300 text-left'>
  <li className='text-neutral-300 text-left'>   - Effortlessly create a marketplace similar to OpenSea in seconds.</li>
  <li className='text-neutral-300 text-left'>   - Launching a dedicated launchpad for marketplaces on Twicrypt.</li>
  <li className='text-neutral-300 text-left'>   - Users, developers, and project owners can swiftly create their own marketplace without concerns about hosting, coding, or security.</li>
  <li className='text-neutral-300 text-left'>   - Twicrypt handles all the coding aspects.</li>
  <li className='text-neutral-300 text-left'>   - Created marketplaces get unique public links and visibility on the Twicrypt platform.</li>
  <li className='text-neutral-300 text-left'>   - Enjoy a suite of marketplace features, including offers, listings, auctions, and more.</li>
              </ul>
     

            <div className='flex justify-end gap-5'>
{/* 
              <button className='button'> view More </button>
              <button className='button'> view </button> */}
            </div>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              borderTop: '4px solid rgb(150, 150, 250 ,.8)',
              background: 'linear-gradient(90deg , rgb(150, 150, 243 ,.1), rgb(250, 0, 100,.1))', color: '#fff'
            }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2024"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

            icon={<IoMdTime />}
          >


            <h3 className="vertical-timeline-element-title text-left">Token Sale Launchpad</h3>
            <h4 className="vertical-timeline-element-subtitle  text-left text-pink-500">Empowering Token Sales and IDOs with Twicrypt Launchpad</h4>

            <ul className='text-neutral-300 text-left'>
  <li className='text-neutral-300 text-left'>   - Elevate your project with Twicrypt's premier launchpad.</li>
  <li className='text-neutral-300 text-left'>   - A top choice for project owners, offering numerous features and diverse sale options.</li>
  <li className='text-neutral-300 text-left'>   - Avail almost free service through our complimentary passes, coupons, and gift cards.</li>

              </ul>
       
            <div className='flex justify-end gap-5'>
{/* 
              <button className='button'> view More </button>
              <button className='button'> view </button> */}
            </div>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              borderTop: '4px solid rgb(150, 150, 250 ,.8)',
              background: 'linear-gradient(90deg , rgb(150, 150, 243 ,.1), rgb(250, 0, 100,.1))', color: '#fff'
            }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2024"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

            icon={<IoMdTime />}
          >


            <h3 className="vertical-timeline-element-title text-left">Dev Support</h3>
            <h4 className="vertical-timeline-element-subtitle  text-left text-pink-500">Empowering Developers with Automations, Clones, and Ready-to-Deploy Instances</h4>

    
            <ul className='text-neutral-300 text-left'>
  <li className='text-neutral-300 text-left'>   - Tailored for developers and project owners.</li>
  <li className='text-neutral-300 text-left'>   - Open APIs for web3 development.</li>
  <li className='text-neutral-300 text-left'>   - Create and deploy unique smart contract instances effortlessly.</li>
  <li className='text-neutral-300 text-left'>   - Manage various elements such as tokens, marketplaces, staking dApps, NFTs, P2E, and more—all from a user-friendly interface.</li>
              </ul>

            <div className='flex justify-end gap-5'>

              {/* <button className='button'> view More </button>
              <button className='button'> view </button> */}
            </div>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              borderTop: '4px solid rgb(150, 150, 250 ,.8)',
              background: 'linear-gradient(90deg , rgb(150, 150, 243 ,.1), rgb(250, 0, 100,.1))', color: '#fff'
            }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2024"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

            icon={<IoMdTime />}
          >


            <h3 className="vertical-timeline-element-title text-left">DC Email and DC Profile</h3>
            <h4 className="vertical-timeline-element-subtitle  text-left text-pink-500">Revolutionizing User Experience with Decentralized Email and Profile</h4>

            <ul className='text-neutral-300 text-left'>
  <li className='text-neutral-300 text-left'>   - Linked to the user's address for enhanced security and privacy.</li>
  <li className='text-neutral-300 text-left'>   - User stats displayed, enabling following others, chatting with friends, and setting NFTs as your profile picture.</li>
  <li className='text-neutral-300 text-left'>   - Elevating communication with a decentralized email system.</li>
  <li className='text-neutral-300 text-left'>   - Users can securely and privately send emails, incorporating wallet addresses for seamless transactions.</li>
              </ul>

            <div className='flex justify-end gap-5'>
{/* 
              <button className='button'> view More </button>
              <button className='button'> view </button> */}
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              borderTop: '4px solid rgb(150, 150, 250 ,.8)',
              background: 'linear-gradient(90deg , rgb(150, 150, 243 ,.1), rgb(250, 0, 100,.1))', color: '#fff'
            }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            ddate="2024"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

            icon={<IoMdTime />}
          >


            <h3 className="vertical-timeline-element-title text-left">Quick Swap with Twicrypt </h3>
            <h4 className="vertical-timeline-element-subtitle  text-left text-pink-500">Effortless Token Exchange at Your Fingertips</h4>
            <ul className='text-neutral-300 text-left'>
  <li className='text-neutral-300 text-left'>   - Enjoy a quick swap feature seamlessly integrated into your dashboard.</li>
  <li className='text-neutral-300 text-left'>   - Exchange tokens swiftly across multiple chains.</li>
              </ul>


            <div className='flex justify-end gap-5'>

              {/* <button className='button'> view More </button>
              <button className='button'> view </button> */}
            </div>
          </VerticalTimelineElement>

































          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              borderTop: '4px solid rgb(150, 150, 250 ,.8)',
              background: 'linear-gradient(90deg , rgb(150, 150, 243 ,.1), rgb(250, 0, 100,.1))', color: '#fff'
            }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            ddate="2024"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

            icon={<IoMdTime />}
          >


            <h3 className="vertical-timeline-element-title text-left">Twicrypt Library for React.js and Next.js </h3>
            <h4 className="vertical-timeline-element-subtitle  text-left text-pink-500">Empowering Developers with Web3 Excellence</h4>

            <ul className='text-neutral-300 text-left'>
  <li className='text-neutral-300 text-left'>   - Tailored for React.js and Next.js frameworks.</li>
  <li className='text-neutral-300 text-left'>   - A comprehensive library implementing best practices, simplifying web3, and streamlining contract interactions.</li>
  <li className='text-neutral-300 text-left'>   - Inclusive of widely used interfaces, converters, and more for enhanced development efficiency.</li>
              </ul>


            <div className='flex justify-end gap-5'>

              <button className='button'> view More </button>
              <button className='button'> view </button>
            </div>
          </VerticalTimelineElement>

          {/* <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<IoMdTime />}
  /> */}
        </VerticalTimeline>


      </div>
    </>

  )

}


export default RoadMap