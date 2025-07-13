import mongoose from "mongoose";


try {
  await mongoose.connect("mongodb://127.0.0.1/1/middleware_database");
  
} catch (error) {
  console.error(error);
  process.exit();
}

// step 2 creacte schema

const userSchema=mongoose.Schema({
  name:{type:String, requireed:true},
  age:{type:NUmber, required:true},
  email:{type:String,Unique:true,required:true},
  createdAt:{type:Date,default :Date.now},
  updateddAt:{type:Date,default :Date.now}
})

 // model create krne se phle hme s=middleware ko use krna h

//we will use middleware
userSchema.pre(["updateOne","updateMany","findOneAndUpdate"],function(next){
  this.set({updateddAt:Date.now()})
  next();

}

)




// step 3 creating model

const Users=mongoose.model("User",userSchema)






// await Users.create({name:"maurya",age:23,email:"maurya@gmail.com"});


await Users.updateOne({name:"maurya"},{$set:{age:23}});

await mongoose.connection.close();

