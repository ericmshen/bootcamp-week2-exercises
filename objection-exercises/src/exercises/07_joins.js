const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {

  // Get all users and their pets
  const usersAndPets = await User.query().withGraphFetched('pets')
  // console.dir(usersAndPets, { depth: null })

  // Get all users, their pets, AND their children
  const usersPetsAndChildren = await User.query().withGraphFetched('[pets, children]')
  // console.dir(usersPetsAndChildren, { depth: null })

  // Get all users, their parents, and their grandparents
  const usersParentsAndGrandparents = await User.query().withGraphFetched('[parents, parents.parents]')
  // console.dir(usersParentsAndGrandparents, { depth: 4 })

  // Get all users, their pets, their children, and their childrens' pets
  const usersPetsChildrenAndChildrenPets = await User.query().withGraphFetched('[children, children.pets]')
  // console.dir(usersPetsChildrenAndChildrenPets, { depth: 5 })

  // -----
  cleanup()
}

run()
