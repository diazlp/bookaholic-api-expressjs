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
 *               data:
 *                 name: Fiction
 *       '400':
 *         description: Bad Request Error
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
 *       '200':
 *         description: Update Book Category Success
 *         content:
 *           application/json:
 *             example:
 *               message: Book category updated successfully
 *               data:
 *                 id: 1
 *                 name: Non-Fiction
 *       '404':
 *         description: Not Found Error
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
 *               data:
 *                 id: 1
 *                 name: Non-Fiction
 *       '404':
 *         description: Not Found Error
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

/**
 * @swagger
 * /categories/{id}/books:
 *   get:
 *     summary: Get book categories
 *     tags: [Categories]
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *          type: integer
 *     responses:
 *       '200':
 *         description: Successful response with book categories
 *         content:
 *           application/json:
 *             example:
 *               count: 1
 *               rows:
 *                 - id: 1
 *                   name: "The Great Gatsby"
 *                   description: "A novel by F. Scott Fitzgerald"
 *                   image_url: "https://example.com/great-gatsby.jpg"
 *                   release_year: 1981
 *                   price: "IDR 49000"
 *                   total_page: 180
 *                   thickness: "sedang"
 *                   category_id: 1
 *       '404':
 *         description: Not Found Error
 *         content:
 *           application/json:
 *             example:
 *               message: Book category not found
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example:
 *               message: Failed to fetch Book categories
 *               error: reason for error
 */
router.get('/:id/books', categoryController.findAllBooks);

module.exports = router