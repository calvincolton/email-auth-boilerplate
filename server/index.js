const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

// DB Setup
// mongoose.connect('mongodb://localhost:auth/auth');
mongoose.connect('mongodb://localhost:27017/auth');

// App Setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server is listening on:', port);





// NOTE: nodemon watches our project directory for any file changes.
// If files have changed, it will restart our server.
// nodemon will be used to in our npm run dev script in the package.json
// NOTE: morgan is middleware used to log incoming requests.
// Morgan will help us with debugging.
// NOTE: body-parser is a middleware used to parse incoming requests
