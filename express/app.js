import express from "express";
import {Port} from "./env.js";
import path from "path";

const app= express();


//ye use hua h pure html and css ke file ko send krne ke liye

app.use(express.static("public"));




//  app.get("/",(req,res)=>res.send("HELLO LEARNERS!!"));
//  app.get("/about",(req,res)=>res.send("HELLO LEARNERS learn about EXPRESS!!"));


app.get("/",(req,res)=>{
  // console.log(__dirname);
  // console.log(__filename);

  // console.log(import.meta.dirname);

  // const __filename=new URL(import.meta.url).pathname
  // console.log(__filename);


  const homePagePath=path.join(import.meta.dirname,"public","index.html");
  
  res.sendFile(homePagePath);

})




// console.log(process)

//  const Port =3000;
// const Port=process.env.Port|| 3001;

 app.listen(Port, ()=>{console.log(`server is running on port number ${Port} 🤣`)})