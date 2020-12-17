import { Router } from 'express'
import AuthController from '../controllers/AuthController'

const authRoutes = Router()

authRoutes.get('/', async (req, res) => {
  return res.send('Page at login')
})

authRoutes.post('/', AuthController.login)

export default authRoutes
