const add=(a,b)=>{
  return a+b;
}
const mult=(a,b)=>{
  return a*b;
}
const sub=(a,b)=>{
  return a-b;
}
const div=(a,b)=>{
  return a/b;
}

// module.exports.add =add;
// module.exports.mult =mult;
// module.exports.sub =sub;
// module.exports.div =div;

// 2nd type for export 

module.exports ={add,mult,sub,div}