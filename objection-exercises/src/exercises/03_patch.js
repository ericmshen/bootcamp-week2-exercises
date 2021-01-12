const cleanup = require('../lib/cleanup')
const User = require('../models/User')
const Pet = require('../models/Pet')
// Import models

const run = async () => {
  // Update anyone below the age of 18 to be 18 years old (they shouldn't be keeping pets)
  const updateAges = await User.query()
    .patch({age: 18})
    .where('age', '<', '18')
    .returning('*')
    
  // -----
  cleanup()
}

run()
