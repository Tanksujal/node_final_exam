const express = require('express');
const { viewcity, addcity, insertcity, deletecity ,statusChange, editcity, updatecity} = require('../controllers/citycontrollersa');

const routes = express.Router();

routes.get('/',viewcity)
routes.get('/add',addcity)
routes.post('/insertcity',insertcity)
routes.get('/deletecity',deletecity)
routes.get('/statusChange',statusChange)
routes.get('/editcity',editcity)
routes.post('/updatecity',updatecity)
module.exports = routes;