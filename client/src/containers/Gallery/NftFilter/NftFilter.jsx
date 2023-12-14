import { Bakgrounds,Hair,Masks,Hand,Glass } from "../traits"

import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CgArrowsV } from "react-icons/cg";
import { IoIosCheckmark } from "react-icons/io";
import { useEffect } from 'react';




const NftFilter = ()=> {
    const Traits = [Bakgrounds,Hair,Masks,Hand,Glass]

     const FilterComponent = ({traits,seach })=> {
        
      const [selected, setSelected] = useState(traits[0])
      const [query, setQuery] = useState('')
    
      
    const filteredPeople =
        query === '' ? traits: traits?.filter((person) =>
              person
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(query.toLowerCase().replace(/\s+/g, ''))
            )
            search({trait:traits[0],value :selected})
 
    
      return (
        <div className=" top-16 w-72">
          <Combobox value={selected} onChange={setSelected}>
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
                <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                  {filteredPeople.length === 0 && query !== '' ? (
                    <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                      Nothing found.
                    </div>
                  ) : (
                    filteredPeople.map((person,i) => (
                      <Combobox.Option
                        key={i}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? 'bg-teal-600 text-white' : 'text-gray-900'
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
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active ? 'text-white' : 'text-teal-600'
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
    







    return (
        <>

        <div className="container container--xxxlarge">

<div className="flex items-center justify-center w-full gap-2">


        {
            Traits?.map((trait,i)=><FilterComponent key={i} traits={trait} search ={search}/>  )
            
        }
        
        </div>
        </div>
        </>
    )
}

export default NftFilter