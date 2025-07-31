




import fs from 'fs';

import crypto from 'crypto';
import { Router } from 'express';

import { postURLShortner,getShortnerPage, redirectToShortLink } from '../controllers/postShortner.controller.js';



const router = Router();



router.get('/',getShortnerPage);
router.post("/",postURLShortner );




router.get('/:shortCode', redirectToShortLink)
export const shortenerRoutes = router;
