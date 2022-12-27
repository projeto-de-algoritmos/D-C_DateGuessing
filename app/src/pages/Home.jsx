import React from 'react';
import Date from '../assets/date.png'
import './index.css';

const Home = () => {
    return (
        <div className="home-container centraliza">
            <div className="home-main centraliza mb-5">
                <div className="home-header">
                    <h1>Date Guessing <img src={Date} alt="Date img" width="40px"/></h1>
                    <p>Pense em uma data entre os anos 2000 e 2100 que iremos adivinhar.</p>
                </div>
                <div className="home-content centraliza pt-3 mt-3">
                    <h2 className="pt-4">Nosso Palpite</h2>
                    <div className="home-content-date mt-4">
                        <div className="row label centraliza">
                            <div className="col-md-4 col-12 centraliza">Dia</div>
                            <div className="col-md-4 col-12 centraliza">Mês</div>
                            <div className="col-md-4 col-12 centraliza">Ano</div>
                        </div>
                        <div className="row date centraliza">
                            <div className="col-md-4 col-12 centraliza">17</div>
                            <div className="col-md-4 col-12 centraliza">Dezembro</div>
                            <div className="col-md-4 col-12 centraliza">2005</div>
                        </div>
                    </div>
                    <div className="home-content-buttons centraliza mt-5">
                        <div className="home-content-buttons-interactive">
                            <button id="previous"> Anterior</button>
                            <button id="next"> Posterior</button>
                        </div>
                        <div className="home-content-buttons-interactive">
                            <button id="right"> Acertou</button>
                            <button id="reset"> Zerar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;