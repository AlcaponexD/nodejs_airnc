const express = require('express');

const routes = require('./routes');
const mongoose = require('mongoose');

//req.query.idade => pega parametro no get ou seja na url
//req.params.id => acessar route parans para update e delete
//req.body

const app = express();

mongoose.connect('mongodb+srv://oministack:oministack@airbnb-cbu19.mongodb.net/airbnb?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
app.use(express.json());
app.use(routes);

app.listen('555');