// Coleção de Families
db.families.insertMany([
  {
    family_name: "Silva",
    address: {
      street: "Rua da Liberdade",
      number: 123,
      neighborhood: "Centro",
      city: "Sorocaba",
      state: "SP",
      postal_code: "18010-320",
      geo: {
        type: "Point",
        coordinates: [-47.4578, -23.5015]
      }
    },
    phone: "(15) 93211-1234",
    members: [
      {
        first_name: "Carlos",
        last_name: "Silva",
        email: "carlos.silva@email.com",
        phone: "(15) 93211-1234",
        classification: "adulto"
      },
      {
        first_name: "Ana",
        last_name: "Silva",
        email: "ana.silva@email.com",
        phone: "(15) 93211-1234",
        classification: "pne"
      },
      {
        first_name: "Clara",
        last_name: "Silva",
        email: null,
        phone: "(15) 93211-1234",
        classification: "crianca"
      },
    ]
  },
  {
    family_name: "Oliveira",
    address: {
      street: "Avenida São Paulo",
      number: 987,
      neighborhood: "Além Ponte",
      city: "Sorocaba",
      state: "SP",
      postal_code: "18013-000",
      geo: {
        type: "Point",
        coordinates: [-47.4479, -23.5147]
      }
    },
    phone: "(15) 93344-5678",
    members: [
      {
        first_name: "Mariana",
        last_name: "Oliveira",
        email: "mariana.oliveira@email.com",
        phone: "(15) 93344-5678",
        classification: "adulto"
      },
      {
        first_name: "Rodolfo",
        last_name: "Oliveira",
        email: "rodolfo.oliveira@email.com",
        phone: "(15) 93344-5678",
        classification: "adulto"
      },
      {
        first_name: "Caio",
        last_name: "Oliveira",
        email: "caio.oliveira@email.com",
        phone: "(15) 93344-5678",
        classification: "pne"
      },
    ]
  },
  {
    family_name: "Costa",
    address: {
      street: "Rua São Sebastião",
      number: 456,
      neighborhood: "Centro",
      city: "São Carlos",
      state: "SP",
      postal_code: "13560-230",
      geo: {
        type: "Point",
        coordinates: [-47.8908, -22.0054]
      }
    },
    phone: "(16) 33422-9988",
    members: [
      {
        first_name: "Gustavo",
        last_name: "Costa",
        email: "gustavo.costa@email.com",
        phone: "(16) 33422-9988",
        classification: "adulto"
      },
      {
        first_name: "Renata",
        last_name: "Costa",
        email: "renata.costa@email.com",
        phone: "(16) 33422-9988",
        classification: "adulto"
      },
      {
        first_name: "Matheus",
        last_name: "Costa",
        email: null,
        phone: null,
        classification: "crianca"
      },
      {
        first_name: "Maria",
        last_name: "Costa",
        email: "maria.costa@email.com",
        phone: "(16) 99999-9999",
        classification: "jovem"
      },
    ]
  }
]);

// Coleção de Events
db.events.insertMany([
  {
    name: "Feijoada Solidária",
    date: new Date("2024-09-30"),
    location: {
      address: {
        street: "Rua Afonso Vergueiro",
        number: 320,
        neighborhood: "Centro",
        city: "Sorocaba",
        state: "SP",
        postal_code: "18035-370"
      },
      geo: {
        type: "Point",
        coordinates: [-47.4522, -23.5026]
      }
    },
    description: "Evento beneficente para arrecadar fundos para a compra de cestas básicas."
  },
  {
    name: "Campanha do Agasalho",
    date: new Date("2024-08-20"),
    location: {
      address: {
        street: "Avenida Ipanema",
        number: 1100,
        neighborhood: "Jardim Novo Horizonte",
        city: "Sorocaba",
        state: "SP",
        postal_code: "18070-000"
      },
      geo: {
        type: "Point",
        coordinates: [-47.4543, -23.4855]
      }
    },
    description: "Campanha para arrecadação de agasalhos para o inverno."
  },
  {
    name: "Feira de Livros",
    date: new Date("2024-07-15"),
    location: {
      address: {
        street: "Rua Santa Clara",
        number: 800,
        neighborhood: "Vila Santana",
        city: "Sorocaba",
        state: "SP",
        postal_code: "18020-250"
      },
      geo: {
        type: "Point",
        coordinates: [-47.4598, -23.5079]
      }
    },
    description: "Feira de livros para incentivar a leitura em comunidades carentes."
  }
]);

// Coleção de Partners
db.partners.insertMany([
  {
    name: "Associação Beneficente",
    contact_person: [
      {
        name: "Ana Paula",
        email: "ana.paula@ab.org.br",
        phone: "(15) 99876-5432"
      }
    ],
    email: "contato@ab.org.br",
    phone: "(15) 99876-1234"
  },
  {
    name: "Ajuda ao Próximo",
    contact_person: [{
      name: "João Pedro",
      email: "joao.pedro@ajuda.org.br",
      phone: "(15) 99876-4321"
    }],
    email: "ajuda@ajuda.org.br",
    phone: "(15) 99876-9876"
  },
  {
    name: "Livros para Todos",
    contact_person: [{
      name: "Mariana Souza",
      email: "mariana.souza@livros.org.br",
      phone: "(15) 98765-4321"
    }],
    email: "contato@livros.org.br",
    phone: "(15) 98765-1234"
  }
]);

// Donations
db.donations.insertMany([
  {
    donator: {
      id: ObjectId("64f8a56b7b1e8f001c6a1c5e"),
      name: "Familia Silva"
    },
    amount: 5.00,
    donation_date: new Date("2024-09-23"),
    purpose: "Fornecimento de cestas básicas para famílias em Sorocaba",
    event: {
      id: ObjectId("64f8a56b7b1e8f001c6a1c61"),
      name: "Feijoada Solidária"
    }
  },
  {
    donator: {
      id: ObjectId("64f8a56b7b1e8f001c6a1c5d"),
      name: "Familia Oliveira"
    },
    amount: 10.00,
    donation_date: new Date("2024-08-15"),
    purpose: "Doação de roupas para crianças carentes",
    event: {
      id: ObjectId("64f8a56b7b1e8f001c6a1c62"),
      name: "Campanha do Agasalho"
    }
  },
  {
    donator: {
      id: ObjectId("64f8a56b7b1e8f001c6a1c60"),
      name: "Familia Costa"
    },
    amount: 1.00,
    donation_date: new Date("2024-07-10"),
    purpose: "Doação de cadeira de rodas",
    family: {
      id: ObjectId("64f8a56b7b1e8f001c6a1c60"),
      name: "Familia Silva"
    }
  }
]);