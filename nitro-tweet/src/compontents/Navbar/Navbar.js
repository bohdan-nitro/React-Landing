import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {GiFlame} from "react-icons/gi";
import {FaBars, FaTimes} from "react-icons/fa";
import {Button} from "../Button/Button";
import {IconContext} from "react-icons";
import "./navbar.scss";

function Navbar(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, []);
    //Создаем слушатель события на ресайз окна чтобы при смене ширины выполнялась функция
    window.addEventListener("resize", showButton);


        return (

            <>
                <IconContext.Provider value={{color: "#f00946"}}>
                <div className="navbar">
                    <div className="navbar-container container">
                        <Link to={"/"} className="navbar-logo" onClick={closeMobileMenu}>
                            <GiFlame className={"navbar-icon"}/>
                            NITRO
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes/> : <FaBars/>}
                        </div>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                            <li className="nav-item">
                                <Link to={"/services"} className="nav-link" onClick={closeMobileMenu}>
                                    Services
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/products"} className="nav-link" onClick={closeMobileMenu}>
                                    Products
                                </Link>
                            </li>
                            <li className="nav-btn">
                                {button ? (
                                    <Link to={"/sign-up"} className="btn">
                                        <Button buttonStyle={"btn--outline"}>SIGN UP</Button>
                                    </Link>
                                ) : (
                                    <Link to={"/sign-up"} className="btn" onClick={closeMobileMenu}>
                                        <Button buttonStyle={"btn--outline"}
                                                buttonSize={"btn-mobile"}>SIGN UP</Button>
                                    </Link>
                                )  }
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
            </>
        );

}

export default Navbar;