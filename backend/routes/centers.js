const express = require('express')
const router = express.Router()
const CenterController = require('../controllers/centers')

router.get('/register', (req, res) => {
    CenterController.getCenters()
  .then(centers => res.json(centers))
})

router.put('/register', (req, res) => {
  const { CenterInfo } = req.body
  CenterController
    .updateCenter(CenterInfo)
    .then(centers => res.json(centers))
})

router.get('/', (req, res) => {
  CenterController.getCenters()
.then(centers => res.json(centers))
})


module.exports = router