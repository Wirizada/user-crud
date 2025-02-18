const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'User CRUD API',
      version: '1.0.0',
      description: 'API para gerenciamento de usuários',
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}/api`,
      },
    ],
  },
  apis: ['./src/routes/*.js', './src/models/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

const setupSwagger = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;
