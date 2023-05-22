import { response } from "express"
import Event from "../models/Event.js";

const getEvents = async(req, res = response) => {

    const events = await Event.find().populate('user', 'name');
    
    res.json({
        ok: true,
        events
    });

}

const createEvent = async(req, res = response) => {

    const event = new Event(req.body);

    try {

        event.user = req.uid;

        const saveEvent = await event.save();

        res.status(201).json({
            ok: true,
            event: saveEvent
        })
        
    } catch (error) {
        console.log('error', error);

        res.status(500).json({
            ok: false,
            msg: 'Contactese con el admin'
        })
    }
    
}

const updateEvent = async(req, res = response) => {

    const { id } = req.params;
    const { uid } = req;

    try {

        const event = await Event.findById(id);
        

        if (!event) {
            res.status(404).json({
                ok: false,
                msg: 'El evento no existe con ese id'
            });
        }

        console.log(event.user.toString())

        if (event.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene permisos para editar este evento'
            });
        }

        const newEvent = {
            ...req.body,
            user: uid
        }

        const updateEvent = await Event.findByIdAndUpdate(id, newEvent, {new: true});

        res.json({
            ok: true,
            event: updateEvent
        });
        
    } catch (error) {
        console.log('error', error);
        res.status(500).json({
            ok: false,
            msg: 'Contacte al admin'
        })
    }

}

const deleteEvent = (req, res = response) => {
    
    res.json({
        ok: true,
        msg: 'deleteEvent'
    });

}

export {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
}