import { CreateUserInput, UserType } from 'src/graphql/types/UserType'
import { database } from 'src/services/DatabaseService'

export class UserRepository {
  async getList({
    limit,
    order = 'asc',
  }: {
    limit?: number
    order?: 'asc' | 'desc'
  }) {
    let query = database.pg<UserType>('users').select().orderBy('id', order)
    if (limit) {
      query.limit(limit)
    }

    const result = await query
    return result
  }

  async find(id: number) {
    const res = await database
      .pg<UserType>('users')
      .select()
      .where({ id })
      .first()
    return res
  }

  async create(params: CreateUserInput) {
    const ids = await database
      .pg<UserType>('users')
      .insert(params)
      .returning('id')
    return ids[0]
  }
}
