const { application } = require('express');
const express = require('express')
const server = express();
const db = []
server.use(express.json())

server.get('/', (req,res) => {
    return res.json(db)
});

server.post('/', (req,res) => {
    const { body } = req
    db.push(body)
});

server.put('/', (req,res) => {
    return res.json(db)
});

server.delete('/:id', (req,res) => {
    return res.json(db)
});

server.listen(3000, () => {
    console.log('Servidor esta funcionando');
});



application.listen(21260, () => {
console.log(`express started at http://localhost:3000` )
})