//Importação de módulos
const mongoose = require('mongoose');
const PostModel = require('../models/Post');

//Importação da variáveis de ambiente
require('dotenv').config();

//Função que semea o banco de dados
async function seedCategorias() {
    try {
        
        //Conexão com o banco de dados
        mongoose.set('strictQuery', true);
        await mongoose.connect(process.env.MONGODB_URI);

        const numPosts = 50;
        for (let i = 1; i<=numPosts; i++) {
            const postData = { 
                title: `Título postagem ${i}`,
                description: `Descrição postagem ${i}`,
                content: `Conteúdo postagem ${i}`,
                tags: [
                    {
                        "name": `Tag ${i}`,
                        "slug": `Tag ${i}`
                    },
                    {
                        "name": `Tag ${i + 1}`,
                        "slug": `Tag ${i + 1}`
                    }
                ]
             };

             const post = new PostModel(postData);
             await post.save();
             console.log(`Postagem ${i} salva com sucesso!`);
        }
        console.log('Seed concluido');
        mongoose.disconnect();
    } catch (error) {
        console.log(`Erro ao semear o banco de dados: ${error}`);
    }
}

seedCategorias();