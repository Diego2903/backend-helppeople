
import { Router } from 'express'
import { validate } from "../helpers/validators"
import { getCiudadano, createCiudadano, updateCiudadano, deleteCiudadano, getCuidadanoPorId } from '../controllers/cuidadanos.controller';
const router = Router();



router.get('/ciudadanos', getCiudadano)
router.get('/ciudadanos/:id' ,getCuidadanoPorId)
router.post('/ciudadanos', validate("createCiudadano"), createCiudadano);
router.put('/ciudadanos/:id', validate("createCiudadano"), updateCiudadano)
router.delete('/ciudadanos/:id', deleteCiudadano)

export default router;