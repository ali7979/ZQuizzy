const express = require('express');
const pdfParse=require("pdf-parse")
const mongoose = require('mongoose');
const fileupload =require("express-fileupload");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(fileupload());

app.get('/', (req,res) => {
    // Sample response data
    res.send("zzz")
})

app.post("/extract-text",(req,res)=>{
    if(!req.files && !req.files.pdffile)
    {
        res.status(400);
        res.end();
    }
    pdfParse(req.files.pdffile).then(result=>{
        res.send(result.text);
    })

})

app.listen(process.env.PORT || 5000, () => {
    console.log('Server running on port', process.env.PORT || 5000);
  });