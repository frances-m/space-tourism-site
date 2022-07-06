import { Link } from "react-router-dom";

import logo from '../assets/shared/logo.svg';

import './Header.scss';

export const Header = () => {
    const currentPage = window.location.pathname;

    return (
        <header className="header">
            {/* Site Logo */}
            <div className="header__logo">
                <img src={logo} alt="site logo" />
            </div> {/* END header__logo */}

            {/* Header Nav */}
            <nav className="header__nav">
                <ul>
                    <li className={currentPage === "/" ? "current" : ""}>
                        <Link to="/"><span className="bold">00</span>Home</Link>
                    </li>
                    <li className={currentPage === "/destination" ? "current" : ""}>
                        <Link to="/destination"><span className="bold">01</span>Destination</Link>
                    </li>
                    <li className={currentPage === "/crew" ? "current" : ""}>
                        <Link to="/crew"><span className="bold">02</span>Crew</Link>
                    </li>
                    <li className={currentPage === "/technology" ? "current" : ""}>
                        <Link to="/technology"><span className="bold">03</span>Technology</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}