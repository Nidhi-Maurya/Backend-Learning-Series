
import { fileURLToPath } from 'url';
import path from 'path'; // ✅ FIXED

import express from 'express';
import { shortenerRoutes } from './routes/shortener.routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

const PUBLIC_DIR = path.join(__dirname, 'public');
app.use(express.static(PUBLIC_DIR));


app.set('view engine', 'ejs'); 


// Custom router
app.use(shortenerRoutes);

app.listen(port, () => {
  console.log(`🚀 Server running at: http://localhost:${port}`);
});
