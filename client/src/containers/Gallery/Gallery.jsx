import { useEffect, useState } from "react"
import InfiniteScroll from 'react-infinite-scroll-component'
import Spinner from "../../shared/Spinner/Spinner"
import ImageCard from './ImageCard'

import { Masks,Bakgrounds,Clothing,Hair,Hand,Eyes,Glass } from "./traits"
import { useTotalSupply } from "./hooks/useTotalSupply"
// import NftFilter from "./NftFilter/NftFilter"

///////////////////////



import { Fragment } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CgArrowsV } from "react-icons/cg";
import { IoIosCheckmark } from "react-icons/io";



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
      let tempData = require(`./bsc/${i}.json`)
      let filter = tempData.attributes.some(attr => Object?.values(attr).find((tr) => tr == filterData?.Background || tr == filterData?.Mask || tr == filterData?.Umask || tr == filterData?.Clothing || tr == filterData?.Hair || tr == filterData?.Eyes || tr == filterData?.Hand)) 
      filter == true && results.push(i)
      
    }
    return results
  }
 
  useEffect(()=>{
    let results =  selected && search()
    setSearchData(results)
  },[filterData])
 


  const checkHasMore = ()=>{

    if (!selected && nftSupply < perView){
      setNftArray(nftArray.concat(Array.from({ length: nftSupply-nftArray?.length  })))
            setHasMore(false)
    }else {
      

    }
    
    
    }

//////////////////////////////////////////////////////////

console.log(filterData)

const handleSearch = (item) => {


  const {trait,value} = item


    setFilterData((prev) => ({
    ...prev,
    [trait]: prev[value] == value ? null : value
  }))


  // const { dataset, innerText } = target;
  // setFilterData((prev) => ({
  //   ...prev,
  //   [dataset.name]: prev[dataset.name] == dataset.value ? null : dataset.value,
  // }))

}



const Traits = [Bakgrounds,Hair,Masks,Hand,Glass]

const FilterComponent = ({traits })=> {
      
  const [selected, setSelected] = useState( filterData[traits[0]] || traits[0])
  const [query, setQuery] = useState('')

  
const filteredPeople =
    query === '' ? traits: traits?.filter((person) =>
          person
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )
const handleChange = (e)=> {
setSelected(e)
// handleSearch({trait:traits[0],value :selected})
setFilterData((prev) => ({
  ...prev,
  [traits[0]]: prev[traits[0]] == e ? null : e
}))

}

  return (
    <div className=" top-16 w-60">
      <Combobox value={selected} onChange={(e)=> handleChange(e)}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              displayValue={(person) => person}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <CgArrowsV
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 z-10 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {filteredPeople.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((person,i) => (
                  <Combobox.Option
                    key={i}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-8 pr-4 flex justify-start ${
                        active ? 'bg-pink-600 text-white' : 'text-gray-900'
                      }`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium'  : 'font-normal'
                          }`}
                        >
                          {person}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-0 ${
                              active ? 'text-white' : 'text-pink-600'
                            }`}
                          >
                            <IoIosCheckmark className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
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
            <b className="text-neutral-200 text-xl font-sans">Yay! You have seen it all</b>
          </p>
        }
      >
        <div className=' container--xxxlarge   mx-auto px-auto flex items-center justify-center gap-5 flex-wrap'>

          {!selected ? nftArray?.map((nft, i) => <ImageCard key={i} nftIndex={i+1} />) : searchData?.length >0 && searchData?.map((nft, i) => <ImageCard key={i+1} nftIndex={searchData[i]} />)}
        </div>
      </InfiniteScroll>

    )

  }


  // const GallerySideBar = () => {




  //   const ulClassName ='border text-[12px] border-neutral-600 py-1 px-2 rounded-full cursor-pointer'

  //   return (
  //     <div className=" flex flex-col w-full ">


  //         <p className="text-3xl font-sans tracking-widest text-neutral-200">Filter</p>




  //       <div className="flex  py-10 gap-5  top-0 px-0 lg:px-5 scroll-smooth w-full flex-wrap ">


         
  //         <div className="w-full md:w-1/5 lg:w-1/6  ">
  //         <p className="text-neutral-200 bg-neutral-800 p-2 my-2 rounded-lg text-xs font-sans font-bold ">Hair <span className="text-xs text-neutral-200 font-sans font-thiner">{Eyes?.length }</span></p>
  //           <ul className="text-neutral-200 flex gap-2  font-sans tracking-wide text-xs flex-wrap overflow-y-scroll h-32">
  //          {
  //           Hair?.map((hair,i)=><li key={i} data-name='Hair' data-value={hair} onClick={handleSearch} className={`${filterData?.Hair == hair && ' bg-pink-500'} ${ulClassName} `}>{hair}</li>)
  //          }
              
  //           </ul>
  //         </div>
         
  //         <div className="w-full md:w-1/5 lg:w-1/6 ">
  //           <p className="text-neutral-200 bg-neutral-800 p-2 my-2 rounded-lg text-xs font-sans font-bold">background <span className="text-xs text-neutral-200 font-sans font-thiner">{Bakgrounds?.length }</span></p>
  //           <ul className="text-neutral-200 flex gap-2  font-sans tracking-wide text-xs flex-wrap h-32 overflow-y-scroll">
  //             {
  //               Bakgrounds?.map((bg,i)=><li key={i} data-name={"Background"} data-value={bg} onClick={handleSearch} className={`${filterData?.Background == bg && ' bg-pink-500'} ${ulClassName}`}>{bg}</li>
  //               )              }
  //           </ul>
  //         </div>
    
  //         <div className="w-full md:w-1/5 lg:w-1/6 ">
  //           <p className="text-neutral-200 bg-neutral-800 p-2 my-2 rounded-lg text-xs font-sans font-bold">Clothing <span className="text-xs text-neutral-200 font-sans font-thiner">{Clothing?.length }</span></p>
  //           <ul className="text-neutral-200 flex gap-2  font-sans tracking-wide text-xs flex-wrap h-32 overflow-y-scroll">
  //             {
  //               Clothing?.map((outfit,i)=><li key={i} data-name={"Clothing"} data-value={outfit} onClick={handleSearch} className={`${filterData?.Clothing == outfit && ' bg-pink-500'} ${ulClassName}`}>{outfit}</li>
  //               )              }
  //           </ul>
  //         </div>
  //         <div className="w-full md:w-1/5 lg:w-1/6 ">
  //           <p className="text-neutral-200 bg-neutral-800 p-2 my-2 rounded-lg text-xs font-sans font-bold">Hand <span className="text-xs text-neutral-200 font-sans font-thiner">{Hand?.length }</span></p>
  //           <ul className="text-neutral-200 flex gap-2  font-sans tracking-wide text-xs flex-wrap h-32 overflow-y-scroll">
  //             {
  //               Hand?.map((item,i)=><li key={i} data-name='Hand' data-value={item} onClick={handleSearch} className={`${filterData?.Hand == item && ' bg-pink-500'} ${ulClassName}`}>{item}</li>
  //               )              }
  //           </ul>
  //         </div>

  //         <div className="w-full md:w-1/5 lg:w-1/6 ">
  //         <p className="text-neutral-200 bg-neutral-800 p-2 my-2 rounded-lg text-xs font-sans font-bold ">Mask <span className="text-xs text-neutral-200 font-sans font-thiner">{Masks?.length }</span></p>
  //           <ul className="text-neutral-200 flex gap-2  font-sans tracking-wide text-xs flex-wrap">
  //          {
  //           Masks?.map((mask,i)=><li key={i} data-name='Mask' data-value={mask} onClick={handleSearch} className={`${filterData?.Mask == mask && ' bg-pink-500'} ${ulClassName} `}>{mask}</li>)
  //          }
              
  //           </ul>
  //         </div>

  //         <div className="w-full md:w-1/5 lg:w-1/6 ">
  //         <p className="text-neutral-200 bg-neutral-800 p-2 my-2 rounded-lg text-xs font-sans font-bold ">Eyes <span className="text-xs text-neutral-200 font-sans font-thiner">{Eyes?.length }</span></p>
  //           <ul className="text-neutral-200 flex gap-2  font-sans tracking-wide text-xs flex-wrap">
  //          {
  //           Eyes?.map((eye,i)=><li key={i} data-name='Eyes' data-value={eye} onClick={handleSearch} className={`${filterData?.Eyes == eye && ' bg-pink-500'} ${ulClassName} `}>{eye}</li>)
  //          }
              
  //           </ul>
  //         </div>


          
  //       </div>

  //     </div>
  //   )

  // }


  return (

    <>
      
      <div className="w-full min-w-full h-full flex flex-col items-center justify-center">
        {/* <div className="w-full bg-neutral-400 h-20">

        </div> */}

        <div className="w-full h-full flex flex-col items-center justify-center">
{/* 
            <GallerySideBar /> */}


<div className="container container--xxxlarge">
<p className="text-3xl font-sans tracking-widest text-neutral-200">Filter</p>
<div className="flex items-center justify-center w-full gap-2 flex-wrap">


      {
          Traits?.map((trait,i)=><FilterComponent key={i} traits={trait}  />  )
          
      }
      
      </div>
      </div>
    


          <div className="flex gap-2 items-center justify-start h-12 w-full">
            {selected && <p className="text-neutral-200 text-md font-bold fons-sans tracking-widest py-2 px-4 rounded" >Filter :</p>}
            {
              selected && Object.values(filterData).map((item, i) => {
                if (item == null) {
                  return null
                } else {
                  return <p className="text-neutral-200 text-xs border border-neutral-700 py-2 px-4 rounded" key={i}>{item}</p>
                }
              })
            }
          </div>
          
          <div className="flex w-full h-full">

            <div className=" mx-auto w-full bg-neutral-800 py-10  rounded-xl">
              <div className="flex gap-5 flex-wrap items-start justify-center">

{  selected && searchData?.length ==0 ? <p className="text-3xl font-sans tracking-widest text-neutral-200">Nothing Found !</p>
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