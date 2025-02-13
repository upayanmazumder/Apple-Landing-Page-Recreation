import React from 'react';
import headerStyles from "./header.module.css";
import { BsApple, BsSearch, BsBag} from "react-icons/bs";

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.content}>
                <nav className={headerStyles.nav}>
                    <ul>
                        <div className={headerStyles.logo}>
                            <a href="/">
                                <BsApple className={headerStyles.icon}/>
                            </a>
                        </div>
                        <li>
                            <a href="#store">
                                Store
                            </a>
                        </li>
                        <li>
                            <a href="#mac">
                                Mac
                            </a>
                        </li>
                        <li>
                            <a href="#ipad">
                                iPad
                            </a>
                        </li>
                        <li>
                            <a href="#iphone">
                                iPhone
                            </a>
                        </li>
                        <li>
                            <a href="#watch">
                                Watch
                            </a>
                        </li>
                        <li>
                            <a href="#airpods">
                                AirPods
                            </a>
                        </li>
                        <li>
                            <a href="#tv-home">
                                TV & Home
                            </a>
                        </li>
                        <li>
                            <a href="#entertainment">
                                Entertainment
                            </a>
                        </li>
                        <li>
                            <a href="#accessories">
                                Accessories
                            </a>
                        </li>
                        <li>
                            <a href="#support">
                                Support
                            </a>
                        </li>
                        <li>
                            <a href="#search"> 
                                <BsSearch />
                            </a>
                        </li>
                        <li>
                            <a href="#cart"> 
                                <BsBag />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;