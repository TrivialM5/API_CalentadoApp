const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const restaurantes = [
    { id: 1, nombre: 'Hamburguesas Krusty', direccion: 'Calle 85 # 15-42, Chapinero', imagen: 'assets/img/krusty.png', propietarioId: null },
    { id: 2, nombre: 'El Holandés Cocinante', direccion: 'Carrera 7 # 45-28, Chapinero', imagen: 'assets/img/fish.jpg', propietarioId: null },
    { id: 3, nombre: 'Los Pollos Hermanos', direccion: 'Calle 127 # 19-36, Usaquén', imagen: 'assets/img/pollo_hermano.jpg', propietarioId: null },
    { id: 4, nombre: 'Burger Shot', direccion: 'Carrera 68 # 26-54, Engativá', imagen: 'assets/img/burgershot.svg', propietarioId: null },
    { id: 5, nombre: 'Pizza Planet', direccion: 'Calle 53 # 24-17, Teusaquillo', imagen: 'assets/img/pizzaplanet.png', propietarioId: null },
    { id: 6, nombre: 'Taberna de Moe', direccion: 'Carrera 80 # 42-65 Sur, Kennedy', imagen: 'assets/img/tabernamoe.jfif', propietarioId: null },
    { id: 7, nombre: 'Reino de las alitas', direccion: 'Calle 72 # 11-39, Barrios Unidos', imagen: 'assets/img/reinoalitas.webp', propietarioId: null },
    { id: 8, nombre: 'Freddys Pizza', direccion: 'Carrera 30 # 8-52, Puente Aranda', imagen: 'assets/img/ffp.png', propietarioId: null },
    { id: 9, nombre: 'Donas El mantecas', direccion: 'Calle 140 # 12-25, Usaquén', imagen: 'assets/img/mantecas.jpg', propietarioId: null },
    { id: 10, nombre: 'Gusteaus', direccion: 'Carrera 50 # 3-71, Puente Aranda', imagen: 'assets/img/gustos.jpg', propietarioId: null },
];

const productos = [
    { id: 1, restauranteId: 1, nombre: 'TapaArterias', precio: 24000, imagen: 'assets/img/img01.jfif' },
    { id: 2, restauranteId: 1, nombre: 'Ribwich', precio: 28000, imagen: 'assets/img/img02.jfif' },
    { id: 3, restauranteId: 1, nombre: 'Doble Krusty Burger', precio: 32000, imagen: 'assets/img/img03.png' },

    { id: 4, restauranteId: 2, nombre: 'Festín del Capitán', precio: 48000, imagen: 'assets/img/img04.jpg' },
    { id: 5, restauranteId: 2, nombre: 'Sancocho de pescado', precio: 29000, imagen: 'assets/img/img05.jfif' },
    { id: 6, restauranteId: 2, nombre: 'Bagre en salsa', precio: 35000, imagen: 'assets/img/img06.gif' },

    { id: 7, restauranteId: 3, nombre: 'Pollo Original Hermanos (receta original)', precio: 26000, imagen: 'assets/img/img07.jfif' },
    { id: 8, restauranteId: 3, nombre: 'Alitas de Albuquerque', precio: 24000, imagen: 'assets/img/img08.jfif' },
    { id: 9, restauranteId: 3, nombre: 'Hamburguesa W.W', precio: 29000, imagen: 'assets/img/img09.jfif' },

    { id: 10, restauranteId: 4, nombre: 'Bleeder Burger', precio: 22000, imagen: 'assets/img/img10.webp' },
    { id: 11, restauranteId: 4, nombre: 'Heart Stopper Burger', precio: 36000, imagen: 'assets/img/img11.webp' },
    { id: 12, restauranteId: 4, nombre: 'Papas Los Santos', precio: 14000, imagen: 'assets/img/img12.jfif' },

    { id: 13, restauranteId: 5, nombre: 'Pizza Lightyear', precio: 39000, imagen: 'assets/img/img13.jfif' },
    { id: 14, restauranteId: 5, nombre: 'Palitos Espaciales', precio: 15000, imagen: 'assets/img/img14.jfif' },
    { id: 15, restauranteId: 5, nombre: 'Pizza Galáctica', precio: 34000, imagen: 'assets/img/img15.jfif' },

    { id: 16, restauranteId: 6, nombre: 'Llamarada Moe', precio: 18000, imagen: 'assets/img/img16.webp' },
    { id: 17, restauranteId: 6, nombre: 'Duff SixPack', precio: 35000, imagen: 'assets/img/img17.webp' },
    { id: 18, restauranteId: 6, nombre: 'Huevos en Salmuera', precio: 9000, imagen: 'assets/img/img18.jfif' },

    { id: 19, restauranteId: 7, nombre: 'Alitas del Reino', precio: 27000, imagen: 'assets/img/img19.jfif' },
    { id: 20, restauranteId: 7, nombre: 'Extrahuevordinario', precio: 22000, imagen: 'assets/img/img20.jfif' },
    { id: 21, restauranteId: 7, nombre: 'Alitas Furia', precio: 32000, imagen: 'assets/img/img21.jpg' },

    { id: 22, restauranteId: 8, nombre: 'Fazbear Clásica', precio: 30000, imagen: 'assets/img/img22.jfif' },
    { id: 23, restauranteId: 8, nombre: 'Golden Nuggets', precio: 19000, imagen: 'assets/img/img23.webp' },
    { id: 24, restauranteId: 8, nombre: 'Night Pizza', precio: 37000, imagen: 'assets/img/img24.jfif' },

    { id: 25, restauranteId: 9, nombre: 'Caja de Donas Springfield', precio: 42000, imagen: 'assets/img/img25.webp' },
    { id: 26, restauranteId: 9, nombre: 'Dona Rosada de Homero', precio: 8000, imagen: 'assets/img/img26.jfif' },
    { id: 27, restauranteId: 9, nombre: 'Donas Diablo', precio: 11000, imagen: 'assets/img/img27.webp' },

    { id: 28, restauranteId: 10, nombre: 'Ratatouille', precio: 95000, imagen: 'assets/img/img28.jpg' },
    { id: 29, restauranteId: 10, nombre: 'Sancocho frances', precio: 120000, imagen: 'assets/img/img29.jfif' },
    { id: 30, restauranteId: 10, nombre: 'Boeuf Bourguignon', precio: 185000, imagen: 'assets/img/img30.jpg' },
];

const usuarios = [
    { id: 1, nombre: 'Usuario Prueba', correo: 'prueba@correo.com', contrasena: '12345', numero: '3000000000', direccion: 'por ahi' }
];

app.get('/', (req, res) => {
    res.send('Alooo, La API de CalentadoApp esta camellando!');
});

app.get('/restaurantes', (req, res) => {
    res.json(restaurantes);
});

app.get('/restaurantes/propietario/:propietarioId', (req, res) => {
    const propietarioId = parseInt(req.params.propietarioId);
    const restaurante = restaurantes.find(r => r.propietarioId === propietarioId);

    if (!restaurante) {
        return res.status(404).json({ mensaje: 'Este usuario no tiene restaurante' });
    }
    res.json(restaurante);
});

app.get('/restaurantes/:id/productos', (req, res) => {
    const restauranteId = parseInt(req.params.id);
    const productosDelRestaurante = productos.filter(p => p.restauranteId === restauranteId);
    res.json(productosDelRestaurante);
});

app.get('/restaurantes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const restaurante = restaurantes.find(r => r.id === id);

    if (!restaurante) {
        return res.status(404).json({ mensaje: 'Restaurante no encontrado' });
    }
    res.json(restaurante);
});

app.post('/restaurantes', (req, res) => {
    const { nombre, direccion, imagen, propietarioId } = req.body;

    if (!nombre) {
        return res.status(400).json({ mensaje: 'El nombre del restaurante es obligatorio' });
    }

    if (propietarioId) {
        const yaTiene = restaurantes.find(r => r.propietarioId === propietarioId);
        if (yaTiene) {
            return res.status(400).json({ mensaje: 'Este usuario ya tiene un restaurante' });
        }
    }

    const nuevo = {
        id: restaurantes.length + 1,
        nombre,
        direccion: direccion || '',
        imagen: imagen || 'assets/img/test.png',
        propietarioId: propietarioId || null
    };

    restaurantes.push(nuevo);
    res.status(201).json(nuevo);
});

app.post('/productos', (req, res) => {
    const { restauranteId, nombre, precio, imagen } = req.body;

    if (!nombre || !precio) {
        return res.status(400).json({ mensaje: 'Nombre y precio son obligatorios' });
    }

    const restauranteExiste = restaurantes.find(r => r.id === Number(restauranteId));
    if (!restauranteExiste) {
        return res.status(400).json({ mensaje: 'El restaurante no existe' });
    }

    const nuevo = {
        id: productos.length + 1,
        restauranteId: Number(restauranteId),
        nombre,
        precio: Number(precio),
        imagen: imagen || 'assets/img/test.png'
    };

    productos.push(nuevo);
    res.status(201).json(nuevo);
});

app.post('/usuarios', (req, res) => {
    const { nombre, correo, contrasena } = req.body;

    if (!nombre || !correo || !contrasena) {
        return res.status(400).json({ mensaje: 'Nombre, correo y contraseña son obligatorios' });
    }

    const correoExiste = usuarios.find(u => u.correo === correo);
    if (correoExiste) {
        return res.status(400).json({ mensaje: 'Ya existe un usuario con este correo' });
    }

    const nuevo = { ...req.body, id: usuarios.length + 1 };
    usuarios.push(nuevo);

    const { contrasena: _, ...usuarioSinContrasena } = nuevo;
    res.status(201).json(usuarioSinContrasena);
});

app.post('/usuarios/login', (req, res) => {
    const { correo, contrasena } = req.body;
    const usuario = usuarios.find(u => u.correo === correo && u.contrasena === contrasena);

    if (!usuario) {
        return res.status(401).json({ mensaje: 'Correo o contraseña incorrectos' });
    }

    const { contrasena: _, ...usuarioSinContrasena } = usuario;
    res.json(usuarioSinContrasena);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});