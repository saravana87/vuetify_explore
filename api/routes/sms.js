const { Router } = require('express')

var axios = require('axios')
const router = Router()

const accountSid = context.env.sid;
const authToken = context.env.token;
const client = require('twilio')(accountSid, authToken);
var  msg, phoneno;

router.post('/getmessage', function (req, res) {
  console.log(req.body.phone)
  console.log(req.body.msg)
  msg=req.body.msg
  phoneno=req.body.phone
  axios
  .get('http://127.0.0.1:3000/api/sms')
  //console.log(req)
  //console.log(req.body.msg)
})

router.get('/getmessage', function (req, res, next) {
  res.send(req.body)
  console.log(req.body.phone)
})

router.get('/sms', function (req, res, next) {
  //console.log(process.env.hello)
  //console.log(process.env.test)
  console.log("message="+msg+" phone no ="+phoneno)
  var status
  client.messages
  .create({
     body: 'Testing Message',
     from: '+12062035788',
     to: phoneno
   })
  .then(function(message){
    console.log(message.sid)
    res.send(message.sid)

  })
  
})


module.exports = router
