const mongoose = require('mongoose');
const { Schema } = mongoose;
const { categorySchema } = require('./Category');

//Definição da model de postagens

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    postedBy: {
        type: String, //ID do usuário que fez a postagem
    },
    tags: {
        type: [categorySchema]
    },
}, {timestamps: true});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;