/*
    Rutas de usuarios / auth
    Host + /api/auth
*/

import { Router } from 'express';
import { check } from 'express-validator';
const router = Router();
import { createUser, loginUser, revalidateToken } from '../controllers/auth.js';


router.post(
    '/register', 
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({min: 6}),
    ],
    createUser
);

router.post(
    '/', 
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({min: 6}),
    ],
    loginUser
);

router.get('/renew', revalidateToken);

export default router;