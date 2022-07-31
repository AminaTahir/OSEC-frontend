import React, { Component } from 'react';
import Question from './question/Question';
import Answer from './answer/Answer';

import './QuizMain.css';

export default class Quiz5 extends Component {

    // initiating the local state
    state = {
        quiestions: {
            1: '1.Where the word "psychology" does come from"?',
            2: '2.Psychology is said to be the scientific study of?',
            3: '3.Psychology is a?',
            4: '4.Who is the father of Experimental psychology?',
            5: '5.Which of the following part of the brain sends signals "alert" to the higher centers in response to incoming messages?',
            6: '6.Psychophysics is a study of?',
            7: '7.Which of the following is an example of the negative attitude towards people?',
            8: '8.Which of the following part of the brain is responsible for transferring short-term memory to long-term memory?',
            9: '9.Different people often react differently to the same situations. In psychology, it is referred to as?',
            10: '10.From the list of below options, which does not contribute in memory?',
        },
        answers: {
            1: {
                1: 'Italian',
                2: 'Greek',
                3: 'Latin',
                4: 'None of the above'
            },
            2: {
                1: 'Behavior, mental processes',
                2: 'Mental illness, Mental health',
                3: 'Physical states, mental states',
                4:'None of the above'
            },
            3: {
                1: 'Biological science ',
                2: 'Physical science',
                3: 'Social science',
                4:'Natural science'
            },
            4: {
                1: 'Wilhelm Wundt',
                2: 'Jung',
                3: 'Sigmund Freud',
                4:'None of the above'
            },
            5: {
                1: 'Reticular formation',
                2: 'Hippocampus',
                3: 'Limbic system',
                4:'Amygdala'
            },
            6: {
                1: 'Perception illness',
                2: 'Movement perception',
                3: 'Psychological perception or physical stimuli',
                4:'None of the above'
            },
            7: {
                1: 'Stereotype',
                2: 'Prototype',
                3: 'Prejudice ',
                4:'Discrimination'
            },
            8: {
                1: 'Cerebellum',
                2: 'Hippocampus',
                3: 'Amygdala',
                4:'None of the above '
            },
            9: {
                1: 'Some rest after learning',
                2: ' Gender',
                3: ' Goal behind learning',
                4:'Interesting learning material'
            },
            10: {
                1: 'Nativism',
                2: 'Individual differences',
                3: 'Multiple determinants',
                4:'None of the above'
            }
        },
        correctAnswers: {
            1: '2',
            2: '1',
            3: '3',
            4: '1',
            5: '1',
            6: '3',
            7: '3',
            8: '2',
            9: '2',
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