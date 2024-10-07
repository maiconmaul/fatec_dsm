// Encontrar todas as famílias em Sorocaba que têm crianças como membros.
use('projeto_integrador');
db.families.find(
  {
    "address.city": "Sorocaba",
    "members.classification": "crianca"
  },
  {
    family_name: 1,
    "address.city": 1,
    "members.first_name": 1,
    "members.classification": 1
  }
);

// Listar todos os eventos que acontecerão após 1º de outubro de 2024
use('projeto_integrador');
db.events.find(
  { date: { $gt: new Date("2024-10-01") } },
  { name: 1, date: 1, description: 1 }
);

// Encontrar todas as doações de dinheiro acima de R$ 5,00
use('projeto_integrador');
db.donations.find(
  { amount: { $gt: 5.00 } },
  { donator: 1, amount: 1, donation_date: 1 }
);

/// Listar todas as famílias que têm um membro classificado como Pessoa com Necessidades Especiais.
use('projeto_integrador');
db.families.find(
  { "members.classification": "pne" },
  { family_name: 1, "members.first_name": 1, "members.classification": 1 }
);

// Consultar todos os parceiros com contatos de telefone começando com o DDD "(15)".
use('projeto_integrador');
db.partners.find(
  { phone: { $regex: /^\(15\)/ } },
  { name: 1, phone: 1, email: 1 }
);

// -=-=-=-=-=--=--=-=-=--=-=--=-=-=-=-=-=-==-=-=-=-==-=-=-

// Encontrar todas as doações e exibir detalhes do evento relacionado a elas.
use('projeto_integrador');
db.donations.aggregate([
  {
    $lookup: {
      from: "events",
      localField: "event.id",
      foreignField: "_id",
      as: "event_details"
    }
  },
  {
    $project: {
      amount: 1,
      items: 1,
      "event_details.name": 1,
      "event_details.date": 1,
      "event_details.status": 1,
      "event_details.description": 1
    }
  }
]);

// Listar todas as famílias e exibir as doações que cada uma realizou
use('projeto_integrador');
db.families.aggregate([
  {
    $lookup: {
      from: "donations",
      localField: "_id",
      foreignField: "donator.id",
      as: "donations_made"
    }
  },
  {
    $project: {
      family_name: 1,
      "donations_made.amount": 1,
      "donations_made.donation_date": 1,
      "donations_made.purpose": 1,
      "donations_made.items": 1
    }
  }
]);

// -=-=-=-=-=--=--=-=-=--=-=--=-=-=-=-=-=-==-=-=-=-==-=-=-

// Adicionado index
use('projeto_integrador');
db.families.createIndex({ "address.geo": "2dsphere" });

use('projeto_integrador');
db.events.createIndex({ "location.geo": "2dsphere" });

// Encontrar todas as famílias dentro de um raio de 5 km do evento feijoada solidaria
use('projeto_integrador');
db.families.find({
  "address.geo": {
    $near: {
      $geometry: {
        type: "Point",
        coordinates: [-47.4522, -23.5026]
      },
      $maxDistance: 5000
    }
  }
});

// Encontrar todos os eventos dentro de uma área especifica
use('projeto_integrador');
db.events.find({
  "location.geo": {
    $geoWithin: {
      $geometry: {
        type: "Polygon",
        coordinates: [[
          [-47.4700, -23.5200],
          [-47.4300, -23.5200],
          [-47.4300, -23.5000],
          [-47.4700, -23.5000],
          [-47.4700, -23.5200]
        ]]
      }
    }
  }
});