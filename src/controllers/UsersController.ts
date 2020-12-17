import { Response, Request } from 'express'
import CreateUserService from '../services/CreateUserService'
import ListUserService from '../services/ListUserService'

class UsersController {
  public async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const service = new ListUserService()

      const users = await service.execute()

      return res.json(users)
    } catch (error) {
      return res.json({ message: error.message })
    }
  }

  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const { name, email, password } = req.body

      const service = new CreateUserService()

      const user = await service.execute({
        name,
        email,
        password,
      })

      return res.json(user)
    } catch (error) {
      return res.json({ message: error.message })
    }
  }
}
export default new UsersController()
