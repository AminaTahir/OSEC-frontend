import React, { Component } from 'react';
import Question from './question/Question';
import Answer from './answer/Answer';
import './QuizMain.css';

export default class Quiz1 extends Component {

    // initiating the local state
    state = {
        quiestions: {
            1: '1.Regarding serratus anterior muscle which is incorrect ?',
            2: '2.The treatment of choice for atticoantral variety of chronic suppurative otitis media is?',
            3: '3.All of the following are the complications in the new born of a diabetic mother except?',
            4: '4.The correct line of management in child who has swallowed a coin is?',
            5: '5.Helper cells belong to?',
            6: '6.Mac Ewens triangle can be felt through the?',
            7: '7.Most common strain of E.coil giving rise to travellers diarrhoea is?',
            8: '8.With urine turning green on ferric chloride test, the diagnosis is?',
            9: '9.For assessing the ability of protein utilisation the best index is?',
            10: '10.Screening test is not useful when?',
        },
        answers: {
            1: {
                1: 'Multipinnate muscle ',
                2: 'Lifts arm above the shoulder ',
                3: 'Supplied by long thoracic nerve ',
                4: 'Originates from lower eight ribs '
            },
            2: {
                1: 'Mastoidectomy ',
                2: 'Medical management ',
                3: 'Underlay myringoplasty ',
                4:'Insertion of ventilation tube'
            },
            3: {
                1: ' Hyperbilirubinemia',
                2: 'Hyperglycemia ',
                3: 'Hypocalcemia',
                4:'Hypomagnesemia'
            },
            4: {
                1: 'Fiber optic endoscopy ',
                2: 'Rigid endoscopy ',
                3: 'Laparotomy ',
                4:'Wait and Watch'
            },
            5: {
                1: 'T cells ',
                2: 'Macrophages ',
                3: 'cells ',
                4:'Monocytes'
            },
            6: {
                1: 'Superior conchae ',
                2: 'Cymba conchae ',
                3: '. Middle conchae ',
                4:'Posterior part of auricle '
            },
            7: {
                1: 'Entero-invasive E.coil',
                2: 'Entero-pathogenic E.coil',
                3: 'Entero-toxigenic E.coil',
                4:'Entero-aggregative E.coil'
            },
            8: {
                1: 'Phenylketonuria ',
                2: 'Alkaptonuria',
                3: 'Multiple carboxylase deficiency ',
                4:'Glutaric aciduria'
            },
            9: {
                1: 'Urea',
                2: ' Uric acid ',
                3: ' Blood ammonia ',
                4:'Urinary nitrogen content'
            },
            10: {
                1: 'Incidence of the disease ',
                2: 'Incidence is low in the community ',
                3: '. Early detection leads to favorable outcome ',
                4:'The disease has a lead time'
            }
        },
        correctAnswers: {
            1: '4',
            2: '1',
            3: '2',
            4: '4',
            5: '1',
            6: '2',
            7: '3',
            8: '1',
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