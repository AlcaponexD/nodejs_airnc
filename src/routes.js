const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/UserController');
const SpotController = require('./controllers/SpotController');
const multer= require('multer');
const uploadConfig = require('./config/upload');
const upload = multer(uploadConfig);
const dashboard = require('./controllers/DashboardController');
const bookings = require('./controllers/BookingController');

//Routes list
routes.post('/users',UserController.store);

routes.post('/spots',upload.single('thumbnail'),SpotController.store);
routes.get('/spots',SpotController.index);
routes.get('/dashboard',dashboard.show);
routes.post('/spot/:spot_id/bookings',bookings.store);


module.exports = routes;