import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import SignIn from "./components/sign-in-up/SignIn";
import SignUp from "./components/sign-in-up/SignUp";
import Quiz from './components/QuizMain';
import Dash from "./components/dash";
import Quiz1 from './components/Quiz1';
import Quiz2 from './components/Quiz2';
import Quiz3 from './components/Quiz3';
import Quiz4 from './components/Quiz4';
import Quiz5 from './components/Quiz5';
import  Course from "./components/Course";
import Personality from "./Personality";
import Chatbot from "./components/chatbot";
import Ads from "./components/ads";





//import About from"./components/About"
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/Quiz" element={<Quiz />} />
       <Route path="/dash" element={<Dash />} />
        <Route path="/Quiz1" element={<Quiz1 />} />
        <Route path="/Quiz2" element={<Quiz2 />} />
        <Route path="/Quiz3" element={<Quiz3 />} />
        <Route path="/Quiz4" element={<Quiz4 />} />
        <Route path="/Quiz5" element={<Quiz5 />} />
        <Route path="/Course" element={<Course />} />
        <Route path="/Personality" element={<Personality />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/ads" element={<Ads/>} />
        
       
      </Routes>
    </Router>
  );
}

export default App;
