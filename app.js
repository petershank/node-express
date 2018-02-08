const express = require('express');
const app = express();

// if deployed to Heroku, process.env.PORT will be set dynamically to some value you can't predict,
// even though your publicly-visible app will be served on port 80
var port = process.env.PORT || 8080; 

app.get('/', (req, res) => res.send('Greetings from excellent and outstanding port ' + port));

app.listen(port, () => console.log('Listening on port ' + port));