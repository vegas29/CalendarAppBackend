/*
    Rutas de eventos / events
    Host + /api/events
*/

import { Router } from 'express';
import { jwtValidate } from '../middlewares/jwtValidate.js';
import { createEvent, deleteEvent, getEvents, updateEvent } from '../controllers/events.js';
const router = Router();

router.use( jwtValidate );

router.get(
    '/',  
    getEvents
)

router.post(
    '/',  
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