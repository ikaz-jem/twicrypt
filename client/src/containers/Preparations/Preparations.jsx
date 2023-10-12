
import RoadMap from "../../components/Roadmap/Roadmap"
import Tabs from "./Tabs"
import axios from 'axios'
const Preparations = ()=> {

// const tokenId = "6344685153:AAES_WcrCiP-v3KyjlGejYFbYrDDwOxN3Go";
// const url = `https://api.telegram.org/bot${tokenId}/answerInlineQuery`

// const test =async ()=>{
// const res = await axios.get(url,
//     {
//         chat_id:"@the_great_pepe",
//     }
//     ).then((res)=>console.log(res.data))

// }


// const handleIncomingMessage = async (message) => {
//     // Check if the message is from the group and matches a specific pattern or command.
//         // Send a response to the group chat.
//         await axios.post(url, {
//             inline_query_id:"/baba",
//             results:['hell'],
          

//         }).then((res)=>console.log(res.data));
     
// };

// handleIncomingMessage()
// // test()  
    return (
    <>
<div className='  w-full h-auto container ' >
    <div className="color-ball w-full h-auto">
        <div className="flex justify-center items-center">
<h1>
    twicrypt prepatations and roadmap
</h1>
<h5> 2023/2024</h5>
        </div>
        
        <RoadMap/></div>

</div>
    </>
    
    )
    
    }
    
    
    export default Preparations