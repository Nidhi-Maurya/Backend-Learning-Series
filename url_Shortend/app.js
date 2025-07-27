
 import { readFile, writeFile } from 'fs/promises';
import { createServer } from 'http';
import crypto from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app =express();






const port = 3000;
app.use(express.urlencoded({ extended: true }));

const DATA_FILE = path.join(__dirname, 'data', 'links.json');
const PUBLIC_DIR = path.join(__dirname, 'public');


app.use(express.static(PUBLIC_DIR));



const serveFile = async (res, filePath, contentType) => {
  try {
    const data = await readFile(filePath);
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  } catch (error) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end("404 - File Not Found");
  }
};

const loadLinks = async () => {
  try {
    const data = await readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
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
  await writeFile(DATA_FILE, JSON.stringify(links,));
};

app.get("/", async (req,res)=>{
try {

  const file=await readFile(path.join("views","index.html"),"utf-8");
  const links=await loadLinks();

  const content=file.toString().replaceAll("{{shortened_urls}}",Object.entries(links).map(([shortCode,url])=>`<li><a href="${shortCode}" target="_blank">${req.host}/${shortCode}</a> - ${url}</li>`).join(""));

  return res.send(content);
  
} catch (error) {
  console.error(error);
  return res.status(500).send("Internal Server Error");
  
}
})


app.post("/",async(req,res)=>{
  try {
    const {url,shortCode} = (req.body);
    const finalShortCode = shortcode || crypto.randomBytes(4).toString("hex");

    const links = await loadLinks();

  if (links[finalShortCode]){
    return res.status(400).send("Short code already exists, please choose another");
  }
    links[finalShortCode] = url;
    await saveLinks(links);
    return res.redirect("/")
  } catch (error) {
    
  }
});


app.get("/:shortCode",async(req,res)=>{
  try {
   const {shortCode}=req.params;
   const links=await loadLinks();
   if(!links[shortCode]){
    return res.status(404).send("Short URL not found");
   }
   return res.redirect(links[shortCode]);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
});


//   console.log(`${req.method} ${req.url}`);

//   if (req.method === "GET") {
//     if (req.url === "/") {
//       return serveFile(res, path.join(PUBLIC_DIR, "index.html"), "text/html");
//     } else if (req.url === "/style.css") {
//       return serveFile(res, path.join(PUBLIC_DIR, "style.css"), "text/css");
//     } else if (req.url === "/links") {
//       const links = await loadLinks();
//       res.writeHead(200, { "Content-Type": "application/json" });
//       return res.end(JSON.stringify(links));
//     } else {
//       const links = await loadLinks();
//       const shortCode = req.url.slice(1); // ✅ FIXED
//       if (links[shortCode]) {
//         res.writeHead(302, { Location: links[shortCode] });
//         return res.end();
//       }
//       res.writeHead(404, { "Content-Type": "text/plain" });
//       return res.end("404 - Short URL not found");
//     }
//   }

//   // ✅ FIXED BLOCK: POST method placed correctly outside GET block
//   // if (req.method === "POST" && req.url === "/shorten") {
//   //   const links = await loadLinks();

//   //   let body = "";
//   //   req.on("data", (chunk) => (body += chunk));
//   //   req.on("end", async () => {
//   //     try {
//   //       const { url, shortcode } = JSON.parse(body);

//   //       if (!url) {
//   //         res.writeHead(400, { "Content-Type": "text/plain" });
//   //         return res.end("URL is required");
//   //       }

//   //       const finalShortCode = shortcode || crypto.randomBytes(4).toString("hex");

//   //       if (links[finalShortCode]) {
//   //         res.writeHead(400, { "Content-Type": "text/plain" });
//   //         return res.end("Short code already exists, please choose another");
//   //       }

//   //       links[finalShortCode] = url;
//   //       await saveLinks(links);

//   //       res.writeHead(200, { "Content-Type": "application/json" });
//   //       res.end(JSON.stringify({ success: true, shortCode: finalShortCode }));
//   //     } catch (error) {
//   //       res.writeHead(500, { "Content-Type": "text/plain" });
//   //       res.end("Internal Server Error");
//   //       console.error(error);
//   //     }
//   //   });
//   // }
// });

app.listen(port, () => {
  console.log(`🚀 Server running at: http://localhost:${port}`);
});