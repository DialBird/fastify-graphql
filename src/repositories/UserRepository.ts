import { database } from 'src/services/DatabaseService'
import { UserType } from 'src/graphql/types/UserType'

export class UserRepository {
  async find(id: number) {
    const res = await database
      .pg<UserType>('users')
      .select()
      .where({ id })
      .first()
    return res
  }
}
