import React from 'react';

import '../styles/pages/landing.css';
import { FiArrowRight } from 'react-icons/fi';
import logoimg from '../images/logo.svg';
import background from '../images/landing.svg'
import { Link } from 'react-router-dom';


function Landing() {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
            <div className="background">
            <img src={background} alt="Wallpaper" className="img-background" />
            </div>
                <img src={logoimg} alt="Happy" />

                <main className="main">
                    <h1>Leve felicidade para o mundo</h1>
                    <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                </main>

                <div className="location">
                    <strong>Brasília</strong>
                    <span>Distrito Federal</span>
                </div>

                <Link to="/app" className="enter-app">
                    <FiArrowRight size={26} color="rbga(0, 0, 0, 0.6)" />
                </Link>
            </div>

        </div>
    );

}

export default Landing;