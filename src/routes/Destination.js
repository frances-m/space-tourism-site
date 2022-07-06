import { useState } from 'react';

import { Header } from '../common/Header';

import './destination.scss';
import moonImg from '../assets/destination/image-moon.webp';

export const Destination = () => {
    const [destination, setDestination] = useState({
        name: "Moon",
        description: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
        regain perspective and come back refreshed. While you’re there, take in some history
        by visiting the Luna 2 and Apollo 11 landing sites.`,
        distance: "384,400 km",
        travelTime: "3 days",
        imageSrc: moonImg 
    });

    return (
        <div className="bg bg--destination">
            <Header />
            <main className="destination">
            <div className="wrapper">
                <h5 className="destination__heading"><span className="bold">01</span>Pick your destination</h5>
            </div> {/* END wrapper */}
            <img src={destination.imageSrc} />
            </main>
        </div>
    );
}