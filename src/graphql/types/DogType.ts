import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class DogType {
  @Field(() => ID)
  id!: number

  @Field()
  user_id!: number

  @Field()
  name!: string
}
