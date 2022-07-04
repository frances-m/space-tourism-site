import { Link } from "react-router-dom";

import logo from '../assets/shared/logo.svg';

import './Header.scss';

export const Header = () => {
    return (
        <header>
            {/* Site Logo */}
            <img src={logo} alt="site logo" />

            <nav>
                <ul>
                    <li>
                        <Link to="/"><em>00</em> Home</Link>
                    </li>
                    <li>
                        <Link to="/destination"><em>01</em> Destination</Link>
                    </li>
                    <li>
                        <Link to="/crew"><em>02</em> Crew</Link>
                    </li>
                    <li>
                        <Link to="/technology"><em>03</em> Technology</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}