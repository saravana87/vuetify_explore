const express = require('express')
var bodyParser = require('body-parser')
// Create express instnace
const app = express()
// Import API Routes

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
// Require API routes
const users = require('./routes/users')
const sms = require('./routes/sms')
app.use(users)
app.use(sms)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
