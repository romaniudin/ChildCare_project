
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('centers_table', function (table) {
        table.increments('id').primary(); 
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
        table.string('center_name') 
            .notNullable() 
        table.string('age_group') 
            .notNullable()
        table.string('type') 
            .notNullable()
        table.string('cost') 
            .notNullable()
        table.boolean('availability') 
            .notNullable() 
            .defaultTo(true)
        table.string('neighbourhood') 
            .notNullable()
        table.string('contacts') 
            .notNullable() 

    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('centers_table')
};
