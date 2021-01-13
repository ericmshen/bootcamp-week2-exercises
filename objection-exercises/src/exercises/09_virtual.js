const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Use basic queries to test any virtual attributes you wrote on your models
  const user = User.query().first()
  console.log(user.tableName())
  console.log((await user).fullName())
  console.log((await user).userHasEduEmail())
  // -----
  cleanup()
}

run()
