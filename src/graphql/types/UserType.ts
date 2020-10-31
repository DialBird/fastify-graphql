import { Field, ID, InputType, ObjectType } from 'type-graphql'

import { DogType } from './DogType'

@InputType()
export class CreateUserInput {
  @Field()
  name!: string

  @Field()
  age!: number

  @Field({ nullable: true })
  birthday?: Date

  @Field()
  is_happy!: boolean
}

@ObjectType()
export class UserType {
  @Field(() => ID)
  id!: number

  @Field()
  name!: string

  @Field()
  age!: number

  @Field({ nullable: true })
  birthday?: Date

  @Field()
  is_happy!: boolean

  @Field(() => [DogType])
  dogs?: DogType[]
}
