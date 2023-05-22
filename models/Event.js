import { Schema, model } from "mongoose";

const EventSchema = Schema({
    title: {
        type: String,
        require: true
    },
    notes: {
        type: String,
    },
    start: {
        type: Date,
        require: true
    },
    end: {
        type: Date,
        require: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}); 

const Event = model('Event', EventSchema)

export default Event;