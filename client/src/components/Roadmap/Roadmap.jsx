
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import {AiOutlineUserAdd} from 'react-icons/ai'


const RoadMap = ()=> {

    return (
    <>
<div className=' w-full h-auto   container  overflow-hidden p-20 ' >
    
<VerticalTimeline lineColor='red'   >


    
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ 
        borderTop: '4px solid rgb(150, 150, 250 ,.8)',
        background: 'linear-gradient(90deg , rgb(150, 150, 243 ,.1), rgb(250, 0, 100,.1))', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  
    icon={<AiOutlineUserAdd />}
  >


    <h3 className="vertical-timeline-element-title text-left">Twicrypt Preparations</h3>
    <h4 className="vertical-timeline-element-subtitle  text-left text-pink-500">Preparations for Launch</h4>
    
    <div className="flex justify-start items-start gap-1 m-0 p-0  w-full flex-wrap" >

<p className=" text-white p-0 m-0 relative0 px-2 ">
benifits :
</p>
<p className=" text-white p-0 m-0 relative bg-green-500 px-5 rounded-xl">
    Pre-register
</p>
<p className=" text-white p-0 m-0 relative bg-pink-500 px-5 rounded-xl">
    rewards
</p>
<p className=" text-white p-0 m-0 relative bg-[#4D3C77] px-5 rounded-xl">
    airdrops
</p>

</div>

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
        background: 'linear-gradient(90deg , rgb(150, 150, 243 ,.1), rgb(250, 0, 100,.1))', color: '#fff' }}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<AiOutlineUserAdd />}
  >
    <h3 className="vertical-timeline-element-title text-left">Minting , Mining , Staking </h3>
    <h4 className="vertical-timeline-element-subtitle  text-pink-600 text-left ">Starting Twicrypt Services and free Earning Options</h4>
       <div className="flex justify-start items-start gap-1 m-0 p-0  w-full flex-wrap" >

<p className=" text-white p-0 m-0 relative0 px-2  ">
benifits :
</p>
<p className=" text-white p-0 m-0 relative bg-green-500 px-5 rounded-xl ">
    Pre-register
</p>
<p className=" text-white p-0 m-0 relative bg-pink-500 px-5 rounded-xl">
    rewards
</p>
<p className=" text-white p-0 m-0 relative bg-[#4D3C77] px-5 rounded-xl">
    airdrops
</p>

</div>
   
<p className='text-neutral-300 text-left'>
     Mining Twicryp will start as an early stage to get twicrypt Tokens before private Sale , users will be able to mint twicrypt NFts and stake them or use them to mine Tokens 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    contentStyle={{ 
        borderTop: '4px solid rgb(150, 150, 243 ,.5)',
        background: 'linear-gradient(90deg , rgb(150, 150, 243 ,.1), rgb(250, 0, 100,.1))', color: '#fff' }}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    animate={true}
    icon={<AiOutlineUserAdd />}
  >
  <h3 className="vertical-timeline-element-title text-black">Marketing and Final Preparations </h3>
    <h4 className="vertical-timeline-element-subtitle text-black ">Final Preparations To start sale Stages</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2006 - 2008"
    contentStyle={{ 
        borderTop: '4px solid rgb(150, 150, 243 ,.5)',
        background: 'linear-gradient(90deg , rgb(150, 150, 243 ,.1), rgb(250, 0, 100,.1))', color: '#fff' }}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<AiOutlineUserAdd />}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
 contentStyle={{ 
        borderTop: '4px solid rgb(150, 150, 243 ,.1)',
        background: 'linear-gradient(90deg , rgb(150, 150, 243 ,.1), rgb(250, 0, 100,.1))', color: '#fff' }}
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<AiOutlineUserAdd />}
  >
    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>
      Strategy, Social Media
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2012"
     contentStyle={{ 
        borderTop: '4px solid rgb(150, 150, 243 ,.5)',
        background: 'linear-gradient(90deg , rgb(150, 150, 243 ,.1), rgb(250, 0, 100,.1))', color: '#fff' }}
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<AiOutlineUserAdd />}
  >
    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    contentStyle={{ 
        borderTop: '4px solid rgb(150, 150, 243 ,.5)',
        background: 'linear-gradient(90deg , rgb(150, 150, 243 ,.1), rgb(250, 0, 100,.1))', color: '#fff' }}
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<AiOutlineUserAdd />}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
    </p>
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