// routes/categoryRoutes.js
const express = require('express')
const router = express.Router()
const categoryController = require('../controllers/categoryController')

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: Category endpoints
 */

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Get book categories
 *     tags: [Categories]
 *     responses:
 *       '200':
 *         description: Successful response with book categories
 *         content:
 *           application/json:
 *             example:
 *               count: 1
 *               rows:
 *                 - id: 1
 *                   name: "Fiction"
 *                   created_at: "2024-03-29T02:52:00.991Z"
 *                   updated_at: "2024-03-29T02:52:00.991Z"
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example:
 *               message: Failed to fetch Book categories
 *               error: reason for error
 */
router.get('/', categoryController.findAll);

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Add a new Book Category
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Fiction
 *     responses:
 *       '201':
 *         description: Add Book Category Success
 *         content:
 *           application/json:
 *             example:
 *               message: Book category added successfully
 *               category:
 *                 name: Fiction
 *       '400':
 *         description: Add Book Category Failed
 *         content:
 *           application/json:
 *             example:
 *               message: Book category already exists
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example:
 *               message: Failed to add Book category
 *               error: reason for error
 */
router.post('/', categoryController.create);

/**
 * @swagger
 * /categories/{id}:
 *   patch:
 *     summary: Update a Book Category
 *     tags: [Categories]
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *          type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Non-Fiction
 *     responses:
 *       '201':
 *         description: Update Book Category Success
 *         content:
 *           application/json:
 *             example:
 *               message: Book category updated successfully
 *               category:
 *                 id: 1
 *                 name: Non-Fiction
 *       '400':
 *         description: Update Book Category Failed
 *         content:
 *           application/json:
 *             example:
 *               message: Book category not found
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example:
 *               message: Failed to update Book category
 *               error: reason for error
 */
router.patch('/:id', categoryController.update);

/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     summary: Delete a Book Category
 *     tags: [Categories]
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *          type: integer
 *     responses:
 *       '201':
 *         description: Delete Book Category Success
 *         content:
 *           application/json:
 *             example:
 *               message: Book category deleted successfully
 *               category:
 *                 id: 1
 *                 name: Non-Fiction
 *       '400':
 *         description: Delete Book Category Failed
 *         content:
 *           application/json:
 *             example:
 *               message: Book category not found
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example:
 *               message: Failed to delete Book category
 *               error: reason for error
 */
router.delete('/:id', categoryController.delete);


module.exports = router