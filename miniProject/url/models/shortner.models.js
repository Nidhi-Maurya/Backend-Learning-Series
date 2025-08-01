
// import path from 'path';
// import { readFile, writeFile } from 'fs/promises';
// import fs from 'fs';
// import { fileURLToPath } from 'url';


// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);




// const DATA_FILE = path.join(__dirname, 'data', 'links.json');

// export const loadLinks = async () => {
//   try {
//     const data = await readFile(DATA_FILE, 'utf-8');
//     return JSON.parse(data);
//   } catch (error) {
//     if (error.code === 'ENOENT') {
//       const dir = path.dirname(DATA_FILE);
//       if (!fs.existsSync(dir)) {
//         fs.mkdirSync(dir, { recursive: true });
//       }
//       await writeFile(DATA_FILE, JSON.stringify({}, null, 2));
//       return {};
//     }
//     throw error;
//   }
// };

//  export const saveLinks = async (links) => {
//   await writeFile(DATA_FILE, JSON.stringify(links, null, 2));
// };




import { dbClient } from "../config/db-client.js";
import  env  from "../config/env.js";

const db=dbClient.db(env.MONGODB_DATABASE_NAME);
const shortnerCollection=db.collection("shortner");


export const loadLinks = async () => {

 return  shortnerCollection.find().toArray();

}



 export const savelinks =async (links) =>{
  return shortnerCollection.insertOne(links);
}

export  const getLinkByShortCode=async (shortCode)=>{
  return await  shortnerCollection.findOne({shortCode:shortCode});
}