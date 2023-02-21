import { querys } from "../database";
import { getConnection } from "../database/connection"


export const getTipoDocumento = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllTipoDocumento);
    console.log(result);

    res.json(result.recordset)
}