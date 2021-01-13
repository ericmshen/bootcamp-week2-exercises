const cleanup = require('../lib/cleanup')
const User = require('../models/User')
const Pet = require('../models/Pet')
// Import models

const run = async () => {
  /**
    Create a transaction. It should (without using insertGraph): create a new
    user with returning(), give that user a pet, and fetch the total number of
    pets. If that total number exceeds 15, it should delete all BIRDS. Test
    the transaction by throwing an error: throw new Error("This is an error").
   */
  try {
    const insertNewUser = await User.transaction(async trx => {
      const foo = await User.query(trx).insert({
        email: 'foo@bar.baz',
        firstName: 'Foo',
        lastName: 'Bar',
        age: 69
      })
      const baz = await foo.$relatedQuery('pets', trx).insert({
        type: 'CAT', name: 'Baz'
      })
      const petCount = await Pet.query(trx).resultSize()
      if (petCount > 15) {
        const deleteBirds = await Pet.query(trx).delete().where('type', 'BIRD').returning('*')
      }
    })
  } catch(err) {
    console.log(err)
    throw new Error('This is an error')
  }

  // -----
  cleanup()
}

run()
