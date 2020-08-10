const env = process.env.NODE_ENV || 'development';

const mongoose = require('mongoose');
const config = require('./config/config')[env];
const express = require('express');
const app = express();
const router = require('./routes');

mongoose.connect(config.databaseUrl, {useNewUrlParser: true, useUnifiedTopology: true});

require('./config/express')(app);
router(app);

app.listen(config.port, console.log('Listening ' + config.port));