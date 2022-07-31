import React from 'react'
import { Link } from 'react-router-dom'
import './Course.css';





export default function Course() {
    return (

        <div className="Course">

            <div className='Courses'>

                <div  ><br /><br /><br /><br /><br /><br />



                    <Link to="/Quiz" style={{ color: 'White', fontSize: '25px' }} >

                        Computer Science

                    </Link><br /><br />
                    <div>
                        { /* https://engineeringinterviewquestions.com/medical-science-objective-questions-and-answers/*/}

                        <Link to="/Quiz1" style={{ color: 'White', fontSize: '25px' }}>

                            Medical Science

                        </Link><br /><br />
                    </div>

                    <div>

                        {/*https://engineeringinterviewquestions.com/multiple-choice-questions-for-engineering-competitive-exams/*/}

                        <Link to="/Quiz2" style={{ color: 'White', fontSize: '25px' }}>

                            Engineering

                        </Link><br /><br />
                    </div>

                    <div>
                        {/*https://engineeringinterviewquestions.com/mcqs-on-differentiability-answers/*/}

                        {/*https://pinoybix.org/2015/08/mcqs-in-integral-calculus-part1.html*/}

                        <Link to="/Quiz3" style={{ color: 'White', fontSize: '25px' }}>

                            Mathematics

                        </Link><br /><br />
                    </div>

                    <div>
                        {/*https://www.indiaclass.com/principles-of-management-mcq/*/}
                        {/*https://www.examveda.com/management/practice-mcq-question-on-management-information-system-(mis)/ */}




                        <Link to="/Quiz4" style={{ color: 'white', fontSize: '25px' }}>

                            Management

                        </Link><br /><br />
                    </div>


                    <div>
                        {/*https://www.javatpoint.com/psychology-mcq*/}
                        <Link to="/Quiz5" style={{ color: 'white', fontSize: '25px' }}>

                            Psychology

                        </Link><br /><br />
                    </div>
                </div>






            </div>



        </div>
    )
}