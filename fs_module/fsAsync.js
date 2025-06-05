const fs = require("fs");
const path = require("path");

const fileName = "fsAsync.txt";

const filePath = path.join(__dirname, fileName);

// +++WRITEFILE USING ASYNC+++++
// syntax :fs.writeFile(filePath,data,options , callbacks);

// path :file path to write to.
// data: connect to write.
// options:optional. Specifies encoding ('utf 8'), mode,or flag.
// callback:A function with an err parameter.

const writeFile= fs.writeFile(filePath,"This is Initial File","utf-8",(err)=>{
  if(err) console.error(err);
  else console.log("file have been saved");
})

// +++++++++++++READ FILE+++++++

//  Syntax: fs.readFile(path,options,callback);

// const readFile= fs.readFile(filePath,"utf-8",(err,data)=>{
//   if(err) console.log(err)
//     else console.log(data);

// })
 
// ==========UPDATE FILE===========

// Syntax : fs.appendFile(filedata,data, optional, callback);

// const updateFile=fs.appendFile(filePath, "\n NIDHI MAURYA","utf-8",(err)=>{
//   if(err) console.log(err)
//     else console.log("File Updated SuccessFully !!");
// })

// ==============DELETE FILE==========

// syntax : fs.unlink(filePath,optional,callback)


// const deleteFile=fs.unlink(filePath,(err)=>{
//   if(err) console.log(err)
//     else console.log("file Deleted Successfully!!");
// })