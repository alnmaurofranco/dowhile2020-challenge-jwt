import { getRepository } from 'typeorm'
import User from '../models/User'

export default class ListUserService {
  public async execute(): Promise<User[]> {
    const repository = getRepository(User)

    const users = await repository.find({})
    console.log(users)

    if (users.length === 0) {
      throw new Error('No exists users i am moment')
    }

    return users
  }
}
