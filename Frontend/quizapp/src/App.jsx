import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Quiz from './Pages/Quiz';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css'
import PdfExtraction from './Pages/PdfExtraction';
import QnPage from './Pages/QnPage';
import Submit from './Pages/Submit';
import PopularQuiz from './Pages/PopularQuiz';

function App() {

  const [score, setScore] = useState(0);

  return(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz setScore={setScore}/>} />
      <Route path="/pdf" element={<PdfExtraction setScore={setScore}/>} />
      <Route path="/pquiz/:topic" element={<PopularQuiz setScore={setScore}/>} />

      <Route path="/qnpage" element={<QnPage setScore={setScore}/>} />
      <Route path="/submit" element={<Submit score={score} />} />


    </Routes>
  </Router>
  );
  
  
}

export default App
