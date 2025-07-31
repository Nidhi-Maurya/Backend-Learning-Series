
// import { fileURLToPath } from 'url';
// import fs from 'fs/promises';
// import express from 'express';
// import {shortenerRoutes} from './routes/shortener.routes.js';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);


// const app =express();

// const port = 3000;
// app.use(express.urlencoded({ extended: true }));


//  const PUBLIC_DIR = path.join(__dirname, 'public');


// app.use(express.static(PUBLIC_DIR));

// //! express router
// // app.use(router);

// app.use(shortenerRoutes)


// // const serveFile = async (res, filePath, contentType) => {
// //   try {
// //     const data = await readFile(filePath);
// //     res.writeHead(200, { 'Content-Type': contentType });
// //     res.end(data);
// //   } catch (error) {
// //     res.writeHead(404, { 'Content-Type': 'text/plain' });
// //     res.end("404 - File Not Found");
// //   }
// // };



// app.listen(port, () => {
//   console.log(`🚀 Server running at: http://localhost:${port}`);
// });



import { fileURLToPath } from 'url';
import path from 'path'; // ✅ FIXED
import fs from 'fs/promises';
import express from 'express';
import { shortenerRoutes } from './routes/shortener.routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

const PUBLIC_DIR = path.join(__dirname, 'public');
app.use(express.static(PUBLIC_DIR));

// Custom router
app.use(shortenerRoutes);

app.listen(port, () => {
  console.log(`🚀 Server running at: http://localhost:${port}`);
});
