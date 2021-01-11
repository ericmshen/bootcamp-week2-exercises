exports.up = async knex => knex.schema.createTable('users', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .string('email')
    .notNullable()

  table.string('first_name')
  table.string('last_name')
  table.date('date_of_birth')
  table.string('gender')

  table
    .string('password')
    .notNullable()
  
  table.text('bio')
  table.string('university')
  table.timestamps(true)
})

exports.down = async knex => knex.schema.dropTableIfExists('users')
