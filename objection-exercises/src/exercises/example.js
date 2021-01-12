const User = require('../models/User')
const cleanup = require('../lib/cleanup')

const allUsers = async () => {
    try {
        const data = await User.query()
            .withGraphFetched('pets')
        console.dir(data, { depth: null })
        cleanup()
    } catch (err) {
        console.log(err)
    }
}

const instanceUser = async () => {
    try {
        await User.query().insert({
            email: 'charles@charles.edu',
            firstName: 'Charles',
            lastName: 'Charles',
            age: 12
        })
        const charles = await User.query().findOne('firstName', 'Charles')
        const updatecharles = await charles.$query().patch({ lastName: 'Charlie' })
        // console.log(updatecharles)
        cleanup()
    } catch(err) {
        console.log(err)
    }
}

const transactionUser = async () => {
    try {
        const scrappy = await User.transaction(async trx => {
            const bob = await User.query(trx).insert({
                email: 'bob@bob.org',
                firstName: 'Bob',
                lastName: 'Joe',
                age: 20
            }).returning('*')
            const pet = await bob.$relatedQuery('pets', trx).insert({
                type: 'FISH', name: 'Foo'
            })
            return pet
        })
        console.log(scrappy)
        cleanup()
    } catch(err) {
        console.log(err)
    }
}

transactionUser()