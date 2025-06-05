const fs=require("fs");

const path=require("path");

const fileName="file.txt"
const  filePath=path.join(__dirname,fileName);


//  WRITE FILE SYNC

//  syntax : fs.writeFileSync(filePath,data,options);




// const writeFile=fs.writeFileSync(filePath,"Hello Mauryajii 1610","utf-8");

// console.log(writeFile)
// console.log(filePath)


//+++++++READ FILE SYNC+++++++

// const readFile=fs.readFileSync(filePath,"utf-8");


// console.log(readFile);
// console.log(readFile.toJSON());
// console.log(readFile.toString());
// console.log(readFile.toLocaleString());


//+++++++APPEND FILE SYNC+++++++


// const appendFile=fs.appendFileSync(filePath,"\nHello NIDHI MAURYA JII","utf-8");
// console.log(appendFile);



//+++++++==DELETE FILE SYNC+++++++

// const deleteFile=fs.unlinkSync(filePath);

// console.log(deleteFile)



// RENAME FILE NAME


const updatedFileName="updated.text"
const newFilePath=path.join(__dirname,up)

const renameFile=fs.renameSync(filePath,updatedFileName);

console.log(renameFile)

