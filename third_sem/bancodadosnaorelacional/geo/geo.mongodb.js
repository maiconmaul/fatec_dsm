use('geo')
db.estados.createIndex({ local: '2dsphere' })

use('geo')
db.municipios.createIndex({ local: '2dsphere' })

use('geo')
db.municipios.find({
  local: {
    $near: {
      $geometry: {
        type: "Point",
        coordinates: [-47.4495, -23.5313]
      },
      $maxDistance: 50000
    }
  }
}, { nome: 1, _id: 0 })


use('geo')
db.municipios.find()

use('geo')
db.municipios.find({
  local: {
    $geoWithin: {
      $centerSphere: [
        [-47.4495, -23.5313],
        20 / 6378.1] // raio em radianos
    }
  }
}, { nome: 1, _id: 0 }).sort({nome: 1})


use('geo')
db.municipios.find({
  local: {
    $geoWithin: {
      $polygon: [
        [
          -47.25661916874077,
          -22.586255390948153
        ],
        [
          -47.773467807504176,
          -23.33762365473089
        ],
        [
          -47.585734134468595,
          -23.464906287675134
        ],
        [
          -46.88936528225884,
          -24.007863671622502
        ],
        [
          -46.7916712600136,
          -23.524590580545947
        ],
        [
          -46.27505287443006,
          -23.30753921210848
        ],
        [
          -46.243027602537694,
          -22.77980277808969
        ],
        [
          -46.77531560216249,
          -22.52615401388333
        ],
        [
          -47.10430582308169,
          -22.32489071897197
        ],
        [
          -47.25661916874077,
          -22.586255390948153
        ]
      ]
    }
  }
}, { nome: 1, _id: 0 }).count()

use('geo')
db.municipios.find({
  local: {
    $geoWithin: {
      $box: [
        [-51.58, -21.99],
        [-51.20, -22.24]
      ]
    }
  }
}, {nome: 1, _id:0})