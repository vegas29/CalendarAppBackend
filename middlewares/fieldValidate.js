import { response } from "express";
import { validationResult } from "express-validator";

const fieldValidate = (req, res = response, next) => {

    const errors = validationResult( req );

    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errores: errors.mapped()
        });
    }

    next();

}

export {
    fieldValidate
}