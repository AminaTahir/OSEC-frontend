import React, { Component } from 'react';
import Question from './question/Question';
import Answer from './answer/Answer';

import './QuizMain.css';
export default class Quiz3 extends Component {

    // initiating the local state
    state = {
        quiestions: {
            1: '1.derivative of f(x)=sin(x^2)"?',
            2: '2.derivative of x^n?',
            3: '3.value of (frac{dy}{dx}) if x-y=1?',
            4: '4.derivative of tan(x+4)?',
            5: '5.value after differentiating cos(x^2+5)?',
            6: '6.integral of (3t - 1)^3 dt?',
            7: '7.Evaluate the integral of dx / (x + 2) from -6 to -10.?',
            8: '8.What is the integral of sin5 x cos3 x dx if the lower limit is zero and the upper limit is π/2?',
            9: '9.What is the integral of sin5 x dx if the lower limit is 0 and the upper limit is π/2?',
            10: '10.Evaluate the integral of ((x dx) / (x + 1)8) from 0 to 1?',
        },
        answers: {
            1: {
                1: '-sin(x^2)',
                2: '2xcos(x^2)',
                3: '-2xcos(x^2)',
                4: '-2xsin(x^2)'
            },
            2: {
                1: 'n',
                2: 'nx^n',
                3: 'nx^n-1',
                4:'nx^n-2'
            },
            3: {
                1: ' 1',
                2: '2',
                3: '-1',
                4:'2'
            },
            4: {
                1: 'sec^2(x+4)',
                2: '4sec^2(x+4)',
                3: '4xsec^2(x+4)',
                4:'sec^2(x)'
            },
            5: {
                1: '5sin(x^2+5)',
                2: '-sin(x^2+5)2x',
                3: 'sin(x^2+5)2x',
                4:'cos(x^2+5)2x'
            },
            6: {
                1: '(1/12)(3t - 1)^4 + C',
                2: '(1/12)(3t - 4)^4 + C',
                3: '(1/4)(3t - 1)^4 + C',
                4:'(1/4)(3t - 1)^3 + C'
            },
            7: {
                1: '21/2',
                2: '1/2',
                3: 'ln 3',
                4:'ln 2'
            },
            8: {
                1: '0.0203',
                2: '0.0307',
                3: '0.0417',
                4:'0.0543 '
            },
            9: {
                1: '0.233',
                2: '0.333',
                3: ' 0.433',
                4:'0.533'
            },
            10: {
                1: '0.011',
                2: '0.022',
                3: '0.033',
                4:'0.044'
            }
        },
        correctAnswers: {
            1: '2',
            2: '3',
            3: '1',
            4: '1',
            5: '2',
            6: '1',
            7: '4',
            8: '3',
            9: '4',
            10: '2'
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