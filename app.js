'use strict';

const app = require('express')();
require('dotenv').config();

const port = process.env.PORT || 3000;

const routes = require('./routes');

app.use('/', routes);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});