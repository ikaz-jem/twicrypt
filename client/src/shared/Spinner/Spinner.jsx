import { HashLoader } from "react-spinners";




const Spinner = ({message})=> {

return (

    <>
    <div className=" h-80  flex justify-center items-center flex-col gap-5" >
      
      <div className="my-10">
      <HashLoader size={50} color="#ffff" style={{ text: 'center' }} />
      </div>
      <p className="">{message || ""}</p>
    </div>
  </>


)

}

export default Spinner