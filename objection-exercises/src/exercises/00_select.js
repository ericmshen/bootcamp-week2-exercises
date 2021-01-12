const cleanup = require('../lib/cleanup')

// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = (async () => {
  // Get all pets
  const allPets = await Pet.query()
  console.log(allPets)

  // Get the name and age of all users
  const getNameAndAge = await User.query().select('firstName', 'lastName', 'age')
  console.log(getNameAndAge)
  
  // ------
  cleanup()
})

run()
