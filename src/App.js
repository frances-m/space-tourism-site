import { useState } from 'react';

import { Header } from './common/Header';
import { Home } from './components/Home';
import { Destination } from './components/Destination';
import { Crew } from './components/Crew';
import { Technology } from './components/Technology';



function App() {
    const [displayPage, setDisplayPage] = useState("home");

    const handleNavClick = ({ currentTarget }) => {
        setDisplayPage(currentTarget.value);
    }

    return (
        <div className={`bg bg--${displayPage}`}>
            <Header handleNavClick={handleNavClick} currentPage={displayPage} />
            {displayPage === "home" ? <Home /> : null}
            {displayPage === "destination" ? <Destination /> : null}
            {displayPage === "crew" ? <Crew /> : null}
            {displayPage === "technology" ? <Technology /> : null}
        </div>
    );
}

export default App;
