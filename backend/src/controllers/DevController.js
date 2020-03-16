const axios = require('axios');
const Dev = require('../models/Dev');
const parceStringAsArray = require('../Utils/parceStrinAsArray');

module.exports = {
    async index(request, response){
        const devs = await Dev.find();
        return response.json(devs);
    },

    async store (request, response){
        //assync que a chamada pode demora a responder e na funcao passa o await que soh vai 
        //responder depois de obter resposta
        const { github_username,techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        if(!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
            const { name = login, avatar_url, bio } = apiResponse.data;
        
            const techsArray = parceStringAsArray(techs);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
               }
        
            //await soh vai responder depois de executar essa função 
            dev = await Dev.create({
                 github_username,
                 name,
                 avatar_url,
                 bio,
                 techs: techsArray,
                 location,
             })
        }
        return response.json(dev)
    }
};