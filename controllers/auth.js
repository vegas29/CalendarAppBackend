import { response } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import { generateJWT } from '../helpers/jwt.js';

const createUser = async(req, res = response) => {

    const { email, password } =  req.body;

    try {

        let user = await User.findOne({email});

        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe'
            })
        }
        
        user = new User(req.body);

        //Encrypt password

        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

        await user.save();
        
        const token = await generateJWT(user.id, user.name);
    
        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        });

    } catch (error) {
        console.log('error', error);

        res.status(500).json({
            ok: false,
            msg: 'Por favor, comuniquese con el admin'
        });

    }

}

const loginUser = async(req, res = response) => {

    const { email, password } =  req.body;

    try {

        const user = await User.findOne({email});

        if (!user) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe con ese email'
            });
        }

        const validPassword = bcrypt.compareSync( password, user.password );

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Password incorrecto'
            });
        }

        const token = await generateJWT(user.id, user.name);

        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        })

    } catch (error) {
        console.log('error', error);

        res.status(500).json({
            ok: false,
            msg: 'Por favor, comuniquese con el admin'
        });

    }
}

const revalidateToken = async(req, res = response) => {

    const { uid, name } = req;

    //Generate new jwt

    const token = await generateJWT(uid, name);

    res.json({
        ok: true,
        uid,
        name,
        token
    })
}


export {
    createUser,
    loginUser,
    revalidateToken
}