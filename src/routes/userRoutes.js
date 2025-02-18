const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser
} = require('../controllers/userController');
const auth = require('../middlewares/authMiddlewares');

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 *       example:
 *         name: "Gabriel Vaz"
 *         email: "gabriel.vaz@example.com"
 *         password: "supersecret"
 */

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Registra um novo usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Usuário registrado com sucesso
 *       400:
 *         description: Usuário já existe
 */
router.post('/register', registerUser);

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Faz login de um usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               email: "gabriel.vaz@example.com"
 *               password: "supersecret"
 *     responses:
 *       200:
 *         description: Login bem-sucedido
 *       400:
 *         description: Email ou senha inválidos
 */
router.post('/login', loginUser);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Obtém um usuário pelo ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Usuário não encontrado
 */
router.get('/:id', auth, getUser);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtém todos os usuários
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get('/', auth, getAllUsers);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Atualiza um usuário pelo ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *       404:
 *         description: Usuário não encontrado
 */
router.put('/:id', auth, updateUser);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Deleta um usuário pelo ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuário deletado com sucesso
 *       404:
 *         description: Usuário não encontrado
 */
router.delete('/:id', auth, deleteUser);

module.exports = router;
