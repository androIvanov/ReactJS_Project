const express = require('express');
const cookieParser = require('cookie-parser');

module.exports = (app) => {
    
    app.use('/static', express.static('static'));
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());
    app.use(cookieParser());
}