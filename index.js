const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send({message: "olha eu aqui no outro repositorio"});
})

app.listen(4001, ()=>{
  console.log('Api inicializada na porta 4001');
})
