


import https from  'https';
import chalk from 'chalk';


const getJoke=()=>{
  const url="https://v2.jokeapi.dev/joke/Any";
   https.get(url,(res)=>{
    let data="";
    res.on('data',(chunk)=>{
      data+=chunk;
    });
     res.on('end',()=>{
       const joke=JSON.parse(data);
      
      
      console.log(`Here is a random ${joke.type} joke:`)
      console.log(chalk.green(`${joke.setup}`));
      // 
    

     })

     res.on('error',(err)=>{
      console.error(`Error fetching the joke, ${err.message}`)
     })

   })
}





getJoke();
