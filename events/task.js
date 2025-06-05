const EventEmitter= require("events");

const emitter=new EventEmitter();    


emitter.on("user-login",(username)=>{
  console.log(`${username} logged in!`)
});

emitter.on("user-purchase",(username,item)=>{
  console.log(` ${username} ne  ${item} purchase kiya`)
});

emitter.on("profile-update",(username,profile)=>{
  console.log(` ${username} ne  apna ${profile}  update kiya`)
});

emitter.on("user-logout",(username,)=>{
  console.log(` ${username}  logout ho gai`)
});






//emits events

emitter.emit("user-login","Maurya");
emitter.emit("user-purchase","maurya","Phone");
emitter.emit("profile-update","maurya","email");
emitter.emit("user-logout","maurya");