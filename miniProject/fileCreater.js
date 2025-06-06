import readline from "readline";
import fs from "fs";

const rl= readline.createInterface({
  input:process.stdin,
  output:process.stdout
})

const fileCreation=()=>{
  rl.question("Enter your fileName:",(filename)=>{
    rl.question("Enter the content for your file:",(content)=>{
      fs.writeFile(`${filename}.txt`,content,(err)=>{
        if(err){
          console.error(`Error writing the file`);
        }else {
          console.log(` file ${filename}.txt created successfully !!`)
        }
        rl.close()

      })

    })
    
  })
}
fileCreation();