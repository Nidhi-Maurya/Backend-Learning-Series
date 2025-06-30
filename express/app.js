import express from "express";
import {Port} from "./env.js";
import path from "path";

const app= express();




// data get krne ke taritka

// const response= await fetch("https://api.github.com/users/learn-academy-initiative/repos");
// const json=await response.json();
// console.log(staticPath);

console.log(import.meta.dirname);
console.log(import.meta.filename);





//ye use hua h pure html and css ke file ko send krne ke liye

// app.use(express.static("public"));
 const staticPath=path.join(import.meta.dirname,"public");
 app.use(express.static(staticPath));

// query parameter page

// app.get("/product",(req,res)=>{
//   console.log(req.query);
//   res.send (`<h1>User search  for product ${req.query.search}  page</h1>`)
// })









 app.get("/profile/:username",(req,res)=>{
  console.log(req.params);
  res.send(`<h1>Helo my name is ${req.params.username} </h1>`)
 })

 app.get("/profile/:username/article/:slug",(req,res)=>{
  console.log(req.params);
  res.send(`<h1> Article ${req.params.slug} by ${req.params.username} </h1>`)
 })






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