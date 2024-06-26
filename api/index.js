const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../swagger');
const cors = require("cors")
const app = express();

const authRoutes = require('../routes/authRoutes');
const categoryRoutes = require('../routes/categoryRoutes')
const bookRoutes = require('../routes/bookRoutes')

const authMiddleware = require('../middleware/authMiddleware')

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/auth', authRoutes)
app.use('/categories', categoryRoutes)
app.use('/books', bookRoutes)

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
  customCss:
    '.swagger-ui .opblock .opblock-summary-path-description-wrapper { align-items: center; display: flex; flex-wrap: wrap; gap: 0 10px; padding: 0 10px; width: 100%; }',
  customCssUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.3.0/swagger-ui.css'
}));

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${8000}`);
});

module.exports = app