import {  useLocation, useNavigate } from "react-router-dom"; 
import { NavWrap } from "./HeaderStyle";
import { useEffect, useState } from "react";


/* const Menubutton =({path , label , isActive , onClick})=>{
    return(
        <div className={`button-wrapper ${isActive ? 'active':''}`} onClick={()=>{onClick(path)}}>
            <button>{label}</button>
            <div className="buttonbottom"></div>
            {isActive && <div className="buttonbottom active"></div>}
        </div>
);
}; */

/* const buttons = [
    {path: '/about', label:'ABOUT'},
    {path: '/project', label:'PROJECT'},
    {path: '/javascript', label:'JAVASCRIPT'},
    {path: '/contact', label:'CONTACT'},
] */

const NavBar = () => {
    const [ani , setAni ]= useState(false);
    const [motions , setMotions] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    
       useEffect(()=>{
        const timeout = setTimeout(()=>{
            setAni(true);
        },2000);
        return () => clearTimeout(timeout);
       },[])
    

    const btnclick = (path) => {
        setMotions(true);
        setTimeout(() => {
          navigate(path);
          setMotions(false);
        }, 1000);
      };

      const colorOn = path =>location.pathname === path;


    return (
        <>
          <NavWrap className="nav">
           <div className={`khj ${motions ? 'cover' : ani ? 'move':'' }`}>
            <div className="bg"></div>
            </div>

            <div className={`btn ${ani ? 'move2' : ''} ${motions ? 'hidden' :''}`}>

           <div className={`button-wrapper ${colorOn('/about') ? 'active' : ''}`} onClick={() => btnclick('/about')}>
           <button>ABOUT</button>
           <div className="buttonbottom" >
                </div>
           {colorOn('/about') && <div className="buttonbottom active"></div>}</div> 

           <div className={`button-wrapper ${colorOn('/project') ? 'active' : ''}`} onClick={() => btnclick('/project')}>
           <button>PROJECT</button>
           <div className="buttonbottom" >
                </div>
           {colorOn('/project') && <div className="buttonbottom active"></div>}</div> 

           <div className={`button-wrapper ${colorOn('/javascript') ? 'active' : ''}`} onClick={() => btnclick('/javascript')}>
           <button>JAVASCRIPT</button>
           <div className="buttonbottom" >
                </div>
           {colorOn('/javascript') && <div className="buttonbottom active"></div>}</div> 

           <div className={`button-wrapper ${colorOn('/contact') ? 'active' : ''}`} onClick={() => btnclick('/contact')}>
           <button>CONTACT</button>
           <div className="buttonbottom" >
                </div>
           {colorOn('/contact') && <div className="buttonbottom active"></div>}</div> 
           </div>
           </NavWrap> 

        </>
    );
};

export default NavBar;