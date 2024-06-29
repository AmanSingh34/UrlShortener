import { Router } from 'express'
import { RenderHome } from '../controllers/static.controller.js';

const router  = Router()

router.get('/',RenderHome)

export default router;