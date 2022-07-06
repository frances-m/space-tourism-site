import { Header } from './common/Header';

import './app.scss';

function App() {
    return (
        <div className="bg bg--home">
            <Header />
            <main className="home">
                <div className="wrapper">
                    <div className="home__text-container">
                        <h5>So, you want to travel to</h5>
                        <h1>Space</h1>
                        <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
                        outer space and not hover kind of on the edge of it. Well sit back, and relax 
                        because we’ll give you a truly out of this world experience!</p>
                    </div> {/* END home__text */}
                    <div className="home__btn-container">
                        <button><h4>Explore</h4></button>
                    </div>
                </div> {/* END wrapper */}
            </main>
        </div>
    );
}

export default App;
