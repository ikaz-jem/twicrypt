
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { AiOutlineUserAdd } from 'react-icons/ai'


const RoadMap = () => {

  return (
    <>
      <div className=' w-full h-auto   container  overflow-hidden p-20 ' >

        <VerticalTimeline lineColor='red'   >



          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              borderTop: '4px solid rgb(150, 150, 250 ,.8)',
              background: 'linear-gradient(90deg , rgb(150, 150, 243 ,.1), rgb(250, 0, 100,.1))', color: '#fff'
            }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

            icon={<AiOutlineUserAdd />}
          >


            <h3 className="vertical-timeline-element-title text-left">Twicrypt Preparations</h3>
            <h4 className="vertical-timeline-element-subtitle  text-left text-pink-500">Preparations for Launch</h4>

            <p className='text-neutral-300 text-left text-sm font-light'>
              this present platform is ment to Provide users with necissary informations and to pre-create their accounts on the main Platform , as well as providing earning options and benifits to users wich includes NFTs , staking , refferall system , mining , free passes and gifts coupons cash rewards ect ...
            </p>
            <div className='flex justify-end gap-5'>

              <button className='button'> view More </button>
              <button className='button'> view </button>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            contentStyle={{
              borderTop: '4px solid rgb(150, 150, 243 ,.1)',
              background: 'linear-gradient(90deg , rgb(150, 150, 243 ,.1), rgb(250, 0, 100,.1))', color: '#fff'
            }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<AiOutlineUserAdd />}
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
            date="2010 - 2011"
            contentStyle={{
              borderTop: '4px solid rgb(150, 150, 243 ,.1)',
              background: 'linear-gradient(90deg , rgb(150, 150, 243 ,.1), rgb(250, 0, 100,.1))', color: '#fff'
            }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<AiOutlineUserAdd />}
          >
            <h3 className="vertical-timeline-element-title text-left">mining app</h3>
            <h4 className="vertical-timeline-element-subtitle  text-pink-600 text-left ">twicrypt mining app starts before all</h4>
   

            <p className='text-neutral-300 text-left'>
              twicrypt mining app will allow nft holders to mine tokens before and after launch using a cleaver mechanism for project sustainability and general health , as well as prividing a surious income source 
            </p>
          </VerticalTimelineElement>
        


          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              borderTop: '4px solid rgb(150, 150, 250 ,.8)',
              background: 'linear-gradient(90deg , rgb(150, 150, 243 ,.1), rgb(250, 0, 100,.1))', color: '#fff'
            }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

            icon={<AiOutlineUserAdd />}
          >


            <h3 className="vertical-timeline-element-title text-left">Fairlaunch </h3>
            <h4 className="vertical-timeline-element-subtitle  text-left text-pink-500">twicrypt token fairlaunch</h4>

            <p className='text-neutral-300 text-left text-sm font-light'>
            creating fairlaunch fairly and securely on a third-party launchpad
            </p>
            <div className='flex justify-end gap-5'>

              <button className='button'> view More </button>
              <button className='button'> view </button>
            </div>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              borderTop: '4px solid rgb(150, 150, 250 ,.8)',
              background: 'linear-gradient(90deg , rgb(150, 150, 243 ,.1), rgb(250, 0, 100,.1))', color: '#fff'
            }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

            icon={<AiOutlineUserAdd />}
          >


            <h3 className="vertical-timeline-element-title text-left">Listings , partnerships , sponsorships</h3>
            <h4 className="vertical-timeline-element-subtitle  text-left text-pink-500">working on twicrypt token</h4>

            <p className='text-neutral-300 text-left text-sm font-light'>
           planning starts from the very first moment and never stops!! twicrypt will make use of every ocasion to boost trust , value , project , recongition 
            </p>
            <div className='flex justify-end gap-5'>

              <button className='button'> view More </button>
              <button className='button'> view </button>
            </div>
          </VerticalTimelineElement>




          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              borderTop: '4px solid rgb(150, 150, 250 ,.8)',
              background: 'linear-gradient(90deg , rgb(150, 150, 243 ,.1), rgb(250, 0, 100,.1))', color: '#fff'
            }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

            icon={<AiOutlineUserAdd />}
          >


            <h3 className="vertical-timeline-element-title text-left">mining launchpad </h3>
            <h4 className="vertical-timeline-element-subtitle  text-left text-pink-500">a mining launchpad for project owners</h4>

            <p className='text-neutral-300 text-left text-sm font-light'>
           twicrypt mining launchpad is an automated mining app where any project owner or developer can create his own mining app like twicrypt , it works with the same  twicrypt mining app mechanism and hosted on twicrypt itself , the process is done in a matter of seconds with 1 click  !! 
            </p>
            <div className='flex justify-end gap-5'>

              <button className='button'> view More </button>
              <button className='button'> view </button>
            </div>
          </VerticalTimelineElement>



          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              borderTop: '4px solid rgb(150, 150, 250 ,.8)',
              background: 'linear-gradient(90deg , rgb(150, 150, 243 ,.1), rgb(250, 0, 100,.1))', color: '#fff'
            }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

            icon={<AiOutlineUserAdd />}
          >


            <h3 className="vertical-timeline-element-title text-left">marketPlace launchpad </h3>
            <h4 className="vertical-timeline-element-subtitle  text-left text-pink-500">create you own marketplace like openSea in seconds </h4>

            <p className='text-neutral-300 text-left text-sm font-light'>
            launching a launchpad for marketPlaces , which users / developpers / project owners can create their own marketplace in seconds without need to worry about host , coding or security ! twicrypt does all the coding part ! created marketPlaces will have their own public link and will be shown on twicyprt platform ! get all the cool marketplace features : offers , listing , auction ... 
            </p>
            <div className='flex justify-end gap-5'>

              <button className='button'> view More </button>
              <button className='button'> view </button>
            </div>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              borderTop: '4px solid rgb(150, 150, 250 ,.8)',
              background: 'linear-gradient(90deg , rgb(150, 150, 243 ,.1), rgb(250, 0, 100,.1))', color: '#fff'
            }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

            icon={<AiOutlineUserAdd />}
          >


            <h3 className="vertical-timeline-element-title text-left">Token Sale launchpad </h3>
            <h4 className="vertical-timeline-element-subtitle  text-left text-pink-500">IDOs </h4>

            <p className='text-neutral-300 text-left text-sm font-light'>
            twicypt launchpad will be the best choice for project owners , wich includes numerous features and multiple  and unique sale options , it's almost a free service with our free passes , coupons and gift cards !! 
            </p>
            <div className='flex justify-end gap-5'>

              <button className='button'> view More </button>
              <button className='button'> view </button>
            </div>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              borderTop: '4px solid rgb(150, 150, 250 ,.8)',
              background: 'linear-gradient(90deg , rgb(150, 150, 243 ,.1), rgb(250, 0, 100,.1))', color: '#fff'
            }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

            icon={<AiOutlineUserAdd />}
          >


            <h3 className="vertical-timeline-element-title text-left">Dev support </h3>
            <h4 className="vertical-timeline-element-subtitle  text-left text-pink-500">automations , clones and ready to deploy instances </h4>

            <p className='text-neutral-300 text-left text-sm font-light'>

            a dedicated section for devs, project owners to create / deploy several unique smart contract instances and manage them from their user interface like :  
            tokens , marketplaces , staking dapps , nfts , p2e ... and so much more

            </p>
            <div className='flex justify-end gap-5'>

              <button className='button'> view More </button>
              <button className='button'> view </button>
            </div>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              borderTop: '4px solid rgb(150, 150, 250 ,.8)',
              background: 'linear-gradient(90deg , rgb(150, 150, 243 ,.1), rgb(250, 0, 100,.1))', color: '#fff'
            }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

            icon={<AiOutlineUserAdd />}
          >


            <h3 className="vertical-timeline-element-title text-left">dc email and dc profile </h3>
            <h4 className="vertical-timeline-element-subtitle  text-left text-pink-500">decentralized email and profile</h4>

            <p className='text-neutral-300 text-left text-sm font-light'>

a decentralized user profile associated to the user address and a decentralized email , where user stats appears can follow others , chat with friends , set nfts as your profile pic , send emails with your wallet address , securely and privately ! 

            </p>
            <div className='flex justify-end gap-5'>

              <button className='button'> view More </button>
              <button className='button'> view </button>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              borderTop: '4px solid rgb(150, 150, 250 ,.8)',
              background: 'linear-gradient(90deg , rgb(150, 150, 243 ,.1), rgb(250, 0, 100,.1))', color: '#fff'
            }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

            icon={<AiOutlineUserAdd />}
          >


            <h3 className="vertical-timeline-element-title text-left">swap </h3>
            <h4 className="vertical-timeline-element-subtitle  text-left text-pink-500">a quick swap in your user interface</h4>

            <p className='text-neutral-300 text-left text-sm font-light'>
twicrypt swap will be included in your same dashboard to quick swap and exchange tokens in numerous chains

            </p>
            <div className='flex justify-end gap-5'>

              <button className='button'> view More </button>
              <button className='button'> view </button>
            </div>
          </VerticalTimelineElement>

































          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              borderTop: '4px solid rgb(150, 150, 250 ,.8)',
              background: 'linear-gradient(90deg , rgb(150, 150, 243 ,.1), rgb(250, 0, 100,.1))', color: '#fff'
            }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

            icon={<AiOutlineUserAdd />}
          >


            <h3 className="vertical-timeline-element-title text-left">twictyp Library for React js and Next Js </h3>
            <h4 className="vertical-timeline-element-subtitle  text-left text-pink-500">a web3 library for devs </h4>

            <p className='text-neutral-300 text-left text-sm font-light'>
a libray for devs wich implements best practices and simplifies web3 and contract interactions , includes the most used interfaces , converters ect ... 

            </p>
            <div className='flex justify-end gap-5'>

              <button className='button'> view More </button>
              <button className='button'> view </button>
            </div>
          </VerticalTimelineElement>

          {/* <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<AiOutlineUserAdd />}
  /> */}
        </VerticalTimeline>


      </div>
    </>

  )

}


export default RoadMap