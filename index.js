const express = require('express');
const app = express();

app.use(express.json());
const PORT = 3000;

const restaurantes = [
    {id: 1, nombre: 'sabor casero', direccion: 'Calle 45 #12-30'},
    {id: 2, nombre: 'La esquina', direccion: 'Carrera 10 #5-20'}
];

const productos = [
    {id: 1, restauranteId: 1, nombre: 'Bandeja Paisa', precio: 12000},
    {id: 2, restauranteId: 1, nombre: 'Sancocho', precio: 10000},
    {id: 3, restauranteId: 2, nombre: 'Arepa con queso', precio: 5000} 
];

const usuarios = [

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

    if (!restaurante) {
        return res.status(404).json({ mensaje: 'Restaurante no encontrado'});
    }

    res.json(restaurante)
})

app.get('/productos', (req, res) => {
    res.json(productos);
})

app.get('/restaurantes/:id/productos', (req, res) => {
    const restauranteId = parseInt(req.params.id);
    const productosDelRestaurante = productos.filter(p => p.restauranteId === restauranteId);
    res.json(productosDelRestaurante);
})

app.post('/productos', (req, res) => {

    const restauranteId = req.body.restauranteId;
    const restauranteExiste = restaurantes.find(r => r.id === restauranteId)

    if (!restauranteExiste) {
        return res.status(400).json({ mensaje: 'El restauranteId no corresponde a ningún restaurante existente'});
    }

    const nuevoProducto = {
        id: productos.length + 1,
        restauranteId: req.body.restauranteId, 
        nombre: req.body.nombre,
        precio: req.body.precio
    };

    productos.push(nuevoProducto);
    res.status(201).json(nuevoProducto);
});

app.post('/restaurantes', (req, res) => {

    const nombre = req.body.nombre;

    if (!nombre) {
        return res.status(400).json({ mensaje: 'El nombre del restaurante es obligatorio'})
    }

    const nuevoRestaurante = {
        id: restaurantes.length + 1, 
        nombre: req.body.nombre,
        direccion: req.body.direccion
    }; 

    restaurantes.push(nuevoRestaurante);
    res.status(201).json(nuevoRestaurante);
});

app.post ('/usuarios', (req, res) => { //registro
    const {nombre, correo, contrasena} = req.body;

    if (!nombre || !correo || !contrasena) {
        return res.status(400).json({ mensaje: 'Nombre, correo y contraseña son obligatorios'});
    }

    const correoExiste = usuarios.find(u => u.correo === correo);
    if (correoExiste) {
        return res.status(400).json({mensaje: 'Ya existe un usuario registrado con este correo'});
    }

    const nuevoUsuario = {
        id: usuarios.length + 1,
        nombre, 
        correo,
        contrasena,
        telefono: req.body.telefono || '',
        viveEnConjunto: req.body.viveEnConjunto || false,
        nombreConjunto: req.body.nombreConjunto || '', 
        torre: req.body.torre || ''
    };

    usuarios.push(nuevoUsuario);

    const {contrasena: _, ...usuarioSinContrasena} = nuevoUsuario;
    res.status(201).json(usuarioSinContrasena)
})


app.post('/usuarios/login', (req, res) => { //logeo
    const {correo, contrasena} = req.body; 

    const usuario = usuarios.find(u => u.correo === correo && u.contrasena === contrasena);

    if (!usuario) {
        return res.status(400).json({mensaje: 'Correo o contraseña incorrectos'})
    }

    const { contrasena: _, ...usuarioSinContrasena } = usuario;
    res.json(usuarioSinContrasena)
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})