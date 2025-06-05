  const http=require("http");

  const server=http.createServer((req,res)=>{
    if(req.url==="/"){
      res.write("jello maurya ji what are you doing here");
      res.end();
    }
  });

  const Port=3000;

  console.log(`server is runnning on port no ${Port}`);