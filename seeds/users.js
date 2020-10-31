const faker = require('faker')

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}

exports.seed = async (knex) => {
  await knex('dogs').del()
  await knex('users').del()

  const dogsData = []
  let dogIdx = 1

  const usersData = [
    {
      id: 1,
      name: 'Keisuke Taniguchi',
      age: 24,
      birthday: '1991/06/22',
      is_happy: true,
    },
  ]
  for (let i = 0; i < 99; i++) {
    const userId = i + 2
    usersData.push({
      id: userId,
      name: faker.name.findName(),
      age: (i % 10) + 20,
      is_happy: i % 2 === 0,
    })

    const dogNum = getRandomInt(3)
    for (let j = 0; j < dogNum; j++) {
      dogsData.push({
        id: dogIdx,
        user_id: userId,
        name: faker.name.firstName(),
      })
      dogIdx += 1
    }
  }

  return knex('users')
    .insert(usersData)
    .then(() => {
      return knex('dogs').insert(dogsData)
    })
}
