const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = process.env.PORT || process.argv[2] || 8080

const centerRouter = require('./routes/centers')

app.use(cors())
app.use(bodyParser.json())
app.use('/', centerRouter)

app.listen(port, () => {
  console.log(`Listening on ${port}...`)
})