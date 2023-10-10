import {Router} from 'express'
import {getAll} from '../controllers/advancedSkills.js'

const router = Router()

router.get('/info/advancedSkills', getAll)

export default router