const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Importando las rutas y el middleware de manejo de errores
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');
const errorHandler = require('./middleware/errorHandling');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Usando las rutas
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// Usando el middleware de manejo de errores
app.use(errorHandler);

// Iniciando el servidor
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
