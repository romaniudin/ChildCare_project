const bookshelf = require('./bookshelf')

const Center = bookshelf.Model.extend({
    tableName: 'centers_table',
  })

module.exports = Center