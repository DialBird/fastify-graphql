import { Field, ID, ObjectType } from 'type-graphql'

import { DogType } from './DogType'

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
  isHappy!: boolean

  @Field(() => [DogType])
  dogs?: DogType[]
}
