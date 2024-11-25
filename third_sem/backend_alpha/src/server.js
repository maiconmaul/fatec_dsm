require('dotenv').config()

const express = require('express')
const { swaggerUi, swaggerSpec } = require('./swagger');
const userRoutes = require('./routes/userRoutes')
const eventRoutes = require('./routes/eventRoutes')
const dbTestRoutes = require('./routes/dbTestRoutes')

const app = express()

app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api', userRoutes)
app.use('/api', eventRoutes)
app.use('/api', dbTestRoutes)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
