import { useState } from 'react';
import { Header } from '../common/Header';

import './technology.scss';

import launchVehiclePortrait from '../assets/technology/image-launch-vehicle-portrait.jpg';
import spaceportPortrait from '../assets/technology/image-spaceport-portrait.jpg';
import spaceCapsulePortrait from '../assets/technology/image-space-capsule-portrait.jpg';

const technology = {
    launchVehicle: {
        title: "launch vehicle",
        description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        imageSrc: launchVehiclePortrait,
        alt: "launch vehicle during take off"
    },
    spaceport: {
        title: "spaceport",
        description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        imageSrc: spaceportPortrait,
        alt: "a spaceport"
    },
    spaceCapsule: {
        title: "space capsule",
        description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        imageSrc: spaceCapsulePortrait,
        alt: "a space capsule floating in space"
    }
}

export const Technology = () => {
    const [selectedTechnology, setSelectedTechnology] = useState(technology.launchVehicle);

    const handleTechnologyClick = ({ currentTarget }) => {
        console.log(currentTarget);
        const title = currentTarget.value;
        console.log(title);

        setSelectedTechnology(technology[title]);
    }

    return (
        <div className="bg bg--technology">
            <Header />
            <main className="technology">
                <div className="wrapper">
                    <h5><span className="bold">03</span>Space Launch 101</h5>
                    <section className="technology__content">
                        <div className="technology__btn-container">
                            <button
                                type="button"
                                className={selectedTechnology.title === "launch vehicle" ? "active-btn" : ""}
                                onClick={handleTechnologyClick}
                                value="launchVehicle"
                                aria-label="change technology displayed: launch vehicle">
                                    <h4>1</h4>
                            </button>
                            <button
                                type="button"
                                className={selectedTechnology.title === "spaceport" ? "active-btn" : ""}
                                onClick={handleTechnologyClick}
                                value="spaceport"
                                aria-label="change technology displayed: spaceport">
                                    <h4>2</h4>
                            </button>
                            <button
                                type="button"
                                className={selectedTechnology.title === "space capsule" ? "active-btn" : ""}
                                onClick={handleTechnologyClick}
                                value="spaceCapsule"
                                aria-label="change technology displayed: space capsule">
                                    <h4>3</h4>
                            </button>
                        </div>
                        <div className="technology__text-container">
                            <p className="nav-text">The Terminology...</p>
                            <h3>{selectedTechnology.title}</h3>
                            <p>{selectedTechnology.description}</p>
                        </div>
                    </section>
                    <div className="technology__img-container">
                        <img src={selectedTechnology.imageSrc} alt={selectedTechnology.alt} />
                    </div>
                </div> {/* END wrapper */}
            </main>
        </div>
    );
}