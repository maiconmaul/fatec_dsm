const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authMiddleware');
const eventController = require('../controllers/eventController');

/**
 * @swagger
 * /events:
 *   get:
 *     summary: Obter todos os eventos
 *     tags: [Eventos]
 *     responses:
 *       200:
 *         description: Lista de eventos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "645a6f2b4d1b2b0012f6c3b8"
 *                   name:
 *                     type: string
 *                     example: "Feira de Doações"
 *                   date:
 *                     type: string
 *                     format: date
 *                     example: "2024-12-25"
 *                   location:
 *                     type: object
 *                     properties:
 *                       street:
 *                         type: string
 *                         example: "Rua das Flores"
 *                       number:
 *                         type: integer
 *                         example: 123
 *                       neighborhood:
 *                         type: string
 *                         example: "Jardim Primavera"
 *                       city:
 *                         type: string
 *                         example: "Sorocaba"
 *                       state:
 *                         type: string
 *                         example: "SP"
 *                       postal_code:
 *                         type: string
 *                         example: "18000-000"
 *                       geo:
 *                         type: object
 *                         properties:
 *                           type:
 *                             type: string
 *                             example: "Point"
 *                           coordinates:
 *                             type: array
 *                             items:
 *                               type: number
 *                             example: [-47.455722, -23.501533]
 *                   description:
 *                     type: string
 *                     example: "Evento para arrecadação de alimentos."
 */
router.get('/events', authenticate, eventController.getAllEvents);

/**
 * @swagger
 * /events/{id}:
 *   get:
 *     summary: Obter um evento por ID
 *     tags: [Eventos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do evento
 *     responses:
 *       200:
 *         description: Detalhes do evento.
 *       404:
 *         description: Evento não encontrado.
 */
router.get('/events/:id', authenticate, eventController.getEventById);

/**
 * @swagger
 * /events/{id}:
 *   put:
 *     summary: Atualizar um evento
 *     tags: [Eventos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do evento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date
 *               location:
 *                 type: object
 *                 required:
 *                   - street
 *                   - number
 *                   - neighborhood
 *                   - city
 *                   - state
 *                   - postal_code
 *                   - geo
 *                 properties:
 *                   street:
 *                     type: string
 *                     example: "Rua das Flores"
 *                   number:
 *                     type: integer
 *                     example: 123
 *                   neighborhood:
 *                     type: string
 *                     example: "Jardim Primavera"
 *                   city:
 *                     type: string
 *                     example: "Sorocaba"
 *                   state:
 *                     type: string
 *                     example: "SP"
 *                   postal_code:
 *                     type: string
 *                     example: "18000-000"
 *                   geo:
 *                     type: object
 *                     properties:
 *                       type:
 *                         type: string
 *                         example: "Point"
 *                       coordinates:
 *                         type: array
 *                         items:
 *                           type: number
 *                         example: [-47.455722, -23.501533]
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Evento atualizado.
 *       404:
 *         description: Evento não encontrado.
 */
router.put('/events/:id', eventController.updateEvent);

/**
 * @swagger
 * /events/{id}:
 *   delete:
 *     summary: Deletar um evento
 *     tags: [Eventos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do evento
 *     responses:
 *       200:
 *         description: Evento excluído.
 *       404:
 *         description: Evento não encontrado.
 */
router.delete('/events/:id', authenticate, eventController.deleteEvent);

/**
 * @swagger
 * /events:
 *   post:
 *     summary: Criar um evento
 *     tags: [Eventos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - date
 *               - location
 *               - description
 *             properties:
 *               name:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date
 *               location:
 *                 type: object
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Evento criado com sucesso.
 */
router.post('/events', authenticate, eventController.createEvent);

/**
 * @swagger
 * /events:
 *   post:
 *     summary: Criar um novo evento
 *     description: Cria um novo evento com informações detalhadas de localização.
 *     tags: [Eventos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - date
 *               - location
 *               - description
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Feira de Doações"
 *               date:
 *                 type: string
 *                 format: date
 *                 example: "2024-12-25"
 *               location:
 *                 type: object
 *                 required:
 *                   - street
 *                   - number
 *                   - neighborhood
 *                   - city
 *                   - state
 *                   - postal_code
 *                   - geo
 *                 properties:
 *                   street:
 *                     type: string
 *                     example: "Rua das Flores"
 *                   number:
 *                     type: integer
 *                     example: 123
 *                   neighborhood:
 *                     type: string
 *                     example: "Jardim Primavera"
 *                   city:
 *                     type: string
 *                     example: "Sorocaba"
 *                   state:
 *                     type: string
 *                     example: "SP"
 *                   postal_code:
 *                     type: string
 *                     example: "18000-000"
 *                   geo:
 *                     type: object
 *                     properties:
 *                       type:
 *                         type: string
 *                         example: "Point"
 *                       coordinates:
 *                         type: array
 *                         items:
 *                           type: number
 *                         example: [-47.455722, -23.501533]
 *               description:
 *                 type: string
 *                 example: "Evento para arrecadação de alimentos."
 *     responses:
 *       201:
 *         description: Evento criado com sucesso.
 *       400:
 *         description: Erro ao criar evento.
 */
router.post('/events', authenticate, eventController.createEvent);

module.exports = router;
