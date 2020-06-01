
exports.up = function(knex) {
  return knex.schema.createTable('projects',(tbl) => {
        tbl.increments('id')
        tbl.string('name')
            .notNullable()
        tbl.string('description')
        tbl.string('resource')
        tbl.boolean("completed")
  })
  .createTable('resources',(tbl) => {
      tbl.increments('id')
      tbl.string('name')
        .notNullable()
      tbl.string('description')
  })
  .createTable('steps', (tbl) => {
      tbl.increments('id')
      tbl.string('description')
        .notNullable()
      tbl.string('notes')
      tbl.boolean('completed')
      tbl.integer('project_id')
  })

};

exports.down = function(knex) {
  knex.schema.dropTableIfExists('projects')
  knex.schema.dropTableIfExists('resources')
  knex.schema.dropTableIfExists('steps')
  
};
