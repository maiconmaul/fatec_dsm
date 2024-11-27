const request = require('supertest');
const app = require('../server'); 
const Event = require('../models/event');
const mongoose = require('mongoose');

beforeAll(async () => {
  if (!mongoose.connection.readyState) {
    const dbUri = process.env.MONGODB_URI_TEST || 'mongodb://localhost:27017/testdb';
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexão com o MongoDB para testes estabelecida.');
  }
});

afterAll(async () => {
  await mongoose.connection.close();
  console.log('Conexão com o MongoDB encerrada após os testes.');
});

beforeEach(async () => {
  await Event.deleteMany({});
});

describe('Rotas de Eventos', () => {
  it('Deve criar um evento com sucesso', async () => {
    const newEvent = {
      name: 'Evento de Teste',
      date: '2024-12-01',
      location: {
        street: 'Rua Teste',
        number: 123,
        neighborhood: 'Bairro Teste',
        city: 'Cidade Teste',
        state: 'SP',
        postal_code: '12345-678',
        geo: { type: 'Point', coordinates: [-47.455722, -23.501533] }
      },
      description: 'Descrição do evento de teste.'
    };

    const response = await request(app)
      .post('/events')
      .send(newEvent)
      .expect(201);

    expect(response.body).toHaveProperty('message', 'Evento criado com sucesso');
    expect(response.body.event).toHaveProperty('name', 'Evento de Teste');
  });

  it('Deve retornar todos os eventos', async () => {
    await Event.create({
      name: 'Evento de Teste',
      date: '2024-12-01',
      location: {
        street: 'Rua Teste',
        number: 123,
        neighborhood: 'Bairro Teste',
        city: 'Cidade Teste',
        state: 'SP',
        postal_code: '12345-678',
        geo: { type: 'Point', coordinates: [-47.455722, -23.501533] }
      },
      description: 'Descrição do evento de teste.'
    });

    const response = await request(app)
      .get('/events')
      .expect(200);

    expect(response.body.length).toBe(1);
    expect(response.body[0]).toHaveProperty('name', 'Evento de Teste');
  });


  it('Deve retornar um evento pelo ID', async () => {
    const event = await Event.create({
      name: 'Evento de Teste',
      date: '2024-12-01',
      location: {
        street: 'Rua Teste',
        number: 123,
        neighborhood: 'Bairro Teste',
        city: 'Cidade Teste',
        state: 'SP',
        postal_code: '12345-678',
        geo: { type: 'Point', coordinates: [-47.455722, -23.501533] }
      },
      description: 'Descrição do evento de teste.'
    });

    const response = await request(app)
      .get(`/events/${event._id}`)
      .expect(200);

    expect(response.body).toHaveProperty('name', 'Evento de Teste');
  });

  // Teste para atualizar um evento
  it('Deve atualizar um evento com sucesso', async () => {
    const event = await Event.create({
      name: 'Evento de Teste',
      date: '2024-12-01',
      location: {
        street: 'Rua Teste',
        number: 123,
        neighborhood: 'Bairro Teste',
        city: 'Cidade Teste',
        state: 'SP',
        postal_code: '12345-678',
        geo: { type: 'Point', coordinates: [-47.455722, -23.501533] }
      },
      description: 'Descrição do evento de teste.'
    });

    const updatedEvent = {
      name: 'Evento Atualizado',
      description: 'Descrição atualizada.'
    };

    const response = await request(app)
      .put(`/events/${event._id}`)
      .send(updatedEvent)
      .expect(200);

    expect(response.body.event).toHaveProperty('name', 'Evento Atualizado');
    expect(response.body.event).toHaveProperty('description', 'Descrição atualizada.');
  });

  it('Deve deletar um evento com sucesso', async () => {
    const event = await Event.create({
      name: 'Evento de Teste',
      date: '2024-12-01',
      location: {
        street: 'Rua Teste',
        number: 123,
        neighborhood: 'Bairro Teste',
        city: 'Cidade Teste',
        state: 'SP',
        postal_code: '12345-678',
        geo: { type: 'Point', coordinates: [-47.455722, -23.501533] }
      },
      description: 'Descrição do evento de teste.'
    });

    const response = await request(app)
      .delete(`/events/${event._id}`)
      .expect(200);

    expect(response.body).toHaveProperty('message', 'Evento excluído com sucesso');
  });
});
