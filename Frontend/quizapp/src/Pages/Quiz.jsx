import React, { useState } from "react";
import logo from "../assets/logo.png";
import axios from "axios";
import Groq from "groq-sdk";
import QnPage from "./QnPage";
import upload from '../assets/upload.png'
import magic from "../assets/magic.png"
import Header from "../Components/Header";

const Quiz = ({setScore}) => {
  const [questions, setQuestions] = useState([]); // State to store fetched questions
  const [loading, setLoading] = useState(false); // State to show loading status

  const apik = "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";
  const groq = new Groq({ apiKey: apik, dangerouslyAllowBrowser: true });
var er2=0;




const [file, setFile] = useState(null);
const [imgurl,setimgurl]=useState("https://res.cloudinary.com/dupp39abx/image/upload/v1735120286/oops.jpg_qluhqt.png");
const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      if (!selectedFile.type.startsWith("image/")) {
        alert("Please upload a valid image file (e.g., .png, .jpg, .jpeg).");
        setFile(null);
        return;
      }
      
      setFile(selectedFile);
    }
  };


  

  const handleUploadClick = async() => {
    if (!file) {
      alert("Please select an image file to upload.");
      return;
    }
    try{
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "ZQuizzy");
      formData.append("cloud_name","dupp39abx" );
      const res =await axios.post("https://api.cloudinary.com/v1_1/dupp39abx/image/upload",formData)
        console.log(res.data.url);
      alert(res.data.url);
      setimgurl(res.data.url);
      console.log(imgurl);

    }
    catch{
alert("Failed")
    }
    
  };



  const handlefetch = async () => {
    try {
      setLoading(true);

      const chatCompletion = await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: " You are a quiz JSON generator.Generate 10 MCQ Strict JSON format without any extra lines or explanation.. Each question should include:- A 'questionString'.- Four 'options' as an array of strings and- The 'correct_option'  (0-based).Return only the data between [ and ] in valid JSON format.Your response should be like : ''questions':[{'questionString':'','options':'','correct_option'}]' ",
              },
              {
                type: "image_url",
                image_url: {
                  url: imgurl,
                },
              },
            ],
          },
        ],
        model: "llama-3.2-11b-vision-preview",
        temperature: 1,
        max_tokens: 1024,
        top_p: 1,
        stream: false,
        "response_format": {
          "type": "json_object"
        },
        stop: null,
      });

    //  console.log(chatCompletion.choices[0].message.content);
      const mcqData = JSON.parse(chatCompletion.choices[0].message.content);
      setQuestions(mcqData.questions);
      console.log(questions);
      console.log(questions.length);
      

    } catch (error) {
      console.log(error);
      er2=er2+1;
      if(er2<=2)
        handlefetch();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div >
      <Header/>

{questions.length<=0 &&(<div className="upload-page" data-aos="zoom-in-down">
  <h1 style={{textAlign:'center'}}>Upload the Image File</h1>

        <div data-aos="flip-left" data-aos-delay="300" className="upload-container">
          <img className='uploadicon' src={upload}/>
        <label htmlFor="file-upload" className="file-upload-label">
        Click in this area to Browse Files Or Drag & drop files here, 
          <input
            id="file-upload"
            type="file"
           accept="image/*"
            onChange={handleFileChange}
            className="file-input"
          />
        </label>
       
      </div>

      {file  && (
        <div className="file-list">
          <h4>Files to upload:</h4>
         
            <div  className="file-item">
              {file.name}
            </div>
         
        </div>
      )}
      {uploadProgress > 0 && (
        <div className="progress-bar">
          <div
            className="progresss"
            style={{ width: `${uploadProgress}%` }}
          ></div>
        </div>
      )}
      <div className="btnset" data-aos="zoom-out-up" data-aos-delay="500">
      <button className="upload-button" onClick={handleUploadClick}>
      Upload Image and Generate Quiz<img src={magic} className="magicicon"/>
        </button>
        <button className="upload-button fetch" onClick={handlefetch}>Fetch </button>
        </div>

     

</div>) }








      
   
      {loading && (
        <div className="container loading">
          <div className="loader"></div>
        </div>
      )}

      <div>
        {questions.length > 0 && (
          // <ul>
          //   {questions.map((q, index) => (
          //     <li key={index}>
          //       <p>
          //         <strong>Question {index + 1}:</strong> {q.questionString}
          //       </p>
          //       <ul>
          //         {q.options.map((option, i) => (
          //           <li key={i}>{option}</li>
          //         ))}
          //       </ul>
          //       <p>
          //         <em>Correct Answer:</em> {q.options[q.correct_option]}
          //       </p>
          //     </li>
          //   ))}
          // </ul>


         <QnPage setScore={setScore} questions={questions}/>
        )}
      </div>
    </div>
  );
};

export default Quiz;
