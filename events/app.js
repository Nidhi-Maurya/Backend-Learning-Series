// IMport EventEmmiter class

const EventEmitter=require("events");

// Creates an instance of EventEmmiter

const emitter=new EventEmitter();


//1 . Define an event listener(add listener)
 
// emitter.on("greet",()=>{
//   console.log("Hello Mauyra jiii")
// })



// //2. Trigger (emit) the "greet" event

// emitter.emit("greet");





///arguments



emitter.on("greet",(arg)=>{
  console.log(`hello ${arg.name},you are a ${arg.prof}`);
})




emitter.emit("greet",{name:"Nidhi Maurya",prof:"Web Developer"});
