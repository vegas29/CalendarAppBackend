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

const updateEvent = (req, res = response) => {
    
    res.json({
        ok: true,
        msg: 'updateEvent'
    });

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