import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class DogType {
  @Field(() => ID)
  id!: number

  @Field()
  userId!: number

  @Field()
  name!: string
}
