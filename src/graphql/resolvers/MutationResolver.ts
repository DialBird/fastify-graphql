import {
  CreateUserInput,
  UpdateUserInput,
  UserType,
} from 'src/graphql/types/UserType'
import { UserRepository } from 'src/repositories/UserRepository'
import { Arg, Mutation, Resolver } from 'type-graphql'

@Resolver()
export class MutationResolver {
  userRepository!: UserRepository

  constructor() {
    this.userRepository = new UserRepository()
  }

  @Mutation(() => UserType)
  async createUser(@Arg('params') params: CreateUserInput) {
    const id = await this.userRepository.create(params)
    return this.userRepository.find(id)
  }

  @Mutation(() => UserType)
  async updateUser(
    @Arg('id') id: number,
    @Arg('params') params: UpdateUserInput,
  ) {
    const updatedId = await this.userRepository.update(id, params)
    return this.userRepository.find(updatedId)
  }
}
