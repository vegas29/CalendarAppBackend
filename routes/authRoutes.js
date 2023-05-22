/*
    Rutas de usuarios / auth
    Host + /api/auth
*/

import { Router } from 'express';
import { createUser, loginUser, revalidateToken } from '../controllers/auth.js';
const router = Router();


router.post('/register', createUser);

router.post('/', loginUser);

router.get('/renew', revalidateToken);

export default router;