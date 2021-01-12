const User = require('../models/User')
const cleanup = require('../lib/cleanup')

const allUsers = async () => {
    try {
        const data = await User.query().withGraphFetched('pets')
        console.log(data)
        cleanup()
    } catch (err) {
        console.log(err)
    }
}

allUsers()