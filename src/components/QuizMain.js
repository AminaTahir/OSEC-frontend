import React, { Component } from 'react';
import Question from './question/Question';
import Answer from './answer/Answer';
import './QuizMain.css';

export default class Quiz extends Component {

    // initiating the local state
    state = {
        quiestions: {
            1: '1.Who invented C++"?',
            2: '2.What is C++?',
            3: '3.Which of the following is the correct syntax of including a user defined header files in C++?',
            4: '4.Which of the following is used for comments in C++?',
            5: '5.Which of the following user-defined header file extension used in c++?',
            6: '6.Which of the following is a correct identifier in C++?',
            7: '7.Which of the following is not a type of Constructor in C++?',
            8: '8.Which of the following approach is used by C++?',
            9: '9.What is virtual inheritance in C++?',
            10: '10.Which of the following correctly declares an array in C++?',
        },
        answers: {
            1: {
                1: 'Dennis Ritchie',
                2: 'Ken Thompson',
                3: 'Brian Kernighan',
                4: 'Bjarne Stroustrup'
            },
            2: {
                1: 'object oriented programming language',
                2: 'procedural programming language',
                3: 'procedural and object oriented programming language',
                4: 'a functional programming language'
            },
            3: {
                1: ' #include [userdefined]',
                2: '#include “userdefined”',
                3: '#include <userdefined.h>',
                4: '#include <userdefined>'
            },
            4: {
                1: '/* comment */',
                2: '// comment */',
                3: '// comment',
                4: 'both // comment or /* comment */'
            },
            5: {
                1: 'hg',
                2: 'cpp',
                3: 'h',
                4: 'hf'
            },
            6: {
                1: 'VAR_1234',
                2: '$var_name',
                3: '7VARNAME',
                4: '7var_name'
            },
            7: {
                1: 'Default constructor',
                2: 'Parameterized constructor',
                3: ' Copy constructor',
                4: 'Friend constructor'
            },
            8: {
                1: 'Left-right',
                2: 'Right-left',
                3: 'Bottom-up',
                4: ' Top-down'
            },
            9: {
                1: 'technique to enhance multiple inheritance',
                2: ' technique to ensure that a private member of the base class can be accessed somehow',
                3: ' technique to avoid multiple inheritances of classes',
                4: 'technique to avoid multiple copies of the base class into children/derived class'
            },
            10: {
                1: 'array{10};',
                2: 'array array[10];',
                3: 'int array;',
                4: 'int array[10];'
            }
        },
        correctAnswers: {
            1: '4',
            2: '3',
            3: '2',
            4: '4',
            5: '3',
            6: '1',
            7: '4',
            8: '3',
            9: '4',
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