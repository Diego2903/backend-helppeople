import { querys } from "../database";
import { getConnection, sql } from "../database/connection"
const { validationResult } = require('express-validator/check')


export const getCiudadano = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllCuidadanos);
    console.log(result);

    res.json(result.recordset)
}

export const getCuidadanoPorId = async (req, res) => {
    const pool = await getConnection();
    const id = req.params.id
    const ciudadano = await pool.request().input("id", sql.Int, id).query(querys.getCiudadanoById)
    if (ciudadano.recordset.length === 0) {
        return res.status(400).json({
            ok: false,
            msg: 'not exists the person with id'
        })
    };
    const result = await pool.request().input("id", sql.Int, id).query(querys.getCiudadanoById);
    console.log(result);
    res.json(result.recordset)
}

export const createCiudadano = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
    } else {
        try {
            const { documento, nombres, apellidos, fecha_nacimiento, profesion, aspiracion_salarial, correo_electronico, tipo_documento_id } = req.body
            const pool = await getConnection()

            const ciudadano = await pool.request().input("correo_electronico", sql.VarChar, correo_electronico).query(querys.getCiudadanoByCorreoElectronico)
            if (ciudadano.recordset.length > 0) {
                return res.status(400).json({
                    ok: false,
                    msg: 'there is a person with this email ' + correo_electronico
                })
            };
            await pool.request()
                .input("documento", sql.VarChar, documento)
                .input("nombres", sql.VarChar, nombres)
                .input("apellidos", sql.VarChar, apellidos)
                .input("fecha_nacimiento", sql.Date, fecha_nacimiento)
                .input("profesion", sql.VarChar, profesion)
                .input("aspiracion_salarial", sql.Int, aspiracion_salarial)
                .input("correo_electronico", sql.VarChar, correo_electronico)
                .input("tipo_documento_id", sql.Int, tipo_documento_id)
                .query(querys.addNewCuidadano)
            res.json("createCiudadano")
        } catch (error) {
            console.log(error);
        }
    }
}

export const updateCiudadano = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
    } else {
        try {
            const { documento, nombres, apellidos, fecha_nacimiento, profesion, aspiracion_salarial, correo_electronico, tipo_documento_id } = req.body
            const id = req.params.id
            const pool = await getConnection()

            const ciudadano = await pool.request().input("id", sql.Int, id).query(querys.getCiudadanoById)
            console.log(ciudadano);
            if (ciudadano.recordset.length === 0) {
                return res.status(400).json({
                    ok: false,
                    msg: 'not exists the person with id'
                })
            };
            const ciudadanoCorreo = await pool.request().input("correo_electronico", sql.VarChar, correo_electronico).query(querys.getCiudadanoByCorreoElectronico)
            if (ciudadanoCorreo.recordset.length > 0) {
                return res.status(400).json({
                    ok: false,
                    msg: 'there is a person with this email ' + correo_electronico
                })
            };
            await pool.request()
                .input("documento", sql.VarChar, documento)
                .input("nombres", sql.VarChar, nombres)
                .input("apellidos", sql.VarChar, apellidos)
                .input("fecha_nacimiento", sql.Date, fecha_nacimiento)
                .input("profesion", sql.VarChar, profesion)
                .input("aspiracion_salarial", sql.Int, aspiracion_salarial)
                .input("correo_electronico", sql.VarChar, correo_electronico)
                .input("tipo_documento_id", sql.Int, tipo_documento_id)
                .input("id", sql.Int, id)
                .query(querys.updateCuidadanoById)
            res.json("updateCiudadano")
        } catch (error) {
            console.log(error);
        }
    }
}

export const deleteCiudadano = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
    } else {
        try {
            const id = req.params.id
            const pool = await getConnection()

            const ciudadano = await pool.request().input("id", sql.Int, id).query(querys.getCiudadanoById)
            console.log(ciudadano);
            if (ciudadano.recordset.length === 0) {
                return res.status(400).json({
                    ok: false,
                    msg: 'not exists the person with id'
                })
            };
            await pool.request()
                .input("id", sql.Int, id)
                .query(querys.deleteAplicacaionOfertaByCiudadanoId)

            await pool.request()
                .input("id", sql.Int, id)
                .query(querys.deleteCuidadano)
            res.json()
        } catch (error) {
            console.log(error);
        }
    }
}
