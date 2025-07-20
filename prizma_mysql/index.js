import { PrismaClient } from "./generated/prisma/index.js";

const prisma = new PrismaClient();

const main = async () => {
  // Create a new user
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Nidhi",
  //     email: "nidhi@gmail.com"
  //   }
  // });

  // console.log(user);

// ? MULTIPLE USER 
// const newUser = await prisma.user.createMany({
//     data: [
  
//     {
//       name:"Rjnish",
//       email:"rjnish@gmail.com"
//     },
//     {
//       name:"khushi",
//       email:"khushi@gmail.com"
//     },
//     {
//       name:"nilesh",
//       email:"nilesh@gmail.com"}
//     ]
  
//   });

//   console.log(newUser);


// ? Read (Fetch Data)
// ? Get All Users

// const allUsers=await prisma.user.findMany();
// console.log(allUsers);


// ? Get Single User
// const user=await prisma.user.findUnique({
//   where:{
//     email:"rjnish@gmail.com"
//   }
// });

// console.log(user);


// ! Get user with Filtering

// const user=await prisma.user.findUnique({
//   where:{
//    name:"nilesh"
//   }
// });

// console.log(user);


// ! UPDATE USER
// const updateUser=await prisma.user.update({
//   where:{
//     email:"rjnish@gmail.com"
//   },
//   data:{
//     name:"Rjnish Maurya "
//   }
// });
// console.log(updateUser);



// ! DELETE USER
const deleteUser = await prisma.user.delete({
  where:{
    email:"nilesh@gmail.com"
  }
})

console.log(deleteUser);




   };


main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
