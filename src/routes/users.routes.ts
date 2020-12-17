import { Router } from 'express'
import UsersController from '../controllers/UsersController'
import ensureAuthenticated from '../middlewares/auth'

const usersRoutes = Router()

usersRoutes.use(ensureAuthenticated)

usersRoutes.get('/', UsersController.findAll)
usersRoutes.post('/', UsersController.create)

export default usersRoutes
