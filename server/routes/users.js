var express = require('express');
var router = express.Router();

<<<<<<< Updated upstream
(async function (){
  const database = await require('../database/connection');
  const user_collection = database.collection('users');
  let users = await user_collection.find({}).toArray()
  console.log(users)
})()
//const user_collections = database.collection('users');
=======
var register_user = require('../controllers/register_user');

>>>>>>> Stashed changes
/* GET users listing. */
router.get('/', function(req, res, next) {

  res.send('respond with a resource');
});

router.post('/' ,register_user);

module.exports = router;
