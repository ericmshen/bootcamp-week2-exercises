const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = (async () => {
  // Write Queries and Logs Here !!!
  const allUsers = await User.query()
  console.log(allUsers)

  // Get all pets

  // Get the name and age of all users


  // ------
  cleanup()
})

run()
