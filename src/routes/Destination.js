import { useState } from 'react';

import { Header } from '../common/Header';

import './destination.scss';
import moonImg from '../assets/destination/image-moon.webp';
import marsImg from '../assets/destination/image-mars.webp';
import europaImg from '../assets/destination/image-europa.webp';
import titanImg from '../assets/destination/image-titan.webp';

export const Destination = () => {
    const [destination, setDestination] = useState({
        name: "moon",
        description: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
        regain perspective and come back refreshed. While you’re there, take in some history
        by visiting the Luna 2 and Apollo 11 landing sites.`,
        distance: "384,400 km",
        travelTime: "3 days",
        imageSrc: moonImg,
        alt: "Earth's moon"
    });

    const destinations = {
        moon: {
            name: "moon",
            description: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
            regain perspective and come back refreshed. While you’re there, take in some history
            by visiting the Luna 2 and Apollo 11 landing sites.`,
            distance: "384,400 km",
            travelTime: "3 days",
            imageSrc: moonImg,
            alt: "Earth's moon"
        },
        mars: {
            name: "mars",
            description: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
            the tallest planetary mountain in our solar system. It’s two and a half times 
            the size of Everest!`,
            distance: "225 mil. km",
            travelTime: "9 months",
            imageSrc: marsImg,
            alt: "the planet Mars"
        },
        europa: {
            name: "europa",
            description: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
            winter lover’s dream. With an icy surface, it’s perfect for a bit of 
            ice skating, curling, hockey, or simple relaxation in your snug 
            wintery cabin.`,
            distance: "628 mil. km",
            travelTime: "3 years",
            imageSrc: europaImg,
            alt: "Europa, one of Jupiter's moons"
        },
        titan: {
            name: "titan",
            description: `The only moon known to have a dense atmosphere other than Earth, Titan 
            is a home away from home (just a few hundred degrees colder!). As a 
            bonus, you get striking views of the Rings of Saturn.`,
            distance: "1.6 bil. km",
            travelTime: "7 years",
            imageSrc: titanImg,
            alt: "Titan, one of Saturn's moons"
        }
    }

    const handleDestinationClick = ({ target }) => {
        const name = target.value;
        
        setDestination(destinations[name]);
    }

    return (
        <div className="bg bg--destination">
            <Header />
            <main className="destination">
                <div className="wrapper">

                    <h5 className="destination__heading"><span className="bold">01</span>Pick your destination</h5>
                
                    <section className="destination__content">
                        <div className="destination__img-container">
                            <img src={destination.imageSrc} alt={destination.alt} />
                        </div>
                        <div className="destination__text-container">
                            <nav className="destination__nav">
                                <ul>
                                    <li><button className={destination.name === "moon" ? "nav-btn active" : "nav-btn"} value="moon" onClick={handleDestinationClick}>Moon</button></li>
                                    <li><button className={destination.name === "mars" ? "nav-btn active" : "nav-btn"} value="mars" onClick={handleDestinationClick}>Mars</button></li>
                                    <li><button className={destination.name === "europa" ? "nav-btn active" : "nav-btn"} value="europa" onClick={handleDestinationClick}>Europa</button></li>
                                    <li><button className={destination.name === "titan" ? "nav-btn active" : "nav-btn"} value="titan" onClick={handleDestinationClick}>Titan</button></li>
                                </ul>
                            </nav>
                            <h2 className="destination__name">{destination.name}</h2>
                            <p className="destination__description">{destination.description}</p>
                            <hr />
                            <div className="destination__travel-info-container">
                                <div className="destination__travel-info">
                                    <p className="subheading subheading--two">Avg. distance</p>
                                    <p className="subheading subheading--one">{destination.distance}</p>
                                </div> {/* END destination__travel-info */}
                                <div className="destination__travel-info">
                                    <p className="subheading subheading--two">Est. travel time</p>
                                    <p className="subheading subheading--one">{destination.travelTime}</p>
                                </div> {/* END destination__travel-info */}
                            </div> {/* END destination__travel-info-container */}
                        </div> {/* END destination__text-container */}
                    </section>

                </div> {/* END wrapper */}
            </main>
        </div>
    );
}