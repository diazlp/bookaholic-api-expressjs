const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication endpoints
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: admin1
 *               password:
 *                 type: string
 *                 example: admin1
 *     responses:
 *       '201':
 *         description: Register Success
 *         content:
 *           application/json:
 *             example:
 *               message: User registered successfully
 *               user:
 *                 username: admin1
 *       '400':
 *         description: Registration Failed
 *         content:
 *           application/json:
 *             example:
 *               message: Username already exists
 *       '500':
 *         description: Registration failed
 *         content:
 *           application/json:
 *             example:
 *               message: Registration Failed
 *               error: reason for error
 */
router.post('/register', authController.register);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Log in with existing credentials.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: admin
 *               password:
 *                 type: string
 *                 example: admin
 *     responses:
 *       '200':
 *         description: Login success
 *         content:
 *           application/json:
 *             example:
 *               message: Login successful
 *               user:
 *                 username: admin
 *               token: user_token
 *       '404':
 *         description: User not found
 *       '401':
 *         description: Invalid password
 *       '500':
 *         description: Login failed
 */
router.post('/login', authController.login);

module.exports = router