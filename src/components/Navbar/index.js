import React from 'react';
import { useState } from "react"
import "./Navbar.scss"
import MenuIcon from "@material-ui/icons/Menu"
import Search from "@material-ui/icons/Search"
import CardGiftcard from "@material-ui/icons/CardGiftcard"
import Notifications from "@material-ui/icons/Notifications"

const Navbar = () => {

    const [navBlack, SetNavBlack] = useState(false)
    const [toggleMenu, SetToggleMenu] = useState(false)

    const transitionNav = () => {
        window.scrollY > 100 ? SetNavBlack(true) : SetNavBlack(false);
    }

    useState( () => {
        document.addEventListener("scroll", transitionNav)
    })

    const handleClick = () => {
        toggleMenu ? SetToggleMenu(false) : SetToggleMenu(true)
    }


    return (
        <div className={`nav ${navBlack || toggleMenu ? "nav--black" : "nav--transparent"} ${toggleMenu && "show"}`}>
            <button className="nav__burger" onClick={handleClick}>
                <MenuIcon/>
            </button>
            <img src="./images/logo.png" alt="Netflix" className="nav__logo" />
            <nav className="nav__links">
                <a href='/' className="nav__link" >
                    Acceuil
                </a>
                <a href='/' className="nav__link" >
                    Séries
                </a>
                <a href='/' className="nav__link" >
                    Films
                </a>
            </nav>
            <div className="nav__actions">
                <a href='/' className="nav__action" >
                <Search/>
                </a>
                <a href='/' className="nav__action" >
                    DIRECT
                </a>
                <a href='/' className="nav__action" >
                <CardGiftcard/>
                </a>
                <a href='/' className="nav__action" >
                <Notifications/>
                </a>
                <a href='/' className="nav__action" >
                    <img src="./images/avatar.jpg" alt="" />
                </a>
            </div>

            
        </div>
    );
};

export default Navbar;