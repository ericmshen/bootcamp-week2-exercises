const casual = require('casual')

casual.define('user', () => ({
  id: casual.uuid,
  email: casual.email,
  first_name: casual.name,
  last_name: casual.name,
  date_of_birth: casual.date(),
  gender: casual.random_element(['Male', 'Female', 'Other']),
  password: casual.password,
  bio: casual.description,
  university: casual.city,
  created_at: casual.moment,
  updated_at: casual.moment,
}))

const userData = []

for (let i = 0; i < 20; ++i) {
  userData.push(casual.user)
}

module.exports = userData
