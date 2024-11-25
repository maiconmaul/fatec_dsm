const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Definição básica do Swagger
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentação', // Nome da API
      version: '1.0.0',          // Versão da API
      description: 'Documentação da API usando Swagger', // Descrição
    },
    servers: [
      {
        url: 'http://localhost:3000/api', // URL base da API
        description: 'Servidor Local',
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        BearerAuth: [],
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Caminho para os arquivos onde estão as rotas e descrições
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = { swaggerUi, swaggerSpec };
