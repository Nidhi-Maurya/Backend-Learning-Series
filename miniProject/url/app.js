


// import { readFile, writeFile } from 'fs/promises'; // ✅ Use promises version for both
// import { createServer } from 'http';
// import crypto from 'crypto';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import fs from 'fs'; // ✅ still needed for checking file/folder existence

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const port = 3000;

// const DATA_FILE = path.join(__dirname, 'data', 'links.json'); // ✅ use __dirname for full path
// const PUBLIC_DIR = path.join(__dirname, 'public'); // ✅ path base for static files

// // ✅ Utility: Serve static file
// const serveFile = async (res, filePath, contentType) => {
//   try {
//     const data = await readFile(filePath);
//     res.writeHead(200, { 'Content-Type': contentType });
//     res.end(data);
//   } catch (error) {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end("404 - File Not Found");
//   }
// };

// // ✅ Utility: Load existing links
// const loadLinks = async () => {
//   try {
//     const data = await readFile(DATA_FILE, "utf-8");
//     return JSON.parse(data);
//   } catch (error) {
//     if (error.code === "ENOENT") {
//       // Ensure directory exists first
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

// // ✅ Utility: Save links
// const saveLinks = async (links) => {
//   await writeFile(DATA_FILE, JSON.stringify(links, null, 2));
// };

// // ✅ Create server
// const server = createServer(async (req, res) => {
//   console.log(`${req.method} ${req.url}`);

//   // 👉 GET Routes
//   if (req.method === "GET") {
//     if (req.url === "/") {
//       return serveFile(res, path.join(PUBLIC_DIR, "index.html"), "text/html");
//     } else if (req.url === "/style.css") {
//       return serveFile(res, path.join(PUBLIC_DIR, "style.css"), "text/css");
//     } else if(req.url==="/links"){
//       const links = await loadLinks();

//       res.writeHead(200,{"Content-Type":"application/json"});
//       return res.end(JSON.stringify(links));
//     }else{
//       const links = await loadLinks();
//       const link=links[req.url.slice(1)];
//       if(links[shortCode]){
//         res.writeHead(302,{location:links[shortCode]});
//         return res.end();
//       }
//       res.writeHead(404,{"Content-Type":"text/plain"});
//       return res.end("404 - File Not Found");
//     }
        
//       }
// }
  
  
//   // 👉 POST /shorten
//   if (req.method === "POST" && req.url === "/shorten") {
//     const links = await loadLinks();

//     let body = "";
//     req.on("data", (chunk) => (body += chunk));

//     req.on("end", async () => {
//       console.log(body);
//       const { url, shortcode } = JSON.parse(body);
//       try {
//         const { url, shortcode } = JSON.parse(body);

//         if (!url) {
//           res.writeHead(400, { "Content-Type": "text/plain" });
//           return res.end("URL is required");
//         }

//         const finalShortCode = shortcode || crypto.randomBytes(4).toString("hex");

//         if (links[finalShortCode]) {
//           res.writeHead(400, { "Content-Type": "text/plain" });
//           return res.end("Short code already exists, please choose another");
//         }

//         links[finalShortCode] = url;
//         await saveLinks(links);

//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ success: true, shortCode: finalShortCode }));
//       } catch (error) {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.end("Internal Server Error");
//         console.error(error);
//       }
//     });
//   }
// // / }
// );

// server.listen(port, () => {
//   console.log(`🚀 Server running at: http://localhost:${port}`);
// });



import { readFile, writeFile } from 'fs/promises';
import { createServer } from 'http';
import crypto from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = 3000;

const DATA_FILE = path.join(__dirname, 'data', 'links.json');
const PUBLIC_DIR = path.join(__dirname, 'public');

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
  await writeFile(DATA_FILE, JSON.stringify(links, null, 2));
};

const server = createServer(async (req, res) => {
  console.log(`${req.method} ${req.url}`);

  if (req.method === "GET") {
    if (req.url === "/") {
      return serveFile(res, path.join(PUBLIC_DIR, "index.html"), "text/html");
    } else if (req.url === "/style.css") {
      return serveFile(res, path.join(PUBLIC_DIR, "style.css"), "text/css");
    } else if (req.url === "/links") {
      const links = await loadLinks();
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(links));
    } else {
      const links = await loadLinks();
      const shortCode = req.url.slice(1); // ✅ FIXED
      if (links[shortCode]) {
        res.writeHead(302, { Location: links[shortCode] });
        return res.end();
      }
      res.writeHead(404, { "Content-Type": "text/plain" });
      return res.end("404 - Short URL not found");
    }
  }

  // ✅ FIXED BLOCK: POST method placed correctly outside GET block
  if (req.method === "POST" && req.url === "/shorten") {
    const links = await loadLinks();

    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", async () => {
      try {
        const { url, shortcode } = JSON.parse(body);

        if (!url) {
          res.writeHead(400, { "Content-Type": "text/plain" });
          return res.end("URL is required");
        }

        const finalShortCode = shortcode || crypto.randomBytes(4).toString("hex");

        if (links[finalShortCode]) {
          res.writeHead(400, { "Content-Type": "text/plain" });
          return res.end("Short code already exists, please choose another");
        }

        links[finalShortCode] = url;
        await saveLinks(links);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ success: true, shortCode: finalShortCode }));
      } catch (error) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
        console.error(error);
      }
    });
  }
});

server.listen(port, () => {
  console.log(`🚀 Server running at: http://localhost:${port}`);
});
