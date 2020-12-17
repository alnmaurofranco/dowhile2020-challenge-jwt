import { hash } from 'bcryptjs'
import { getRepository } from 'typeorm'
import User from '../models/User'
import { crypto } from '../config'

interface Request {
  name: string
  email: string
  password: string
}

export default class CreateUserService {
  public async execute({ name, password, email }: Request): Promise<any> {
    const repository = getRepository(User)

    const checkUserExists = await repository.findOne({
      where: { email },
    })

    if (checkUserExists) {
      throw new Error('Sorry e-mail address already used')
    }

    const hashedPassword = await hash(password, crypto.hashSalt)

    const user = repository.create({
      name,
      email,
      password: hashedPassword,
    })

    await repository.save(user)

    return user
  }
}
