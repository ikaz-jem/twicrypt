








const ProgressBar = ({className='', percentage , min ,max})=> {

    return(
    
<div>
        <div className="w-full rounded-full bg-neutral-400 p-0 flex ">
        <div className="bg-pink-600 text-xs font-medium animate-pulse text-white text-center p-1 leading-none rounded-full" style={{ "width": `${percentage}%` }}>{percentage + '%'}</div>
      </div>

      <div className="flex justify-between  text-slate-300 m-0 p-0">
       
      <span className="flex text-xs py-2">{min}</span>

        <span className="flex text-xs py-2">{max}</span>
      </div>
</div>
    )
}

export default ProgressBar