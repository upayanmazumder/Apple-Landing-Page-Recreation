'use client'

import React, { useState } from 'react';
import headerStyles from "./header.module.css";
import { BsApple, BsSearch, BsBag, BsList, BsX } from "react-icons/bs";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.content}>
                <div className={headerStyles.logo}>
                    <a href="/">
                        <BsApple className={headerStyles.icon}/>
                    </a>
                </div>
                <button className={headerStyles.menuToggle} onClick={toggleMenu}>
                    {isMenuOpen ? <BsX /> : <BsList />}
                </button>
                <nav className={`${headerStyles.nav} ${isMenuOpen ? headerStyles.open : ''}`}>
                    <ul>
                        <li><a href="#store">Store</a></li>
                        <li><a href="#mac">Mac</a></li>
                        <li><a href="#ipad">iPad</a></li>
                        <li><a href="#iphone">iPhone</a></li>
                        <li><a href="#watch">Watch</a></li>
                        <li><a href="#airpods">AirPods</a></li>
                        <li><a href="#tv-home">TV & Home</a></li>
                        <li><a href="#entertainment">Entertainment</a></li>
                        <li><a href="#accessories">Accessories</a></li>
                        <li><a href="#support">Support</a></li>
                    </ul>
                </nav>
                <div className={headerStyles.icons}>
                    <a href="#search"><BsSearch /></a>
                    <a href="#cart"><BsBag /></a>
                </div>
            </div>
        </header>
    );
};

export default Header;
