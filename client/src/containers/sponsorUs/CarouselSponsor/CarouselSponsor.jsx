
import './style.css'
import CarouselDemo from './demo/Demo'
import { useState } from 'react'



const CarouselSponsor = () => {

  const [link, setLink] = useState({
    name: null,
    link: null,
    icon: null,
    amount: null
  })


  const handleChange = ({ target }) => {
    const { name, value } = target
    setLink((prev) => (
      {
        ...prev,
        [name]: value
      }
    ))
  }


  const checkDuration = (num) => {

    switch (true) {
      case num >= 0.1 && num < 0.5:
        return 'sponsored us 1 week';
      case num >= 0.5 && num < 1:
        return 'sponsored us 1 month';
      case num >= 1 && num < 5:
        return 'sponsored us 2 month';
      case num >= 5 && num < 10:
        return 'sponsored us 3 month';
      case num >= 10 && num < 30:
        return 'sponsored us 6 month';
      case num >= 30:
        return 'sponsored us 1 year ';
      default:
        return '';
    }

  }


  const SvgTitle = () => {


    return (
        <>
        
            <div className="container-xxxxlg ">

                {/* <svg className="hero__logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.154 12.761" dataref="fadereveal[el]  ">
          <path  d="M28.154 7.787c0-.928-.891-1.712-1.945-1.712-1.418 0-2.484 1.014-3.167 3.015a4.945 4.945 0 0 0-.24 1.173c-.725 1.062-1.209 1.295-1.78 1.303-.034-.085-.099-.369.043-1.129.02-.081.036-.159.047-.233.157-.72.478-1.798 1.108-3.403.856-2.18 1.85-4.219 1.86-4.24a.563.563 0 1 0-1.014-.495c-.01.021-1.007 2.066-1.875 4.27l-.054.139c-.36-.265-.842-.4-1.439-.4-1.419 0-2.484 1.015-3.167 3.015a3.483 3.483 0 0 0-.054.169c-.006.012-.014.024-.018.037-.008.022-.846 2.223-2.233 2.269-.156-.379.143-1.759.683-3.296.31-.714.505-1.277.563-1.451a.564.564 0 0 0-1.054-.401c-.166.388-.387.931-.603 1.536-.797 1.784-1.953 3.575-2.939 3.612-.067-.167-.251-1.076 1.198-4.764.057-.146.115-.29.173-.434.253-.526.466-1.056.644-1.497.074-.183.138-.342.193-.471.478-1.073.844-1.826.85-1.838a.563.563 0 1 0-1.014-.495c-.005.012-.357.733-.821 1.774l-.003.004-.039.088a63.078 63.078 0 0 0-.802 1.879c-.438.916-1.015 1.881-1.524 1.881-.326 0-.418-.231-.439-.426a.498.498 0 0 0-.018-.095.905.905 0 1 0-1.292.823 5.66 5.66 0 0 1-.952 1.902c-.604.792-1.652 1.737-3.217 1.737-.974 0-1.663-.294-2.104-.897-.791-1.079-.669-3.087-.223-4.497.565-1.784 2.875-5.11 5.276-5.11 1.833 0 1.943 1.712 1.95 1.911.007.31.268.555.576.549a.566.566 0 0 0 .552-.577C9.816 1.971 9.144 0 6.762 0 3.632 0 1.042 3.906.411 5.898-.097 7.5-.3 9.903.798 11.402c.66.901 1.675 1.359 3.015 1.359 1.582 0 3.042-.775 4.114-2.181a7.02 7.02 0 0 0 1.041-1.946c.209.115.46.188.764.188.157 0 .309-.026.455-.072-.685 2.235-.516 3.022-.252 3.444.202.324.531.502.926.502.825 0 1.574-.544 2.218-1.303.017.337.086.625.227.837.198.3.512.466.884.466.929 0 1.657-.512 2.193-1.113.053.145.123.284.213.412.229.32.683.702 1.541.702.817 0 1.431-.25 1.885-.606a1.052 1.052 0 0 0 .984.606c.792 0 1.429-.283 2.065-.957.034.062.071.124.114.184.252.353.753.773 1.707.773 1.078 0 1.761-.385 2.36-1.328a.565.565 0 1 0-.952-.605c-.392.616-.72.804-1.408.804-.574 0-.736-.227-.79-.301a1.059 1.059 0 0 1-.165-.473c.413-.279 1.333-.819 2.419-.95.87-.106 1.798-.7 1.798-2.057zm-10.017 3.779c-.459 0-.583-.173-.623-.229-.226-.315-.192-1.072.085-1.883.517-1.515 1.203-2.251 2.099-2.251.401 0 .692.083.843.24a.488.488 0 0 1 .129.286c-.375 1.063-.595 1.87-.712 2.491-.113.436-.507 1.346-1.821 1.346zM24.14 9.37c.514-1.458 1.191-2.167 2.069-2.167.491 0 .817.352.817.584 0 .557-.27.872-.803.935-.809.097-1.53.37-2.083.648z" />
          <path d="M16.108 3.473c.333.117.847-.453.964-.786a.64.64 0 0 0-1.207-.423c-.117.332-.09 1.092.243 1.209z"/>
        </svg> */}

                <h4 className=" heading bg-dark">Get your Brand on the Main Slider as A sponsor  </h4>
            </div>
        </>
    )
}



  return (

<>
        <SvgTitle/>

    <div className="index__body bg-light light-ball">


      <div className='flex justify-center items-center'>


      </div>

      {/* <div className="grid__column grid__column--3 space space--xlarge  " dataref="fadereveal[el]"> */}

      <div className='flex  items-center justify-between flex-wrap  lg:flex-nowrap  relative  '>


<div className=' w-40 '>

        <div className='absolute top-0 z-10  '>

          <div className='flex flex-col ml-10 mt-10  rounded-xl border-white border-opacity-10 shadow-2xl bg-black bg-opacity-60 backdrop-blur-sm  py-20 px-10  '>

            <h4 className="heading align-left"> Appear on The Home page Main Slider for 1 year : </h4>
            <p className="paragraph align-left">descriptioniojdioazjdajizjdaoizdo</p>

            <p className="paragraph align-left">image link :</p>
            <input type="text" name='link' onChange={handleChange} />

            <p className="paragraph align-left">Project Name :</p>
            <input type="text" name='name' onChange={handleChange} />

            <p className="paragraph align-left">icon link:</p>
            <input type="text" name='icon' onChange={handleChange} />


            <p className="paragraph align-left">BNB amount:</p>
            <input type="text" name='amount' onChange={handleChange} />

            <button className='button button--hollow my-10'> sponsor now</button>
            <p className='paragraph'> {checkDuration(link.amount)}  </p>
          </div>
        </div>


</div>

<div className=' w-[100%] flex'>

        <CarouselDemo link={link} />
</div>


      </div>

    </div>
</>
  )

}

export default CarouselSponsor