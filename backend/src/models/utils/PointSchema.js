const mongoose = require ("mongoose");

const PointSchema = new mongoose.Schema({
    type:{
        type: String,
        unum:['Point'],
        require: true,
    },
    coordinates:{
        type:[Number],
        required: true,
    },
    });

module.exports = PointSchema;