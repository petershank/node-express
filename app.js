const express = require('express');
const app = express();

var port = process.env.PORT || 8081; // if deployed to Heroku, process.env.PORT will be set dynamically

app.get('/', (req, res) => res.send('Hello from port ' + port));

app.listen(port, () => console.log('Listening on port ' + port));