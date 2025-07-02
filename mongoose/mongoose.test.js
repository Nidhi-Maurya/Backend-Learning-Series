import mongoose from "mongoose";

// step 1:to connect to the mongoDB server

try {
  await mongoose.connect("mongodb://localhost:27017/ mongoose_database");
  mongoose.connect("debug",true);
  
} catch (error) {
  console.error(error);
  process.exit();
}

// step 2: creste schema 

const userSchema=mongoose.Schema({
  name:{type:String,required:true},
  email:{type:String,unique:true,required:true},
  age:{type:Number,required:true},
  createdAt:{type:Date , default:Date.now}
})


// Step 3 Creating Model

const Users=mongoose.model("User",userSchema)


await Users.create({name:"maurya",age:23,email:"maurya@gmail.com"});


await mongoose.connection,close();