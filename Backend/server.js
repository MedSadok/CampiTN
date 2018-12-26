const express= require ("express");
const mongoose = require ("mongoose");
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const randos = require('./routes/api/randonnees');
const bodyParser = require('body-parser');
const passport = require('passport');


// const {MongoClient, ObjectID} = require ("mongodb");
// const assert = require ("assert");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require('./config/Key').MongoUrl;

// Connect to mongo DB
mongoose
  .connect(
    db,
    { useNewUrlParser: true } //need this for api support
  )
.then(() => console.log('Mongo db connected'))
.catch(err => console.log('db erreur'));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use routes
app.get('/', (req, res) => res.send ('hello'))

app.use('/api/users', users);
app.use('/api/Profile', profile)
app.use('/api/Randonnes', randos)

// app.use(bodyParser.json());

// const MongoUrl = "mongodb://localhost:27017";

// const dataBase = "randos";

// MongoClient.connect(
//     MongoUrl, { useNewUrlParser: true }, 
//     (err, client) => {
//         assert.equal(err, null, "dataBase connection failed");
//         const db = client.db(dataBase);

        // app.post("/add-post", (req, res) => {
        //     let newPost = req.body;
        //     db.collection("posts").insertOne(newPost, (err, data)=>{
        //         if (err) res.send("cant not add new post");
        //         else res.send("new post added")
        //     })
        // })

        // app.get("/get-post", (req, res) => {
        //     db.collection("posts")
        //     .find()
        //     .toArray((err, data)=>{
        //         if (err) res.send("cant not get posts list");
        //         else res.send(data)
        //     })
        // })
//     }
// );




app.listen(5500, err => {
    if (err) console.log ('server erreur');
    else console.log ('server is runing on port 5500');
});
