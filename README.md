# Job Listing API

This Node.js application provides an API to fetch job listings and job details.

## Features

- Fetch job listings with filtering options like description, location, and full-time positions.
- Retrieve job details by ID.
- Secure endpoints with JWT authorization.

## Setup

1. **Clone Repository:**

    ```bash
    git clone https://gitlab.com/dansmp-ht-3/diazlinggaputra/dans_be
    cd dans_be
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

3. **Database Configuration:**

    Go to `config/config.js` and setup your database configuration

    ```
    "username": "postgres",
    "password": "postgres",
    "database": "job-list",
    "host": "127.0.0.1",
    "dialect": "postgres",
    ```

4. **Run Migration & Seeder:**

    Execute
    ```bash
    npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all
    ```
    to populate all the necessary table and seeder data.

    Default credentials as follows:

    ```
    username: admin
    password: admin
    ```

5. **Run the Server:**

    ```bash
    npm run dev
    ```

6. **Accessing the server:**

    Browse through `http://localhost:8000/docs` for API documentation

    Using the API through `http://localhost:8000` respectively.

## API Endpoints

### Authentication

- `POST /auth/register`: Register a new user.
- `POST /auth/login`: Log in with existing credentials.

### Get Job Listings

- **URL:** `/jobs`
- **Method:** `GET`
- **Query Parameter:**
    - `description`: Search term for job description.
    - `location`: City name or location for job search.
    - `full_time`: Limit results to full-time positions (true/false).
    - `page`: Page number for pagination.
- **Response:** JSON with job listings and pagination details.

### Get Job Detail

- **URL:** `/jobs/:id`
- **Method:** `GET`
- **Path Parameter:** `id`: Job ID.
- **Response:** JSON with job details for the specified ID.

## Authentication & Authorization

- User registration is open to everyone.
- User authentication is required for fetching job listing and job details.

## Technologies Used

- Express.js
- Bcrypt for Password Hashing
- JWT for authentication
- Sequelize ORM for PostgreSQL database
- Swagger for API Documentation

## Contributors

- [Diaz Linggaputra](https://github.com/diazlp)