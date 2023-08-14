
import { useMount } from "../../../../hooks/useMount"
import { FaTelegram } from 'react-icons/fa'
import './carousel.css'
import { Link } from "react-router-dom"
const CarouselDemo = ({ carouselData }) => {


    useMount()



    const SvgTitle = () => {
        return (
            <>
                <div className="container-xxxxlg z-0">
                    <h1 className="hero_title">TwiCrypt</h1>
                    <h4 className=" heading bg-dark">1# All in one Decentralized Application ... </h4>
                </div>
            </>
        )
    }


    const placeholder = { name: '', image: 'https://picsum.photos/500/300', title: 'safemoon', icon: FaTelegram }




    return (
        <>
            <div className="glide z-0" data-glide-el="track">
                <div className="  " data-glide-el="track">
                    {/* {hero mapping carouzel items } */}
                    <ul className="frames__list glide__slides" >
                        <li className="frames__item glide__slide" >
                            <div dataref="slidereveal[el]">
                                <div className="frame" dataref="hero[el]">
                                    <div className="frame-front">
                                        <img src={placeholder.image} alt="" className="carousel-img" />
                                        <div className="flex items-center justify-center">
                                            <a href={placeholder.link} className="flex items-center justify-center gap-2 w-[80%] h-[60%]">
                                                <p> {<placeholder.icon />}</p>
                                                <p>{placeholder.title}</p>
                                            </a>
                                        </div>
                                    </div>
                                    {/* right side */}
                                    <div> </div>
                                    {/* left side */}
                                    <div> </div>

                                </div>
                            </div>
                        </li>

                        <li className="frames__item glide__slide" >
                            <div dataref="slidereveal[el]">
                                <div className="frame" dataref="hero[el]">

                                    <div className="frame-front">
                                        <img src={carouselData.image ? carouselData.image : placeholder.image} alt="your Brand image" className="carousel-img" />

                                        <div className="flex items-center justify-center">

                                        <div className="flex items-center justify-center">

<Link to={carouselData.link ? carouselData.link : placeholder.link} target="blank" className="flex items-center justify-center gap-2 w-[80%] h-[60%]">
    {carouselData.icon ? <img src={carouselData.icon} alt="icon" className="w-5 h-5" /> : <p> {<placeholder.icon />}</p>}
    <p className='text-gray-500'>{carouselData.name ? carouselData.name : placeholder.title}</p>

</Link>
</div>


                                               

                                        </div>
                                    </div>
                                    {/* right side */}
                                    <div> </div>
                                    {/* left side */}
                                    <div> </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default CarouselDemo