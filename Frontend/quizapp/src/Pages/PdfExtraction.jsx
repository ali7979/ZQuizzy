import React, { useState } from 'react'
import Groq from "groq-sdk";
import Header from '../Components/Header';
import magic from "../assets/magic.png"
import pdf from "../assets/pdf.png"
import QnPage from "./QnPage";


const PdfExtraction = ({setScore}) => {

const inpfile=document.getElementById("inpf");

const [content,setContent]=useState([]);
const [questions, setQuestions] = useState([]); // State to store fetched questions
  const [loading, setLoading] = useState(false); // State to show loading status
  const [file, setFile] = useState(null); // New state for file

  const apik = "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";
  const groq = new Groq({ apiKey: apik, dangerouslyAllowBrowser: true });

  var er2=0;

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // if (!selectedFile.type.startsWith("pdf/")) {
      //   alert("Please upload a valid pdf file (e.g : .pdf");
      //   setFile(null);
      //   return;
      // }
      
      setFile(selectedFile);
    }
    else{
            alert("Please upload a valid pdf file (e.g : .pdf");
            setFile(null);
    }

  };

const handlepdf= async() =>{
  if (!file) {
    alert("Please upload a valid PDF file.");
    return;
  }

  setLoading(true); 
  
  try {
    const extractedContent = await parsepdf();
    if (!extractedContent) {
      throw new Error("No content extracted from the PDF.");
    }

    console.log(extractedContent);
    
    
  

    console.log(extractedContent.toString());
   // const contentt=content.toString();
    const chatCompletion = await groq.chat.completions.create({
      "messages": [
        {
          "role": "system",
          "content": "Generate 10 MCQ questions . Each question should include:- A 'questionString'.- Four 'options' as an array of strings and- The 'correct_option'  (0-based).Your response should be in valid JSON.Your response should be like : ''questions':[{'questionString':'','options':'','correct_option'},...]', Questions should be included from the content given  :"     },

          {
            "role":"user",
            "content":extractedContent,
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
  
 } catch (error) {
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





async function parsepdf()
{
    if (!file) {
        alert('No file selected');
        return ;
      }
  
     try{
      const formData = new FormData();
      formData.append('pdffile', file);
  

      const response = await fetch("http://localhost:5000/extract-text", {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error("Failed to extract text from the PDF.");
      }
  
      const extractedText = await response.text();
      return extractedText.toString();
    } catch (error) {
      console.error(error);
      alert("Error in parsing file");
      return null;
    }

}



  return (
    <div >
      <Header/>





{questions.length<=0 &&(<div className="upload-page" data-aos="zoom-in-down">
  <h1 style={{textAlign:'center'}}>Upload the Pdf File</h1>

        <div data-aos="flip-left" data-aos-delay="300" className="upload-container">
          <img className='uploadicon' src={pdf}/>
        <label htmlFor="file-upload" className="file-upload-label">
        Click in this area to Browse Files Or Drag & drop files here, 
          <input
            id="file-upload"
            type="file"
           accept="application/pdf"
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
      
      <div className="btnset" data-aos="zoom-out-up" data-aos-delay="500">
      <button className="upload-button" onClick={handlepdf}>
      Upload Pdf and Generate Quiz<img src={magic} className="magicicon"/>
        </button>
        </div>

     

</div>

) }






      {/* <button onClick={parsepdf}>Parse</button>
      <button onClick={handlepdf}>JSON response from AI</button> */}
      {loading && (
        <div className="container loading">
          <div className="loader"></div>
        </div>
      )}

      <div>
         {questions.length > 0 &&  <QnPage setScore={setScore} questions={questions}/>
        /*(
          <ul>
            {questions.map((q, index) => (
              <li key={index}>
                <p>
                  <strong>Question {index + 1}:</strong> {q.questionString}
                </p>
                <ul>
                  {q.options.map((option, i) => (
                    <li key={i}>{option}</li>
                  ))}
                </ul>
                <p>
                  <em>Correct Answer:</em> {q.options[q.correct_option]}
                </p>
              </li>
            ))}
          </ul>
        )} */
         

        
        }
      </div>
    </div>
  )
}

export default PdfExtraction
