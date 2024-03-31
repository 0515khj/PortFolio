import { Outlet, useLocation } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { LayoutWrap } from "../header/HeaderStyle";
import { useEffect, useState } from "react";

const Layout = () => {
    const location = useLocation();
    const [up , setUp] = useState(false);

    useEffect(()=>{
        setUp(true);
        const timer = setTimeout(()=>
            setUp(false), 2000)
            return () => clearTimeout(timer)
        }, [location]);
    

    return (
        <LayoutWrap>
        <div className="layout"> 
              {
            up &&
                <div className="bg"></div>
            }
        <Header/> 
        <Outlet /> 
        </div>
        </LayoutWrap>
    );
};

export default Layout;