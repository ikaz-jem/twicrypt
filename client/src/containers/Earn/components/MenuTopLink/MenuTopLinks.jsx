import { useState} from "react";
import Nav from "../../../../shared/Nav/Nav";
import NavItem from "../../../../shared/NavItem/NavItem";
// import LaunchpadTabFilter from "./LaunchpadTabFilter";
import { useNavigate } from "react-router-dom";


const MenuTopLinks= ({navigation }) => {

  const [tabActive, setTabActive] = useState("");

const Navigate = useNavigate()



let   className = "my-1";



  return (
    <div className={`flex flex-col   ${className}`}>

      <div className="flex  flex-wrap   items-center   justify-center  py-2  rounded-xl relative ">
        <Nav
          className="sm:space-x-2  flex flex-wrap gap-1"
          containerClassName="relative flex w-auto  text-sm md:text-base   "
        >
          {navigation.map(
            (item, index) => (
              <NavItem
                key={index}
                isActive={tabActive === item.title}
                onClick={(e)=>{
                  setTabActive(item.title)
                Navigate(`${item.link}`)
                 }
                
                }
              >
                {item.title}
              </NavItem>
            )
            )}
        </Nav>
        

      
      </div>


    </div>
  );
};

export default MenuTopLinks;
