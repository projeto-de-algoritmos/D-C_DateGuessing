import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Date from '../assets/date.png'
import './index.css';
import { months } from '../utils/months';

let upperDayLimit = 32;
let lowerDayLimit = 1;
let upperMonthLimit = 12;
let lowerMonthLimit = 1;
let upperYearLimit = 2100;
let lowerYearLimit = 1990;

const Home = () => {
    const [medianaDate, setMedianaDate] = useState({
        year: Math.trunc((upperYearLimit + lowerYearLimit) / 2),
        month: Math.ceil((upperMonthLimit + lowerMonthLimit) / 2),
        day: Math.ceil((upperDayLimit + lowerDayLimit) / 2),
    });
    const [rightDate, setRightDate] = useState(false);
    const [count, setCount] = useState(0);

    const handleInitialValues = () => {
        setCount(0);
        setRightDate(false);
        window.location.reload();
    }
    const handleUpperLimit = (type) => {
        if (type === 'day') {
            console.log("mediana", medianaDate)
            lowerDayLimit = medianaDate.day;
            setMedianaDate(prevState => ({ ...prevState, day: Math.trunc((upperDayLimit + lowerDayLimit) / 2) }))
        }
        if (type === 'month') {
            lowerMonthLimit = medianaDate.month;
            setMedianaDate(prevState => ({ ...prevState, month: Math.ceil((upperMonthLimit + lowerMonthLimit) / 2) }))
        }
        if (type === 'year') {
            lowerYearLimit = medianaDate.year;
            setMedianaDate(prevState => ({ ...prevState, year: Math.ceil((upperYearLimit + lowerYearLimit) / 2) }))
        }
        setCount(count + 1);
    }

    const handlelowerLimit = (type) => {

        if (type === 'day') {
            upperDayLimit = medianaDate.day;
            setMedianaDate(prevState => ({ ...prevState, day: Math.trunc((upperDayLimit + lowerDayLimit) / 2) }))
        }
        if (type === 'month') {
            upperMonthLimit = medianaDate.month;
            setMedianaDate(prevState => ({ ...prevState, month: Math.trunc((upperMonthLimit + lowerMonthLimit) / 2) }))
        }
        if (type === 'year') {
            upperYearLimit = medianaDate.year;
            setMedianaDate(prevState => ({ ...prevState, year: Math.trunc((upperYearLimit + lowerYearLimit) / 2) }))
        }
        setCount(count + 1);
    }

    const handleMonth = () => {
        const currentMont = (months.find(m => m.num === medianaDate.month)).nome;
        return currentMont
    }

    const handleCorrectDate = () => {
        setRightDate(true);
    }

    return (
        <div className="home-container centraliza">
            <div className="home-main centraliza mb-5">
                <div className="home-header">
                    <h1>Date Guessing <img src={Date} alt="Date img" width="40px" /></h1>
                    <p>Pense em uma data entre as datas 1 de Janeiro 1990 até 31 de dezembro de 2100 que iremos adivinhar.</p>
                    {rightDate && <Alert variant='success' className="centraliza">
                        Chegamos a data correta! Foram necessárias {count} tentativas.
                    </Alert>}
                </div>
                <div className="home-content centraliza pt-3 mt-3">
                    <h2 className="pt-4">Nosso Palpite</h2>
                    <div className="home-content-date mt-4">
                        <div className="row label centraliza">
                            <div className="col-4 centraliza">Dia</div>
                            <div className="col-4 centraliza">Mês</div>
                            <div className="col-4 centraliza">Ano</div>
                        </div>
                        <div className="row date centraliza">
                            <div className="col-4 centraliza date-card">
                                <div className="row centraliza">
                                    <div className="col-7 day">
                                        {medianaDate.day}
                                    </div>
                                    <div className="col-5">
                                        <button id="previous" onClick={() => handlelowerLimit('day')}> Anterior</button>
                                        <button id="next" onClick={() => handleUpperLimit('day')}> Posterior</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 centraliza date-card">
                                <div className="row centraliza">
                                    <div className="col-7 month">
                                        {handleMonth()}
                                    </div>
                                    <div className="col-5">
                                        <button id="previous" onClick={() => handlelowerLimit('month')}> Anterior</button>
                                        <button id="next" onClick={() => handleUpperLimit('month')}> Posterior</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 centraliza date-card">
                                <div className="row centraliza">
                                    <div className="col-7 year">
                                        {medianaDate.year}
                                    </div>
                                    <div className="col-5">
                                        <button id="previous" onClick={() => handlelowerLimit('year')}> Anterior</button>
                                        <button id="next" onClick={() => handleUpperLimit('year')}> Posterior</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home-content-buttons centraliza mt-5">
                        <div className="home-content-buttons-interactive">
                            <button id="right" className="final-button" onClick={() => handleCorrectDate()}> Finalizar</button>
                            <button id="reset" className="final-button" onClick={() => handleInitialValues()}> Reiniciar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;