import React, { useState } from 'react'
import axios from 'axios'
import './chatbot.css';
export default function Chatbot() {
    const [result, setresult] = useState();
    const [messages, setmessages] = useState([]);
    const [question, setquestion] = useState("");
    async function bot() {
        const data=new FormData();
        data.append("question",question);
        const response = await axios.post("http://127.0.0.1:8888/chatbot", data);
        setresult(response.data.response);
        const arr={
            question,result:response.data.response
        };
      
    
        setmessages((old)=>[...old,arr])
    };
    function sendbutton(){
        bot();
    }
    
    return (
     <div class="image"> 
        <div class="c1" >
            <div className='c2'>
            <h1><b>Welcome</b> to Online Student Education Counseling System</h1>
            </div>
           
            <br />
            <hr />
            <br />

            <div class="row">
                <div class="col-lg-9">
                    <input class="form-control" type="text" name="question" id="question" onChange={(e)=>setquestion(e.target.value)} />
                </div>
                <div class="col-lg-3">
                    <button class="btn btn-primary btn-block" id="submit-button" onClick={()=>sendbutton()}>Send</button>
                </div>
            </div>
            <br />
            <div class="row">
                <div class="col">
                    {messages.map((m,i)=>(
                         <p key={i} id="response">Me:{m.question} <br/> bot:{m.result}</p>
                    ))}
                    
                </div>
            </div>

        </div>

    </div>

    )
}
