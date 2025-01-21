import React, { useState } from "react";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";

const QnPage = ({setScore,questions}) => {
  // State to track the current question index and selected option
  const [currentQuestion, setCurrentQuestion] = useState(0);
//  const [score, setScore] = useState(0);
  const navigate = useNavigate();
const qn=JSON.stringify(questions)
console.log(qn)
  // Sample questions
  // const questions = [
  //   {
  //     question: "Corporate Social Responsibility (CSR) can generate a positive reputation for a company leading to possibly more sales and growth",
  //     options: [
  //       "A) It does not affect company profits ",
  //       "B) It has no impact on company sales and growth ",
  //       "C) It improves consumer sales as customers tend to support ethical green business practice thus improving profitability and encouraging growth.",
  //       "D) It does not affect company sales and growth"
  //    ],
  //     correctAnswer: "It improves consumer sales as customers tend to support ethical green business practice thus improving profitability and encouraging growth",
  //   },
  //   {
  //     question: "What is the largest planet in the solar system?",
  //     options: ["Earth", "Jupiter", "Mars", "Venus"],
  //     correctAnswer: "Earth",
  //   },
  //   {
  //       question: "What is the capital of France?",
  //       options: ["New York", "Paris", "London", "Tokyo"],
  //       correctAnswer: "Paris",
  //     },
  //     {
  //       question: "What is AAdav?",
  //       options: ["New York", "Paris", "London", "Tokyo"],
  //       correctAnswer: "Paris",
  //     },
  //     {
  //       question: "What is the capital of Aadav?",
  //       options: ["New York", "Paris", "London", "Tokyo"],
  //       correctAnswer: "Paris",
  //     },
  // ];





  const [selectedOptions, setSelectedOptions] = useState(new Array(questions.length).fill(null));


  // Handler for Next and Previous buttons
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
        
      setCurrentQuestion(currentQuestion + 1);
      //setSelectedOption(null); // Reset selected option for the next question
      console.log(selectedOptions);
    }
   
  };

  const handleFinish = () =>{
    const score=calculateScore();
    setScore(score);
    navigate("/submit");
    
  }

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null); // Reset selected option for the previous question
    }
  };


  const calculateScore = () => {
    return selectedOptions.reduce((score, option, index) => {
      return option === questions[index].options[questions[index].correct_option] ? score + 1 : score;
    }, 0);
  };

  // Handler for selecting an option
  const handleOptionChange = (option) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentQuestion] = option;
    setSelectedOptions(updatedOptions);
  };

  
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
<>
    <div className="Questionbox" >
      {/* Progress bar */}
      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            height: "10px",
            background: "#e0e0e0",
            borderRadius: "30px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              background: "#000",
              height: "100%",
              transition: "width 0.5s",
            }}
          >
            
          </div>
        </div>
        <p style={{ marginTop: "10px", fontSize: "14px" }}>
          Question {currentQuestion + 1} of {questions.length}
        </p>
      </div>

      {/* Question */}
      <h2 style={{ marginBottom: "20px" }}>
        {questions[currentQuestion].questionString}
      </h2>

      {/* Options */}
      <div>
        {questions[currentQuestion].options.map((option, index) => (
          <div
            key={index}
            style={{
              marginBottom: "10px",
              border: "1px solid #e0e0e0",
              borderRadius: "5px",
              padding: "10px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              background: selectedOptions[currentQuestion] === option ? "#db86ea12" : "#fff",
            }}
            onClick={() => handleOptionChange(option)}
          >
            <input
              type="radio"
              name={`question-${currentQuestion}`}    //groups all the 4 options to that particular qn 
              checked={selectedOptions[currentQuestion] === option}
              onChange={() => handleOptionChange(option)}
              style={{ marginRight: "10px" }}
            />
            {option}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between" }}>
        <button
          onClick={handlePrev}
          disabled={currentQuestion === 0}
          style={{
            padding: "10px 20px",
            background: "#e0e0e0",
            border: "none",
            borderRadius: "5px",
            cursor: currentQuestion === 0 ? "not-allowed" : "pointer",
          }}
        >
          Previous
        </button>
        <button
          onClick={currentQuestion === questions.length - 1 ? handleFinish : handleNext}
         
          style={{
            padding: "10px 20px",
            background: "#47a6e6",
            color: "#000",
            border: "none",
            borderRadius: "5px",
            cursor:  "pointer",
          }}
        >
      {currentQuestion === questions.length - 1 ? "Finish" : "Next"} 
        </button>
      </div>
    </div>
    </>
  );
};

export default QnPage;
