 export const Port=isNaN(process.env.Port)? 3000:parseInt (process.env.Port);

import {z} from "zod";

// const ageSchema=z.number().min(18).max(75).int();

// const userAge=14;

// // const parseUserAge=ageSchema.parse(userAge);
// // console.log(parseUserAge);


// try {
//   const parsedUserAge=ageSchema.parse(userAge);
//   console.log(parsedUserAge);
  
// } catch (error) {
//   if(error instanceof ZodError){
//     console.log(error.issues[0].message);
//   }else{
//     console.log("Unexpected error :",error)
//   }
  
// }

const portSchema=z.coerce.number().min(1).max(65535).default(3000);

const PORT= portSchema.parse(process.env.Port);