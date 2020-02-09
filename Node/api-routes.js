// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
dat={
    lat:"00",
    long:"00"
};

router.get('/get', function (req, res) {
    res.json(dat);
});

router.post('/post', function (req,res){
        var dat[lat]=req.body.lat;
        var dat[long]=req.body.long;
})
// Export API routes
module.exports = router;