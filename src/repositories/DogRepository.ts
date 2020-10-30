import { DogType } from 'src/graphql/types/DogType'
import { database } from 'src/services/DatabaseService'

export class DogRepository {
  async getByUserId(userId: number) {
    const res = await database
      .pg<DogType>('dogs')
      .select()
      .where({ userId })
      .first()
    return res
  }
}
