import { eq } from 'drizzle-orm';
import { db } from './config/db.js';
import { usersTable } from './drizzle/schema.js';

const main =async()=>{

// !  INSERT DATA

// const insertUser = await db.insert(usersTable).values({name:'Nidhi',age:16,email:'nidhi@gmail.com'});

// !insertin multiple data
// const insertUser = await db.insert(usersTable).values([
//   {name:"maurya",age:"21",email:"maurya@gmail.com"},
//   {name:"srgm",age:"22",email:"srgm@gmail.com"},
//   {
//     name:'khushi',age:"23",email:"khushi@gmail.com"
//   }
// ]);

// console.log(insertUser);

//! READ OPERATION

// const reaedUser =await db.select().from(usersTable)

//! read unique data

// const reaedUser =await db.select().from(usersTable).where({email:'nidhi@gmail.com'});

// console.log(reaedUser);



//! UPDATE OPERATION
// const updatedUser = await db.update(usersTable).set({name:'NIDHIMAURYA'}).where({email:'nidhi@gmail.com'});


//? RECOMMMED UPDATE OPERATION
// const updatedUser = await db.update(usersTable).set({name:'NIDHIIMAURYA'}).where(eq(usersTable.email,'nidhi@gmail.com'));



// console.log(updatedUser);


// ! DELETE OPERATION

const deleteUser = await db.delete(usersTable).where({email:'nidhi@gmail.com'});

console.log(deleteUser);

}
main().catch((error)=>{
  console.log(error); 
});