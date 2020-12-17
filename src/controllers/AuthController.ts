import { Response, Request } from 'express'

import AuthenticateUserService from '../services/AuthenticateUserService'

class AuthController {
  public async login(req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = req.body

      const service = new AuthenticateUserService()

      const userSign = await service.execute({ email, password })

      return res.json(userSign)
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  }
}

export default new AuthController()
