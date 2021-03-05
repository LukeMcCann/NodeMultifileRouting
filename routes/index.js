'use strict';

const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('home');
});

routes.get('/test', (req, res) => {
    res.send('test');
});

module.exports = routes;