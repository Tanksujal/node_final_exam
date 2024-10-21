const express = require('express');

const routes = express.Router();

routes.use('/', require('./authRoute'));
routes.use('/forgot', require('./forgotRoute'));
routes.use('/country', require('./countryRoutes'));
routes.use('/state', require('./stateRoute'));
routes.use('/exsubcategory', require('./exsubcategoryRoute'));
routes.use('/product', require('./productRoute'));

module.exports = routes;