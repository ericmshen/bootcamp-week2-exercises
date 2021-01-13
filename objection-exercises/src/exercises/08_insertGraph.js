const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Insert a new person name Peter Bynum with two pet DOGs named Rocco & Roseys
  const addPeter = await User.query().insertGraph({
    firstName: 'Peter',
    lastName: 'Bynum',
    age: 22,
    email: 'peter@abcde.xyz',
    pets: [
      {
        type: 'DOG',
        name: 'Beter'
      },
      {
        type: 'CAT',
        name: 'Ceter'
      }
    ]
  }).returning('*') // doesn't work

  // -----
  cleanup()
}

run()
