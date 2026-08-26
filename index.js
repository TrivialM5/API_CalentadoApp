const express = require('express');
const app = express();
const PORT = 3000;

const restaurantes = [
    {id: 1, nombre: 'sabor casero', direccion: 'Calle 45 #12-30'},
    {id: 2, nombre: 'La esquina', direccion: 'Carrera 10 #5-20'}
];

app.get('/', (req, res) => {
    res.send('Alooo, La API de CalentadoApp esta camellando!')
});

app.get('/restaurantes', (req, res) => {
    res.json(restaurantes);
})

app.get('/restaurantes/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const restaurante = restaurantes.find(r => r.id === id);
    res.json(restaurante)
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})