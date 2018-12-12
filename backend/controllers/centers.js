const Center = require('../models/centers')

module.exports = {
  getCenters: () => {
    return new Promise((resolve, reject) => {
        Center
        .fetchAll()
        .then(centers => {
          resolve(centers.models.map(centers => centers.attributes))
        })
    })
  }

}