const { Router } = require('express')
const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('body-parser')
const session = require('express-session')
const router = Router()
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/talkify');
// Mock Users
const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' }
]

/* GET users listing. */
router.get('/users', function (req, res, next) {
  res.json(users)
})
var userSchema = new mongoose.Schema({
  name: String,
  email: String
});
router.get('/email_exist', function (req, res, next) {
  User = mongoose.model('users', userSchema)
  console.log(req.query.name)
  username = req.query.name
  email = req.query.email
  console.log("email="+email)
  User.countDocuments({ email: email }, function (err, count) {    
    console.log('there are %d users', count);
    console.log("count="+count);
    return count
  }).then(
    function(result){    
      ct = result
      console.log(ct)
      res.json(JSON.stringify({ a: ct }))
    }
  )
  
  
  
})

router.post('/signup', function (req, res, next) {
  name=req.body.username
  email=req.body.email
  password=req.body.password
  console.log("password="+password)
  console.log(req.body.password)
  const mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/talkify');
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    //res.json({ result: true })
  });
  var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
  });
  let users
  try {
    User = mongoose.model('users')
  } catch (error) {
    User = mongoose.model('users', userSchema)
  }
  //var User = mongoose.model('User', userSchema);
  
  var saveinfo = new User({ name: name,email: email,password: password, temp: 'asdfdf' });
  user_count = User.count({ name: name })
  User.countDocuments({ name: name }, function (err, count) {    
    console.log('there are %d users', count);
  });
  /* return; */
  saveinfo.save(function(error) {
    console.log("User has been saved!");
    if (error) {
         console.error(error);
      }
    });
  res.json({ ok: true })
})

router.get('/login_check', function (req, res, next) {
  
  
  
  email = req.query.email
  password = req.query.password
  console.log("email="+email)
  User.countDocuments({ email: email }, function (err, count) {    
    console.log('there are %d users', count);
    console.log("count="+count);
    return count
  }).then(
    function(result){    
      ct = result
      console.log(ct)
      res.json(JSON.stringify({ a: ct }))
    }
  )
  
  
  
})

router.get('/mongodb_createtables', function (req, res, next) {
  const mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/talkify').then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));
  var nameSchema = new mongoose.Schema({
    firstName: String,
    lastNameName: String,
    email: String
   });
  //console.log(nameSchema)
  var User = mongoose.model("Users", nameSchema);
  res.json({ ok: true })
  //User.save()

})

/* GET user by ID. */
router.get('/users/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

router.use(session({
  secret: 'super-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000 }
}))

// POST `/api/login` to log in the user and add him to the `req.session.authUser`
router.post('/api/login', function (req, res) {
  if (req.body.username === 'demo' && req.body.password === 'demo') {
    req.session.authUser = { username: 'demo' }
    return res.json({ username: 'demo' })
  }
  res.status(401).json({ error: 'Bad credentials' })
})

// POST `/api/logout` to log out the user and remove it from the `req.session`
router.post('/api/logout', function (req, res) {
  delete req.session.authUser
  res.json({ ok: true })
})

module.exports = router
