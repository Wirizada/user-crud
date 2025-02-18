const express = require('express');
const connectDB = require('./src/config/db');
const setupSwagger = require('./src/config/swagger');
require('dotenv').config();

const app = express();

connectDB();
setupSwagger(app);

app.use(express.json());

app.use('/api/users', require('./src/routes/userRoutes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
