import { Router } from 'express'
import { getTipoDocumento } from '../controllers/tipoDocumento.controller';

const router = Router();

router.get('/tipos-documento', getTipoDocumento)

export default router