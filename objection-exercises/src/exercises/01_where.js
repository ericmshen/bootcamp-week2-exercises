const cleanup = require('../lib/cleanup')
const User = require('../models/User')
const Pet = require('../models/Pet')
// Import models

const run = async () => {
  // Get all users with a specific name (pick it from your database)
  const Charleses = await User.query().where('firstName', 'Charles')
  console.log(Charleses)

  // Do the same with object notation
  // const Charleses = await user.query().where({firstName: 'Charles'})
  
  // Get all DOGS and BIRDS
  const DogsAndBirds = await Pet.query().whereIn('type', ['DOG', 'BIRD'])
  console.log(DogsAndBirds)
  
  // -----
  cleanup()
}

run()
