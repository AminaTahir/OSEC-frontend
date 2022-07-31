import React, { Component } from 'react';
import Question from './question/Question';
import Answer from './answer/Answer';

import './QuizMain.css';

export default class Quiz2 extends Component {

    // initiating the local state
    state = {
        quiestions: {
            1: '1.SI unit of power is"?',
            2: '2.Electric pressure of power is',
            3: '3.1m of air at atmospherric condition weighs approximately?',
            4: '4.The capacity of a compressor is 15m/mih.5m/min refers to?',
            5: '5.Pascal-second is the unit of?',
            6: '6.viscosity of a gas is ?',
            7: '7.The type of air cycle used in diesel engineis called?',
            8: '8.During compression stroke the air is compressed according to?',
            9: '9.Father of X-ray Technology?',
            10: '10.Universal Turing machine (UTM) influenced the concept of ?',
        },
        answers: {
            1: {
                1: 'Henery',
                2: 'coulomb',
                3: 'watt',
                4: 'watt-hour'
            },
            2: {
                1: 'resistance',
                2: 'power',
                3: 'voltage',
                4:'energy'
            },
            3: {
                1: ' 0.5kg',
                2: '1.0kg',
                3: '2.2kg',
                4:'1.3kg'
            },
            4: {
                1: 'standard air',
                2: 'free air',
                3: 'compressed air',
                4:' air sucked'
            },
            5: {
                1: 'pressure',
                2: 'kinematics viscosity',
                3: 'dynamic viscosity',
                4:'surface tension'
            },
            6: {
                1: 'decrease with incresae in temperature',
                2: 'increase with increase in temperature',
                3: 'independent of temperature',
                4:'dependent of temperature'
            },
            7: {
                1: 'Otto cycle',
                2: 'Carnot cycle',
                3: 'Diesel cycle',
                4:'Rankine cycle'
            },
            8: {
                1: 'Isothermal process',
                2: 'hyperpoblic process',
                3: 'Adiabatic process',
                4:' Constant pressure process'
            },
            9: {
                1: 'Walter Rohlfsen',
                2: 'Wilhelm Xavier',
                3: ' Wilhelm Roengten',
                4:'Wilhelm Xander'
            },
            10: {
                1: 'computability',
                2: 'interperative implementation of programming language',
                3: 'program and data is in same memory',
                4:'all are correct'
            }
        },
        correctAnswers: {
            1: '3',
            2: '3',
            3: '4',
            4: '2',
            5: '3',
            6: '2',
            7: '3',
            8: '3',
            9: '3',
            10: '4'
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }

    // the method that checks the correct answer
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if (answer === correctAnswers[step]) {
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        } else {
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }

    // method to move to the next question
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }

    render() {
        let { quiestions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
        return (
            <div className="Content">
                <div className="content-wrapper">
                {step <= Object.keys(quiestions).length ?
                    (<>
                        <Question
                            question={quiestions[step]}
                        />
                        <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
                        <button
                            className="NextStep"
                            disabled={
                                clickedAnswer && Object.keys(quiestions).length >= step
                                    ? false : true
                            }
                            onClick={() => this.nextStep(step)}>Next</button>
                    </>) : (
                        <div className="finalPage">
                            <p>You have completed the quiz!</p>
                            <p>Your score is: {score} of {Object.keys(quiestions).length}</p>
                            <p>Thank you!</p>
                        </div>
                    )
                }
            </div>
            </div>
        );
    }
}