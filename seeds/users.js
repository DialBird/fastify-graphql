exports.seed = async (knex) => {
  // Deletes ALL existing entries
  // return knex('users')
  //   .del()
  //   .then(function () {
  //     // Inserts seed entries
  //     return knex('users').insert([
  //       {
  //         id: 1,
  //         name: 'keisuke',
  //         age: 12,
  //         birthday: '1991/06/22',
  //         is_happy: true,
  //       },
  //       { id: 2, name: 'tarou', age: 22, is_happy: false },
  //       { id: 3, name: 'daisuke', age: 32, is_happy: true },
  //     ])
  //   })

  await knex('dogs').del()
  await knex('users').del()

  return knex('users')
    .insert([
      {
        id: 1,
        name: 'keisuke',
        age: 12,
        birthday: '1991/06/22',
        is_happy: true,
      },
      { id: 2, name: 'tarou', age: 22, is_happy: false },
      { id: 3, name: 'daisuke', age: 32, is_happy: true },
    ])
    .then(() => {
      return knex('dogs').insert([
        { id: 1, user_id: 2, name: 'a' },
        { id: 2, user_id: 3, name: 'b' },
        { id: 3, user_id: 3, name: 'c' },
      ])
    })
}
