const express = require('express');
const { viewstate, addstate,insertstate,deltestate, statusChange, editstate,updatestate } = require('../controllers/statecontroller');

const routes = express.Router();

routes.get('/',viewstate)
routes.get('/add',addstate)
routes.post('/insertstate',insertstate)
routes.get('/deltestate',deltestate)
routes.get('/statusChange',statusChange)
routes.get('/editstate',editstate)
routes.post('/updatestate',updatestate)



module.exports = routes;