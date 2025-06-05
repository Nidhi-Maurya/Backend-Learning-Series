const fs=require("fs");
const path=require("path");

const fileName="fsAsyncAwait.txt";

const filePath=path.join(__dirname,fileName);

// const filePath1=__dirname;
// const readFolder=async()=>{
//   try {
//     const res=await  fs.promises.readdir(filePath1)
//     console.log(res)
    
//   } catch (error) {
//     console.log(err);
    
//   }
  
// }

// readFolder();


// === WRITE FILE USING ASYNC AWAIT =====

// syntax: fsPromises.writeFile(path,DataTransfer,options);



const writeFolder= async()=>{
 try {
  const res=await fs.promises.writeFile(filePath,"THIS IS INITIAL DATA","utf-8")
  console.log("file created successfully");
  
 } catch (error) {
  console.log(error);
  
 }
}

writeFolder();



// =========================== READ DATA=========

// const readFile=async()=>{
//   try {
//     const res=await fs.promises.readFile(filePath,"utf-8");
//     console.log(res);
    
//   } catch (error) {
//     console.log(error);
    
//   }
// }
// readFile();




// ==========  UPDATED DATA========

// const updateFile= async()=>{
//   try {
//     await fs.promises.appendFile(filePath,"\n THIS IS UPDATED DATA","utf-8" );
//     console.log("data updated successfully");
//   } catch (error) {
//     console.log(error);
    
//   }
// }

// updateFile();



// =================DELETE FILE=====


// const deleteFile=async()=>{
//   try {
//   await  fs.promises.unlink(filePath)
//   console.log("file Deleted Successffully");
  
    
//   } catch (error) {
//     console.log(error);
    
//   }
// }
// deleteFile()