import { HashLoader } from "react-spinners";




const Spinner = ({message})=> {

return (

    <>
    <div className=" h-40  flex justify-center items-center flex-col gap-5 relative" >
      
      <div className="my-5 p-0">
      <HashLoader size={50} color="#ffff" style={{ text: 'center' }} />
      </div>
      <p className="pt-10 m-0 text-neutral-400">{message || ""}</p>
    </div>
  </>


)

}

export default Spinner