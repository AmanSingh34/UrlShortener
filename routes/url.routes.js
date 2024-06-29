import { Router } from 'express'
import { generateShortId, getAnalytics, getUrl } from '../controllers/url.controller.js'

const router  = Router()

router.post('/',generateShortId)
router.get('/analytics/:shortId',getAnalytics)
router.get('/:shortId',getUrl)

export default router;