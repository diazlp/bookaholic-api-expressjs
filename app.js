const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const cors = require("cors")
const app = express();

const authRoutes = require('./routes/authRoutes');
const categoryRoutes = require('./routes/categoryRoutes')
const bookRoutes = require('./routes/bookRoutes')

const authMiddleware = require('./middleware/authMiddleware')

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/auth', authRoutes)
app.use('/categories', categoryRoutes)
app.use('/books', bookRoutes)

// Swagger CDN CSS
const CSS_URL = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { customCssUrl: CSS_URL }));

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${8000}`);
});