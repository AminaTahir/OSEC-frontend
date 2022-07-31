import React from 'react'
//import { Link } from 'react-router-dom'
import { Data } from "./Data";
import './dash.css';
import { Link } from 'react-router-dom';



function Dash() {

    return (
        <div className="main img">
     
            <div className="dash">
              <div className='head'><h1><b>O</b>line<b>S</b>tudent<br/><b>E</b>ducational<b><br/>C</b>ounseling</h1></div>
        
                <ul className='dash1'>
                 
                    {Data.map((val, key) => {
                        return (
                            <Link to={val.Link}>
                                <li key={key}
                                    className="row"

                                >


                                    <div >{val.icon}</div>{""}
                                    <div>
                                        {val.title}
                                    </div>

                                </li>
                            </Link>
                        );


                    })}
                </ul>


            </div>
            
         
        </div>
    );

}


export default Dash;



