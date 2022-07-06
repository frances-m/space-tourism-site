import { useState } from 'react';

import { Header } from '../common/Header';

import commanderImg from '../assets/crew/image-douglas-hurley.webp';
import specialistImg from '../assets/crew/image-mark-shuttleworth.webp';
import pilotImg from '../assets/crew/image-victor-glover.webp';
import engineerImg from '../assets/crew/image-anousheh-ansari.webp';
import './crew.scss';

const crew = {
    commander: {
        title: "commander",
        name: "Douglas Hurley",
        bio: `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
        and former NASA astronaut. He launched into space for the third time as 
        commander of Crew Dragon Demo-2.`,
        imageSrc: commanderImg,
        alt: "photo of Douglas Hurley"
    },
    specialist: {
        title: "mission specialist",
        name: "Mark Shuttleworth",
        bio: `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
        the Linux-based Ubuntu operating system. Shuttleworth became the first South 
        African to travel to space as a space tourist.`,
        imageSrc: specialistImg,
        alt: "photo of Mark Shuttleworth"
    },
    pilot: {
        title: "pilot",
        name: "Victor Glover",
        bio: `Pilot on the first operational flight of the SpaceX Crew Dragon to the 
        International Space Station. Glover is a commander in the U.S. Navy where 
        he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
        station systems flight engineer.`,
        imageSrc: pilotImg,
        alt: "photo of Victor Glover"
    },
    engineer: {
        title: "flight engineer",
        name: "Anousheh Ansari",
        bio: `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
        Ansari was the fourth self-funded space tourist, the first self-funded woman to 
        fly to the ISS, and the first Iranian in space.`,
        imageSrc: engineerImg,
        alt: "photo of Anousheh Ansari"
    }
}

export const Crew = () => {
    const [crewMember, setCrewMember] = useState(crew.commander);

    const handleCrewClick = ({ target }) => {
        const title = target.value;
        
        setCrewMember(crew[title]);
    }

    return (
        <div className="bg bg--crew">
            <Header />
            <main class="crew">
                <div className="wrapper">
                    <section className="crew__content">
                        <div className="crew__text-container">
                            <h5><span className="bold">02</span>Meet your crew</h5>

                            <h4>{crewMember.title}</h4>
                            <h3>{crewMember.name}</h3>
                            <p>{crewMember.bio}</p>

                            <div className="crew__btn-container">
                                <button 
                                    className={crewMember.title === "commander" ? "active-btn" : ""} 
                                    onClick={handleCrewClick} 
                                    value="commander" 
                                    aria-label="change crew member displayed: Commander Douglas Hurley">
                                </button>

                                <button 
                                    className={crewMember.title === "mission specialist" ? "active-btn" : ""} 
                                    onClick={handleCrewClick} 
                                    value="specialist" 
                                    aria-label="change crew member displayed: Mission Specialist Mark Shuttleworth">
                                </button>
                                
                                <button 
                                    className={crewMember.title === "pilot" ? "active-btn" : ""} 
                                    onClick={handleCrewClick} 
                                    value="pilot" 
                                    aria-label="change crew member displayed: Pilot Victor Glover">
                                </button>

                                <button 
                                    className={crewMember.title === "flight engineer" ? "active-btn" : ""}
                                    onClick={handleCrewClick} 
                                    value="engineer" 
                                    aria-label="change crew member displayed: Flight Engineer Anousheh Ansari">
                                </button>
                            </div> {/* END crew__btn-container */}
                        </div> {/* END crew__text-container */}
                        <div className="crew__img-container">
                            <img className={`crew__img--${crewMember.title}`} src={crewMember.imageSrc} alt={crewMember.alt} />
                        </div>
                    </section>
                </div> {/* END wrapper */}
            </main>
        </div>
    );
}