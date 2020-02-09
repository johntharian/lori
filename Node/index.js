let express = require('express')
let app = express();// Setup server port
var port = process.env.PORT || 8080;// Send message for default URL
app.get('/', (req, res) => res.send('LoRi Node Server for restful Api'));// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});
let apiRoutes = require("./api-routes")// Use Api routes in the App
app.use('/api', apiRoutes)


// Import Body parser
let bodyParser = require('body-parser');// Import Mongoose
let mongoose = require('mongoose');// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
   extended: true
}));app.use(bodyParser.json());// Connect to Mongoose and set connection variable
// Deprecated: mongoose.connect('mongodb://localhost/resthub');
mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true});var db = mongoose.connection;