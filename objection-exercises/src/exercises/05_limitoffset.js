const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Get the first 5 users, ordered by lastName
  const firstFiveLastName = await User.query().orderBy('lastName').limit(5)
  console.log(firstFiveLastName)

  // Get the second 5 users, ordered by lastName
  const secondFiveLastName = await User.query().orderBy('lastName').limit(5).offset(5)
  console.log(secondFiveLastName)
  
  // -----
  cleanup()
}

run()
