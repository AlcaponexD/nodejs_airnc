const express = require('express');

const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors')
const path = require('path');
//req.query.idade => pega parametro no get ou seja na url
//req.params.id => acessar route parans para update e delete
//req.body

const app = express();

mongoose.connect('mongodb+srv://oministack:oministack@airbnb-cbu19.mongodb.net/airbnb?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
app.use(cors());
app.use(express.json());
app.use('/files',express.static(path.resolve(__dirname,'..','uploads')));
app.use(routes);

app.listen('555');