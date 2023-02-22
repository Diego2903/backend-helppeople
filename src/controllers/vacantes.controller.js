import { querys } from "../database";
import { getConnection, sql } from "../database/connection"
const { validationResult } = require('express-validator/check')





export const aplicarVacante = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
    } else {

        try {
            // validar que ciudadano existe
            const { idCiudadano, idVacante } = req.body
            const pool = await getConnection()

            const ciudadano = await pool.request().input("id", sql.Int, idCiudadano).query(querys.getCiudadanoById)
            console.log(ciudadano);
            if (ciudadano.recordset.length === 0) {
                return res.status(400).json({
                    ok: false,
                    msg: 'not exists the person with id'
                })
            };

            // validar que vacante existe
            const vacante = await pool.request().input("id", sql.Int, idVacante).query(querys.getVacanteById)
            console.log(vacante);
            if (vacante.recordset.length === 0) {
                return res.status(400).json({
                    ok: false,
                    msg: 'not exists the ofert with id'
                })
            };

            // validar que no haya postulacion existente para este ciudadano y esta vacante
            const oferta = await pool.request()
                .input("ciudadano_id", sql.Int, idCiudadano)
                .input("vacante_id", sql.Int, idVacante)
                .query(querys.getPostulacionByIdCiudadanoYByIdVacante)
            console.log(oferta);
            if (oferta.recordset.length > 0) {
                return res.status(400).json({
                    ok: false,
                    msg: 'there is already an existing application'
                })
            };


            // crear registro en la tabla ciudadano_vacantes
            await pool.request()
                .input("ciudadano_id", sql.Int, idCiudadano)
                .input("vacante_id", sql.Int, idVacante)
                .query(querys.addNewPostulacion)

            await pool.request()
                .input("id", sql.Int, idVacante)
                .input("disponible", sql.Bit, 0)
                .query(querys.updateDisponibilidadVacante)
            res.json("createPostulacion")
        } catch (error) {
            console.log(error);
        }
    }

}

export const getAllVacantes = async(req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllVacantes);
    console.log(result);

    res.json(result.recordset)
}