import { UserType } from 'src/graphql/types/UserType'
import { UserRepository } from 'src/repositories/UserRepository'
import { Arg, Query, Resolver } from 'type-graphql'

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

  @Query(() => [UserType])
  users(
    @Arg('limit', { nullable: true }) limit?: number,
    @Arg('order', { nullable: true }) order?: 'asc' | 'desc',
  ) {
    return this.userRepository.getList({ limit, order })
  }
}
