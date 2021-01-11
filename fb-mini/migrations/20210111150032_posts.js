
exports.up = async knex => knex.schema.createTable('users', table => {
    table
        .uuid('id')
        .notNullable()
        .primary()
})

exports.down = async knex => knex.schema.dropTableIfExists('posts')