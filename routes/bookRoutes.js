// routes/bookRoutes.js
const express = require('express')
const router = express.Router()
const bookController = require('../controllers/bookController')

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: Book endpoints
 */

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Get books
 *     tags: [Books]
 *     responses:
 *       '200':
 *         description: Successful response with books
 *         content:
 *           application/json:
 *             example:
 *               count: 1
 *               rows:
 *                 - id: 9
 *                   name: "The Great Gatsby"
 *                   description: "A novel by F. Scott Fitzgerald"
 *                   image_url: "https://example.com/great-gatsby.jpg"
 *                   release_year: 1981
 *                   price: "IDR 49000"
 *                   total_page: 180
 *                   thickness: "sedang"
 *                   Category:
 *                     id: 1
 *                     name: "Fiction"
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example:
 *               message: Failed to fetch Books
 *               error: reason for error
 */
router.get('/', bookController.findAll);

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Add a new Book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: The Great Gatsby
 *               description:
 *                 type: string
 *                 example: A novel by F. Scott Fitzgerald
 *               image_url:
 *                 type: string
 *                 example: https://example.com/great-gatsby.jpg
 *               release_year:
 *                 type: integer
 *                 example: 1981
 *               price:
 *                 type: string
 *                 example: IDR 49000
 *               total_page:
 *                 type: integer
 *                 example: 180
 *               category_id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       '201':
 *         description: Book created successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Book created successfully
 *               data:
 *                 id: 1
 *                 title: The Great Gatsby
 *                 description: A novel by F. Scott Fitzgerald
 *                 image_url: https://example.com/great-gatsby.jpg
 *                 release_year: 1981
 *                 price: IDR 49000
 *                 total_page: 180
 *                 thickness: sedang
 *                 Category:
 *                   id: 1
 *                   name: Fiction
 *       '400':
 *         description: Add Book Failed
 *         content:
 *           application/json:
 *             examples:
 *               bookExists:
 *                 value:
 *                   message: Book already exists
 *               bookCategoryNotFound:
 *                 value:
 *                   message: Book category not found
 *               invalidReleaseYear:
 *                 value:
 *                   message: Invalid release year. Release year must be between 1980 and 2021
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example:
 *               message: Failed to create book
 *               error: reason for error
 */
router.post('/', bookController.create);

/**
 * @swagger
 * /books/{id}:
 *   patch:
 *     summary: Update a Book
 *     tags: [Books]
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
 *               title:
 *                 type: string
 *                 example: The Great Gatsby
 *               description:
 *                 type: string
 *                 example: A novel by F. Scott Fitzgerald
 *               image_url:
 *                 type: string
 *                 example: https://example.com/great-gatsby.jpg
 *               release_year:
 *                 type: integer
 *                 example: 1981
 *               price:
 *                 type: string
 *                 example: IDR 49000
 *               total_page:
 *                 type: integer
 *                 example: 180
 *               category_id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       '200':
 *         description: Update Book Success
 *         content:
 *           application/json:
 *             example:
 *               message: Book has been updated successfully
 *               data:
 *                 id: 1
 *                 title: The Great Gatsby
 *                 description: A novel by F. Scott Fitzgerald
 *                 image_url: https://example.com/great-gatsby.jpg
 *                 release_year: 1981
 *                 price: IDR 49000
 *                 total_page: 180
 *                 thickness: sedang
 *                 Category:
 *                   id: 1
 *                   name: Fiction
 *       '404':
 *         description: Update Book Failed
 *         content:
 *           application/json:
*             examples:
 *               bookNotFound:
 *                 value:
 *                   message: Book not found
 *               bookCategoryNotFound:
 *                 value:
 *                   message: Book category not found
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example:
 *               message: Failed to update Book
 *               error: reason for error
 */
router.patch('/:id', bookController.update);

/**
 * @swagger
 * /books/{id}:
 *   delete:
 *     summary: Delete a Book
 *     tags: [Books]
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *          type: integer
 *     responses:
 *       '201':
 *         description: Delete Book Success
 *         content:
 *           application/json:
 *             example:
 *               message: Book has been deleted successfully
 *               data:
 *                 id: 1
 *                 title: The Great Gatsby
 *       '400':
 *         description: Delete Book Failed
 *         content:
 *           application/json:
 *             example:
 *               message: Book not found
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example:
 *               message: Failed to delete Book
 *               error: reason for error
 */
router.delete('/:id', bookController.delete);


module.exports = router
