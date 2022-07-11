import logo from '../assets/shared/logo.svg';
import './Header.scss';

export const Header = (props) => {

    return (
        <header className="header">
            {/* Site Logo */}
            <div className="header__logo">
                <img src={logo} alt="site logo" />
            </div> {/* END header__logo */}

            {/* Header Nav */}
            <nav className="header__nav">
                <ul>
                    <li className={props.currentPage === "home" ? "current" : ""}>
                        <button type="button" onClick={props.handleNavClick} value="home">
                            <span className="bold">00</span>Home
                        </button>
                    </li>
                    <li className={props.currentPage === "destination" ? "current" : ""}>
                        <button type="button" onClick={props.handleNavClick} value="destination">
                            <span className="bold">01</span>Destination
                        </button>
                    </li>
                    <li className={props.currentPage === "crew" ? "current" : ""}>
                        <button type="button" onClick={props.handleNavClick} value="crew">
                            <span className="bold">02</span>Crew
                        </button>
                    </li>
                    <li className={props.currentPage === "technology" ? "current" : ""}>
                        <button type="button" onClick={props.handleNavClick} value="technology">
                            <span className="bold">03</span>Technology
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}