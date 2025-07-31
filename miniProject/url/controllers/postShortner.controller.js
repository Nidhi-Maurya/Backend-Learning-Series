import crypto from 'crypto';
import { loadLinks, savelinks,getLinkByShortCode } from '../models/shortner.models.js';
 import path from 'path';


 
 import { fileURLToPath } from 'url';
 
 
 const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);

export const getShortnerPage =
 async (req, res) => {
  try {
    // const file = await readFile(path.join(__dirname, '../views', 'index.html'), 'utf-8');
    const links = await loadLinks();

    return res.render('index',{links,host:req.hostname});
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal Server Error');
  }
};


export const redirectToShortLink =  async (req, res) => {
  try {
    const { shortCode } = req.params;
    // const links = await loadLinks();
    console.log(links);
    

const links=await getLinkByShortCode(shortCode);

    if (!links) {
      return res.status(404).send('Short URL not found');
    }
    return res.redirect(links.url);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal Server Error');
  }
};

export const postURLShortner=  async (req, res) => {
  try {
    const { url, shortCode } = req.body;
    const finalShortCode = shortCode || crypto.randomBytes(4).toString('hex');

    const links = await loadLinks();

    if (links[finalShortCode]) {
      return res.status(400).send('Short code already exists, please choose another');
    }

    // links[finalShortCode] = url;
    // await saveLinks(links);

      await savelinks({url,shortCode:finalShortCode});

    return res.redirect('/');
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal Server Error');
  }
};