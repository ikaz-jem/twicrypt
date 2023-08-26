
const NftsCard = ({ data }) => {
  return (

    <div className=" border rounded-2xl w-60 h-auto shadow-sm border-neutral-800 hover:shadow-lg pb-0 relative hover:translate-y-[-4%] transition-all cursor-pointer overflow-hidden ">


      <div className="flex flex-col  h-60 w-full ">
        <div className=" rounded-lg overflow-hidden flex-col flex items-center jusify-center relative h-full">
          <img src={data.thumbnail} className="pb-5 object-cover w-full h-full rounded-lg" />
        </div>
        <div className="flex justify-center items-start flex-col gap-2 mx-2 my-2">
          <dd className="order-first text-2xl font-semibold tracking-tight text-gray-400 sm:text-lg">
           {data.title}
          </dd>
          <dt className="text-base leading-7 text-gray-600">{data.price + ' '}BNB</dt>
        </div>
      </div>
    </div>

  )

}

export default NftsCard;
