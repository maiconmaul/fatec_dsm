// Coleção de Families
use('projeto_integrador');
db.families.insertMany([
  {
    _id: ObjectId('64f8a56b7b1e8f001c6a1c5e'),
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
    _id: ObjectId("64f8a56b7b1e8f001c6a1c5d"),
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
    _id: ObjectId("64f8a56b7b1e8f001c6a1c60"),
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
  },
  {
    _id: ObjectId("64f8a56b7b1e8f001c6a1c70"),
    family_name: "Souza",
    address: {
      street: "Rua das Flores",
      number: 200,
      neighborhood: "Jardim América",
      city: "Sorocaba",
      state: "SP",
      postal_code: "18025-010",
      geo: {
        type: "Point",
        coordinates: [-47.4300, -23.5155]
      }
    },
    phone: "(15) 94455-7788",
    members: [
      {
        first_name: "Paulo",
        last_name: "Souza",
        email: "paulo.souza@email.com",
        phone: "(15) 94455-7788",
        classification: "adulto"
      },
      {
        first_name: "Laura",
        last_name: "Souza",
        email: "laura.souza@email.com",
        phone: "(15) 94455-7788",
        classification: "jovem"
      }
    ]
  },
  {
    _id: ObjectId("64f8a56b7b1e8f001c6a1c71"),
    family_name: "Santos",
    address: {
      street: "Avenida Itavuvu",
      number: 350,
      neighborhood: "Jardim Santa Bárbara",
      city: "Sorocaba",
      state: "SP",
      postal_code: "18075-500",
      geo: {
        type: "Point",
        coordinates: [-47.4605, -23.5200]
      }
    },
    phone: "(15) 94567-1212",
    members: [
      {
        first_name: "Fabiana",
        last_name: "Santos",
        email: "fabiana.santos@email.com",
        phone: "(15) 94567-1212",
        classification: "adulto"
      }
    ]
  }
]);

// Coleção de Events
use('projeto_integrador');
db.events.insertMany([
  {
    _id: ObjectId("64f8a56b7b1e8f001c6a1c61"),
    name: "Feijoada Solidária",
    date: new Date("2024-09-30"),
    status: "CONCLUIDO",
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
    _id: ObjectId("64f8a56b7b1e8f001c6a1c62"),
    name: "Campanha do Agasalho",
    date: new Date("2024-08-20"),
    status: "CANCELADO",
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
    _id: ObjectId("64f8a56b7b1e8f001b6a1c62"),
    name: "Feira de Livros",
    date: new Date("2024-07-15"),
    status: "CONCLUIDO",
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
  },
  {
    _id: ObjectId("64f8a56b7b1e8f001c6a1c64"),
    name: "Doação de Alimentos",
    date: new Date("2024-10-05"),
    status: "PENDENTE",
    location: {
      address: {
        street: "Avenida General Carneiro",
        number: 750,
        neighborhood: "Vila Jardini",
        city: "Sorocaba",
        state: "SP",
        postal_code: "18030-200"
      },
      geo: {
        type: "Point",
        coordinates: [-47.4675, -23.5140]
      }
    },
    description: "Evento para arrecadação de alimentos não perecíveis."
  },
  {
    _id: ObjectId("64f8a56b7b1e8f001c6a1c65"),
    name: "Arrecadação de Brinquedos",
    date: new Date("2024-12-01"),
    status: "PENDENTE",
    location: {
      address: {
        street: "Rua dos Andradas",
        number: 101,
        neighborhood: "Centro",
        city: "Sorocaba",
        state: "SP",
        postal_code: "18010-040"
      },
      geo: {
        type: "Point",
        coordinates: [-47.4560, -23.5030]
      }
    },
    description: "Arrecadação de brinquedos para o natal."
  }
]);

// Coleção de Partners
use('projeto_integrador');
db.partners.insertMany([
  {
    name: "Associação Beneficente",
    contact_person: [
      {
        name: "Ana Paula",
        email: "ana.paula@ab.org.br",
        phone: "(15) 99876-5432",
        position: "Tesoureira"
      },
      {
        name: "João Silva",
        email: "joao.silva@ab.org.br",
        phone: "(15) 99999-9999",
        position: "Presidente"
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
      phone: "(15) 99876-4321",
      position: "Contador"
    }],
    email: "ajuda@ajuda.org.br",
    phone: "(15) 99876-9876"
  },
  {
    name: "Livros para Todos",
    contact_person: [{
      name: "Mariana Souza",
      email: "mariana.souza@livros.org.br",
      phone: "(15) 98765-4321",
      position: "Secretária"
    }],
    email: "contato@livros.org.br",
    phone: "(15) 98765-1234"
  },
  {
    name: "Roupas de Inverno",
    contact_person: [
      {
        name: "Lucas Gomes",
        email: "lucas.gomes@roupas.org.br",
        phone: "(15) 99876-6543",
        position: "Secretário"
      }
    ],
    email: "contato@roupas.org.br",
    phone: "(15) 99876-3210"
  },
  {
    name: "Saúde e Bem-Estar",
    contact_person: [{
      name: "Julia Ramos",
      email: "julia.ramos@saudebem.org.br",
      phone: "(15) 98765-7654",
      position: "Secretária"
    }],
    email: "contato@saudebem.org.br",
    phone: "(15) 98765-9876"
  }
]);

// Donations
use('projeto_integrador');
db.donations.insertMany([
  {
    donator: {
      id: ObjectId("64f8a56b7b1e8f001c6a1c5e"),
      name: "Familia Silva"
    },
    amount: 0.00,
    donation_date: new Date("2024-09-23"),
    purpose: "Fornecimento de cestas básicas para famílias em Sorocaba",
    items: [
      {
        name: "Cesta de alimentos",
        quantity: 10
      }
    ],
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
    amount: 0.00,
    donation_date: new Date("2024-08-15"),
    purpose: "Doação de roupas para crianças carentes",
    items: [
      {
        name: "Calça infantil",
        quantity: 5
      },
      {
        name: "Camiseta adulto",
        quantity: 3
      }
    ],
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
    amount: 0.00,
    donation_date: new Date("2024-07-10"),
    purpose: "Doação de cadeira de rodas",
    items: [
      {
        name: "Cadeira de rodas",
        quantity: 1
      }
    ],
    family: {
      id: ObjectId("64f8a56b7b1e8f001c6a1c5e"),
      name: "Familia Silva"
    }
  },
  {
    donator: {
      id: ObjectId("64f8a56b7b1e8f001c6a1c70"),
      name: "Familia Souza"
    },
    amount: 50.00,
    donation_date: new Date("2024-10-02"),
    purpose: "Doação de alimentos para famílias carentes",
    event: {
      id: ObjectId("64f8a56b7b1e8f001c6a1c64"),
      name: "Doação de Alimentos"
    }
  },
  {
    donator: {
      id: ObjectId("64f8a56b7b1e8f001c6a1c71"),
      name: "Familia Santos"
    },
    amount: 30.00,
    donation_date: new Date("2024-10-04"),
    purpose: "Compra de roupas para inverno",
    event: {
      id: ObjectId("64f8a56b7b1e8f001c6a1c62"),
      name: "Campanha do Agasalho"
    }
  }
]);

