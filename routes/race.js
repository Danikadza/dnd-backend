import {Router} from 'express'
import {getAll} from '../controllers/race.js'

const router = Router()

router.get('/info/race', getAll)

export default router