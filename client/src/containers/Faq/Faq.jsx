
import AccordionTabs from "../../shared/AccordionTabs/AccordionTabs"
import {Link} from 'react-router-dom'

const Faq = ()=>{


const links = [
    {
        name:'WhitePaper',
        to:'https://docs.twicrypt.com',
    },
    {
        name:'Documentation',
        to:'https://docs.twicrypt.com'
    },
    {
        name:'Token Metrics',
        to:'https://docs.twicrypt.com/twicrypt-token/token-metrics'
    },
    {
        name:'Mining',
        to:'https://docs.twicrypt.com/virtual-mining-auto-p2e/introduction-to-vm'
    },
    {
        name:'Live Support',
        to:'https://t.me/TwicryptSupport'
    },
]



return (
<>
<div className="container container--xxlarge px-2 py-10">

{/* <h1>Faq Page</h1> */}

<div className="w-full flex items-center  justify-center gap-2 sm:gap-5 flex-wrap py-5">
{
    links?.map((link,i)=><Link to={link?.to} target="blank" className='border rounded py-4 font-sans text-xs md:text-sm text-left text-neutral-200 pl-3 w-full sm:w-1/3 bg-neutral-800 hover:bg-neutral-700 border-neutral-600' key={i}> {link?.name} </Link>
    )
}




{/* <AccordionTabs/> */}




</div>
</div>
</>
)

}

export default Faq