const express = require('express');
const { viewcountry, Addcountry, insertCountry, deletecountry, updatecountry, editcountry, statusChange } = require('../controllers/countrycontroller');

const routes = express.Router();

routes.get('/',viewcountry)
routes.get('/add',Addcountry)
routes.post('/insertCountry',insertCountry)
routes.get('/deletecountry',deletecountry)
routes.get('/statusChange',statusChange)
routes.get('/editcountry',editcountry)
routes.post('/updatecountry',updatecountry)



module.exports = routes;