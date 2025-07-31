//  import { readFile, writeFile } from 'fs/promises';
// import { createServer } from 'http';
// import crypto from 'crypto';
// import path from 'path';


// import { Router } from 'express';


// const router=Router();


// const DATA_FILE = path.join(__dirname, 'data', 'links.json');



// const loadLinks = async () => {
//   try {
//     const data = await readFile(DATA_FILE, "utf-8");
//     return JSON.parse(data);
//   } catch (error) {
//     if (error.code === "ENOENT") {
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

// const saveLinks = async (links) => {
//   await writeFile(DATA_FILE, JSON.stringify(links,));
// };

// router.get("/", async (req,res)=>{
// try {

//   const file=await readFile(path.join("views","index.html"),"utf-8");
//   const links=await loadLinks();

//   const content=file.toString().replaceAll("{{shortened_urls}}",Object.entries(links).map(([shortCode,url])=>`<li><a href="${shortCode}" target="_blank">${req.host}/${shortCode}</a> - ${url}</li>`).join(""));

//   return res.send(content);
  
// } catch (error) {
//   console.error(error);
//   return res.status(500).send("Internal Server Error");
  
// }
// })


// router.post("/",async(req,res)=>{
//   try {
//     const {url,shortCode} = (req.body);
//     const finalShortCode = shortcode || crypto.randomBytes(4).toString("hex");

//     const links = await loadLinks();

//   if (links[finalShortCode]){
//     return res.status(400).send("Short code already exists, please choose another");
//   }
//     links[finalShortCode] = url;
//     await saveLinks(links);
//     return res.redirect("/")
//   } catch (error) {
    
//   }
// });


// router.get("/:shortCode",async(req,res)=>{
//   try {
//    const {shortCode}=req.params;
//    const links=await loadLinks();
//    if(!links[shortCode]){
//     return res.status(404).send("Short URL not found");
//    }
//    return res.redirect(links[shortCode]);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).send("Internal Server Error");
//   }
// });


// // export default router;

// export const shortenerRoutes=router;




import { readFile, writeFile } from 'fs/promises';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import crypto from 'crypto';
import { Router } from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

const DATA_FILE = path.join(__dirname, 'data', 'links.json');

const loadLinks = async () => {
  try {
    const data = await readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      const dir = path.dirname(DATA_FILE);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      await writeFile(DATA_FILE, JSON.stringify({}, null, 2));
      return {};
    }
    throw error;
  }
};

const saveLinks = async (links) => {
  await writeFile(DATA_FILE, JSON.stringify(links, null, 2));
};

router.get("/report",(req,res)=>{
  res.render("report",{name:"maurya"});
})





router.get('/', async (req, res) => {
  try {
    const file = await readFile(path.join(__dirname, '../views', 'index.html'), 'utf-8');
    const links = await loadLinks();

    const content = file.toString().replaceAll(
      '{{shortened_urls}}',
      Object.entries(links)
        .map(([shortCode, url]) => `<li><a href="${shortCode}" target="_blank">${req.hostname}/${shortCode}</a> - ${url}</li>`)
        .join('')
    );

    return res.send(content);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal Server Error');
  }
});

router.post('/', async (req, res) => {
  try {
    const { url, shortCode } = req.body;
    const finalShortCode = shortCode || crypto.randomBytes(4).toString('hex');

    const links = await loadLinks();

    if (links[finalShortCode]) {
      return res.status(400).send('Short code already exists, please choose another');
    }

    links[finalShortCode] = url;
    await saveLinks(links);
    return res.redirect('/');
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal Server Error');
  }
});

router.get('/:shortCode', async (req, res) => {
  try {
    const { shortCode } = req.params;
    const links = await loadLinks();
    if (!links[shortCode]) {
      return res.status(404).send('Short URL not found');
    }
    return res.redirect(links[shortCode]);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal Server Error');
  }
});

export const shortenerRoutes = router;
