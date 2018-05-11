// a bare bones http server implemented in node and express

const express = require('express');
const app = express();

// in some deployment environments, such as Heroku, process.env.PORT will be set dynamically 
// to a value you can't control, even though your publicly visible app will be served on port 80 or so

var port = process.env.PORT || 8080; 

app.get('/', (req, res) => res.send('Greetings from port ' + port));

app.listen(port, () => console.log('Listening on port ' + port));
