import mysql from "mysql2/promise";

// 1: to connect to mysql Server

const db= await mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"Nidhi@1610",
   database:"mysql",

});

console.log("MySQL Server is connected 🔥");


// 2: we need to create a db

//  await  db.execute(`create database mysql`);
//  console.log( await db.execute(`show databases`));



// 3: then we to create a table

// await db.execute(
//   ` 
//    CREATE TABLE WORKER (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     username VARCHAR(100) NOT NULL,
//     email VARCHAR(100) NOT NULL UNIQUE
// );   
//   `);





// 4: is to perform CRUD operations

  // insert 
  //! using inline values (NOt recommeded)

  //  await db.execute(`
  //    insert into WORKER(username, email) values("prasadbobby", "prasadbobby@gmail.com");
    
  //   `);

 //* Using prepared statement(Best Practices);

//  await db.execute(`
//      insert into WORKER(username, email) values(?,?)
    
//     `,["nidhi","nidhi@gmail.com"]);


// const values = [
//   ["nidhiiii", "nidhiii@gmail.com"],
//   ["maurya", "maurya@gmail.com"],
//   ["kamal", "kamal@gmail.com"],
//   ["rjnish", "rjnish@gmail.com"],
//   ["nilesh", "nilesh@gmail.com"],
// ];

// await db.query("INSERT INTO WORKER (username, email) VALUES ?", [values]);


  //! READ 

const [rows] = await db.execute(`select * from WORKER`);

//  const [rows]= await db.execute(`
//     select * from WORKER where username="rjnish";
//     `);

     console.log(rows);


// ! update 
// ? Syntax

// UPDATE table_name 
// SET column1=value1,value2= value2,...
// WHERE condition;


// try {
//   const [rows] = await db.execute(
//     "UPDATE WORKER SET username = 'rjnishMaurya' WHERE email = 'rjnish@gmail.com'"
//   );
//   console.log("Updated User:", rows);
// } catch (error) {
//   console.log("Error:", error);
// }




//! DELETE 
  // ? Syntax
    // DELETE FROM table_name
    // WHERE condition;


//    try {
//   const [rows] = await db.execute(
//     "DELETE FROM WORKER  WHERE email = 'maurya@gmail.com'"
//   );
//   console.log("All User:", rows);
// } catch (error) {
//   console.log("Error:", error);
// }