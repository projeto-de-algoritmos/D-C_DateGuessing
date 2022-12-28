import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import moment from 'moment';
import Date from '../assets/date.png'
import './index.css';

const upperLimit = {
    year: 2030,
    month: 12,
    day: 31
};
const lowerLimit = {
    year: 2000,
    month: 12,
    day: 31
};

const Home = () => {
    const [date, setDate] = useState({
        year: null,
        month: null,
        day: null
    });
    const [rightDate, setRightDate] = useState(false);

    useEffect(() => {
        handleInitialValues();
    }, []);

    const handleInitialValues = () => {
        const currentDate = moment();
        setDate({
            year: currentDate.year(),
            month: currentDate.month(),
            day: currentDate.date()
        });
        setRightDate(false);
    }

    const handleUpperLimit = () => {
        const sumOfDatesYear = moment(`${upperLimit.year}-${upperLimit.month}-${upperLimit.day}`).add(date.year, 'years');
        console.log("sumOfDatesYear0", sumOfDatesYear.date(), sumOfDatesYear.month(), sumOfDatesYear.year())
        const sumOfDatesMonth = moment(`${sumOfDatesYear.year()}-${sumOfDatesYear.month()}-${sumOfDatesYear.day()}`).add(date.month, 'months');
        console.log("sumOfDatesYear1",sumOfDatesMonth.date(), sumOfDatesMonth.month(), sumOfDatesMonth.year())
        const sumOfDatesDays = moment(`${sumOfDatesMonth.year()}-${sumOfDatesMonth.month()}-${sumOfDatesMonth.day()}`).add(date.day, 'days');
        console.log("sumOfDatesYear2", sumOfDatesDays.date(), sumOfDatesDays.month(), sumOfDatesDays.year())
        setDate({
            year: sumOfDatesDays.year(),
            month: sumOfDatesDays.month(),
            day: sumOfDatesDays.date()
        });
    }

    const handlelowerLimit = () => {

    }

    const handleCorrectDate = () => {
        setRightDate(true);
    }

    const currentDate = moment();

    return (
        <div className="home-container centraliza">
            <div className="home-main centraliza mb-5">
                <div className="home-header">
                    <h1>Date Guessing <img src={Date} alt="Date img" width="40px" /></h1>
                    <p>Pense em uma data entre os anos 2000 e 2100 que iremos adivinhar.</p>
                    {rightDate && <Alert variant='success' className="centraliza">
                        Chegamos a data correta! Foram necessárias 10 tentativas.
                    </Alert>}
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
                            <div className="col-md-4 col-12 centraliza">{date.day}</div>
                            <div className="col-md-4 col-12 centraliza">{date.month}</div>
                            <div className="col-md-4 col-12 centraliza">{date.year}</div>
                        </div>
                    </div>
                    <div className="home-content-buttons centraliza mt-5">
                        <div className="home-content-buttons-interactive">
                            <button id="previous"> Anterior</button>
                            <button id="next" onClick={() => handleUpperLimit()}> Posterior</button>
                        </div>
                        <div className="home-content-buttons-interactive">
                            <button id="right" onClick={() => handleCorrectDate()}> Acertou</button>
                            <button id="reset" onClick={() => handleInitialValues()}> Zerar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;