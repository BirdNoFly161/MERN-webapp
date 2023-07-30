var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
<<<<<<< Updated upstream

/*const {MongoClient} = require("mongodb");
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function run(){
    const database = client.db('web-app-db');
    console.log("connected to database successfully")
    const users_collection = database.collection('users');
    const users = await users_collection.find({}).toArray()
    console.log(users)
}

run().catch(console.dir)
*/
=======
>>>>>>> Stashed changes

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
