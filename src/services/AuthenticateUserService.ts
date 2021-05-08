import { compare } from 'bcryptjs'
import RefreshToken from 'src/models/RefreshToken'
import { getRepository } from 'typeorm'
import User from '../models/User'

import { generateToken } from './AuthSecurity'

interface Request {
  email: string
  password: string
}

interface Response {
  user: User
  token: string
}

export default class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const repository = getRepository(User)

    const user = await repository.findOne({
      where: { email },
    })

    if (!user) {
      throw new Error('Invalid email or password attempt again more afternoon')
    }

    const matchPassword = await compare(password, user.password)

    if (!matchPassword) {
      throw new Error('Invalid email or password attempt again more afternoon')
    }

    const token = generateToken(user.id)

    const refreshToken = getRepository(RefreshToken).create({
      refreshToken: token,
      valid: true,
      user_id: user.id,
    })

    await getRepository(RefreshToken).save(refreshToken)

    return {
      user,
      token,
    }
  }
}
