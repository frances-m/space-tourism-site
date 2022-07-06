import { useState } from 'react';

import { Header } from '../common/Header';

import './destination.scss';

export const Destination = () => {
    const [planet, setPlanet] = useState();

    return (
        <div className="bg bg--destination">
            <Header />
            <div className="wrapper">

            </div> {/* END wrapper */}
        </div>
    );
}