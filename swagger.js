const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Bookaholic Documentation',
      version: '1.0.0',
      description: 'API documentation for Bookaholic application',
    },
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: "example: <your_login_token>"
        },
      },
    },
  },
  apis: ['./routes/authRoutes.js', './routes/categoryRoutes.js', './routes/bookRoutes.js'],
  security: [
    {
      BearerAuth: [],
    },
  ],
  securityDefinitions: {
    BearerAuth: {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    },
  },
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
