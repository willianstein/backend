const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
//aqui eu chamo as rotas dentro do arquivo rotas 
const routes = require('./routes')

//mogonDB
mongoose.connect('mongodb+srv://willian:123@cluster0-54el9.mongodb.net/week10?retryWrites=true&w=majority',{
     useNewUrlParser: true,
     useUnifiedTopology: true

});

app.use(cors());
app.use(express.json());
//agora todas as rotas estao cadastradas *o json tem que ficar na parte de cima porque ele le linear 
app.use(routes)




app.listen(3002);
console.log("servidor rodando porta 3000")
console.log("sair ctrl c")