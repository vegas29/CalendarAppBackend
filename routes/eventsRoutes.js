/*
    Rutas de eventos / events
    Host + /api/events
*/

import { Router } from 'express';
import { jwtValidate } from '../middlewares/jwtValidate.js';
import { createEvent, deleteEvent, getEvents, updateEvent } from '../controllers/events.js';
import { check } from 'express-validator';
import { fieldValidate } from '../middlewares/fieldValidate.js';
import isDate from '../helpers/isDate.js';
const router = Router();

router.use( jwtValidate );

router.get(
    '/',  
    getEvents
)

router.post(
    '/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatorio').custom(isDate),
        check('end', 'Fecha de finalizacion es obligatorio').custom(isDate),
        fieldValidate
    ], 
    createEvent
);

router.put(
    '/:id',  
    updateEvent
);

router.delete(
    '/:id',  
    deleteEvent
);

export default router;