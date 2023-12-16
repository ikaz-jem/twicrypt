
import { data } from './data'
import './style.css'
const SectionWhy = () => {








  return (
    <div className="index__body  py-10 pb-40">

      <div className="space space--small ">
        <div className="wrapper container container--xxlarge container--center ">
          
          
          <h3 className=' title'> one account , get it All:</h3>
         
         
          <div className="grid grid--waffle grid--stackable" data-component="fadereveal">


            {
              data.map((item,i) => {
                return (
                  <div className="grid__column grid__column--4 space space--xlarge border border-neutral-800 text-center  " dataref="fadereveal[el]" key={i}>

                   

                    <h4 className="heading align-left">  {<item.icon className='icon'/>} {item.title}</h4>

                    <p className="paragraph align-left">{item.desc}</p>
                  </div>)
              })
            }
          </div>
        </div>
      </div>

    </div>
  )

}

export default SectionWhy