const mongoose = require('mongoose')

const mongoURI = process.env.MONGODB_URI

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

mongoose.connection.on('connected', () => {
  console.log('Conectado ao MongoDB')
})

mongoose.connection.on('error', (err) => {
  console.log(`Erro na conexão com MongoDB: ${err}`)
})

module.exports = mongoose
