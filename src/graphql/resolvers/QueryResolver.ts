import { UserType } from 'src/graphql/types/UserType'
import { UserRepository } from 'src/repositories/UserRepository'
import { Arg, Ctx, ID, Query, Resolver } from 'type-graphql'

@Resolver()
export class QueryResolver {
  userRepository!: UserRepository

  constructor() {
    this.userRepository = new UserRepository()
  }

  @Query(() => UserType)
  user(@Arg('id') id: number) {
    return this.userRepository.find(id)
  }
}
