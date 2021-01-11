const casual = require('casual')
const userData = require('./users')

casual.define('friendship', () => ({
    id: casual.uuid,
    requestor_id: casual.random_element(userData).id,
    requested_id: casual.random_element(userData).id,
    status: casual.random_element(['Accepted', 'Rejected', 'Pending']),
    request_date: casual.date(format = 'YYYY-MM-DD'),
    type: casual.random_element(['Acquaintances', 'Close Friends', 'Relationship'])
}))

const friendsData = []

for (let i = 0; i < 20; i++) {
    friendsData.push(casual.friendship)
}

module.exports = friendsData