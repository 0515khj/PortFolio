import { HeaderWrap } from "./HeaderStyle";
import NavBar from "./NavBar";
import {  Link } from "react-router-dom";


const Header = () => {
    return (
        <HeaderWrap>
        <div className="Hinner">
            <NavBar/>
        </div>
        </HeaderWrap>
    );
};

export default Header;