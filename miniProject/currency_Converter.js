import https from "https";
import readline from "readline";
import chalk from "chalk"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const apiKey = 'ee6ef0942fed220bd55ad345';
const url= ` https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;


const converCurrency=(amount,rate)=>{
  return (amount*rate).toFixed(2);
}

https.get(url,(response)=>{
  let data=""
   response.on('data',(chunk)=>{
    data+=chunk;

   })
   response.on('end',()=>{
    const rates = JSON.parse(data).conversion_rates;

    rl.question('enter the ammount in USD:',(amount)=>{
      rl.question('Enter the target currency(e.g,INR,EUR,NPR):',(currency)=>{
        const rate= rates[currency.toUpperCase()];
        if(rate){
          console.log(` ${amount} USD is approximately ${converCurrency(amount,rate)} ${currency} `)
        }else{
          console.log("Invalid currency code");
          
        }
        rl.close();

      })

    })
   })
})