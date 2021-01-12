const cleanup = require('../lib/cleanup')
const User = require('../models/User')
const Pet = require('../models/Pet')
const casual = require('casual')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert yourself in the users table
  // at every database call, add await
  const myself = await User.query().insert({

  }).returning('*')

  console.log(myself)

  // Insert a pet belonging to you (get your ID from Postico or DBeaver)

  // -----
  cleanup()
}

run()
