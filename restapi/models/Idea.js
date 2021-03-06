const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const ideaSchema = new Schema({

    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true
    },

    author: {
        type: ObjectId,
        ref: "User"
    }

}, { timestamps: { createdAt: 'created_at' } });

module.exports = new Model('Idea', ideaSchema);