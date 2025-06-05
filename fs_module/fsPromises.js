const fs=require("fs");

const path=require("path");

const fileName="fsPromises.txt";

const filePath=path.join(__dirname,fileName);


//why .then() and .catch()?

//? .then()ensures clear chaining of multiple asynchronous operations.

//?  .catch() centralizes error handling , making it easy to debug and manage failures.

// =======FILE WRITE USING PROMISE======


// ? syntax :fs.promises.writeFile(path,data,option).then().catch();
//? path: path to the file;
//? data :content to write.
//? options : encoding ('utf8'),flags,etc.(optional).


// fs.promises.writeFile(filePath,"This is intial Data","utf-8")
// .then(console.log("file created successfully"))
// .catch((err)=>console.log(err))


// =============== READ FILE=========

// syntax: fs.promises.readFile(path,options).then().catch();



// fs.promises.readFile(filePath,"utf-8")
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err))


// =======UPDATED DATA========

// syntax: fs.promises.appendFile(path,data,options).then().catch();






// fs.promises.appendFile(filePath,"\n This is updated data")
// .then(console.log("data updated successfully"))
// .catch((err)=>console.log(err));


//===========DELETE FILE==========

fs.promises.unlink(filePath)
.then(console.log("data deleted successfully"))
.catch((err)=>console.log(err)) 