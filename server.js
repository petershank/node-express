// a bare bones http server implemented in node and express

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// in some deployment environments, such as Heroku, process.env.PORT will be set dynamically
// to a value you can't control, even though your publicly visible app will be served on port 80 or so

var port = process.env.PORT || 8080;

var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);



//app.get('/', (req, res) => res.send('Hello, world.'));

app.listen(port, () => console.log('Listening on port ' + port));
