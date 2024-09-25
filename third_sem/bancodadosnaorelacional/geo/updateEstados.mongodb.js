use('geo')
db.estados.find().forEach(function (estado) {
  db.estados.updateOne(
    { _id: estado._id },
    {
      $set: {
        local: {
          type: 'Point',
          coordinates: [estado.latitude, estado.longitude]
        }
      },
      $unset: { latitude: '', longitude: '' }
    }
  )
})


use('geo')
db.estados.find({}, { nome: 1, local: 1 })