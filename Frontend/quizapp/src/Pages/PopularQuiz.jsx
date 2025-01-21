import React from 'react'
import Header from '../Components/Header'
import Groq from "groq-sdk";
import QnPage from './QnPage';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import magic from "../assets/magicwand.png";


const PopularQuiz = ({setScore}) => {

    const { topic } = useParams();
const [questions, setQuestions] = useState([]); // State to store fetched questions
  const [loading, setLoading] = useState(false); // State to show loading status

  const apik = "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";
  const groq = new Groq({ apiKey: apik, dangerouslyAllowBrowser: true });

  var er2=0;


  


const generate=async()=>{
    setLoading(true); 
    try{
        const chatCompletion = await groq.chat.completions.create({
            "messages": [
              {
                "role": "system",
                "content": "Generate 10 MCQ questions . Each question should include:- A 'questionString'.- Four 'options' as an array of strings and- The 'correct_option'  (0-based).Your response should be in valid JSON.Your response should be like : ''questions':[{'questionString':'','options':'','correct_option'},...]', Questions should be included from the Topic  :"  + topic   },
      
                {
                  "role":"user",
                  "content":"Topic: "+topic,
                }
            ],
            "model": "gemma2-9b-it",
            "temperature": 1,
            "max_tokens": 1024,
            "top_p": 1,
            "stream": false,
            "response_format": {
              "type": "json_object"
            },
            "stop": null
          });
        
           console.log(chatCompletion.choices[0].message.content);
           const data=JSON.parse(chatCompletion.choices[0].message.content);
           console.log(data.questions);
           setQuestions(data.questions || data.quiz || data.data || data.items || data)
        
    }
    catch(error){
        console.log(error);
      er2=er2+1;
      if(er2<=2)
        handlepdf();
      else{
        alert("File either too long or incorrect")
        
      }
      

    }
    finally {
        setLoading(false);
      }
}

    
  return (
    <div>
        <Header/>
        {loading && (
        <div className="container loading">
          <div className="loader"></div>
        </div>
      )}
               {/* {questions.length > 0 &&  <QnPage setScore={setScore} questions={questions}/>} */}
               <h1 style={{textTransform:'capitalize',textAlign:'center'}}>{topic.replace(/-/g, ' ').toLowerCase()} </h1>
               <hr style={{width:'40%',border:'2px #47a6e6 solid',borderRadius:'50%'}}/>
             {questions.length <= 0?<div className='bx'><button className='gbtn' onClick={generate}><img className="magiciconn" src={magic}/> Generate Quiz</button></div>:""}  
               <div>
         {questions.length > 0 &&  <QnPage setScore={setScore} questions={questions}/>
     }
     </div>
    </div>
  )
}

export default PopularQuiz
