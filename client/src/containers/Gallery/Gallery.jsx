import { useEffect, useState } from "react"
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'
import Spinner from "../../shared/Spinner/Spinner"
import ImageCard from './ImageCard'
import FilterCard from "./FilterCard"

import { Masks,Bakgrounds,Clothing,Hair,Hand,Eyes } from "./traits"
import { useTotalSupply } from "./hooks/useTotalSupply"
import {useSelector} from 'react-redux'




const Gallery = () => {



  const [filterData, setFilterData] = useState({
    Background: null,
    Hand: null,
    Eyes: null,
    Mask: null,
    Umask: null,
    Hair: null,
    Clothing: null,
    Glass: null,
  })
  
  const {data:totalSupply,isLoading,isError}=useTotalSupply()
  const nftSupply = Number(totalSupply)
  const mintedNfts = Array.from({ length: nftSupply }, (_, index) => index);
  
  let minPerView = 20
  const [hasMore, setHasMore] = useState(nftSupply<minPerView ? false : true)
  const [perView, setPerview] = useState(nftSupply<minPerView ? nftSupply : minPerView )
  const perViewArray = Array.from({ length: perView })
  const [nftArray, setNftArray] = useState(perViewArray)
  const [searchData, setSearchData] = useState([])
  

  let selected = Object?.values(filterData).some((val) => val !== null)

  const search = (keywords)=>{
    let results = []
  
    for (let i=0; i< nftSupply; i++){
      let tempData = require(`./eth/${i}.json`)
      let filter = tempData.attributes.some(attr => Object?.values(attr).find((tr) => tr == filterData?.Background || tr == filterData?.Mask || tr == filterData?.Umask || tr == filterData?.Clothing || tr == filterData?.Hair || tr == filterData?.Eyes || tr == filterData?.Hand)) 
      filter == true && results.push(i)
      
    }
    return results
  }
 
  useEffect(()=>{
    let results =  selected && search()
    setSearchData(results)
  },[filterData])
 

  // useEffect(() => {
  //   const nfts = selected ? axios.get('https://api.twicrypt.com/eth/metadata/_metadata.json').then((res) => setData(res?.data)) : null
  //   console.log('fetching')
  // }, [selected])


  // const filteredData = data?.length > 10 && data?.filter((item)=> item?.attributes?.map((attr)=>attr?.value==filter) )
  // const filteredData = data && data?.filter((obj) => obj.attributes.some(attr => Object?.values(attr).find((tr) => tr == filterData?.Background || tr == filterData?.Mask || tr == filterData?.Umask || tr == filterData?.Clothing || tr == filterData?.Hair || tr == filterData?.Eyes || tr == filterData?.Hand))) || 0
  
  const checkHasMore = ()=>{

    if (!selected && nftSupply <= perView){
      setNftArray(nftArray.concat(Array.from({ length: nftSupply-nftArray?.length })))
            setHasMore(false)
    }else {
      

    }
    
    
    }







  const nextData = () => {
   
    if (!selected) {
      checkHasMore()
      if (nftSupply - perView > perView && nftArray?.length + perView < nftSupply) {
        setTimeout(() => {
          setNftArray(nftArray.concat(perViewArray))
        }, 1000)
      } else {
        let remaining = (nftSupply) - nftArray?.length
        setNftArray(nftArray.concat(Array.from({ length: remaining })))
        setHasMore(false)        
       

      }

      // setTimeout(() => {
      //   setNftArray(nftArray.concat(perViewArray))

      // }, 1000)


    } else {
      
      if (searchData?.length - perView > perView && nftArray?.length + perView < searchData?.length) {
        setTimeout(() => {
          setNftArray(nftArray.concat(perViewArray))

        }, 1000)
      } else {
        let remaining = (searchData.length) - nftArray?.length > 0 ? (searchData.length) - nftArray?.length : 0
        setNftArray(nftArray.concat(Array.from({ length: remaining})))
        setHasMore(false)        


      }
    }

  }







  const ImageGallery = () => {


    return (

      <InfiniteScroll
        dataLength={nftSupply} //This is important field to render the next data
        next={() => nextData()}
        hasMore={hasMore}
        loader={
          <div className="w-full bg-neutral-800 bg-opacity-40 z-20 shadow-md" >

            <Spinner message={'Loading more'} />
          </div>
        }
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b className="text-white text-xl font-sans">Yay! You have seen it all</b>
          </p>
        }
      >
        <div className=' container--xxxlarge   mx-auto px-auto flex items-center justify-center gap-5 flex-wrap'>

          {!selected ? nftArray?.map((nft, i) => <ImageCard key={i} nftIndex={i} />) : searchData?.length >0 && searchData?.map((nft, i) => <ImageCard key={i} nftIndex={searchData[i]} />)}
        </div>
      </InfiniteScroll>

    )

  }


  const GallerySideBar = () => {



    const handleSearch = ({ target }) => {

      const { dataset, innerText } = target;
      setFilterData((prev) => ({
        ...prev,
        [dataset.name]: prev[dataset.name] == dataset.value ? null : dataset.value,
      }))
  
    }

    const ulClassName ='border border-neutral-600 py-1 px-2 rounded-full cursor-pointer'

    return (
      <div className="">


        <div className="flex flex-col w-40 md:w-80  py-10 gap-5 sticky top-0 px-5 overflow-y-scroll h-screen scroll-smooth ">
          <p className="text-3xl font-sans tracking-widest text-white">Filter</p>


        
          <div className="w-full ">
          <p className="text-white bg-neutral-800 p-2 my-2 rounded-r ">Hair <span className="text-xs text-white font-sans font-thiner">{Eyes?.length }</span></p>
            <ul className="text-white flex gap-2  font-sans tracking-wide text-xs flex-wrap">
           {
            Hair?.map((hair,i)=><li key={i} data-name='Hair' data-value={hair} onClick={handleSearch} className={`${filterData?.Hair == hair && ' bg-pink-500'} ${ulClassName} `}>{hair}</li>)
           }
              
            </ul>
          </div>
         
          <div className="w-full ">
            <p className="text-white bg-neutral-800 p-2 my-2 rounded-r">background <span className="text-xs text-white font-sans font-thiner">{Bakgrounds?.length }</span></p>
            <ul className="text-white flex gap-2  font-sans tracking-wide text-xs flex-wrap h-40 overflow-y-scroll">
              {
                Bakgrounds?.map((bg,i)=><li key={i} data-name={"Background"} data-value={bg} onClick={handleSearch} className={`${filterData?.Background == bg && ' bg-pink-500'} ${ulClassName}`}>{bg}</li>
                )              }
            </ul>
          </div>
    
          <div className="w-full ">
            <p className="text-white bg-neutral-800 p-2 my-2 rounded-r">Clothing <span className="text-xs text-white font-sans font-thiner">{Clothing?.length }</span></p>
            <ul className="text-white flex gap-2  font-sans tracking-wide text-xs flex-wrap h-40 overflow-y-scroll">
              {
                Clothing?.map((outfit,i)=><li key={i} data-name={"Clothing"} data-value={outfit} onClick={handleSearch} className={`${filterData?.Clothing == outfit && ' bg-pink-500'} ${ulClassName}`}>{outfit}</li>
                )              }
            </ul>
          </div>
          <div className="w-full ">
            <p className="text-white bg-neutral-800 p-2 my-2 rounded-r">Hand <span className="text-xs text-white font-sans font-thiner">{Hand?.length }</span></p>
            <ul className="text-white flex gap-2  font-sans tracking-wide text-xs flex-wrap h-40 overflow-y-scroll">
              {
                Hand?.map((item,i)=><li key={i} data-name='Hand' data-value={item} onClick={handleSearch} className={`${filterData?.Hand == item && ' bg-pink-500'} ${ulClassName}`}>{item}</li>
                )              }
            </ul>
          </div>

          <div className="w-full ">
          <p className="text-white bg-neutral-800 p-2 my-2 rounded-r ">Mask <span className="text-xs text-white font-sans font-thiner">{Masks?.length }</span></p>
            <ul className="text-white flex gap-2  font-sans tracking-wide text-xs flex-wrap">
           {
            Masks?.map((mask,i)=><li key={i} data-name='Mask' data-value={mask} onClick={handleSearch} className={`${filterData?.Mask == mask && ' bg-pink-500'} ${ulClassName} `}>{mask}</li>)
           }
              
            </ul>
          </div>

          <div className="w-full ">
          <p className="text-white bg-neutral-800 p-2 my-2 rounded-r ">Eyes <span className="text-xs text-white font-sans font-thiner">{Eyes?.length }</span></p>
            <ul className="text-white flex gap-2  font-sans tracking-wide text-xs flex-wrap">
           {
            Eyes?.map((eye,i)=><li key={i} data-name='Eyes' data-value={eye} onClick={handleSearch} className={`${filterData?.Eyes == eye && ' bg-pink-500'} ${ulClassName} `}>{eye}</li>)
           }
              
            </ul>
          </div>


          
        </div>

      </div>
    )

  }


  return (

    <>
      
      <div className="w-full min-w-full h-full flex flex-col items-center justify-center">
        {/* <div className="w-full bg-neutral-400 h-20">

        </div> */}

        <div className="w-full h-full flex flex-col items-center justify-center">

          <div className="flex gap-2 items-center justify-start h-12 w-full">
            {selected && <p className="text-white text-md font-bold fons-sans tracking-widest py-2 px-4 rounded" >Filter :</p>}
            {
              selected && Object.values(filterData).map((item, i) => {
                if (item == null) {
                  return null
                } else {
                  return <p className="text-white text-xs border border-neutral-700 py-2 px-4 rounded" key={i}>{item}</p>
                }
              })
            }
          </div>
          
          <div className="flex w-full h-full">

            <GallerySideBar />
            <div className=" mx-auto w-full bg-neutral-800 py-10 ">
              <div className="flex gap-5 flex-wrap items-start justify-center">

{  selected && searchData?.length ==0 ? <p className="text-3xl font-sans tracking-widest text-white">Nothing Found !</p>
 :
                <ImageGallery />
}              </div>
            </div>
          </div>

        </div>
      </div>



    </>



  )

}

export default Gallery