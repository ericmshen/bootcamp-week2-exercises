const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Get an instance of a user using findById(<YOUR_ID>)
  const user = await User.query().findById('9809ff26-7048-49a5-af42-837500c8a767')
  
  // Use that instance to create a new pet related that user
  // const pet = await Pet.query().insert({
  //   ownerId: '9809ff26-7048-49a5-af42-837500c8a767',
  //   type: 'ALLIGATOR',
  //   name: 'Nietzsche'
  // })

  // Use that instance to get all of the user's pets and children
  // Hint -- use $fetchGraph
  // https://vincit.github.io/objection.js/api/model/instance-methods.html#fetchgraph
  const getPetsAndChildren = await user.$fetchGraph('[children, pets]')
  console.log(getPetsAndChildren)

  // -----
  cleanup()
}

run()
