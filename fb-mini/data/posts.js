const casual = require('casual')
const userData = require('./users')

casual.define('post', () => ({
    id: casual.uuid,
    user_id: casual.random_element(userData).id,
    content: casual.string,
    post_date: casual.date(format = 'YYYY-MM-DD'),
    likes: casual.integer(from = 0, to = 100)
}))

const postsData = []

for (let i = 0; i < 20; i++) {
    postsData.push(casual.post)
}

module.exports = postsData