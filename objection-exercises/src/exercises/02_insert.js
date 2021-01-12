const cleanup = require('../lib/cleanup')
const User = require('../models/User')
const Pet = require('../models/Pet')
const casual = require('casual')
// Import models

const run = async () => {
  // Insert yourself in the users table
  // using a transaction from the afternoon session to 'bundle' the actions together
  try {
    const insertSelf = await User.transaction(async trx => {
      const myself = await User.query(trx).insert({
          email: 'ericshen@college.harvard.edu',
          firstName: 'Eric',
          lastName: 'Shen',
          age: 18
      }).returning('*')
      const pet = await myself.$relatedQuery('pets', trx).insert({
        type: 'DOG', name: 'Mark'
      })
      return pet
    })
    console.log(insertSelf)
    cleanup()
  } catch(err) {
    console.log(err)
  }

  // -----
  cleanup()
}

run()
