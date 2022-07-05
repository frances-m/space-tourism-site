import { Link } from "react-router-dom";

import logo from '../assets/shared/logo.svg';

import './Header.scss';

export const Header = () => {
    return (
        <header class="header">
            {/* Site Logo */}
            <div class="header__logo">
                <img src={logo} alt="site logo" />
            </div> {/* END header__logo */}

            {/* Header Nav */}
            <nav class="header__nav">
                <ul>
                    <li>
                        <Link to="/"><span class="bold">00</span> Home</Link>
                    </li>
                    <li>
                        <Link to="/destination"><span class="bold">01</span> Destination</Link>
                    </li>
                    <li>
                        <Link to="/crew"><span class="bold">02</span> Crew</Link>
                    </li>
                    <li>
                        <Link to="/technology"><span class="bold">03</span> Technology</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}