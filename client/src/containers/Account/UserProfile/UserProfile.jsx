import NftSliderCat2 from "../../Earn/components/NftSlider/NftSliderCat2"
import React from "react"
import SingleAccordionTab from "../../../shared/AccordionTabs/SingleAccordionTab"
import SingleAccordion from "../../../shared/Accordion/SingleAccordion"

const UserProfile = () => {


    return (
        <React.Fragment>

            <div className="h-full lg:z-10 lg:sticky xl:sticky xl:top-22 lg-top-20 overflow-x-none fixed top-0  z-10  ">

            </div>
            <div className="flex flex-col gap-0  w-full relative  h-full   container--xxxlarge px-10 pl-18 sm:pl-25 md:pl-26 lg:pl-10  container--center  ">
                <div className="w-full h-auto relative   ">
                    {/* <TabFilter  page={page} setSearchParams={setSearchParams} /> */}

                    <div className="relative py-5">

                        <div className="w-full h-60 bg-neutral-500 rounded-xl ">
                            {/* header */}
                        </div>
                        <div className="h-24 w-24 bg-red-500 absolute bottom-0 left-20 rounded-full">

                        </div>
                    </div>


                    <div className="container--xxxlarge  ">
                        <main className="flex ">
                            {/* FILTER */}


<div className="w-full  rounded-xl my-10">
<img src="https://clipart-library.com/images_k/coming-soon-transparent-background/coming-soon-transparent-background-3.png" alt="" className="absolute top-0 backdrop-blur" />
</div>

                            {/* <hr className=" mt-5 mb-5 border-slate-700 " /> */}
                            {/* <div className="flex flex-col  gap-10  w-auto h-auto items-center justify-center   ">
                                <NftSliderCat2 />
                            </div> */}
                            {/* PAGINATION */}
                                {/* <SingleAccordion open={true} className={'rounded-none'} title={'hello'}/> */}
                            <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
                                {/* <Pagination />
            <ButtonPrimary loading>Show me more</ButtonPrimary> */}
                            </div>
                        </main>
                        {/* <hr className="border-slate-200 dark:border-slate-700" /> */}
                    </div>



                    {/* <Suspense fallback={
                    <>
                        <div className=" h-screen  flex justify-center items-center " >
                            <HashLoader size={50} color="#fff" style={{ text: 'center' }} />
                        </div>
                    </>}>
                { marketPage && Components[marketPage]}
                </Suspense> */}
                </div>
            </div>

        </React.Fragment>

    )

}


export default UserProfile
