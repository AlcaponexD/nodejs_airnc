const Spot = require('../models/Spot');
const User = require('../models/User');
const mongoose = require('mongoose');

module.exports = {

    async index(req,res){
      const {tech} = req.query;
      const spots = await Spot.find({ techs:tech});
      return res.json(spots);
    },

    async store(req,res){
        //Destruturador , procura o nome entre {} entre a req.algo
        const {filename} = req.file;
        const {company,techs,price} = req.body;
        const {user_id} = req.headers;

        const user = await mongoose.Types.ObjectId.isValid(user_id);

        //valida se o usuario que tentou criar o negoço existe
        if(!user){
            return res.status(400).json({error : 'User does not exists'})
        }
        //cria o spot
        const spot = await Spot.create({
            user:user_id,
            thumbnail:filename,
            company,
            //trata a string , transforma em array , e retira os espaços
            techs:techs.split(',').map(tech=>tech.trim()),
            price
        });
        //retorna oque foi gravado
        return res.json(spot)
    }
};