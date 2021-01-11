
exports.up = async knex => knex.schema.createTable('users', table => {
    table
        .uuid('id')
        .notNullable()
        .primary()
    
    table
        .uuid('user_id')
        .references('users.id')
        .notNullable()
    
    table.text('content')
    table.date('post_date')
    table.integer('likes')
})

exports.down = async knex => knex.schema.dropTableIfExists('posts')