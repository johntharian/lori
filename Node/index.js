let express = require('express')
let app = express();// Setup server port
var port = process.env.PORT || 8080;// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});
let apiRoutes = require("./api-routes")// Use Api routes in the App
app.use('/api', apiRoutes)