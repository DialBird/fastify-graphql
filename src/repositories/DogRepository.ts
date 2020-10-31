import { DogType } from 'src/graphql/types/DogType'
import { database } from 'src/services/DatabaseService'

export class DogRepository {
  async getByUserId(user_id: number) {
    const res = await database
      .db<DogType>('dogs')
      .select()
      .where({ user_id })
      .first()
    return res
  }
}
