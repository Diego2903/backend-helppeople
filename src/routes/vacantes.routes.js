import { Router } from 'express'
import { aplicarVacante, getAllVacantes } from '../controllers/vacantes.controller';
import { validate } from '../helpers/validators';

const router = Router();

router.post('/vacantes/aplicar', validate('createPostulacion'), aplicarVacante)
router.get('/vacantes', getAllVacantes)

export default router;