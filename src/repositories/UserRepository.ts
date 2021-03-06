import {
  CreateUserInput,
  UpdateUserInput,
  UserType,
} from 'src/graphql/types/UserType'
import { database } from 'src/services/DatabaseService'

export class UserRepository {
  async getList({
    limit,
    order = 'asc',
  }: {
    limit?: number
    order?: 'asc' | 'desc'
  }) {
    let query = database.db<UserType>('users').select().orderBy('id', order)
    if (limit) {
      query.limit(limit)
    }

    const result = await query
    return result
  }

  async find(id: number) {
    const res = await database
      .db<UserType>('users')
      .select()
      .where({ id })
      .first()
    return res
  }

  async create(params: CreateUserInput) {
    const ids = await database
      .db<UserType>('users')
      .insert(params)
      .returning('id')
    return ids[0]
  }

  async update(id: number, params: UpdateUserInput) {
    const ids = await database
      .db<UserType>('users')
      .where({ id })
      .update(params)
      .returning('id')
    return ids[0]
  }

  async delete(id: number) {
    const ids = await database
      .db<UserType>('users')
      .where({ id })
      .delete()
      .returning('id')
    return ids[0]
  }
}
