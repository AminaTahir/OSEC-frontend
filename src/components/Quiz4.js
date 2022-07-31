import React, { Component } from 'react';
import Question from './question/Question';
import Answer from './answer/Answer';

import './QuizMain.css';

export default class Quiz4 extends Component {

    // initiating the local state
    state = {
        quiestions: {
            1: '1.Management deals with"?',
            2: '2.According to Mary Parker an art of getting things done through others?',
            3: '3.Management functions include?',
            4: '4.Management skills applies to managers at?',
            5: '5.grouping of jobs?',
            6: '6.Managerial skills involves?',
            7: '7.Strategy is developed by the visionary chief executive in which mode of strategic management?',
            8: '8.What are the means by which long term objectives will be achieved?',
            9: '9.Finding ways to reduce is a key responsibility of management?',
            10: '10.Human Resource Management is ?',
        },
        answers: {
            1: {
                1: 'internal environment',
                2: 'external environment',
                3: 'both internal and external environment',
                4: 'None of the above'
            },
            2: {
                1: 'Job',
                2: 'Behaviour',
                3: 'Management',
                4:'Both A & B'
            },
            3: {
                1: 'planning & organizing ',
                2: 'directing',
                3: 'controlling',
                4:'All of the above'
            },
            4: {
                1: 'Middle levels in an organization',
                2: 'Top levels in an organization',
                3: 'Executive levels in an organization',
                4:'All levels in an organization'
            },
            5: {
                1: 'organising',
                2: 'directing',
                3: 'planning',
                4:'controlling'
            },
            6: {
                1: 'technical skills',
                2: 'human skills',
                3: 'conceptual skills',
                4:'all of the above'
            },
            7: {
                1: 'planning mode',
                2: 'adaptive mode',
                3: 'strategic mode',
                4:'entrepreneurial mode'
            },
            8: {
                1: 'strategies',
                2: 'policies',
                3: 'strength',
                4:' opportunities'
            },
            9: {
                1: 'Dissatisfaction',
                2:' Uncertainty',
                3: ' Stress',
                4:'None of above'
            },
            10: {
                1: 'A staff function',
                2: 'A line function',
                3: 'Accounting function',
                4:'None of above'
            }
        },
        correctAnswers: {
            1: '3',
            2: '3',
            3: '4',
            4: '4',
            5: '1',
            6: '4',
            7: '4',
            8: '1',
            9: '2',
            10: '1'
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