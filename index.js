const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
const port = 19093
let movieRoute = require('./routes/movie.route')
let userRoute = require('./routes/user.route')

//Database
mongoose.connect('mongodb://localhost/movies', {useNewUrlParser: true});
mongoose.connection.once('open',function(){
    console.log('Database connected Successfully');
}).on('error',function(err){
    console.log('Error', err);
})

// route to orders
//app.use("/stocks-list", stockList);
app.use(userRoute)
app.use(movieRoute)

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})