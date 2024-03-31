# Bookaholic API

This Node.js application provides an API for managing books and categories, offering full CRUD functionality.

## Features

- Easily manage books and categories with intuitive CRUD operations.
- Effortlessly filter books by various parameters such as title, publication year, and number of pages.

## Setup

1. **Clone Repository:**

    ```bash
    git clone https://github.com/diazlp/bookaholic-api-expressjs
    cd bookaholic-api-expressjs
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

3. **Database Configuration:**

    Navigate to `config/config.js` and configure your database settings:

    ```json
    "username": "postgres",
    "password": "postgres",
    "database": "bookaholic-dev",
    "host": "127.0.0.1",
    "dialect": "postgres"
    ```

4. **Run Migration & Seeder:**

    Execute the following commands to run migrations and seeders:

    ```bash
    npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all
    ```

    Default credentials:
    
    ```json
    username: admin
    password: admin
    ```

5. **Run the Server:**

    ```bash
    npm run dev
    ```

6. **Accessing the server:**

    Explore the API documentation at `http://localhost:8000/docs`.

    Access the API at `http://localhost:8000`.

## API Endpoints

### Authentication

- `POST /auth/register`: Register a new user.
- `POST /auth/login`: Log in with existing credentials.

### Categories

- `GET /categories`: Retrieve all categories.
- `POST /categories`: Create a new category.
- `PATCH /categories/:id`: Update an existing category by ID.
- `DELETE /categories/:id`: Delete a category by ID.
- `GET /categories/:id/books`: Retrieve all books within a specific category.

### Books

- `GET /books`: Retrieve all books.
- `POST /books`: Create a new book.
- `PATCH /books/:id`: Update an existing book by ID.
- `DELETE /books/:id`: Delete a book by ID.

### Filtering Books

- Use query parameters to filter books:
    - `title`: Search by book title (case-insensitive).
    - `minYear`: Minimum publication year.
    - `maxYear`: Maximum publication year.
    - `minPage`: Minimum number of pages.
    - `maxPage`: Maximum number of pages.
    - `sortByTitle`: Sort books by title in ascending (`asc`) or descending (`desc`) order.

Example:
- `localhost:8000/books?sortByTitle=asc&minYear=2000&maxPage=150`
- `localhost:8000/books?title=algoritma&minYear=2000&maxYear=2010`

## Technologies Used

- Express.js
- Bcrypt for Password Hashing
- JWT for Authentication
- Sequelize ORM for PostgreSQL Database
- Swagger for API Documentation

## Contributors

- [Diaz Linggaputra](https://github.com/diazlp)