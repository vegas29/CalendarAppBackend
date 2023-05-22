import { response } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';

const createUser = async(req, res = response) => {

    const { email, password } =  req.body;

    try {

        let user = await User.findOne({email});

        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo ya existe'
            })
        }
        
        user = new User(req.body);

        //Encrypt password

        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

        await user.save();
    
        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name
        });

    } catch (error) {
        console.log('error', error);

        res.status(500).json({
            ok: false,
            msg: 'Por favor, comuniquese con el admin'
        })

    }

}

const loginUser = (req, res = response) => {

    const { email, password } =  req.body;

    res.status(201).json({
        ok: true,
        msg: 'login',
        email,
        password
    })
}

const revalidateToken = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'rewew'
    })
}


export {
    createUser,
    loginUser,
    revalidateToken
}