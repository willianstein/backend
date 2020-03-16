
const Dev                   = require('../models/Dev');
const parseStringAsArray    = require('../Utils/parceStrinAsArray');

module.exports = {
    async index (request, response) {
        // Search devs for techs and distance

        const { latitude, longitude, techs } = request.query;

       const techsArray = parseStringAsArray(techs);
        

       const devs = await Dev.find({
           techs: {
               $in: techsArray,
           },
           location: {
              $near: {
                  $geometry: {
                      type: 'Point',
                      coordinates:[longitude, latitude],
                  },
                  $maxDistance: 10000,
              },
           },
       });

        //Programação da rota


       
        return response.json({ devs });
    }
};