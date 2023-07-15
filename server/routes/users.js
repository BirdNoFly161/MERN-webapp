var express = require('express');
var router = express.Router();

(async function (){
  const database = await require('../database/connection');
  const user_collection = database.collection('users');
  let users = await user_collection.find({}).toArray()
  console.log(users)
})()
//const user_collections = database.collection('users');
/* GET users listing. */
router.get('/', function(req, res, next) {

  res.send('respond with a resource');
});

module.exports = router;
