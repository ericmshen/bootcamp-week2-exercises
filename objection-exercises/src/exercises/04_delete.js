const cleanup = require('../lib/cleanup')
// Import models
const Pet = require('../models/Pet')

const run = async () => {
  // Delete all CATS
  const deleteCats = await Pet.query().delete().where('type', 'CAT').returning('*')
  // -----
  cleanup()
}

run()
