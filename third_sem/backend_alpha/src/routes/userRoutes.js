const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticate = require('../middleware/authMiddleware');

/**
 * @swagger
 * tags:
 *   name: Usuários
 *   description: Gerenciamento de usuários
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Fazer login
 *     description: Permite que o usuário faça login e obtenha um token JWT.
 *     tags: [Usuários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: "joao.silva@example.com"
 *                 description: Email do usuário.
 *               password:
 *                 type: string
 *                 description: Senha do usuário.
 *                 example: "senhaSegura123"
 *     responses:
 *       200:
 *         description: Login bem-sucedido.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 token:
 *                   type: string
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     name:
 *                       type: string
 *                     email:
 *                       type: string
 *                     role:
 *                       type: string
 *       401:
 *         description: Email ou senha inválidos.
 */
router.post('/login', userController.loginUser)

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Listar todos os usuários
 *     description: Retorna uma lista de todos os usuários registrados. Requer autenticação.
 *     tags: [Usuários]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   role:
 *                     type: string
 *       401:
 *         description: Token inválido ou ausente.
 */
router.get('/users', authenticate, userController.getAllUsers)

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Obtém informações do usuário logado
 *     description: Retorna os dados do usuário a partir do token JWT.
 *     tags:
 *       - Usuários
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Dados do usuário retornados com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID do usuário.
 *                 name:
 *                   type: string
 *                   description: Nome do usuário.
 *                 email:
 *                   type: string
 *                   description: E-mail do usuário.
 *       401:
 *         description: Token inválido ou ausente.
 */
router.get('/user', authenticate, userController.getUserFromToken)

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Atualizar um usuário
 *     description: Atualiza os dados de um usuário específico pelo ID. Requer autenticação.
 *     tags: [Usuários]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do usuário a ser atualizado.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 user:
 *                   type: object
 *       404:
 *         description: Usuário não encontrado.
 */
router.put('/users/:id', authenticate, userController.updateUser)

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Criar um novo usuário
 *     description: Cria um novo usuário no sistema.
 *     tags: [Usuários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *               - role
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome do usuário.
 *               email:
 *                 type: string
 *                 description: Email único do usuário.
 *               password:
 *                 type: string
 *                 description: Senha do usuário.
 *               role:
 *                 type: string
 *                 enum:
 *                   - admin
 *                   - manager
 *                   - user
 *                 description: Função do usuário.
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 user:
 *                   type: object
 *       400:
 *         description: Erro ao criar o usuário.
 */
router.post('/users', userController.createUser)

module.exports = router;
