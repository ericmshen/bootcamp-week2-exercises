
exports.up = function(knex) {
  
};

exports.down = async knex => knex.schema.dropTableIfExists('friends')
