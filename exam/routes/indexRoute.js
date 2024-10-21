const express = require('express');

const routes = express.Router();

routes.use('/', require('./authRoute'));
routes.use('/country', require('./countryRoutes'));
routes.use('/state', require('./stateRoute'));
routes.use('/city', require('./cityRoutes'));


module.exports = routes;