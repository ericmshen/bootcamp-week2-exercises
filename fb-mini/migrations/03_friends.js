
exports.up = async knex => knex.schema.createTable('users', table => {
    table
        .uuid('id')
        .notNullable()
        .primary()
    
    table
        .uuid('requestor_id')
        .references('users.id')
    
    table
        .uuid('requested_id')
        .references('users.id')
    
    table.string('status')
    table.date('request_date')
    table.string('type')
})

exports.down = async knex => knex.schema.dropTableIfExists('friends')
