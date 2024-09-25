const dadosEstados = require('./json/estados.json')

use('geo')
db.estados.insertMany(dadosEstados)

use('geo')
db.estados.find().count()

use('geo')
db.estados.createIndex({ uf: 1 }, { unique: true, name: 'idx_estado', name: 'idx_estados_uf' })