const cleanup = require('../lib/cleanup')
// Import models

const run = async () => {
  // Get an instance of a user using findById(<YOUR_ID>)

  // Use that instance to create a new pet related that user

  // Use that instance to get all of the user's pets and children
  // Hint -- use $fetchGraph
  // https://vincit.github.io/objection.js/api/model/instance-methods.html#fetchgraph

  // -----
  cleanup()
}

run()
