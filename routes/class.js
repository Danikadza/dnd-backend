import {Router} from 'express'
import {getAll} from '../controllers/class.js'

const router = Router()

router.get('/info/class', getAll)

export default router