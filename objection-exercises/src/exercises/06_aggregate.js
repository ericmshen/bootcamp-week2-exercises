const { userParams } = require('../lib')
const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Get the total number of users
  const numUsers = await User.query().resultSize()

  // Get the average age of users
  const avgAge = await User.query().avg('age')

  // Get the total number of dogs
  const numDogs = await Pet.query().where('type', 'DOG').resultSize()

  console.log(numUsers, avgAge[0].avg, numDogs)
  // -----
  cleanup()
}

run()
